class Node {
    constructor(data,next = null) {
    this.data = data;
    this.next = next;

    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert first node
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }
    // Insert last node
    insertLast(data) {
        let node = new Node(data);
        let current;

        if(!this.head) {
            this.head = node
        } else {
            current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    size() {
        return this.size;
    }

    head() {
        return this.head;
    }

    tail() {
        if (!this.head) {
            return null;
        }
        let current;
        current = this.head;
        while(current.next) {
            current = current.next;
        }
        return current;
    }
    // Insert at index
    insertAt(data, index) {
        // If index is out of range
        if(index > 0 && index > this.size) {
            return;
        }

        // If first index
        if(index === 0) {
            this.head = new Node(data);
        }

        const node = new Node(data);
        let current, previous;

        // Set current to first
        current = this.head;
        let count = 0;
        while(count < index) {
            previous = current; // Node before index
            count++;
            current = current.next // Node after index
        }
        node.next = current;
        previous.next = node;

        this.size++;
    }
    // Get at index
    getAt(index) {
        let current;
        current = this.head;
        let count = 0;

        if(index > this.size) {
            return
        }
        while(count < index) {
            current = current.next;
            count++;
        }
        return current;
        
    }

    pop() {
        let current;
        let previous;
        current = this.head;

        if(this.size === 1) {
            this.head = null;
            this.size--;
        } else {
            while(current.next) {
            previous = current;
            current = current.next
        }
        previous.next = null;
        this.size--;
        }
    }
    // Remove at index
    removeAt(index) {
        if (index > 0 && index > this.size) {
            return;
        }

        let current = this.head;
        let previous;
        let count = 0;

        if(index === 0) {
            this.head = current.next;
        } else {
            while(count < index) {
                count++;
                previous = current;
                current = current.next;
            }
            
        previous.next = current.next;
    }
    this.size++;
    }
    // Clear list
    clearList() {
        this.head = null;
        this.size = 0;
    }
    // Print list data
    printListData() {
    let current = this.head;
    let llString = '';
    while(current) {
        llString += `( ${current.data} ) -> `
        current = current.next;
    }
    llString += 'null'
    console.log(llString);

}
    find(data) {
        let current;
        current = this.head;
        while(current) {
            if (current.data === data) {
                return true;
            } else {
                current = current.next;
            }
        }
        return false;

    }
}


const ll = new LinkedList();

ll.insertLast(200);
ll.insertFirst(100);
ll.insertLast(300);
// ll.insertAt(100,0);
ll.pop()
console.log(ll.size);
ll.printListData();
