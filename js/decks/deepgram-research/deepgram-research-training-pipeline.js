const DEEPGRAM_RESEARCH_TRAINING_PIPELINE_DECK = {
  label: "Deepgram (training pipeline)",
  randomShuffle: false,
  cards: [
    {
      question: "How did rapBot train models before the pipeline?",
      answer: "- Google Colab notebook"
    },
    {
      question: "What problems came from training models in Colab notebooks?",
      answer:
        "- Couldn't run more than one job at a time"
    },
    {
      question: "What caused rapBot's Colab runs to die?",
      answer:
        "- Colab runtime disconnects"
    },

    {
      question: "What goals did you have when re-designing rapBot's new training pipeline? (MVPS)",
      answer:
        "- Maintainability: vendored black box (RADTTS)\n" +
        "- Visibility: dashboards (Weights & Biases)\n" +
        "- Portability: containers (Docker)\n" +
        "- Scalability: job queues & serverless GPU (RunPod)"
    },
    {
      question: "What's the flow of execution control for the new pipeline?",
      answer:
        "- Send training job via POST /run" +
        "- Check queue/logs/metrics in RunPod + Weights & Biases\n" +
        "- Create checkpoint in S3"
    },
    {
      question: "Which 4 major vendors does rapBot's training pipeline use?",
      answer:
        "RunPod --> job queue and GPU provisioning\n" +
        "Weights & Biases --> metrics dashboard\n" +
        "S3 --> checkpoints\n" +
        "Docker --> containerization"
    },
    {
      question: "What future optimizations are planned for rapBot's training pipeline?",
      answer:
        "Warm restarts from intermediate checkpoints"
    },
    {
      question: "Why did rapBot use RADTTS?",
      answer:
        "- To control pitch & syllable length"
    },
    {
      question: "What type of TTS model would you choose if you were redoing this today?",
      answer: "- Zero-shot models"
    },
    {
      question: "Did you or the researcher own the hyperparameters, dataset, & pipeline?",
      answer:
        "Researcher --> hyperparams\n" +
        "Me --> training data + pipeline"
    },
    {
      question: "What did rapBot's researcher hand you?",
      answer: "- Job config + checkpoint"
    },
    {
      question: "What did you build because rapBot's researcher asked?",
      answer:
        "- WER score per checkpoint via STT"
    }
  ]
};
