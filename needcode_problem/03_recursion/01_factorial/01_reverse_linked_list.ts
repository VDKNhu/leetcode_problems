class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}


class Solution {
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
