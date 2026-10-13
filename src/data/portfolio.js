/**
 * ==============================================================================
 * PORTFOLIO CONFIGURATION - EDIT YOUR DETAILS HERE
 * ==============================================================================
 * Hello Chris! This is the centralized configuration file for your portfolio.
 * You can easily update your personal information, contact links, education,
 * skills, and learning goals here without touching the UI components.
 */

export const personalInfo = {
  // Your full name as displayed on the hero and footer
  name: "Chris Rufus",
  
  // Status badge shown at the top of the Hero section
  statusBadge: "OPEN TO LEARNING & INTERNSHIP OPPORTUNITIES",
  
  // Main title / role headline
  roleHeadline: "Building ideas into digital reality.",
  
  // Secondary subheading
  roleSubhead: "Aspiring Software Engineer & Technology Explorer",
  
  // Professional introduction (True details only)
  introduction:
    "I'm a second-year Information Technology student passionate about software development, problem-solving, and building practical digital solutions. I enjoy turning ideas into working applications and continuously improving my technical skills. My long-term goal is to create useful technology products while growing as a software engineer.",

  // College & Education
  education: {
    degree: "B.Tech in Information Technology",
    institution: "M. Kumaraswamy College of Engineering",
    location: "Karur, Tamil Nadu, India",
    currentStage: "Second-Year Student (Undergraduate)",
    period: "2023 - Present",
  },

  // Career goals
  careerGoals: [
    "Secure software development internships and eventually a strong software developer role.",
    "Develop practical, production-level engineering and system design skills.",
    "Build and launch useful software products that solve real problems.",
    "Evolve into an impactful software developer and technology entrepreneur."
  ],

  // Contact details
  contact: {
    email: "chrisrufus1617@gmail.com",
    
    // Social links
    githubUrl: "https://github.com/ChrisRufuss",
    
    /**
     * LinkedIn Configuration:
     * - enabled: set to true once your LinkedIn account is accessible.
     * - url: set to your active profile URL (e.g., "https://linkedin.com/in/chrisrufus")
     */
    linkedin: {
      enabled: false, // Set to true to display the LinkedIn button
      url: "https://linkedin.com/in/",
    },
  },

  /**
   * Resume Configuration:
   * To add your resume:
   * 1. Place your resume PDF in `public/assets/resume.pdf`
   * 2. Set enabled: true below
   */
  resume: {
    enabled: false, // Set to true when you put resume.pdf into public/assets/
    filePath: "assets/resume.pdf",
    fileName: "Chris_Rufus_Resume.pdf",
  },
};

/**
 * TECHNICAL SKILLS & TOOLS
 * Categorized strictly according to your real competencies.
 * No fabricated expert badges or fake percentages.
 */
export const skillsData = {
  categories: [
    {
      id: "programming-languages",
      title: "Programming Languages",
      description: "Core languages used for problem solving, algorithmic thinking, and application logic.",
      skills: [
        { name: "Java", level: "Core Foundations", icon: "Coffee" },
        { name: "Python", level: "Foundational & Scripting", icon: "Terminal" },
        { name: "C", level: "Low-level & System Fundamentals", icon: "Cpu" },
      ],
    },
    {
      id: "web-technologies",
      title: "Web Technologies",
      description: "Frontend markup, styling, and responsive user interface development.",
      skills: [
        { name: "HTML5", level: "Semantic Markup & Accessibility", icon: "Code2" },
        { name: "CSS3", level: "Modern Layouts, Flexbox & Grid", icon: "Palette" },
      ],
    },
    {
      id: "databases",
      title: "Databases & Storage",
      description: "Relational schema design and data querying.",
      skills: [
        { name: "MySQL", level: "Relational Queries & CRUD", icon: "Database" },
      ],
    },
    {
      id: "currently-learning",
      title: "Currently Learning & Adopting",
      description: "Active technical disciplines being explored through coursework and side projects.",
      skills: [
        { name: "JavaScript", level: "ES6+, DOM Manipulation & Web Interactivity", icon: "FileCode" },
        { name: "Git & GitHub", level: "Version Control & Branching Workflows", icon: "GitBranch" },
        { name: "React", level: "Component Architecture & State Handling", icon: "Layers" },
      ],
    },
  ],
};

/**
 * LEARNING JOURNEY / MILESTONES
 * Factual academic & practical milestones, not fabricated work history.
 */
export const journeyData = [
  {
    phase: "Academic Foundation",
    title: "Enrolled in B.Tech Information Technology",
    place: "M. Kumaraswamy College of Engineering, Karur",
    description: "Built strong foundations in discrete mathematics, computer fundamentals, and programming in C and Java.",
    status: "Completed",
    period: "Year 1",
  },
  {
    phase: "Core Development & Web",
    title: "Practical Projects & Interactive Applications",
    place: "Self-driven & Coursework",
    description: "Expanded into Python, HTML, CSS, relational database modeling with MySQL, and built the live Memory Password Game.",
    status: "Current Focus",
    period: "Year 2",
  },
  {
    phase: "Software Engineering & Architecture",
    title: "Application Engineering & System Logic",
    place: "Desktop & Web Systems",
    description: "Developing SmartBank (Java banking workflow) and BizAI Billing, mastering modular code architecture and state management.",
    status: "In Progress",
    period: "Year 2",
  },
  {
    phase: "Professional Readiness",
    title: "Internships & Product Building",
    place: "Industry Preparation",
    description: "Targeting software engineering internships, open-source contributions, and launching utility tools for real-world users.",
    status: "Upcoming Goal",
    period: "Future Milestone",
  },
];

/**
 * CURRENT EXPLORATIONS
 * Easy to update as your curiosity and interests evolve.
 */
export const currentExplorations = [
  {
    title: "Full-Stack Web Architectures",
    description: "Modern component-driven interfaces, RESTful API integration, and clean client-server communication.",
  },
  {
    title: "Software System Workflows",
    description: "Role-based authentication, transactional reliability, and secure credential handling.",
  },
  {
    title: "Practical Software Entrepreneurship",
    description: "Identifying real problems faced by small businesses and students, then prototyping software utilities.",
  },
];
