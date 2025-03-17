package main

import (
        "database/sql"
        "encoding/json"
        "fmt"
        "log"
        "net/http"
        "strconv"

        _ "github.com/go-sql-driver/mysql" // MySQL driver
        "github.com/gorilla/mux"        // Router
)

// Define the struct for your data
type Item struct {
        ID   int    `json:"id"`
        Name string `json:"name"`
        Desc string `json:"desc"`
}

var db *sql.DB

func main() {
        // Connect to the database
        var err error
        db, err = sql.Open("mysql", "user:password@tcp(127.0.0.1:3306)/dbname") // Replace with your credentials
        if err != nil {
                log.Fatal(err)
        }
        defer db.Close()

        // Test the connection
        err = db.Ping()
        if err != nil {
                log.Fatal(err)
        }

        fmt.Println("Database connected!")

        // Create the router
        router := mux.NewRouter()

        // Define routes
        router.HandleFunc("/items", getItems).Methods("GET")
        router.HandleFunc("/items/{id}", getItem).Methods("GET")
        router.HandleFunc("/items", createItem).Methods("POST")
        router.HandleFunc("/items/{id}", updateItem).Methods("PUT")
        router.HandleFunc("/items/{id}", deleteItem).Methods("DELETE")

        // Start the server
        fmt.Println("Server listening on port 8080...")
        log.Fatal(http.ListenAndServe(":8080", router))
}

// Get all items
func getItems(w http.ResponseWriter, r *http.Request) {
        rows, err := db.Query("SELECT id, name, desc FROM items")
        if err != nil {
                http.Error(w, err.Error(), http.StatusInternalServerError)
                return
        }
        defer rows.Close()

        items := []Item{}
        for rows.Next() {
                var item Item
                if err := rows.Scan(&item.ID, &item.Name, &item.Desc); err != nil {
                        http.Error(w, err.Error(), http.StatusInternalServerError)
                        return
                }
                items = append(items, item)
        }

        w.Header().Set("Content-Type", "application/json")
        json.NewEncoder(w).Encode(items)
}

// Get a single item
func getItem(w http.ResponseWriter, r *http.Request) {
        params := mux.Vars(r)
        id, err := strconv.Atoi(params["id"])
        if err != nil {
                http.Error(w, "Invalid ID", http.StatusBadRequest)
                return
        }

        var item Item
        err = db.QueryRow("SELECT id, name, desc FROM items WHERE id = ?", id).Scan(&item.ID, &item.Name, &item.Desc)
        if err != nil {
                if err == sql.ErrNoRows {
                        http.NotFound(w, r)
                        return
                }
                http.Error(w, err.Error(), http.StatusInternalServerError)
                return
        }

        w.Header().Set("Content-Type", "application/json")
        json.NewEncoder(w).Encode(item)
}

// Create a new item
func createItem(w http.ResponseWriter, r *http.Request) {
        var item Item
        if err := json.NewDecoder(r.Body).Decode(&item); err != nil {
                http.Error(w, err.Error(), http.StatusBadRequest)
                return
        }

        result, err := db.Exec("INSERT INTO items (name, desc) VALUES (?, ?)", item.Name, item.Desc)
        if err != nil {
                http.Error(w, err.Error(), http.StatusInternalServerError)
                return
        }

        id, err := result.LastInsertId()
        if err != nil {
                http.Error(w, err.Error(), http.StatusInternalServerError)
                return
        }

        item.ID = int(id)

        w.Header().Set("Content-Type", "application/json")
        w.WriteHeader(http.StatusCreated)
        json.NewEncoder(w).Encode(item)
}

// Update an existing item
func updateItem(w http.ResponseWriter, r *http.Request) {
        params := mux.Vars(r)
        id, err := strconv.Atoi(params["id"])
        if err != nil {
                http.Error(w, "Invalid ID", http.StatusBadRequest)
                return
        }

        var item Item
        if err := json.NewDecoder(r.Body).Decode(&item); err != nil {
                http.Error(w, err.Error(), http.StatusBadRequest)
                return
        }

        _, err = db.Exec("UPDATE items SET name = ?, desc = ? WHERE id = ?", item.Name, item.Desc, id)
        if err != nil {
                http.Error(w, err.Error(), http.StatusInternalServerError)
                return
        }

        item.ID = id;

        w.Header().Set("Content-Type", "application/json")
        json.NewEncoder(w).Encode(item)
}

// Delete an item
func deleteItem(w http.ResponseWriter, r *http.Request) {
        params := mux.Vars(r)
        id, err := strconv.Atoi(params["id"])
        if err != nil {
                http.Error(w, "Invalid ID", http.StatusBadRequest)
                return
        }

        _, err = db.Exec("DELETE FROM items WHERE id = ?", id)
        if err != nil {
                http.Error(w, err.Error(), http.StatusInternalServerError)
                return
        }

        w.WriteHeader(http.StatusNoContent)
}