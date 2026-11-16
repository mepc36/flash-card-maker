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
