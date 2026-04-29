class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

const mergeTwoList = (list1: ListNode | null, list2: ListNode | null) => {
    let res = new ListNode(0);
    let tail = res;

    while(list1 && list2) {
        if(list1.val < list2.val) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next;
    }

    if(list1) {
        tail.next = list1;
    }

    if(list2) {
        tail.next = list2;
    }

    return res.next;
}

class Solution1 {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists: (ListNode | null)[]) {
        if(!lists.length) {
            return null;
        }

        while(lists.length > 1) {
            let mergedList: (ListNode | null)[] = [];

            for(let i = 0; i < lists.length; i+=2) {
                let l1 = lists[i];
                let l2 = i + 1 < lists.length ? lists[i + 1] : null;
                if(l2) {
                    mergedList.push(mergeTwoList(l1, l2));
                } else {
                    mergedList.push(l1);
                }
            }
            lists = mergedList;
        }

        return lists[0];
    }
}

class Solution2 {
    mergeKLists(lists: (ListNode | null)[]) {
        const nodes = [];
        for(let list of lists) {
            while(list) {
                nodes.push(list.val);
                list = list.next;
            }
        }

        nodes.sort((val1, val2) => val1 - val2);

        const root = new ListNode(0);
        let cur = root;
        for(const node of nodes) {
            cur.next = new ListNode(node);
            cur = cur.next;
        }
        return root.next;
    }
}
