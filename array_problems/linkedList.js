class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }
    insertAtHead(data) {
        const newNode = new Node(data)
        if (this.head === null) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
    }
    insertAtTail(data) {
        const newNode = new Node(data)
        if (this.head === null) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
    }
    deleteAtHead() {
        if (this.head === null) {
            console.log("List is empty. Nothing to delete.")
            return
        }
        const deletedNode = this.head
        if (this.head === this.tail) {
            this.head = null
            this.tail = null
        } else {
            this.head = this.head.next
        }
        deletedNode.next = null
        return deletedNode.data
    }
    deleteAtTail() {
        if (this.head === null) {
            console.log("List is empty. Nothing to delete.")
            return
        }
        const deletedNode = this.tail
        if (this.head === this.tail) {
            this.head = null
            this.tail = null
        } else {
            let currentNode = this.head
            while (currentNode.next !== this.tail) {
                currentNode = currentNode.next
            }
            currentNode.next = null
            this.tail = currentNode
        }
        deletedNode.next = null
        return deletedNode.data
    }
    printList() {
        let currentNode = this.head
        let list = ""
        while (currentNode !== null) {
            list += currentNode.data + " -> "
            currentNode = currentNode.next
        }
        list += "null"
        console.log(list)
    }
}
const list = new LinkedList()
list.insertAtHead(3)
list.insertAtHead(2)
list.insertAtHead(1)
list.printList()
list.insertAtTail(4)
list.insertAtTail(5)
list.printList()
list.deleteAtHead()
list.printList()
list.deleteAtTail()
list.printList()