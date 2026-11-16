const SERVICE_TITAN_ALGORITHMS_DECK = {
  label: "Service Titan (Algorithms)",
  randomShuffle: true,
  cards: [
    // Arrays
    {
      question: "Time & space complexity of array read?",
      answer: "O(1) (constant)"
    },
    {
      question: "Time & space complexity of array write?",
      answer: "O(1) (constant)"
    },
    {
      question: "Time & space complexity of array search?",
      answer: "O(n) (linear), scans every element until it finds a match"
    },
    {
      question: "Time & space complexity of array insert?",
      answer:
        "- End --> O(1) (amortized, dynamic array)\n" +
        "- Start/middle --> O(n), shifts every element after it"
    },
    {
      question: "Time & space complexity of array delete?",
      answer:
        "- End --> O(1)\n" +
        "- Start/middle --> O(n), shifts every element after it"
    },
    // Linked lists
    {
      question: "Time & space complexity of linked list access?",
      answer: "O(n), no index jump, must walk from head"
    },
    {
      question: "Time & space complexity of linked list search?",
      answer: "O(n), walks node by node until it finds a match"
    },
    {
      question: "Time & space complexity of linked list insert?",
      answer:
        "- Head --> O(1)\n" +
        "- Tail --> O(1) w/ tail pointer, else O(n)"
    },
    {
      question: "Time & space complexity of linked list delete?",
      answer:
        "- Head --> O(1)\n" +
        "- Middle/tail --> O(n), must find predecessor node"
    },
    // Stacks
    {
      question: "Time & space complexity of stack push?",
      answer: "O(1) (constant)"
    },
    {
      question: "Time & space complexity of stack pop?",
      answer: "O(1) (constant)"
    },
    // Queues
    {
      question: "Time & space complexity of queue enqueue?",
      answer: "O(1) (constant)"
    },
    {
      question: "Time & space complexity of queue dequeue?",
      answer: "O(1) (constant)"
    },
    // Hash maps
    {
      question: "Time & space complexity of hash map read?",
      answer: "O(1) average (constant), O(n) worst case w/ collisions"
    },
    {
      question: "Time & space complexity of hash map write?",
      answer: "O(1) average (constant), O(n) worst case w/ collisions"
    },
    {
      question: "Time & space complexity of hash map delete?",
      answer: "O(1) average (constant), O(n) worst case w/ collisions"
    },
    // Sets
    {
      question: "Time & space complexity of set add?",
      answer: "O(1) average (constant), O(n) worst case w/ collisions"
    },
    {
      question: "Time & space complexity of set lookup?",
      answer: "O(1) average (constant), O(n) worst case w/ collisions"
    },
    {
      question: "Time & space complexity of set delete?",
      answer: "O(1) average (constant), O(n) worst case w/ collisions"
    }
  ]
};
