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
        "SharePoint -->\n" +
        "Logic App -->\n" +
        "blob storage -->\n" +
        "Azure Function -->\n" +
        "1 vector file"
    },
    {
      question: "Why was per-user RBAC hard to enforce in the first HR agent?",
      answer:
        "- Backend never got employee identity\n" +
        "- VPN login not passed along"
    },
    {
      question: "What was your workaround to the HR agent's lack of per-user RBAC?",
      answer:
        "- Small user group or docs held back"
    },
    {
      question: "How did the second HR agent version enforce per-user RBAC?",
      answer:
        "1. Microsoft Graph Search w/ employee's token\n" +
        "2. Microsoft returns only files employee can open\n" +
        "3. BM25 picks best chunks --> top 6 to model"
    },
    {
      question: "Why use Microsoft Graph Search for HR agent retrieval?",
      answer:
        "- Microsoft enforces file permissions\n" +
        "- Own ranking code controls what model sees"
    },
    {
      question: "Which algorithm ranks the HR agent's SharePoint chunks?",
      answer:
        "- BM25 keyword scoring, in memory\n" +
        "- Low scores dropped\n" +
        "- Top 6 chunks sent to model"
    },
    {
      question: "What changed for HR after the Graph Search move?",
      answer:
        "- No limit on users or docs\n" +
        "- Several hundred --> several thousand employees\n" +
        "- Held-back docs now included"
    },
    {
      question: "What changed in the HR agent's code after the Graph Search move?",
      answer:
        "- Nightly SharePoint copy job removed\n" +
        "- No stored chunks or vector files"
    },
    {
      question: "Why was the HR agent's nightly SharePoint copy job painful?",
      answer:
        "- Built in low-code designer\n" +
        "- Hand copied into 11 env folders"
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
      question: "What infrastructure runs Prism Portal?",
      answer:
        "- Azure Container Apps\n" +
        "- Cosmos DB\n" +
        "- Terraform for all of it"
    },
    {
      question: "Why does Prism Portal stream chat with server-sent events?",
      answer:
        "- Answer flows one way, server to browser\n" +
        "- Plain HTTP passes corporate proxies\n" +
        "- Keep-alive pings stop idle cutoffs"
    },
    {
      question: "Whose permissions does a Prism Portal agent act with?",
      answer:
        "- Employee's own token per tool\n" +
        "- SharePoint, MCP servers apply their own perms"
    },
    {
      question: "How do you test Prism Portal agents' answer quality?",
      answer:
        "- LLM evals gate CI/CD\n" +
        "- Judge model scores faithfulness + correctness\n" +
        "- Score under cutoff blocks deploy"
    },
    {
      question: "A Prism Portal user reports a wrong answer. Now what?",
      answer:
        "1. Find session ID\n" +
        "2. Open Datadog trace, read retrieval span\n" +
        "3. Read gateway log for exact prompt"
    },
    {
      question: "What are you building at NBCU right now?",
      answer:
        "- NBCU Agent split off Prism Portal\n" +
        "- My part: Terraform + agent loop\n" +
        "- Independent deploys, smaller blast radius"
    },
    {
      question: "What would you change next in Prism Portal?",
      answer:
        "- Cap or summarize long chat history\n" +
        "- Rerank + chunk overlap\n" +
        "- Gradual deploys, auto rollback"
    }
  ]
};
