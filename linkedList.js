#!/usr/bin/env node

class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            return
        };
        let current = this.head;
        while (current.nextNode) {
            current = current.nextNode
        };
        current.nextNode = newNode
    };

    prepend(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            return
        };
        newNode.nextNode = this.head;
        this.head = newNode
    }

    size(){
        let current = this.head;
        let count = 0;
        if (current === null) {
            return count
        };
        count += 1;
        while (current.nextNode) {
            current = current.nextNode;
            count += 1;
        };
        return count
    }
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");


console.log(list.size())

    
    

