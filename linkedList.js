
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
}

const list = new LinkedList();

list.append("dog");

    // prepend(value) {
    //     const newNode = new Node(value, nextNode);
    //     this.list.push(newNode);
    // }
    

