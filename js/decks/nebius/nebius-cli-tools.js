const NEBIUS_CLI_TOOLS_DECK = {
  label: "CLI Tools",
  randomShuffle: true,
  cards: [
    {
      question: "What is ping used to investigate?",
      answer: "Network latency and packet loss"
    },
    {
      question: "What is top used to investigate?",
      answer: "High CPU usage and busy processes"
    },
    {
      question: "What is free -h used to investigate?",
      answer: "Low available RAM and high swap usage"
    },
    {
      question: "What is vmstat used to investigate?",
      answer: "CPU activity, process state, memory, swapping, and disk I/O"
    },
    {
      question: "What is iostat -used to investigate?",
      answer: "Disk latency and I/O bottlenecks"
    },
    {
      question: "What does strace do?",
      answer:
        "- Logs every syscall a process makes\n" +
        "- Shows what a hung process is waiting on: file, socket, lock\n" +
        "- strace -p PID attaches to a running one"
    },
    {
      question: "What is getent used to investigate?",
      answer: "Retrieves entries from system databases using configured lookup sources\n"
    },
    {
      question: "What is dig (Domain Information Groper) used to investigate?",
      answer:
        "- DNS records, nameservers, errors, and timings\n"
    },
    {
      question: "What is mtr (My TraceRoute) used to investigate?",
      answer:
        "- Shows latency and packet loss at each network hop\n" +
        "- ex: `mtr lab-server` → probes the route to lab-server"
    },
    {
      question: "What is dmesg used to investigate?",
      answer:
        "- Prints the kernel's own log: OOM kills, disk errors, driver messages\n"
    }
  ]
};
