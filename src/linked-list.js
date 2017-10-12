const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        let node = new Node(data);

        if (this.length){
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }
        else{
            this._head = node;
            this._tail = node;
        }
        this.length++;
        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._head.data;
    }

    at(index) {
        let node = this._head;
        if (!(this.length === 0 || index < 0 || index >= this.length)) {
            for (let count = 0; count < index; count++)
                node = node.next;
            return node.data;
        }
    }

    insertAt(index, data) {
        if (index >= this.length) {
            this.append(data)
        } else {
            let newNode = new Node(data);

            let oldNode = this._head;
            for (let i = 0; i < this.length; i++) {
                if (i === index) {
                    let prevOfOldNode = oldNode.prev;

                    newNode.prev = prevOfOldNode;
                    if (prevOfOldNode) {
                        prevOfOldNode.next = newNode;
                    }
                    newNode.next = oldNode;
                    oldNode.prev = newNode;

                    this.length++;

                    break;
                } else {
                    oldNode = oldNode.next;
                }
            }
        }

        return this;

    }

    isEmpty() {
        return this.length == 0 ? true : false;
    }

    clear() {
        this._head.data = null;
        this._tail.data = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        let nodeToDelete = this._head;
        for (let i = 0; i < this.length; i++) {
            if (i === index) {
                const prevOfNodeToDelete = nodeToDelete.prev;
                const nextOfNodeToDelete = nodeToDelete.next;
                if (prevOfNodeToDelete) {
                    prevOfNodeToDelete.next = nextOfNodeToDelete;
                }
                if (nextOfNodeToDelete) {
                    nextOfNodeToDelete.prev = prevOfNodeToDelete;
                }
                this.length--;

                break;
            } else {
                nodeToDelete = nodeToDelete.next;
            }
        }

        return this;
    }

    reverse() {
        let reversedList = new LinkedList();

        let currentNode = this._tail;
        while (currentNode) {

            reversedList.append(currentNode.data);
            currentNode = currentNode.prev;
        }

        this._head = reversedList._head;
        this._tail = reversedList._tail;

        return this;
    }

    indexOf(data) {
        let currentNode = this._head;

        for (let i = 0; i < this.length; i++) {
            if (currentNode.data === data) {
                return i;
            } else {
                currentNode = currentNode.next;
            }
        }

        return -1;
    }
}

module.exports = LinkedList;