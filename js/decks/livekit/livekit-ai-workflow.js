const LIVEKIT_AI_WORKFLOW_DECK = {
  label: "LiveKit (AI workflow)",
  randomShuffle: false,
  cards: [
    {
      question: "Walk me through an AI workflow you built",
      answer:
        "- Human-in-the-loop coding workflow\n" +
        "- Isolated containers\n" +
        "- Tightly scoped write access"
    },
    {
      question: "What runs the agents in your AI workflow?",
      answer:
        "Claude Code --> agent\n" +
        "gpt-oss:20b on Ollama --> model\n" +
        "- No per-token cost"
    },
    {
      question: "Where do your AI workflow's agents run?",
      answer:
        "- Disposable clone of my repo\n" +
        "- Own Docker container each\n" +
        "- No network, no shell"
    },
    {
      question: "What happens in one run of your AI workflow?",
      answer:
        "1. I type task, planner proposes plan\n" +
        "2. I approve plan + writable files\n" +
        "3. Implementer edits only those\n" +
        "4. 2 reviewers read diff in parallel\n" +
        "5. I approve diff, commit, push"
    },
    {
      question: "What do your AI workflow's 2 reviewers look for?",
      answer:
        "Reviewer 1 --> logic bugs\n" +
        "Reviewer 2 --> missing tests, edge cases"
    },
    {
      question: "Where's the line between AI and you in your workflow?",
      answer:
        "- AI proposes, I decide\n" +
        "- Every change in repo, I read + approved"
    },
    {
      question: "How does a reviewer's critique get fixed in your workflow?",
      answer:
        "- I start a new run\n" +
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
      question: "Why does your AI workflow use 2 reviewers?",
      answer: "- Different jobs, not strength in numbers"
    },
    {
      question: "What stops endless loops in your AI workflow?",
      answer:
        "- 32 model calls per run, shared\n" +
        "- Turn cap per agent\n" +
        "- 6 min limit per step"
    },
    {
      question: "What does one run of your AI workflow cost?",
      answer: "- Nothing, model runs locally on Ollama"
    },
    {
      question: "How does a model differ from an agent?",
      answer:
        "- Model --> text in, text out\n" +
        "- Agent --> loop calling model + running tools"
    },
    {
      question: "Which loop in your AI workflow did you build?",
      answer:
        "workflow.py --> outer loop, 4 steps\n" +
        "Claude Code --> inner loop, 1 step"
    },
    {
      question: "Why do your AI workflow's limits actually hold?",
      answer:
        "- Docker + --tools restrict the program\n" +
        "- Model can ask, program can't act"
    },
    {
      question: "How do your workflow's containers reach the model w/o network?",
      answer:
        "- File mailbox to Ollama on Mac\n" +
        "- 1 model, 1 API route allowed"
    },
    {
      question: "How does a plan differ from a spec?",
      answer:
        "- Spec --> what software must do, person writes\n" +
        "- Plan --> how to make 1 change"
    }
  ]
};
