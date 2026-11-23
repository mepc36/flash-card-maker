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
      question: "Why wasn't raising rapBot's idle timeout enough?",
      answer:
        "- First cold request still errored"
    },
    {
      question: "How did rapBot's job queue fix the 502 errors?",
      answer:
        "- API server inserts job & returns 202\n" +
        "- API server polls waiting jobs & sends to worker\n" +
        "- GPU worker replies 202 & uploads audio\n" +
        "- GPU worker marks job completed w/ signedUrl\n" +
        "- API server polls completed jobs & pushes via message broker"
    },
    {
      question: "How did you prevent this problem from happening in the future?",
      answer: "- e2e tests that use cold GPUs"
    },
    {
      question: "Why is polling rapBot's jobs table OK?",
      answer:
        "- Polling requests are short & cheap (unlike GPU time)"
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
        "200 --> done\n" +
        "201 --> created\n" +
        "202 --> accepted"
    },
    {
      question: "What happens if rapBot's API server goes down?",
      answer:
        "- Open event streams lost\n" +
        "- EventSource reconnects itself\n" +
        "- Results safe in job rows"
    },
    {
      question: "What future optimizations do you have planned?",
      answer:
        "- Split up large lyrics requests and stitch them together"
    },
    {
      question: "What is a job queue?",
      answer:
        "A job queue is a list of pending work items kept in storage, such as a database table or a broker.\n" +
        "Producers add jobs to the list, and workers remove them.\n" +
        "In rapBot, the job queue was the jobs table in Postgres, managed by pg-boss."
    },
    {
      question: "What are the parts of a pub/sub pattern?",
      answer:
        "publisher --> API server\n" +
        "Subscriber --> Browser\n" +
        "Server sent events --> pgboss + server sent events"
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
