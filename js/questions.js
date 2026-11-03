// Flash card data.
// Each deck has a "label" (shown in the picker), a "randomShuffle" flag
// (true = shuffle card order, false = read in the order listed below),
// and a "cards" array.
// Each card has "question" and "answer". Answer text uses "\n" for line
// breaks so bullet structure is preserved exactly as written.
//
// Decks are defined as separate consts below (one per deck), then
// grouped into named group arrays (e.g. DEEPGRAM_DECKS), then collected
// into window.DECK_GROUPS and window.DECKS at the very bottom of this
// file. To add a new deck: copy a const below, give it a new name, then
// add that name to the relevant group array (e.g. NEBIUS_DECKS).
// To add a new company/group: add a new group array and a new entry
// in window.DECK_GROUPS.

const DEEPGRAM_FAQ_DECK = {
  label: "FAQ",
  randomShuffle: true,
  cards: [
    {
      question: "Tell me about yourself",
      answer:
        "- Eval engineer who decides if a model ships\n" +
        "- NBCU/rapBot/Waterfield"
    },
    {
      question: "What are you looking for in your next role?",
      answer: "- Gate releases of speech models"
    },
    {
      question: "Why are you leaving NBCU?",
      answer: "- eval audio, not text"
    },
    {
      question: "Why Deepgram?",
      answer: "- eval speech models at scale"
    },
    {
      question: "What do you do in the week before a release?",
      answer:
        "1. Lock testing inputs (transcripts, etc.)\n" +
        "2. Test automatically & manually\n" +
        "3. Give product metrics\n" +
        "4. Prep rollback plan"
    },
    {
      question: "How do you tell a real regression from noise?",
      answer:
        "- z-scores, t-tests, p vals"
    },
    {
      question: "How would you eval a model you didn't build?",
      answer:
        "- Build a golden dataset from prod logs\n" +
        "- Test automatically & manually\n"
    },
    {
      question: "How do you decide go or no-go on a model?",
      answer:
        "- Test automatically & manually\n" +
        "- Product sets threshold beforehand\n" +
        "- Assess tradeoffs for regressions"
    },
    {
      question: "How would you triage a bug in prod?",
      answer:
        "- Reproduce it locally\n"
    },
    {
      question: "How do you test a voice agent end-to-end before release?",
      answer:
        "- Call the agent\n" +
        "- Assess task completion, alignment, & convo flow\n"
    },
    {
      question: "What from your eval goes on my roadmap?",
      answer:
        "- The costliest problems\n"
    },
    {
      question:
        "What do you do when the research team says you can ship, but your own gate says hold?",
      answer:
        "- Re-do eval\n" +
        "- Show Product the specific calls that are failing\n" +
        "- Have a rollback plan"
    },
    {
      question: 'How do you assess a published benchmark?',
      answer: "- who? (tested)\n" +
        "- what? (condititions)\n" +
        "- how? (load)\n" +
        "- which? (model)\n"
    }
  ]
};

const DEEPGRAM_STATISTICS_DECK = {
  label: "Statistics",
  randomShuffle: true,
  cards: [
    {
      question: "What is sample variance in plain English?",
      answer: "The spread of values in a set"
    },
    {
      question: "What is standard error in plain English?",
      answer: "How much a set's mean would vary when re-run"
    },
    {
      question: "What is a t-test in plain English?",
      answer: "Checks whether the gap between two means is bigger than just noise"
    },
    {
      question: "What's the mathematical formula for a t-test?",
      answer: "observed_gap / std_err"
    },
    {
      question: "What is a p value in plain English?",
      answer: "The odds the gap between two means is just noise"
    },
    {
      question: "How to go from t-stat to p value in plain English?",
      answer: "The area on a bell curve past your plotted t-stat"
    },
    {
      question: "What's the mathematical formula for a z score?",
      answer: "(value - mean) / std_dev"
    }
  ]
};

const RAPBOT_MODEL_EVAL_DECK = {
  label: "Use case (rapBot model eval)",
  randomShuffle: false,
  cards: [
    {
      question: "What was the problem?",
      answer: "- Eval relied on vibe checks"
    },
    {
      question: "What was the rubric?",
      answer:
        "- Accuracy\n" +
        "- Similarity\n" +
        "- Latency\n"
    },
    {
      question: "How did you measure accuracy?",
      answer:
        "transcript --> TTS (lupe) --> STT (whisper) --> transcript --> WER\n"
    },
    {
      question: "How did you measure similarity?",
      answer: "- Users pick the real Lupe out of 2 clips"
    },
    {
      question: "How did you measure latency?",
      answer:
        "- Used DataDog span tags\n"
    },
    {
      question: "How did you improve those 3 dimensions?",
      answer:
        "- Normalization\n" +
        "- Expanded dataset\n" +
        "- Serverless\n"
    },
    {
      question: "What was the outcome?",
      answer:
        "- Fewer inference retries"
    }
  ]
};

const NAVIENT_TWILIO_DECK = {
  label: "Use case (Navient)",
  randomShuffle: false,
  cards: [
    {
      question: "What was the problem?",
      answer:
        "- Pickup rates\n" +
        "- Visibility\n" +
        "- Concurrency"
    },
    {
      question: "What was out of scope?",
      answer: "- Legal hold accounts"
    },
    {
      question: "What was the user story?",
      answer:
        "- I want borrowers to answer\n" +
        "- I want to see call result\n" +
        "- I want less dropped calls at peak times"
    },
    {
      question: "What were the acceptance criteria?",
      answer:
        "- Branded calling\n" +
        "- Flex Dashboard\n"
    },
    {
      question: "What were the deliverables?",
      answer:
        "- 6 microservices in Twilio Flex"
    },
    {
      question: "How did you evaluate it?",
      answer:
        "- Load tests" +
        "- manual QA"
    },
    {
      question: "What were the business outcomes?",
      answer:
        "- higher collection rates"
    }
  ]
};

const NBCU_HR_AGENT_DECK = {
  label: "Use case (NBCU HR Agent)",
  randomShuffle: false,
  cards: [
    {
      question: "What was the problem?",
      answer:
        "Wrong answers"
    },
    {
      question: "What was the rubric?",
      answer:
        "- Accuracy\n" +
        "- Faithfulness"
    },
    {
      question: "What was the dataset?",
      answer:
        "- Prompts from prod\n"
    },
    {
      question: "How did you validate the judge?",
      answer:
        "- Human spot checks of judge answers\n"
    },
    {
      question: "How did the gate work?",
      answer:
        "- GitHub action CI/CD job + slack alerts\n"
    },
    {
      question: "What were the business outcomes?",
      answer:
        "- Less human intervention"
    }
  ]
};

const NEBIUS_SME_1_DECK = {
  label: "Recruiter's SME",
  randomShuffle: true,
  cards: [
    {
      question: "Preferred programming language and how concurrency works with it",
      answer:
        "asyncio --> concurrent I/O\n" +
        "Threads --> blocking I/O\n" +
        "Processes --> CPU-heavy work"
    },
    {
      question: "What is diff bw virtualization and containerization?",
      answer:
        "- VM --> separate kernel, isolated machine\n" +
        "- Container --> shared kernel, isolated processes"
    },
    {
      question: "Describe 3 python libraries used for managing concurrency",
      answer:
        "asyncio --> concurrent I/O\n" +
        "concurrent.futures --> thread and process pools\n" +
        "subprocess --> launch and manage external programs"
    },
    {
      question: "What's inside a server?",
      answer:
        "C -- CPUs\n" +
        "A -- Airflow\n" +
        "M -- Motherboard\n" +
        "P -- Power\n" +
        "E -- Ethernet / network interfaces\n" +
        "R -- RAM\n" +
        "S -- Storage\n"
    },
    {
      question: "What is the stack underneath HTTPS?",
      answer:
        "HTTP -->\n" +
        "TLS -->\n" +
        "TCP -->\n" +
        "IP -->\n" +
        "Ethernet / Wi-Fi"
    },
    {
      question: "What does HTTP do?",
      answer:
        "Defines web requests and responses, such as “GET this page.”"
    },
    {
      question: "What does TLS (Transport Layer Security) do?",
      answer:
        "- Encrypts the connection and verifies the server’s identity"
    },
    {
      question: "What does TCP (Transmission Control Protocol) do?",
      answer:
        "Delivers data reliably and in order, resending missing data"
    },
    {
      question: "What does IP (Internet Protocol) do?",
      answer:
        "Routes packets between networks"
    },
    {
      question: "What is Ethernet?",
      answer:
        "Carries network data via cables"
    },
    {
      question: "What is Wi-Fi?",
      answer:
        "Carries network data via radio waves"
    },
    {
      question: "What is a kernel?",
      answer:
        "- The core of an operating system"
    },
    {
      question: "What does the kernel do?",
      answer:
        "- controls devices\n" +
        "- allocates memory\n" +
        "- schedules processes\n" +
        "- sends and receives network packets"
    },
    {
      question: "How to optimize CPU-bound Python?",
      answer:
        "- Use process pools to run work in parallel across CPU cores"
    },
    {
      question: "How to optimize I/O-bound Python?",
      answer: "- Concurrency via asyncio or thread pools"
    },
    {
      question: "How does a DNS lookup resolve?",
      answer:
        "- App asks OS resolver, checks cache and /etc/hosts\n" +
        "- Resolver asks recursive server (ISP, 8.8.8.8)\n" +
        "- Recursive asks root --> TLD (.com) --> authoritative\n" +
        "- Gets IP back, caches it per TTL"
    },
    {
      question: "What is a file descriptor?",
      answer:
        "- Integer handle the kernel gives a process for an open file, socket, or pipe\n" +
        "ex.: - 0 stdin, 1 stdout, 2 stderr\n"
    },
    {
      question: "What is a syscall?",
      answer:
        "- How a process asks the kernel to do something: open, read, write, fork, socket\n" +
        "- Switches CPU from user mode to kernel mode\n"
    },
    {
      question: "What is /proc?",
      answer:
        "- Virtual filesystem where kernel state is exposed as files\n"
    },
    {
      question: 'What is systemd?',
      answer: "Linux's system and service manager"
    }
  ]
};

const NEBIUS_TECH_TUTORIALS_DECK = {
  label: 'DNS',
  randomShuffle: true,
  cards: [
    {
      question: "What is SSH?",
      answer: "A protocol for securely connecting to a server over a network"
    },
    {
      question: "What happens when you SSH?",
      answer:
        "- Hostname resolves to IP address\n" +
        "- Connection opened on 22\n" +
        "- Secret keys derived via authenticated key exchange\n" +
        "- Server verified via host key\n" +
        "- Client verified via SSH key or password\n" +
        "- SSH opens a session or shell"
    },
    {
      question: "Does ssh_config handle client or server connections?",
      answer: "client"
    },
    {
      question: "Does sshd_config handle client or server connections?",
      answer: "server"
    },
    {
      question: "What does DNS convert between?",
      answer:
        "Human-readable addresses → computer-readable addresses\n"
    },
    {
      question: "What does a DNS A record convert between?",
      answer:
        "Hostname → IPv4 address\n"
    },
    {
      question: "What does a DNS AAAA record convert between?",
      answer:
        "Hostname → IPv6 address\n"
    },
    {
      question: "What does a DNS CNAME record convert between?",
      answer:
        "Alias → hostname\n"
    },
    {
      question: "What does a DNS PTR (pointer) record convert between?",
      answer:
        "IP address → hostname\n"
    },
    {
      question: "What does a kernel cgroup do?",
      answer: 'Enforces memory limits on a set of processes'
    },
    {
      question: 'What is a network router?',
      answer: 'Forwards packets between different networks'
    }
  ]
};

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

const NEBIUS_SME_MISC_DECK = {
  label: "Recruiter SME (miscellaneous)",
  randomShuffle: true,
  cards: [
    // Databases
    {
      question: "What does a db cursor do?",
      answer:
        "Tracks your position in query results so you can fetch and process rows incrementally"
    },
    {
      question: "What does a db index help with?",
      answer:
        "- Helps the db find rows w/o scanning the whole table\n" +
        "- Improves reads but adds work to writes"
    },
    {
      question: "What data structure backs a db index?",
      answer:
        "- B-tree, sorted and balanced\n" +
        "- Lookup is O(log n) instead of a full scan\n" +
        "- Supports range queries and ORDER BY\n" +
        "- Hash index --> equality only, no ranges"
    },
    // Bare metal and boot
    {
      question: 'What does a "reboot" button on a website for a bare-metal server do? How does that work from end to end?',
      answer: "- Browser sends request\n" +
        "- API auths user\n" +
        "- backend tells BMC to reboot\n" +
        "- server restarts\n" +
        "- firmware loads bootloader\n" +
        "- bootloader loads kernel\n" +
        "- services start\n" +
        "- platform checks server health"
    },
    {
      question: "What is firmware?",
      answer: "Software built into hardware that initializes and controls it"
    },
    {
      question: "What is a BMC (Baseboard Management Controller)?",
      answer: "Independent hardware for remotely monitoring and controlling a server"
    },
    {
      question: "What protocols talk to a BMC?",
      answer:
        "- IPMI --> old, binary, port 623\n" +
        "- Redfish --> modern, REST over HTTPS, JSON\n" +
        "- Both do power cycle, sensors, console, boot order"
    },
    {
      question: "What is a bootloader?",
      answer: "Software that loads the OS kernel into memory and starts it"
    },
    {
      question: "What does DHCP do?",
      answer:
        "- Hands a booting machine an IP, gateway, DNS server\n" +
        "- Can also point it to a boot file for PXE"
    },
    {
      question: "How does network boot (PXE) work?",
      answer:
        "- Firmware asks DHCP for IP and boot server\n" +
        "- Pulls bootloader over TFTP or HTTP\n" +
        "- Bootloader pulls kernel and installer image\n" +
        "- Used to provision bare metal at scale, no USB sticks"
    },
    // Networking
    {
      question: "What is TCP?",
      answer: "- Handshake, ordered, resends lost data (HTTP, SSH)"
    },
    {
      question: "What is UDP?",
      answer: "- Fire and forget, faster, no ordering (DNS, video)"
    },
    // Debugging a slow SSH session
    {
      question: "SSH is slow. First question to ask?",
      answer: "Is the slowness on the network or on the machine?"
    },
    {
      question: "ping HOSTNAME investigates what?",
      answer: "Network latency and packet loss"
    },
    {
      question: "mtr HOSTNAME investigates what?",
      answer: "Packet loss and latency at each network hop"
    },
    {
      question: "ssh -vvv USER_NAME@HOSTNAME investigates what?",
      answer: "Delays during connection setup and authentication"
    },
    {
      question: "top investigates what?",
      answer: "High CPU usage and busy processes on the server"
    },
    {
      question: "free -h investigates what?",
      answer: "Low available RAM and high swap usage on the server"
    },
    {
      question: "iostat -xz 1 investigates what?",
      answer: "Disk latency and I/O bottlenecks on the server"
    },
    {
      question: "SSH goes through a jump host. What do you check?",
      answer: "Run the same checks (ping, mtr, top, free, iostat) on the jump host"
    },
    // Processes
    {
      question: "What is a process?",
      answer: "- Running program with its own memory, crash stays contained, heavier to start"
    },
    {
      question: "What is a thread?",
      answer: "- Runs inside a process and shares its memory, cheap, one bad thread can kill the whole process"
    },
    // Kubernetes
    {
      question: "A Kubernetes pod is stuck. Order of checks?",
      answer:
        "1. kubectl get pods --> status: Pending, CrashLoop, ImagePull\n" +
        "2. kubectl describe pod --> events, scheduling failures\n" +
        "3. kubectl logs, add --previous for crashed container\n" +
        "4. kubectl exec --> poke around inside\n" +
        "5. Node side: kubectl describe node, taints, resources"
    },
    {
      question: "Node selector vs affinity?",
      answer:
        "- nodeSelector --> simple label match, must match\n" +
        "- nodeAffinity --> richer rules, required or preferred\n" +
        "- Taints push pods off a node, tolerations let them back on"
    },
    {
      question: "How do you debug a svc that can't read files when chmod is broken?",
      answer:
        "- Check: ls -l, id, getfacl\n" +
        "- Try another path: chown, setfacl, or run service as the owner\n" +
        "- Copy the file somewhere the service can read, cp works\n" +
        "- Fix chmod itself: mount a working binary, busybox chmod, or python os.chmod"
    },
    {
      question: "Common ports and protocols?",
      answer:
        "22 --> SSH\n" +
        "53 --> DNS\n" +
        "67/68 --> DHCP\n" +
        "80 --> HTTP\n" +
        "443 --> HTTPS\n" +
        "623 --> IPMI"
    },
  ]
};

const DEEPGRAM_DECKS = [
  DEEPGRAM_FAQ_DECK,
  DEEPGRAM_STATISTICS_DECK,
  RAPBOT_MODEL_EVAL_DECK,
  NAVIENT_TWILIO_DECK,
  NBCU_HR_AGENT_DECK
];

const NEBIUS_DECKS = [
  NEBIUS_SME_1_DECK,
  NEBIUS_TECH_TUTORIALS_DECK,
  NEBIUS_CLI_TOOLS_DECK,
  NEBIUS_SME_MISC_DECK
];

// Each group pairs a tab label (shown in the picker) with its decks.
// Order here controls both tab order and, after flattening below,
// deck index order in window.DECKS.
window.DECK_GROUPS = [
  { label: "Deepgram", decks: DEEPGRAM_DECKS },
  { label: "Nebius", decks: NEBIUS_DECKS }
];

// Flat list of every deck, derived from DECK_GROUPS above. app.js uses
// this for its flat deckIndex state; decks never need to be listed twice.
window.DECKS = window.DECK_GROUPS.reduce(function (all, group) {
  return all.concat(group.decks);
}, []);
