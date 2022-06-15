"use strict";

/**
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 * 
 * Test Cases:
 * Input: head = [1,2,3,4,5]
 * Output: [5,4,3,2,1]
 * 
 * Input: head = []
 * Output: []
 * 
 * Input: head = [1,2]
 * Output: [2,1]
 * 
 * Constraints:
 * The number of nodes in the list is the range [0, 5000].
 * -5000 <= Node.val <= 5000
 * 
 * study with Owen 6/15/22
 * leetcode easy
 * runtime error, we don't know what the linked list class looks like
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
   
    const newList = []; //new linkedlist instance
    let currNode = head;
    
    while(currNode !== null){
        newList.unshift(currNode);
    }
    return newList;

};

 //create a "new list" array
    //iterate through the linked list, starting from the head node
    //unshift each node into the new list
 //return the new list
    
