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
        "- free\n" +
        "- Mac compatible\n"
    },
    {
      question: "Where do your AI workflow's agents run?",
      answer:
        "- Disposable clone of my repo\n" +
        "- One Docker container per session\n" +
        "- Internal network, no internet"
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
      question: "How does a change to the plan get applied in your workflow?",
      answer:
        "I send a follow-up prompt in the same Aider chat"
    },
    {
      question: "What stops endless loops in your AI workflow?",
      answer:
        "- Aider caps its auto-fix retries\n" +
        "- Each new turn needs my prompt"
    },
    {
      question: "How does a model differ from an agent?",
      answer:
        "Agent is deterministic code that calls a model, model is generative"
    },
    {
      question: "How do your workflow's containers reach the model w/o network?",
      answer:
        "- Internal Docker network, proxy is only exit\n" +
        "- Proxy allows 1 model, 2 chat routes"
    },
    {
      question: "Why hand-roll your AI workflow instead of using a sandbox like Fence?",
      answer:
        "- Stricter threat model:\n" +
        "- FORBIDDEN: localhost/direct repo edits/env vars"
    },
  ]
};
