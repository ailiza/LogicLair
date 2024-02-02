/*
Leetcode 430
https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/
You are given a doubly linked list which in addition to the next and previous pointers, it could have a child pointer, which may or may not point to a separate doubly linked list. These child lists may have one or more children of their own, and so on, to produce a multilevel data structure, as shown in the example below.

Flatten the list so that all the nodes appear in a single-level, doubly linked list. You are given the head of the first level of the list.

We use the multilevel linked list from Example 1 above:

 1---2---3---4---5---6--NULL
         |
         7---8---9---10--NULL
             |
             11--12--NULL

Time: O(n) | Space: O(n)
*/

var flatten = function(head) {
    if (head === null || head === undefined) return null;
    const stack = [head]; //hold what to process next
    let prev = null;

    while (stack.length) {
        let curr = stack.pop();
        if (prev === null) {
            prev = curr;
        } else { //rewire
            prev.next = curr;
            curr.prev = prev;
            prev = curr;
        }
        if (curr.next) stack.push(curr.next);
        if (curr.child) stack.push(curr.child)
        curr.child = null;
    }

    return head;
};


// DFS
var flatten = function (head) {
    if (head === null || head === undefined) return null;
    flat(head)
    return head;
}

function flat(node) {
    if (node.next === null && node.child === null) return node;

    if (node.child) {
        let nextHolder = node.next;
        node.next = node.child;
        node.next.prev = node;
        node.child = null;

        if (nextHolder) {
            let prevHolder = flat(node.next); //child
            prevHolder.next = nextHolder;
            nextHolder.prev = prevHolder;
        }
    }

    return flat(node.next);
}


// Prior code
// const flatten = function (head, temp) {
//   let node = head;
//   while (node !== null) {
//     if (node.child) {
//       let temp = node.next || null;
//       let child = node.child;
//       node.next = child;
//       child.prev = node;
//       node.child = null;
//       flatten(child, temp);
//     }
//     if (node.next) node = node.next;
//     else break;
//   }
//   if (temp) {
//     temp.prev = node;
//     node.next = temp;
//   }

//   return head;
// };

//alternative java solution
// public Node flatten(Node head) {
//   if(head == null) {
//       return head;
//   }
 
//   Node curr = head;
 
//   while(curr != null) {
//       if(curr.child == null) {
//           curr = curr.next;
//           continue;
//       }
     
//       Node temp = curr.child;
     
//       while(temp.next != null) {
//           temp = temp.next;
//       }
     
//       temp.next = curr.next;
//       if(curr.next != null) {
//           curr.next.prev = temp;
//       }
     
//       curr.next = curr.child;
//       curr.child.prev = curr;
//       curr.child = null;
//   }
 
//   return head;
// }

