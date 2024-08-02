/* Activity 1: Linked List */
// Task 1
class Node{
    constructor(value, next = null) {
        this.value = value
        this.next = next
    }
}

const node1 = new Node(1)
const node2 = new Node(2)
node1.next = node2
console.log(node1);
console.log(node2);


// Task 2
class NewNode{
    constructor(value, next = null) {
        this.value = value
        this.next = next
    }
}
class LinkedList{
    constructor() {
        this.head = null
    }
    addNodeToEnd(value) {
        const node = new NewNode(value)
        if(this.head == null) {
            this.head = node
        } else {
            let current = this.head
            while(current.next != null) {
                current = current.next
            }
            current.next = node
        }
    }
    removeNodeFromEnd() {
        if(this.head == null) {
            return null
        }
        if(this.head.next == null) {
            const value = this.head.value
            this.head = null
            return value
        }
        let current = this.head
        let prev = this.head
        while(current.next != null) {
            prev = current
            current = current.next
        }
        prev.next = null
        return current.value
    }
    displayAllNodes() {
        let current = this.head;
        const values = [];
        while (current !== null) {
            values.push(current.value);
            current = current.next;
        }
        console.log(values.join(" -> "));
    }
}

const list = new LinkedList();
list.addNodeToEnd(1);
list.addNodeToEnd(2);
list.addNodeToEnd(3);
list.displayAllNodes();
console.log(list.removeNodeFromEnd());
list.displayAllNodes();



/* Activity 2: Stack */
// Task 3
class Stack{
    constructor() {
        this.items = []
    }
    add(element) {
        this.items.push(element)
    }
    remove() {
        if(this.items.length == 0) {
            return `Stack underflow!!!`
        }
        return this.items.pop()
    }
    peek() {
        return this.items[this.items.length-1]
    }
}
let stack = new Stack()
stack.add(10)
stack.add(20)
stack.add(30)
console.log(`Remove element is ${stack.remove()}`);
console.log(stack.peek());
stack.add(40)
stack.add(50)
console.log(stack.peek());


// Task 4
function reverseString(str) {
    let stack1 = new Stack();
    for (let ch of str) {
        stack1.add(ch);
    }
    let result = "";
    while (stack1.length > 0) {
        result += stack1.remove();
    }
    return result;
}
console.log(reverseString("snahasis"));



/* Activity 3: Queue */
// Task 5
class Queue{
    constructor() {
        this.items = []
        this.front = 0
        this.rear = 0
    }
    enqueue(element) {
        this.items[this.rear++] = element
    }
    dequeue() {
        if(this.front == this.rear) {
            return `Queue underflow!!`
        }
        return this.items[this.front++];
    }
    peek() {
        if (this.front === this.rear) {
            return `Queue is empty`
        }
        return this.items[this.front];
    }
    isEmpty() {
        return this.front === this.rear;
    }

    size() {
        return this.rear - this.front;
    }
}
const queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
console.log(queue.peek());
console.log(`Remove element is ${queue.dequeue()}`);
console.log(queue.peek());


// Task 6
class PrinterQueue{
    constructor() {
        this.queue = new Queue()
    }
    addPrintJob(job) {
        this.queue.enqueue(job)
        console.log(`Added print job: ${job}`);
    }
    processPrintJob() {
        if(this.queue.isEmpty()) {
            console.log('No print jobs to process.');
        } else{
            const job = this.queue.dequeue()
            console.log(`Processing print job: ${job}`);
        }
    }
    printQueueStatus() {
        if (this.queue.isEmpty()) {
            console.log('Printer queue is empty.');
        } else {
            console.log(`Printer queue has ${this.queue.size()} job(s).`);
        }
    }
}
const printerQueue = new PrinterQueue()
printerQueue.addPrintJob('Document1.pdf');
printerQueue.addPrintJob('Photo.jpg');
printerQueue.addPrintJob('Report.docx');
printerQueue.printQueueStatus();
printerQueue.processPrintJob();
printerQueue.printQueueStatus();



/* Activity 4: Binary Tree */
// Task 7
class TreeNode{
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
function createBinaryTree() {
    const root = new TreeNode(1)
    root.left = new TreeNode(2)
    root.right = new TreeNode(3)
    root.left.left = new TreeNode(4)
    root.left.right = new TreeNode(5)
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(7);
    return root
}
function printTree(node) {
    if(node != null) {
        printTree(node.left)
        console.log(node.value)
        printTree(node.right)
    }
}
const root = createBinaryTree();
printTree(root)
