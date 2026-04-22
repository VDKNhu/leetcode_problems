class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val: number = 0, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}


class Solution020101 {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode): ListNode | null {
        if(!head) {
            return null;
        }

        let newHead: ListNode | null = head;
        if(head.next) {
            newHead = this.reverseList(head.next);
            head.next.next = head;
        }
        head.next = null;

        return newHead;
    }
}
