const DEEPGRAM_RESEARCH_TRAINING_PIPELINE_DECK = {
  label: "Deepgram (training pipeline)",
  randomShuffle: false,
  cards: [
    {
      question: "How did rapBot train models before the pipeline?",
      answer: "- Google Colab notebook"
    },
    {
      question: "What broke in rapBot's Colab training?",
      answer:
        "- Dependency drift\n" +
        "- no version control for orchestration layer\n" +
        "- not scalable\n" +
        "- Ephemeral intermediate checkpoints"
    },
    {
      question: "What caused rapBot's Colab runs to die?",
      answer:
        "- Colab runtime disconnects\n"
    },

    {
      question: "How did you design rapBot's new training pipeline?",
      answer:
        "- Maintainable: vendored black box (RADTTS)\n" +
        "- Visible: metrics dashboard (Weights & Biases)\n" +
        "- Portable: containerized (Docker)\n" +
        "- Durable: intermediate checkpoints (S3)\n" +
        "- Scalable: job queues and serverless GPU (RunPod)"
    },
    {
      question: "How does a rapBot training run work now?",
      answer:
        "- Send training job via POST /run\n" +
        "- Check queue/logs/metrics in RunPod + Weights & Biases\n" +
        "- Create checkpoint in S3"
    },
    {
      question: "Which vendors did rapBot's training pipeline use?",
      answer:
        "RunPod --> job queue and GPU provisioning\n" +
        "Weights & Biases --> metrics dashboard\n" +
        "S3 --> checkpoints\n" +
        "Docker --> containerization"
    },
    {
      question: "How would someone repeat a rapBot training run later?",
      answer: "- rerun training job with version controlled config on the image that pins the RADTTS commit"
    },
    {
      question: "What gap remains in rapBot's training pipeline?",
      answer:
        "1. Warm restart\n" +
        "- Checkpoint download to the worker isn't built\n" +
        "- Then automatic retries, the config already has the setting\n" +
        "2. Log parser\n" +
        "- Safe while pinned to one commit\n" +
        "- Sturdier source: TensorBoard files the model already writes"
    },
    {
      question: "Why did rapBot use RADTTS?",
      answer:
        "- Control pitch, energy, syllable length"
    },
    {
      question: "Which TTS model would you pick today?",
      answer: "- Test zero-shot voice cloning first"
    },
    {
      question: "Who owned what between you and rapBot's researcher?",
      answer:
        "Researcher --> hyperparams\n" +
        "Me --> training data + pipeline"
    },
    {
      question: "What did rapBot's researcher hand you?",
      answer: "- Config + checkpoint"
    },
    {
      question: "What did you build because rapBot's researcher asked?",
      answer:
        "- WER score per checkpoint via STT"
    }
  ]
};
