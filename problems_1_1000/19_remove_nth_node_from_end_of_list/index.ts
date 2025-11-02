// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const dummyNode: ListNode = new ListNode(0, head);
    let slowNode: ListNode = dummyNode, fastNode: ListNode = dummyNode;

    while(n > 0) {
        fastNode = fastNode.next!;
        n--;
    }

    while(fastNode?.next !== null) {
        slowNode = slowNode.next!;
        fastNode = fastNode.next;
    }

    slowNode.next = slowNode.next!.next;
    return dummyNode.next;
};