/**
 * ==============================================================================
 * PROJECT SHOWCASE CONFIGURATION - EDIT YOUR PROJECTS HERE
 * ==============================================================================
 * Hi Chris! Each project in your showcase is defined here with all its details.
 * 
 * To add a new project, simply copy one of the objects below and adjust the properties.
 * If you don't have a live demo or GitHub URL yet, keep the property as null or ""
 * and the card will cleanly show an appropriate status badge ("Demo in Progress", "In Development").
 */

export const projects = [
  {
    id: "memory-password-game",
    title: "Memory Password Game",
    category: "Web Application / Game",
    tagline: "Interactive cognitive challenge testing short-term pattern and password recall.",
    shortDescription:
      "A browser-based password memory game featuring progressive levels, brief password exposure, timed recall phases, active scoring, and high-score retention.",
    fullDescription:
      "Memory Password Game is an engaging interactive web application designed to challenge and strengthen cognitive recall of randomized password strings. Players are presented with security credentials for a restricted duration, after which they must accurately replicate them under timed constraints. The project demonstrates practical DOM manipulation, event listeners, timer handling, and dynamic score calculation.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    implementedFeatures: [
      "Progressive difficulty tiers with increasing string complexity and length",
      "Short-term dynamic password reveal with automated countdown timer",
      "Real-time validation against user input under precision timer restrictions",
      "Interactive scoring engine and session high-score persistence",
      "Crisp, responsive browser-based user interface"
    ],
    status: "Live Project", // 'Live Project' | 'In Development' | 'Early Stage'
    statusType: "live", // 'live' | 'progress' | 'concept'
    githubUrl: "https://github.com/ChrisRufuss", // Update with exact repo if separate
    liveUrl: "https://chrisrufus.github.io/MEM/",
    featured: true,
    visualType: "cyber-vault", // Generates an authentic futuristic CSS/SVG visual
  },
  {
    id: "smartbank",
    title: "SmartBank",
    category: "Desktop / Financial Application",
    tagline: "Robust desktop banking management system with transaction audit workflows.",
    shortDescription:
      "A Java banking application designed to model secure account workflows, authentication, transactional integrity, and persistent ledger records.",
    fullDescription:
      "SmartBank is a software engineering project focused on simulating core banking and financial ledger mechanisms. Built to explore reliable desktop application architectures and relational database workflows, the system is designed around customer account provisioning, role authentication, balance deposits, fund transfers, and chronological transaction tracking.",
    technologies: ["Java", "JavaFX", "MySQL"],
    implementedFeatures: [
      "Customer account creation and authentication workflows",
      "Balance queries, secure fund deposit and withdrawal operations",
      "Inter-account transfer simulation with ledger state updates",
      "Relational schema integration with MySQL for transaction persistence",
      "Structured desktop GUI layout designed with JavaFX"
    ],
    status: "In Development",
    statusType: "progress",
    githubUrl: null, // Keep null until you upload the repository
    liveUrl: null, // Desktop application - no web demo URL
    featured: true,
    visualType: "bank-ledger",
  },
  {
    id: "bizai-billing",
    title: "BizAI Billing",
    category: "Enterprise Utility / Retail Tool",
    tagline: "Streamlined invoice generation and inventory tracking utility for small businesses.",
    shortDescription:
      "A billing and inventory management tool designed to simplify everyday invoice creation, stock tracking, and sales records for retail and local shops.",
    fullDescription:
      "BizAI Billing is developed to address friction points encountered by small retail businesses in creating instant itemized invoices and keeping tally of remaining stock. It provides structured item records, automated price and tax computation, clean invoice rendering, and real-time stock deductions upon billing.",
    technologies: ["Java", "MySQL", "Desktop / Web Interface (In Progress)"],
    implementedFeatures: [
      "Catalog management for products, unit prices, and stock counts",
      "Real-time automated line-item calculation with tax breakdowns",
      "Printable invoice generation layout for retail counter billing",
      "Low-inventory warning triggers and stock replenishment logs"
    ],
    status: "In Development",
    statusType: "progress",
    githubUrl: null, // Configurable placeholder
    liveUrl: null,
    featured: true,
    visualType: "billing-system",
  },
  {
    id: "court-case-analysis",
    title: "COURT — Case File Analysis",
    category: "Information Processing & Research Utility",
    tagline: "Structured dossier organizer and document analysis concept for case files.",
    shortDescription:
      "An exploratory tool designed to help researchers organize, inspect, and extract key timeline points and structured notes from case files.",
    fullDescription:
      "Court Case File Analysis is an early-stage software concept addressing the cognitive overload of reviewing multi-page case documentation and complex record files. The system focuses on structured tagging, chronologically indexing key statements, cross-referencing exhibits, and providing an intuitive dossier interface for case preparation. (Early-stage exploratory project; does not provide legal advice or automated legal interpretations).",
    technologies: ["Python", "Relational Database", "Document Parser (Planned)"],
    implementedFeatures: [
      "Case file metadata categorization (date, case ID, jurisdiction, participants)",
      "Chronological timeline mapper for case statements and key events",
      "Exhibit reference tagging and structured notes workspace",
      "Clean research dossier view for rapid document navigation"
    ],
    status: "Concept & Early Architecture",
    statusType: "concept",
    githubUrl: null,
    liveUrl: null,
    featured: false,
    visualType: "case-dossier",
  },
];
