const LIVEKIT_RAPBOT_DECK = {
  label: "LiveKit (rapBot)",
  randomShuffle: false,
  cards: [
    {
      question: "What broke in rapBot's song generation in production?",
      answer: "- 10% of song requests failed w/ 502 Bad Gateway"
    },
    {
      question: "How did you find rapBot's 502 errors?",
      answer:
        "- App sent an alert to a Slack channel via webhook\n"
    },
    {
      question: "Why did rapBot's 502 bug reach production?",
      answer: "- Manual QA only on warm GPUs"
    },
    {
      question: "What caused rapBot's 502 errors?",
      answer:
        "cold_start_duration + inference_duration > RUNPOD_SYNC_TIMEOUT"
    },
    {
      question: "What was the stopgap for rapBot's 502 errors?",
      answer:
        "- Raise serverless GPU's idle timeout to keep workers warm longer"
    },
    {
      question: "How did rapBot's job queue fix the 502 errors?",
      answer:
        "- By relying on async events, not synchronous requests"
    },
    {
      question: "How did you prevent this problem from happening in the future?",
      answer: "- New e2e tests that use cold GPUs"
    },
    {
      question: "Why are polling requests to rapBot's jobs table OK?",
      answer:
        "- They're short & cheap (unlike GPU time)"
    },
    {
      question: "Why didn't rapBot use Postgres NOTIFY?",
      answer:
        "- Notify can lose a published message on server disconnect"
    },
    {
      question: "Why did rapBot use pg-boss over a queue service?",
      answer:
        "- Small volume\n" +
        "- Already had Postgres\n"
    },
    {
      question: "What do HTTP 200, 201, and 202 mean?",
      answer:
        "200 --> OK\n" +
        "201 --> created\n" +
        "202 --> accepted"
    },
    {
      question: "How do you recover if rapBot's API server goes down?",
      answer:
        "- Read results in jobs table"
    },
    {
      question: "How will you fix the remaining 3% of lyrics requests that fail?",
      answer:
        "- Split up large lyrics requests and stitch them together"
    },
    {
      question: "What are the parts of a job queue?",
      answer:
        "queue --> holds jobs --> table\n" +
        "producer --> creates jobs --> API table\n" +
        "worker --> finishes jobs --> GPU"
    },
    {
      question: "What are the parts of a pub/sub pattern?",
      answer:
        "publisher --> broadcaster --> API server\n" +
        "subscriber --> listener --> Browser"
    },
    {
      question: "What is plain polling?",
      answer:
        "short repeated requests"
    },
    {
      question: "What is long polling?",
      answer:
        "one long request per reply"
    },
    {
      question: "What are server-sent events?",
      answer:
        "One-way stream inside a single HTTP response"
    },
    {
      question: "What are WebSockets?",
      answer:
        "2 way long lived connection between browser and server\n" +
        "Starts with an HTTP GET and an {Upgrade: websocket} header"
    },
  ]
};
