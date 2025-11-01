// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function modifiedList(nums: number[], head: ListNode | null): ListNode | null {
    const valueToRemove: Set<number> = new Set<number>(nums);
    const dummyNodes: ListNode = new ListNode(0, head);
    let predecessor: ListNode = dummyNodes;

    while(!!predecessor.next) {
        if(valueToRemove.has(predecessor.next.val)) {
            predecessor.next = predecessor.next.next;
        } else {
            predecessor = predecessor.next;
        }
    }

    return dummyNodes.next;
};