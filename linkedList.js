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
    }

    prepend(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            return
        };
        newNode.nextNode = this.head;
        this.head = newNode
    }

    size() {
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

    getHead() {
        if (this.head === null) {
            return undefined
        };
        return this.head.value
    }

    getTail() {
        if (this.head === null) {
            return undefined
        };
        let current = this.head;
        while (current.nextNode) {
            current = current.nextNode;
        };
        if (current.nextNode === null) {
            return current.value
        };
    }

    at(index) {
        let current = this.head;
        if (current === null) {
            return undefined
        };
        if (index === 0) {
            return current.value
        };
        for (let i = 0; i < index; i++) {
            current = current.nextNode;
            if (current === null) {
                return undefined
            };
        }
        return current.value;
    }

    pop() {
        if (this.head === null) {
            return undefined
        };
        const headValue = this.head.value;
        this.head = this.head.nextNode;
        return headValue
    }

    contains(input) {
        let current = this.head;
        if (current === null) {
            return false
        };
        if (current.value === input) {
            return true
        };
        while (current.nextNode) {
            current = current.nextNode;
            if (current.value === input) {
                return true
            }
        };
        return false;
    }

    findIndex(input) {
        let current = this.head;
        let index = 0;
        if (current === null) {
            return -1
        };
        if (current.value === input) {
            return index
        };
        while (current.nextNode) {
            current = current.nextNode;
            index += 1;
            if (current.value === input) {
                return index
            }
        };
        return -1
    }

    toString() {
        let listString = "";
        let current = this.head;
        if (current === null) {
            return listString
        };
        listString += `(${current.value}) -> `;
        while (current.nextNode) {
            current = current.nextNode;
            listString += `(${current.value}) -> `;
        };
        return listString += "null"
    }

}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");


// console.log(list.size())
// console.log(list.getHead())
// console.log(list.getTail())
// console.log(list.at(5))
// console.log(list.pop())
// console.log(list.getHead())
// console.log(list.size())

console.log(list.contains("turtle"))
console.log(list.findIndex("parrot"))
console.log(list.toString())


    
    

