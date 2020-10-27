function LinkedList() {
    this.head = null;
    this.tail = null;
}

function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}

LinkedList.prototype.addToHead = function (value) {
    const newNode = new Node(value, this.head, null);

    if (this.head) {
        this.head.prev = newNode;
    } else {
        this.tail = newNode;
    }

    this.head = newNode;
}

LinkedList.prototype.addToTail = function (value) {
    const newNode = new Node(value, null, this.tail);

    if (this.tail){
        this.tail.next = newNode;
    } else {
        this.head = newNode;
    }

    this.tail = newNode;
}

const ll = new LinkedList();

ll.addToHead(100);
ll.addToHead(200);
ll.addToHead(300);

ll.addToTail(10);
ll.addToTail(20);
ll.addToTail(30);

console.log(ll);
