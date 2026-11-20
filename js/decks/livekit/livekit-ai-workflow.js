const LIVEKIT_AI_WORKFLOW_DECK = {
  label: "LiveKit (AI workflow)",
  randomShuffle: false,
  cards: [
    {
      question: "Walk me through an AI workflow you built",
      answer:
        "- HITL\n" +
        "- isolated\n" +
        "- scoped write access"
    },
    {
      question: "What are all the parts of your AI workflow?",
      answer:
        "Orchestrator --> python script\n" +
        "Agents --> Claude Code\n" +
        "LLM --> gpt-oss:20b\n" +
        "Model server --> Ollama\n" +
        "Container --> Docker"
    },
    {
      question: "Where do your AI workflow's agents run?",
      answer:
        "- Disposable clone of my repo\n" +
        "- Own Docker container each"
    },
    {
      question: "Describe the 6 stages in your AI workflow? (PPAIRC)",
      answer:
        "prompt -->" +
        "plan -->\n" +
        "approval -->\n" +
        "implementation -->\n" +
        "review -->\n" +
        "commit"
    },
    {
      question: "What do your AI workflow's 2 reviewers look for?",
      answer:
        "logic bugs + bad tests"
    },
    {
      question: "How does a reviewer's critique get fixed in your workflow?",
      answer:
        "- I start a new loop\n" +
        "- Accepted critique becomes new task"
    },
    {
      question: "Why does your AI workflow start a new agent per step?",
      answer:
        "- Different permissions per step\n" +
        "- Docker mounts fixed at start\n" +
        "- Reviewers judge diff only"
    },
    {
      question: "What stops endless loops in your AI workflow?",
      answer:
        "- A model call cap 32"
    },
    {
      question: "How does a model differ from an agent?",
      answer:
        "- Model --> text in, text out\n" +
        "- Agent --> loop calling model + running tools"
    },
    {
      question: "How do your workflow's containers reach the model w/o network?",
      answer:
        "- File mailbox to Ollama on Mac\n" +
        "- 1 model, 1 API route allowed"
    }
  ]
};
