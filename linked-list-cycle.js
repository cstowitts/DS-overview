"use strict";

/**
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.


Constraints:

The number of the nodes in the list is in the range [0, 104].
-105 <= Node.val <= 105
pos is -1 or a valid index in the linked-list.

study with Owen 6/15/22
leetcode easy
couldn't submit bc the problem is worded stupidly and we couldn't figure out what the runtime error on the while loop was about
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    
    const visited = new Set();
    let currNode = head;
    //starting at head, traverse the linked list
    //create a new Set (all ops are in constant time)
    //traverse the linked list, checking the set for the current Node (its reference in memory), if not in the set, add
    //if the currNode.next exists in the set already, break and return true
    //if the currNode.next === null, break and return false
    
    while(currNode.next !== null){
        if(visited.has(currNode.next) === true){
            return true;
        } else {
            visited.add(currNode);
            currNode = currNode.next;
        }
    }
    return false;
};