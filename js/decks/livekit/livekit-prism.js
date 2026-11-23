const LIVEKIT_PRISM_DECK = {
  label: "LiveKit (Prism)",
  randomShuffle: false,
  cards: [
    {
      question: "What was the problem?",
      answer:
        "- Any user w/ access could read every doc\n"
    },
    {
      question: "How did HR agent v1 vectorize its documents?",
      answer:
        "- logic app copies docs to storage\n" +
        "- sls func vectorizes them to storage"
    },
    {
      question: "Why was this vectorization process painful?",
      answer:
        "- Unoptimized queries"
    },
    {
      question: "Why was per-user RBAC hard to enforce in the first HR agent?",
      answer:
        "- Backend never received user's identity token"
    },
    {
      question: "What was your workaround to the HR agent's lack of per-user RBAC?",
      answer:
        "- Small user groups"
    },
    {
      question: "How did the second HR agent version enforce per-user RBAC?",
      answer:
        "MS Graph Search"
    },
    {
      question: "Why handroll your own retrieval API?",
      answer:
        "- Better search algorithms"
    },
    {
      question: "Which algorithm ranks the HR agent's SharePoint chunks?",
      answer:
        "- BM25 keyword scoring\n"
    },
    {
      question: "What dimensions did CI/CD tests use to grade RAG answers?",
      answer: "- Faithfulness + Correctness\n"
    },
    {
      question: "What are you building at NBCU right now?",
      answer:
        "- Separating NBCU Agent from Prism Portal v1"
    },
    {
      question: "Why are you splitting off NBCU agent?",
      answer:
        "- Reduced blast radius"
    },
    {
      question: "What is your part in NBCU Agent?",
      answer:
        "- Agent loop\n"
    },
    {
      question: "What would you change next in Prism Portal?",
      answer:
        "- Compacting long chat history\n"
    },
    {
      question: "How does the HR agent's Graph Search retrieval work, step by step?",
      answer:
        "- POST `/query` ranks employee's files\n" +
        "- GET `/items` gets files' full text\n" +
        "- Chunk files' full text\n" +
        "- Rank chunks via BM25"
    }
  ]
};
