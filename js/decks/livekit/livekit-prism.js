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
        "A logic app copied sharepoint documents nightly to a blob storage function\n" +
        "An azure function chunked and vectorized them into .npy, .json, and .txt files that were also palced in blob storage"
    },
    {
      question: "Why was the HR agent's nightly SharePoint copy job painful?",
      answer:
        "- Built in low-code designer\n" +
        "- Hand copied into 11 env folders"
    },
    {
      question: "Why was per-user RBAC hard to enforce in the first HR agent?",
      answer:
        "- User identity was only used to determine VPN access, not gate agent or document access\n"
    },
    {
      question: "What was your workaround to the HR agent's lack of per-user RBAC?",
      answer:
        "- Small user group and holding docs held back"
    },
    {
      question: "How did the second HR agent version enforce per-user RBAC?",
      answer:
        "Microsoft Graph Search w/ employee's token\n"
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
      question: "How does a chat request flow through Prism Portal?",
      answer:
        "Next.js -->\n" +
        "FastAPI -->\n" +
        "AI gateway -->\n" +
        "6.1 Sol"
    },
    {
      question: "What infrastructure does Prism Portal run on?",
      answer:
        "- Azure containers + cosmos db managed by Terraform\n"
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
        "- Splitting NBCU Agent off Prism Portal\n" +
        "- My part: Terraform + agent loop\n" +
        "- Independent deploys, smaller blast radius"
    },
    {
      question: "Why are you splitting off NBCU agent?",
      answer:
        "- Smaller cybersecurity blast radius"
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
        "Rank chunks via BM25 -->\n" +
        "Send top chunks to LLM"
    }
  ]
};
