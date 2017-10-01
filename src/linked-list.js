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
        return node;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._head.data;
    }

    at(index) {}

    insertAt(index, data) {
        var node = new Node(data);
        if (index < 0 || (index > this.length - 1 && this.length !== 0)) {
            return false;
        }

        if (index === 0) {
            if (this.isEmpty()) {
                this.append(data);
                return this;
            } else {
                node.next = this._head;
                this._head.prev = node;
                this._head = node;
                this.length++;
            }
            return this;


    }
    }

    isEmpty() {
        return this.length == 0 ? true : false;
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
