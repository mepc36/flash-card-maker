const LIVEKIT_PRISM_DECK = {
  label: "LiveKit (Prism)",
  randomShuffle: false,
  cards: [
    {
      question: "What was the main problem with the first version of the Prism agent Portal?",
      answer:
        "- Any user w/ access could read every doc\n"
    },
    {
      question: "How did the first Prism Portal HR agent get its documents?",
      answer:
        "A logic app copied sharepoint documents nightly to blob storage\n" +
        "An azure function chunked and vectorized them"
    },
    {
      question: "Why was the HR agent's nightly SharePoint copy job painful?",
      answer:
        "- No version control"
    },
    {
      question: "Why was per-user RBAC hard to enforce in the first HR agent?",
      answer:
        "- Backend never received user's identity token"
    },
    {
      question: "What was your workaround to the HR agent's lack of per-user RBAC?",
      answer:
        "- Small user group"
    },
    {
      question: "How did the second HR agent version enforce per-user RBAC?",
      answer:
        "Microsoft Graph Search"
    },
    {
      question: "Why handroll your own retrieval API?",
      answer:
        "- Finer control over chunk ranking"
    },
    {
      question: "Which algorithm ranks the HR agent's SharePoint chunks?",
      answer:
        "- BM25 keyword scoring\n"
    },
    {
      question: "How do you test Prism Portal agents' answer quality?",
      answer: "- LLM-as-judge scores faithfulness + correctness\n"
    },
    {
      question: "A Prism Portal user reports a wrong answer. Now what?",
      answer:
        "Use session ID to find datadog trace"
    },
    {
      question: "What are you building at NBCU right now?",
      answer:
        "- Splitting NBCU Agent off Prism Portal"
    },
    {
      question: "Why are you splitting off NBCU agent?",
      answer:
        "- Independent deploys + smaller blast radius"
    },
    {
      question: "What is your part in NBCU Agent?",
      answer:
        "- My part: Terraform + agent loop\n"
    },
    {
      question: "What would you change next in Prism Portal?",
      answer:
        "- Compacting long chat history\n"
    },
    {
      question: "How does the HR agent's Graph Search retrieval work, step by step?",
      answer:
        "POST `/query` ranks employee's files -->\n" +
        "GET `/items` gets files' full text -->\n" +
        "Chunk files' full text -->\n" +
        "Rank chunks via BM25"
    }
  ]
};
