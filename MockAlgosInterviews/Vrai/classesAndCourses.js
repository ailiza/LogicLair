/*
/*
You're developing a system for scheduling advising meetings with students in a Computer Science program. Each meeting should be scheduled when a student has completed 50% of their academic program.

Each course at our university has at most one prerequisite that must be taken first. No two courses share a prerequisite. There is only one path through the program.

Write a function that takes a list of (prerequisite, course) pairs, and returns the name of the course that the student will be taking when they are halfway through their program. (If a track has an even number of courses, and therefore has two "middle" courses, you should return the first one.)

Sample input 1: (arbitrarily ordered)
pairs1 = [
	["Foundations of Computer Science", "Operating Systems"],
	["Data Structures", "Algorithms"],
	["Computer Networks", "Computer Architecture"],
	["Algorithms", "Foundations of Computer Science"],
	["Computer Architecture", "Data Structures"],
	["Software Design", "Computer Networks"]
]

In this case, the order of the courses in the program is:
	Software Design
	Computer Networks
	Computer Architecture
	Data Structures
	Algorithms
	Foundations of Computer Science
	Operating Systems

Sample output 1:
	"Data Structures"

Sample input 2:
pairs2 = [
    ["Algorithms", "Foundations of Computer Science"],
    ["Data Structures", "Algorithms"],
    ["Foundations of Computer Science", "Logic"],
    ["Logic", "Compilers"],
    ["Compilers", "Distributed Systems"],
]

Sample output 2:
	"Foundations of Computer Science"

Sample input 3:
pairs3 = [
	["Data Structures", "Algorithms"],
]

Sample output 3:
	"Data Structures"

All Test Cases:
halfway_course(pairs1) => "Data Structures"
halfway_course(pairs2) => "Foundations of Computer Science"
halfway_course(pairs3) => "Data Structures"

Complexity analysis variables:

n: number of pairs in the input
 */

const pairs1 = [
    ["Foundations of Computer Science", "Operating Systems"],
    ["Data Structures", "Algorithms"],
    ["Computer Networks", "Computer Architecture"],
    ["Algorithms", "Foundations of Computer Science"],
    ["Computer Architecture", "Data Structures"],
    ["Software Design", "Computer Networks"]
  ];
  
  const pairs2 = [
    ["Algorithms", "Foundations of Computer Science"],
    ["Data Structures", "Algorithms"],
    ["Foundations of Computer Science", "Logic"],
    ["Logic", "Compilers"],
    ["Compilers", "Distributed Systems"],
  ];
  
  const pairs3 = [
    ["Data Structures", "Algorithms"]
  ];
  
  function findCommonCourses(enrollments) {
    const map = new Map(); // ID: [all the courses they take..]
    for (const [id, course] of enrollments) { //O(n) where n is size of enrollments
      if (!map.has(id)) {
        map.set(id, [])
      }
      map.get(id).push(course);
    }
    
    const sharedMap = new Map();
  
    for (const [id1, course1] of map) {
      for (const [id2, course2] of map) {
        if (id1 < id2) {
          const sharedCourses = course1.filter(course => course2.includes(course))
          const idKey = `${id1}, ${id2}`
          sharedMap.set(idKey, sharedCourses)
        }
      }
    }
    return sharedMap
  }
  
  // console.log(findCommonCourses(enrollments1))
  // console.log(findCommonCourses(enrollments2))
  // console.log(findCommonCourses(enrollments3))
  
  function foo(courses) {
    const map = new Map()
    const indegree = new Array(courses.length * 2).fill(0)
    
    courses.forEach((prereq, course) => {
      if (!map.has(prereq)) {
        map.set(prereq, [])
      }
      map.get(prereq.push([]))
      indegree[course]++
    })
    
    const result = []
    const queue = []
    for (let i = 0; i < indegree.length; i++) {
      if (indegree[i] === 0) {
        queue.push(i)
      }
    }
    
    while (queue.length) {
      let curr = queue.shift()
      for (let nei of map.get(curr)) {
        let val = indegree[nei]--
        if (val === 0) {
          queue.push(nei)
        }
      }
    }
    
    if (result.length) {
      return result[Math.floor(result.length/2)]  
    }
  }
  
  
  
  
  
  console.log(foo(pairs1))
  /*
  pairs1 = [
      ["Foundations of Computer Science", "Operating Systems"],
      ["Data Structures", "Algorithms"],
      ["Computer Networks", "Computer Architecture"],
      ["Algorithms", "Foundations of Computer Science"],
      ["Computer Architecture", "Data Structures"],
      ["Software Design", "Computer Networks"]
  ]
  
  In this case, the order of the courses in the program is:
      Software Design
      Computer Networks
      Computer Architecture
      Data Structures
      Algorithms
      Foundations of Computer Science
      Operating Systems
  
  Sample output 1:
      "Data Structures"
  */
*/
