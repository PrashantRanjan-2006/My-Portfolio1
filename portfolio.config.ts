export const portfolioConfig = {
  metadata: {
    version: "1.0.0",
    owner: "Prashant Ranjan",
    lastUpdated: "2026-11-02",
  },

  personal: {
    firstName: "Prashant",
    lastName: "Ranjan",
    fullName: "Prashant Ranjan",
    role: "Java Full-Stack Developer",
    tagline:
      "Crafting high-performance digital experiences, robust core software, and memorable brand identities.",
    intro:
      "Hello Visitor! I'm a B.Tech Computer Science (CSE) student and a passionate software developer who loves transforming ideas into real-world digital solutions.",
    location: "India",
    email: "prashantranjan20192006@gmail.com",
    phone: "",
    avatar: "/assets/profile/avatar-formal.jpg",
    heroIllustration: "/assets/profile/avatar-stylish.jpg",
    resume:
      "https://drive.google.com/drive/folders/1dyKq5DFf3BVvfBR8mJ9BQngxu0UIRL0A?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
    openToWork: true,
  },

  hero: {
    greeting: "Hi, I'm",
    role: "Java Full-Stack Developer",
    primaryButton: { text: "Explore 3D Work", link: "#projects" },
    secondaryButton: {
      text: "Resume (PDF)",
      link: "https://drive.google.com/file/d/1ueHsZNF4fV0y0uTEViPAymTxCHqTzc4k/view?usp=drivesdk",
    },
    terminalAnimation: [
      "Java Full-Stack Developer",
      "Creative Logo & UI Designer",
      "B.Tech CSE @ Galgotias '28",
      "Video Editor & Content Creator",
      "OOP & System Architecture",
    ],
  },

  about: {
    heading: "Building meaningful technology and memorable identities.",
    description:
      "Currently pursuing Bachelor of Technology at Galgotias University (Class of 2028), evolving into a multifaceted developer who pairs solid system logic with creative design excellence.",
    cards: [
      { title: "3+", subtitle: "Projects Built" },
      { title: "5+", subtitle: "Video Productions" },
      { title: "4+", subtitle: "Brand Logos Designed" },
      { title: "2028", subtitle: "B.Tech Target" },
    ],
  },

  socials: {
    github: {
      username: "PrashantRanjan-2006",
      url: "https://github.com/PrashantRanjan-2006",
    },
    linkedin: {
      url: "https://www.linkedin.com/in/prashant-ranjan-a39077330/",
    },
    instagram: {
      url: "https://www.instagram.com/prashant_ranjan5916?utm_source=qr&igsh=MW5mZWhuYnR1bmZpNA==",
    },
    codolio: {
      username: "Prashantranjan",
      url: "https://codolio.com/profile/Prashantranjan",
    },
    leetcode: {
      username: "Prashantranjan5916",
      url: "https://leetcode.com/u/Prashantranjan5916/",
    },
    codeforces: { username: "", url: "" },
    codechef: { username: "", url: "" },
    twitter: "https://x.com/prashant5916",
    youtube: "",
    portfolio: "https://my-portfolio-weld-two-13.vercel.app/",
  },

  navigation: [
    { title: "About", href: "#about" },
    { title: "Projects", href: "#projects" },
    { title: "Tech Stack", href: "#tech" },
    { title: "Contact", href: "#contact" },
  ],

  github: {
    username: "PrashantRanjan-2006",
    profile: "https://github.com/PrashantRanjan-2006",
    fetchStats: true,
    fetchHeatmap: true,
    fetchLanguages: true,
    fetchPinnedRepositories: true,
    fetchRecentActivity: true,
    fetchContributionGraph: true,
  },

  leetcode: {
    username: "Prashantranjan5916",
    profile: "https://leetcode.com/u/Prashantranjan5916/",
    fetchHeatmap: true,
    fetchContestHistory: true,
    fetchBadges: true,
    fetchRecentSubmissions: true,
    fetchSolvedStats: true,
  },

  codolio: {
    profile: "https://codolio.com/profile/Prashantranjan",
    questionsSolved: 205,
    activeDays: 100,
    contestsAttended: 8,
    rating: 1544,
    globalRank: 16184,
    fundamentals: 17,
    dsa: 180,
    competitiveProgramming: 8,
  },

  problemSolving: {
    totalSolved: 0,
    codingDays: 0,
    contestsParticipated: 0,
    leetcode: {
      maxRating: "--",
      profile: "https://leetcode.com/u/Prashantranjan5916/",
    },
    codeforces: { maxRating: "--", rank: "--", profile: "" },
    codechef: { maxRating: "--", bestGlobalRank: "--", profile: "" },
  },

  achievements: [] as Array<{
    title: string;
    organization: string;
    year: string;
    description: string;
    certificate?: string;
    image?: string;
  }>,

  featuredProjects: [
    {
      id: "library-management-system",
      featured: true,
      order: 1,
      title: "Library Management System",
      shortTitle: "Library Management",
      category: "Core Java & OOP",
      status: "Completed",
      year: "2024",
      image: "/assets/profile/avatar-formal.jpg",
      github:
        "https://github.com/PrashantRanjan-2006/Library-Management-System",
      live: "",
      demoVideo: "",
      summary:
        "A robust Java architecture featuring add, update, delete, search, and inventory management operations with strict OOP principles, modular error handling, and persistent file I/O storage.",
      problem: "Managing a library requires reliable inventory and search operations.",
      solution:
        "Built a modular console application with object-oriented domain logic and persistent file storage.",
      techStack: ["Core Java", "OOP Design", "File I/O", "Console Architecture"],
      highlights: ["CRUD operations", "Inventory management", "Persistent storage"],
      architecture: ["Domain model", "Service operations", "File storage"],
      learnings: ["Object-oriented design", "File I/O", "Error handling"],
      gallery: ["/assets/profile/avatar-formal.jpg"],
      caseStudy: {
        whatItSolves: "Provides dependable library inventory management.",
        whatIBuilt: "Search, CRUD, inventory, and persistent file operations.",
        howIBuiltIt: "Built with Core Java, OOP principles, and file I/O.",
      },
    },
    {
      id: "smart-healthcare-system",
      featured: true,
      order: 2,
      title: "Smart Healthcare System",
      shortTitle: "Smart Healthcare",
      category: "Full-Stack Web",
      status: "Completed",
      year: "2025",
      image: "/assets/profile/nature-cover.jpg",
      github: "https://github.com/PrashantRanjan-2006/Health-care-system",
      live: "https://flourishing-flan-46b69d.netlify.app/",
      demoVideo: "",
      summary:
        "A healthcare platform connecting patients with nearby practitioners and medical facilities through geolocation search, provider listings, appointment tracking, and real-time mapping.",
      problem: "Finding nearby healthcare providers and facilities can be difficult.",
      solution:
        "Created a responsive web experience with geolocation-based provider discovery and map interactions.",
      techStack: ["React.js", "Maps API", "Geolocation", "Responsive UI"],
      highlights: ["Provider listings", "Appointment tracking", "Real-time mapping"],
      architecture: ["React interface", "Maps integration", "Location services"],
      learnings: ["React components", "Maps APIs", "Responsive UI"],
      gallery: ["/assets/profile/nature-cover.jpg"],
      caseStudy: {
        whatItSolves: "Helps users find nearby healthcare services.",
        whatIBuilt: "Provider search, maps, geolocation, and appointment tracking.",
        howIBuiltIt: "Built with React.js, Maps API, and responsive layouts.",
      },
    },
    {
      id: "ecommerce-shopkart",
      featured: true,
      order: 3,
      title: "E-Commerce Shopkart",
      shortTitle: "Shopkart",
      category: "E-Commerce Web",
      status: "Completed",
      year: "2025",
      image: "/assets/profile/video-creator.jpg",
      github:
        "https://github.com/PrashantRanjan-2006/E-commerce-shopkart.git",
      live: "https://shopkkart.netlify.app/",
      demoVideo: "",
      summary:
        "A complete storefront with dynamic cart state, product filtering, category browsing, and an optimized checkout flow built with modern JavaScript and responsive layouts.",
      problem: "Online stores need clear browsing and reliable cart interactions.",
      solution:
        "Built a responsive storefront with client-side product discovery and shopping cart state.",
      techStack: ["JavaScript", "Cart State", "Tailwind", "Web Store"],
      highlights: ["Product filtering", "Category browsing", "Cart state"],
      architecture: ["Product catalog", "Cart state", "Checkout flow"],
      learnings: ["Modern JavaScript", "State management", "Responsive design"],
      gallery: ["/assets/profile/video-creator.jpg"],
      caseStudy: {
        whatItSolves: "Provides a smooth shopping and product discovery experience.",
        whatIBuilt: "Catalog browsing, filtering, cart state, and checkout flow.",
        howIBuiltIt: "Built with JavaScript, Tailwind, and responsive layouts.",
      },
    },
    {
      id: "weather-forecasting-app",
      featured: true,
      order: 4,
      title: "Weather Forecasting App",
      shortTitle: "Weather Forecasting",
      category: "JavaScript",
      status: "Completed",
      year: "2026",
      image: "/assets/profile/nature-cover.jpg",
      github: "https://github.com/PrashantRanjan-2006/Weather_forcasting_app",
      live: "",
      demoVideo: "",
      summary:
        "A JavaScript weather application for checking current weather information through a focused, easy-to-use interface.",
      problem: "Users need a quick way to check current weather conditions.",
      solution: "Created a lightweight browser-based weather lookup experience.",
      techStack: ["JavaScript", "HTML", "CSS"],
      highlights: ["Weather lookup", "Responsive interface", "Browser-based experience"],
      architecture: ["Weather interface", "API data flow"],
      learnings: ["JavaScript", "API integration", "Frontend presentation"],
      gallery: ["/assets/profile/nature-cover.jpg"],
      caseStudy: {
        whatItSolves: "Makes weather information easy to access.",
        whatIBuilt: "A focused weather lookup interface.",
        howIBuiltIt: "Built with JavaScript, HTML, and CSS.",
      },
    },
    {
      id: "snake-game",
      featured: true,
      order: 5,
      title: "Snake Game",
      shortTitle: "Snake Game",
      category: "Python",
      status: "Completed",
      year: "2026",
      image: "/assets/profile/video-creator.jpg",
      github: "https://github.com/PrashantRanjan-2006/Snake-game",
      live: "",
      demoVideo: "",
      summary:
        "A Python implementation of the classic Snake game, focused on interactive gameplay and core programming logic.",
      problem: "Build an engaging game while practicing programming fundamentals.",
      solution: "Implemented the classic Snake gameplay loop in Python.",
      techStack: ["Python", "Game Logic"],
      highlights: ["Interactive gameplay", "Game loop", "Collision logic"],
      architecture: ["Input handling", "Game state", "Rendering"],
      learnings: ["Python programming", "State management", "Interactive logic"],
      gallery: ["/assets/profile/video-creator.jpg"],
      caseStudy: {
        whatItSolves: "Provides a playable implementation of a classic game.",
        whatIBuilt: "Snake movement, gameplay state, and scoring logic.",
        howIBuiltIt: "Built with Python and core game programming concepts.",
      },
    },
    {
      id: "tic-tac-toe",
      featured: true,
      order: 6,
      title: "Tic-Tac-Toe",
      shortTitle: "Tic-Tac-Toe",
      category: "JavaScript",
      status: "Completed",
      year: "2026",
      image: "/assets/profile/avatar-stylish.jpg",
      github: "https://github.com/PrashantRanjan-2006/Tic--Tac-Toe",
      live: "",
      demoVideo: "",
      summary:
        "A browser-based Tic-Tac-Toe game built with JavaScript and a responsive interface.",
      problem: "Create a simple interactive game with clear browser controls.",
      solution: "Built a responsive two-player game with JavaScript state and win detection.",
      techStack: ["JavaScript", "HTML", "CSS"],
      highlights: ["Two-player gameplay", "Win detection", "Responsive UI"],
      architecture: ["Game state", "Board interaction", "Result handling"],
      learnings: ["JavaScript state", "DOM interaction", "Game logic"],
      gallery: ["/assets/profile/avatar-stylish.jpg"],
      caseStudy: {
        whatItSolves: "Provides a simple playable board game in the browser.",
        whatIBuilt: "Board interactions, turn state, and win detection.",
        howIBuiltIt: "Built with JavaScript, HTML, and CSS.",
      },
    },
  ],

  skills: {
    languages: ["Core Java", "Python", "JavaScript", "HTML5", "CSS3"],
    frontend: ["React.js", "Modern JavaScript & ES6+", "HTML5 & CSS3", "Tailwind CSS"],
    backend: ["REST APIs", "Cloud Integrations", "OOP Design", "File I/O"],
    databases: ["MySQL", "Relational Databases", "Database Indexing"],
    cloud: ["Cloud Integrations"],
    devops: ["Git", "GitHub"],
    systems: ["Data Structures", "System Architecture"],
    ai: [],
    fundamentals: ["Algorithms", "OOP", "Data Structures"],
  },

  education: {
    college: "Galgotias University",
    degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
    location: "India",
    duration: "2024 - September 2028",
  },

  contact: {
    email: "prashantranjan20192006@gmail.com",
    phone: "",
    location: "India",
    availability:
      "Available for software roles, internships, logo commissions, and creative collaborations.",
  },

  seo: {
    title: "Prashant Ranjan | Java Full-Stack Developer",
    description:
      "Personal portfolio of Prashant Ranjan, a Java full-stack developer, designer, and content creator.",
    keywords: [
      "Prashant Ranjan",
      "Java Full-Stack Developer",
      "React",
      "Core Java",
      "Logo Designer",
      "Video Editor",
      "Galgotias University",
    ],
    author: "Prashant Ranjan",
    ogImage: "/assets/profile/avatar-formal.jpg",
  },

  theme: {
    accent: "#5B5CF6",
    borderRadius: "18px",
    font: "Inter",
    enableAnimations: true,
    enableNekoCursor: true,
    enableScrollProgress: true,
    enableSmoothScroll: true,
    darkMode: false,
  },

  features: {
    github: true,
    leetcode: false,
    projects: true,
    achievements: true,
    contactForm: true,
    blog: false,
    testimonials: false,
    analytics: false,
  },

  footer: {
    text: "Designed & Developed by Prashant Ranjan",
    showSocials: true,
    showBackToTop: true,
  },
};
