class LinkNode {
    public val: number;
    public next: LinkNode | null;

    constructor(val: number, next: LinkNode | null) {
        this.val = val;
        this.next = next;
    }
}

class MyLinkedList {
    public head: LinkNode | null;

    constructor() {
        this.head = null;
    }
    
    get(index: number): number {
        if(this.head === null) {
            return -1;
        }

        let currentIndex = 0;
        let currentHead = this.head;

        while(currentIndex < index) {
            if(currentHead.next === null) {
                return -1;
            }
            currentHead = currentHead.next;
            currentIndex++;
        }

        return typeof currentHead?.val === 'number' ? currentHead?.val : -1;
    }

    addAtHead(val: number): void {
        this.head = new LinkNode(val, this.head);
    }

    addAtTail(val: number): void {
        const newNode = new LinkNode(val, null);
        if(this.head === null) {
            this.head = newNode;
            return;
        }

        let currentHead = this.head;
        while(currentHead?.next) {
            currentHead = currentHead.next;
        }
        currentHead.next = newNode;
    }

    addAtIndex(index: number, val: number): void {
        if(index <= 0) {
            return this.addAtHead(val);
        }

        const dummy = new LinkNode(0, this.head);
        let currentIndex = 0;
        let currentHead = dummy;

        while(currentIndex < index) {
            if(currentHead.next === null) {
                return;
            }
            currentHead = currentHead.next;
            currentIndex++;
        }
        const newNode = new LinkNode(val, currentHead.next);
        currentHead.next = newNode;
    }

    deleteAtIndex(index: number): void {
        if(index === 0) {
            this.head = (this.head || {}).next;
            return;
        }

        const dummy = new LinkNode(0, this.head);
        let currentIndex = 0;
        let currentHead = dummy;
        while(currentIndex < index) {
            if(currentHead.next === null) {
                return;
            }
            currentHead = currentHead.next;
            currentIndex++;
        }
        if(currentHead.next) {
            currentHead.next = (currentHead.next || {}).next;
        }
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */