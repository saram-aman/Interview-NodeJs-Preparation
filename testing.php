<?php

$db_host = 'localhost';
$db_name = 'mydatabase';
$db_user = 'postgres';
$db_pass = 'your_postgres_password';
$db_port = '5432';

try {
    // Connect to PostgreSQL using PDO
    $pdo = new PDO("pgsql:host=$db_host;port=$db_port;dbname=$db_name", $db_user, $db_pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Create table if it doesn't exist
    $pdo->exec("CREATE TABLE IF NOT EXISTS items (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT
    )");

    function createItem($pdo, $name, $description) {
        $stmt = $pdo->prepare("INSERT INTO items (name, description) VALUES (:name, :description)");
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':description', $description);
        $stmt->execute();
        return $pdo->lastInsertId();
    }

    // Read (GET) - single item
    function getItem($pdo, $id) {
        $stmt = $pdo->prepare("SELECT * FROM items WHERE id = :id");
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    // Read (GET) - all items
    function getItems($pdo) {
        $stmt = $pdo->query("SELECT * FROM items");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    // Update (PUT)
    function updateItem($pdo, $id, $name, $description) {
        $stmt = $pdo->prepare("UPDATE items SET name = :name, description = :description WHERE id = :id");
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':description', $description);
        $stmt->execute();
        return $stmt->rowCount(); // Returns number of affected rows
    }

    // Delete (DELETE)
    function deleteItem($pdo, $id) {
        $stmt = $pdo->prepare("DELETE FROM items WHERE id = :id");
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->rowCount();
    }

    // Example Usage (Simulated HTTP request handling)
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['name'])) {
        $id = createItem($pdo, $_POST['name'], $_POST['description'] ?? null);
        echo json_encode(['id' => $id, 'message' => 'Item created']);
    } elseif ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['id'])) {
        $item = getItem($pdo, $_GET['id']);
        echo json_encode($item);
    } elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
        $items = getItems($pdo);
        echo json_encode($items);
    } elseif ($_SERVER['REQUEST_METHOD'] === 'PUT' && isset($_GET['id'])) {
        parse_str(file_get_contents("php://input"), $_PUT_VARS);
        $updated = updateItem($pdo, $_GET['id'], $_PUT_VARS['name'], $_PUT_VARS['description'] ?? null);
        echo json_encode(['updated' => $updated, 'message' => 'Item updated']);
    } elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE' && isset($_GET['id'])) {
        $deleted = deleteItem($pdo, $_GET['id']);
        echo json_encode(['deleted' => $deleted, 'message' => 'Item deleted']);
    }

} catch (PDOException $e) {
    echo "Database Error: " . $e->getMessage();
}

?>