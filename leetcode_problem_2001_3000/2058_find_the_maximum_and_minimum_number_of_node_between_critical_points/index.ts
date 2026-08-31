/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function nodesBetweenCriticalPoints(head: ListNode | null): number[] {
    const result = [Infinity, 0];
    let firstCriticalPoint = -1;
    let secondCriticalPoint = -1;

    let currentPosition = 0;
    while (head !== null && head.next !== null && head.next.next !== null) {
        const previousValue = head.val;
        const currentValue = head.next.val;
        const nextValue = head.next.next.val;

        const isLocalMinima = currentValue < Math.min(previousValue, nextValue);
        const isLocalMaxima = currentValue > Math.max(previousValue, nextValue);

        if (isLocalMinima || isLocalMaxima) {
            if (secondCriticalPoint < 0) {
                firstCriticalPoint = currentPosition;
                secondCriticalPoint = currentPosition;
            } else {
                result[0] = Math.min(result[0], currentPosition - secondCriticalPoint);
                secondCriticalPoint = currentPosition;
                result[1] = Math.max(result[1], secondCriticalPoint - firstCriticalPoint);
            }
        }

        head = head.next;
        currentPosition++;
    }

    return firstCriticalPoint === secondCriticalPoint ? [-1, -1] : result;
};