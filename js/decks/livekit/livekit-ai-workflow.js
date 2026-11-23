const LIVEKIT_AI_WORKFLOW_DECK = {
  label: "LiveKit (AI workflow)",
  randomShuffle: false,
  cards: [
    {
      question: "Walk me through an AI workflow you built",
      answer:
        "- HITL\n" +
        "- isolated\n" +
        "- writes only to disposable clone"
    },
    {
      question: "What are all the parts of your AI workflow?",
      answer:
        "Orchestrator --> bash script\n" +
        "Agent --> Aider\n" +
        "LLM --> gpt-oss:20b\n" +
        "Model server --> Ollama\n" +
        "Container-to-model communication --> allowlist proxy\n" +
        "Container --> Docker"
    },
    {
      question: "Why did you pick gpt-oss:20b?",
      answer:
        "- free" +
        "- Mac compatible\n"
    },
    {
      question: "How do your AI workflow's agents run?",
      answer:
        "- Docker container + repo clone + no internet"
    },
    {
      question: "Describe the 6 stages in your AI workflow? (PPAIRC)",
      answer:
        "prompt -->\n" +
        "plan (gpt-oss reasons first) -->\n" +
        "approval (Aider asks me) -->\n" +
        "implementation (Aider edits clone) -->\n" +
        "review (I read printed diff) -->\n" +
        "commit (I git apply)"
    },
    {
      question: "What stops endless loops in your AI workflow?",
      answer:
        "- A limit on model calls"
    },
    {
      question: "How does a model differ from an agent?",
      answer:
        "Agent is deterministic code that calls a model, model is generative"
    },
    {
      question: "How do your workflow's containers reach the model w/o network?",
      answer:
        "- Internal Docker network"
    },
    {
      question: "What is the security difference between your AI workflow and Fence?",
      answer:
        "- No localhost\n" +
        "- No permanent repo writes\n" +
        "- No env vars"
    },
  ]
};
