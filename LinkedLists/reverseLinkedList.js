/*
206. Reverse Linked List
Leetcode URL: https://leetcode.com/problems/reverse-linked-list/submissions/
Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:


Input: head = [1,2]
Output: [2,1]
*/

function reverseLinkedList(head) {
  let current = head;
	let next;
	let prev = null;
	while (current) {
		next = current.next;
		current.next = prev;
		prev = current;
		current = next;
	}
	return prev;
}
