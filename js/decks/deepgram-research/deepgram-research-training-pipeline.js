const DEEPGRAM_RESEARCH_TRAINING_PIPELINE_DECK = {
  label: "Deepgram (training pipeline)",
  randomShuffle: false,
  cards: [
    {
      question: "What models did rapBot train?",
      answer:
        "- RADTTS fine-tunes, 1 per rapper voice\n" +
        "- Hundreds of voice models"
    },
    {
      question: "How did rapBot train models before the pipeline?",
      answer:
        "- By hand in a Colab notebook\n" +
        "- Me + our researcher"
    },
    {
      question: "What broke in rapBot's Colab training?",
      answer:
        "- Runs died partway, restarted from zero\n" +
        "- Few hours per failure\n" +
        "- Researcher lost ~1 day per sprint"
    },
    {
      question: "How did you find rapBot's failed training runs?",
      answer: "- Each of us watched our own runs"
    },
    {
      question: "What caused rapBot's Colab runs to die?",
      answer:
        "- Colab disconnected long sessions\n" +
        "- Checkpoints + logs on Drive mount\n" +
        "- Mount died w/ session"
    },
    {
      question: "What else was wrong with rapBot's Colab notebook?",
      answer:
        "- Cloned RADTTS fresh, unpinned\n" +
        "- Hyperparams typed by hand\n" +
        "- No metrics dashboard"
    },
    {
      question: "What training option did you reject for rapBot?",
      answer:
        "- Always-on GPU machine\n" +
        "- Paid for idle GPU"
    },
    {
      question: "What did you choose for rapBot training, and why?",
      answer:
        "- Containerized jobs on serverless GPUs\n" +
        "- Pay only while training\n" +
        "- Same pinned image every run"
    },
    {
      question: "How does a rapBot training run work now?",
      answer:
        "1. One request goes to job queue\n" +
        "2. Serverless GPU worker starts container\n" +
        "3. train.py reads config, runs RADTTS\n" +
        "4. Metrics stream to experiment tracker\n" +
        "5. Each checkpoint uploads to blob storage"
    },
    {
      question: "Which vendors did rapBot's training pipeline use?",
      answer:
        "Job queue --> RunPod Serverless\n" +
        "Experiment tracker --> Weights & Biases\n" +
        "Blob storage --> S3"
    },
    {
      question: "What changed for rapBot's researcher after the pipeline?",
      answer:
        "- Lost day per sprint dropped to ~0\n" +
        "- Starts runs w/ 1 request\n" +
        "- Watches metrics on dashboard"
    },
    {
      question: "What changed in rapBot's training code after the pipeline?",
      answer:
        "- Checkpoints upload as they're saved\n" +
        "- No notebook, no Drive mount"
    },
    {
      question: "How would someone repeat a rapBot training run later?",
      answer:
        "- Config in version control\n" +
        "- Image pins RADTTS commit"
    },
    {
      question: "What gap remains in rapBot's training pipeline?",
      answer:
        "- No resume from saved checkpoint\n" +
        "- Planned fix adds download, then auto retries"
    },
    {
      question: "Why did rapBot use RADTTS?",
      answer:
        "- Control pitch, energy, syllable length\n" +
        "- Rap depends on rhythm + pitch\n" +
        "- Published weights, few hundred clips"
    },
    {
      question: "Which TTS model would you pick today?",
      answer: "- Test zero-shot voice cloning first"
    },
    {
      question: "Who owned what between you and rapBot's researcher?",
      answer:
        "Researcher --> hyperparams, reruns\n" +
        "Me --> training data, pipeline, tooling\n" +
        "Together --> dataset upgrades"
    },
    {
      question: "What did rapBot's researcher hand you?",
      answer: "- Notebook + config + checkpoint"
    },
    {
      question: "What did rapBot's researcher ask for most?",
      answer: "- Tooling to eval a new dimension"
    },
    {
      question: "What did you build because rapBot's researcher asked?",
      answer:
        "- WER score per checkpoint via STT\n" +
        "- Score logged to dashboard"
    },
    {
      question: "How did you hear a rapBot training run looked wrong?",
      answer:
        "- Outlier alerts\n" +
        "- Otherwise standup or Slack"
    },
    {
      question: "Have you done multi-node GPU training?",
      answer:
        "- Multi-GPU DDP on a single host\n" +
        "- Multi-node, concepts only"
    },
    {
      question: "Have you run Kubernetes?",
      answer:
        "- Docker, ECS/Fargate, Compose, Container Apps\n" +
        "- Gap is the orchestrator"
    }
  ]
};
