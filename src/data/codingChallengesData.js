// export const codingChallenges = {
//   javascript: {
//     title: "JavaScript Basics",
//     questions: [
//       {
//         id: 1,
//         title: "Print Hello World",
//         description: "Write code to print Hello World",
//         expectedOutput: "Hello World",
//       },
//       {
//         id: 2,
//         title: "Add two numbers",
//         description: "Add 2 + 3 and print result",
//         expectedOutput: "5",
//       },
//       {
//         id: 3,
//         title: "Even or Odd",
//         description: "Check if 4 is Even or Odd",
//         expectedOutput: "Even",
//       },
//       {
//         id: 4,
//         title: "String Length",
//         description: "Find length of 'hello'",
//         expectedOutput: "5",
//       },
//       {
//         id: 5,
//         title: "Print Numbers",
//         description: "Print numbers 1 2 3",
//         expectedOutput: "1 2 3",
//       },
//     ],
//   },
// };


// export const codingChallenges = {
//   javascript_basics: {
//     id: "javascript_basics",
//     title: "JavaScript Basics",
//     questions: [
//       {
//         id: "add-two-numbers",
//         title: "Add Two Numbers",
//         difficulty: "Easy",
//         description:
//           "Write a function that takes two numbers and returns their sum.",
//         starterCode: `function add(a, b) {

// }`,
//         expectedOutput: "5",
//         testCases: [
//           { input: [2, 3], output: 5 },
//           { input: [10, 20], output: 30 }
//         ]
//       },
//       {
//         id: "even-or-odd",
//         title: "Check Even or Odd",
//         difficulty: "Easy",
//         description:
//           "Write a function that checks whether a number is even or odd.",
//         starterCode: `function isEven(num) {

// }`,
//         expectedOutput: "Even",
//         testCases: [
//           { input: 4, output: "Even" },
//           { input: 7, output: "Odd" }
//         ]
//       },
//       {
//         id: "reverse-string",
//         title: "Reverse a String",
//         difficulty: "Easy",
//         description:
//           "Write a function that reverses a given string.",
//         starterCode: `function reverseString(str) {

// }`,
//         expectedOutput: "olleh",
//         testCases: [
//           { input: "hello", output: "olleh" },
//           { input: "js", output: "sj" }
//         ]
//       },
//       {
//         id: "max-of-array",
//         title: "Find Maximum in Array",
//         difficulty: "Easy",
//         description:
//           "Return the maximum number from an array.",
//         starterCode: `function findMax(arr) {

// }`,
//         expectedOutput: "5",
//         testCases: [
//           { input: [1, 5, 2], output: 5 },
//           { input: [10, 3, 7], output: 10 }
//         ]
//       },
//       {
//         id: "sum-array",
//         title: "Sum of Array Elements",
//         difficulty: "Easy",
//         description:
//           "Return the sum of all elements in an array.",
//         starterCode: `function sumArray(arr) {

// }`,
//         expectedOutput: "6",
//         testCases: [
//           { input: [1, 2, 3], output: 6 },
//           { input: [5, 5], output: 10 }
//         ]
//       }
//     ]
//   },

//   closures: {
//     id: "closures",
//     title: "Closures",
//     questions: [
//       {
//         id: "basic-closure",
//         title: "Create a Closure",
//         difficulty: "Medium",
//         description:
//           "Create a function that returns another function which logs a message.",
//         starterCode: `function outer() {

// }`,
//         expectedOutput: "Hello",
//         testCases: [
//           { output: "Hello" }
//         ]
//       },
//       {
//         id: "counter-closure",
//         title: "Create Counter using Closure",
//         difficulty: "Medium",
//         description:
//           "Create a counter using closure. Calling the function should increment the count.",
//         starterCode: `function createCounter() {

// }`,
//         expectedOutput: "2",
//         testCases: [
//           { calls: 2, output: 2 }
//         ]
//       },
//       {
//         id: "private-variable",
//         title: "Private Variable using Closure",
//         difficulty: "Medium",
//         description:
//           "Create a function with a private variable and expose getter.",
//         starterCode: `function secretHolder() {

// }`,
//         expectedOutput: "secret",
//         testCases: [
//           { output: "secret" }
//         ]
//       },
//       {
//         id: "once-function",
//         title: "Run Function Only Once",
//         difficulty: "Medium",
//         description:
//           "Create a function that runs only once using closure.",
//         starterCode: `function once(fn) {

// }`,
//         expectedOutput: "called",
//         testCases: [
//           { output: "called" }
//         ]
//       },
//       {
//         id: "closure-sum",
//         title: "Closure Sum",
//         difficulty: "Medium",
//         description:
//           "Create a function that remembers the previous sum.",
//         starterCode: `function sumClosure() {

// }`,
//         expectedOutput: "10",
//         testCases: [
//           { calls: [5, 5], output: 10 }
//         ]
//       }
//     ]
//   },

//   arrays: {
//     id: "arrays",
//     title: "Arrays",
//     questions: [
//       {
//         id: "two-sum",
//         title: "Two Sum",
//         difficulty: "Easy",
//         description:
//           "Return indices of two numbers that add up to target.",
//         starterCode: `function twoSum(nums, target) {

// }`,
//         expectedOutput: "[0,1]",
//         testCases: [
//           { input: [[2,7,11,15], 9], output: [0,1] }
//         ]
//       },
//       {
//         id: "remove-duplicates",
//         title: "Remove Duplicates",
//         difficulty: "Easy",
//         description:
//           "Remove duplicate elements from array.",
//         starterCode: `function removeDuplicates(arr) {

// }`,
//         expectedOutput: "[1,2,3]",
//         testCases: [
//           { input: [1,1,2,3], output: [1,2,3] }
//         ]
//       },
//       {
//         id: "array-rotation",
//         title: "Rotate Array",
//         difficulty: "Medium",
//         description:
//           "Rotate array by k steps.",
//         starterCode: `function rotate(arr, k) {

// }`,
//         expectedOutput: "[3,4,1,2]",
//         testCases: [
//           { input: [[1,2,3,4], 2], output: [3,4,1,2] }
//         ]
//       },
//       {
//         id: "find-peak",
//         title: "Find Peak Element",
//         difficulty: "Medium",
//         description:
//           "Find peak element index.",
//         starterCode: `function findPeak(nums) {

// }`,
//         expectedOutput: "2",
//         testCases: [
//           { input: [1,2,3,1], output: 2 }
//         ]
//       },
//       {
//         id: "array-unique",
//         title: "Check Unique Elements",
//         difficulty: "Easy",
//         description:
//           "Check if all elements are unique.",
//         starterCode: `function isUnique(arr) {

// }`,
//         expectedOutput: "true",
//         testCases: [
//           { input: [1,2,3], output: true }
//         ]
//       }
//     ]
//   },

//   strings: {
//     id: "strings",
//     title: "Strings",
//     questions: [
//       {
//         id: "palindrome",
//         title: "Check Palindrome",
//         difficulty: "Easy",
//         description:
//           "Check if a string is palindrome.",
//         starterCode: `function isPalindrome(str) {

// }`,
//         expectedOutput: "true",
//         testCases: [
//           { input: "madam", output: true }
//         ]
//       },
//       {
//         id: "count-vowels",
//         title: "Count Vowels",
//         difficulty: "Easy",
//         description:
//           "Count number of vowels in string.",
//         starterCode: `function countVowels(str) {

// }`,
//         expectedOutput: "2",
//         testCases: [
//           { input: "hello", output: 2 }
//         ]
//       },
//       {
//         id: "anagram",
//         title: "Check Anagram",
//         difficulty: "Medium",
//         description:
//           "Check if two strings are anagrams.",
//         starterCode: `function isAnagram(a, b) {

// }`,
//         expectedOutput: "true",
//         testCases: [
//           { input: ["listen", "silent"], output: true }
//         ]
//       },
//       {
//         id: "string-compress",
//         title: "String Compression",
//         difficulty: "Medium",
//         description:
//           "Compress string like aabcc → a2b1c2",
//         starterCode: `function compress(str) {

// }`,
//         expectedOutput: "a2b1c2",
//         testCases: [
//           { input: "aabcc", output: "a2b1c2" }
//         ]
//       },
//       {
//         id: "first-non-repeat",
//         title: "First Non-Repeating Character",
//         difficulty: "Medium",
//         description:
//           "Find first non-repeating character.",
//         starterCode: `function firstUnique(str) {

// }`,
//         expectedOutput: "w",
//         testCases: [
//           { input: "swiss", output: "w" }
//         ]
//       }
//     ]
//   },

//   async_js: {
//     id: "async_js",
//     title: "Async JavaScript",
//     questions: [
//       {
//         id: "promise-basic",
//         title: "Create a Promise",
//         difficulty: "Easy",
//         description:
//           "Create a promise that resolves after 1 second.",
//         starterCode: `function myPromise() {

// }`,
//         expectedOutput: "done",
//         testCases: []
//       },
//       {
//         id: "async-await",
//         title: "Async Await Example",
//         difficulty: "Easy",
//         description:
//           "Convert promise to async/await.",
//         starterCode: `async function fetchData() {

// }`,
//         expectedOutput: "data",
//         testCases: []
//       },
//       {
//         id: "promise-chain",
//         title: "Promise Chaining",
//         difficulty: "Medium",
//         description:
//           "Chain multiple promises.",
//         starterCode: `function chainPromises() {

// }`,
//         expectedOutput: "final",
//         testCases: []
//       },
//       {
//         id: "error-handling",
//         title: "Promise Error Handling",
//         difficulty: "Medium",
//         description:
//           "Handle promise rejection.",
//         starterCode: `function handleError() {

// }`,
//         expectedOutput: "error",
//         testCases: []
//       },
//       {
//         id: "parallel-promises",
//         title: "Run Promises in Parallel",
//         difficulty: "Medium",
//         description:
//           "Use Promise.all to run promises.",
//         starterCode: `function runParallel() {

// }`,
//         expectedOutput: "done",
//         testCases: []
//       }
//     ]
//   }
// };


export const codingChallenges = {
  javascript_basics: {
    id: "javascript_basics",
    title: "JavaScript Basics",
    order: 1,

    questions: [
      {
        id: "add-two-numbers",
        slug: "add-two-numbers",
        title: "Add Two Numbers",
        difficulty: "Easy",

        functionName: "add",
        returnType: "number",

        description:
          "Write a function that takes two numbers and returns their sum.",

        examples: [
          {
            input: "add(2, 3)",
            output: 5
          }
        ],

        constraints: [
          "-100 ≤ a, b ≤ 100"
        ],

        starterCode: `function add(a, b) {
  // write your code here
}`,

        testCases: [
          { args: [2, 3], expected: 5 },
          { args: [10, 20], expected: 30 }
        ]
      }
    ]
  },

  closures: {
    id: "closures",
    title: "Closures",
    order: 2,

    questions: [
      {
        id: "counter-closure",
        slug: "counter-closure",
        title: "Counter using Closure",
        difficulty: "Medium",

        functionName: "createCounter",
        returnType: "function",

        description:
          "Create a counter using closure. Each call should increment the count.",

        examples: [
          {
            input: "counter(); counter();",
            output: 2
          }
        ],

        constraints: [
          "Counter should retain value between calls"
        ],

        starterCode: `function createCounter() {
  // write your code here
}`,

        testCases: [
          {
            type: "function-call",
            calls: 2,
            expected: 2
          }
        ]
      }
    ]
  },

  arrays: {
    id: "arrays",
    title: "Arrays",
    order: 3,

    questions: [
      {
        id: "two-sum",
        slug: "two-sum",
        title: "Two Sum",
        difficulty: "Easy",

        functionName: "twoSum",
        returnType: "array",

        description:
          "Return indices of the two numbers such that they add up to target.",

        examples: [
          {
            input: "twoSum([2,7,11,15], 9)",
            output: "[0,1]"
          }
        ],

        constraints: [
          "2 ≤ nums.length ≤ 10⁴",
          "Only one valid answer exists"
        ],

        starterCode: `function twoSum(nums, target) {
  // write your code here
}`,

        testCases: [
          {
            args: [[2, 7, 11, 15], 9],
            expected: [0, 1]
          }
        ]
      }
    ]
  }
};
