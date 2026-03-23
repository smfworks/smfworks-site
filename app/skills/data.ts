// Skills data shared between main page and detail pages

export interface Skill {
  slug: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  tier: "free" | "pro";
  num: number;
  features: string[];
  useCases: string[];
  howToUse: string[];
}

export const freeSkills: Skill[] = [
  {
    slug: "file-organizer",
    name: "File Organizer",
    shortDesc: "Organize files by date, type, find duplicates",
    fullDesc: "Automatically organize your files with intelligent sorting rules. Group files by creation date, file type, or custom patterns. Find and remove duplicate files to free up disk space. Create consistent folder structures with a single command.",
    tier: "free",
    num: 1,
    features: [
      "Sort files by date, type, or extension",
      "Detect and list duplicate files",
      "Bulk rename with pattern support",
      "Create date-based folder structures",
      "Smart file categorization"
    ],
    useCases: [
      "Clean up cluttered Downloads folders",
      "Organize photos by date taken",
      "Archive old project files",
      "Consolidate scattered documents"
    ],
    howToUse: [
      "python main.py organize ~/Downloads",
      "python main.py organize ~/Downloads --by type",
      "python main.py organize ~/Downloads --dry-run",
      "python main.py rules"
    ]
  },
  {
    slug: "pdf-toolkit",
    name: "PDF Toolkit",
    shortDesc: "Merge, split, extract, compress, rotate PDFs",
    fullDesc: "A comprehensive PDF manipulation toolkit for everyday document needs. Merge multiple PDFs into one, split large documents into chapters, extract specific pages, compress files for email, and rotate pages to the correct orientation.",
    tier: "free",
    num: 2,
    features: [
      "Merge multiple PDFs into one",
      "Split PDFs by page range or bookmarks",
      "Extract text and images from PDFs",
      "Compress PDFs for smaller file sizes",
      "Rotate individual pages or entire documents"
    ],
    useCases: [
      "Combine scanned documents into one file",
      "Extract specific chapters from reports",
      "Compress large PDFs for email attachments",
      "Fix orientation on scanned documents"
    ],
    howToUse: [
      "python main.py merge output.pdf input1.pdf input2.pdf",
      "python main.py split big.pdf ./pages/",
      "python main.py extract report.pdf 1 5 extracted.pdf",
      "python main.py info document.pdf"
    ]
  },
  {
    slug: "text-formatter",
    name: "Text Formatter",
    shortDesc: "Case conversion, word count, clean whitespace",
    fullDesc: "Clean and format text data with powerful transformation tools. Convert between different case styles (camelCase, snake_case, PascalCase), count words and characters, remove extra whitespace, and standardize text formatting for any use case.",
    tier: "free",
    num: 3,
    features: [
      "Convert between case formats",
      "Word and character counting",
      "Remove extra whitespace and line breaks",
      "Find and replace with regex support",
      "Format JSON and code snippets"
    ],
    useCases: [
      "Standardize variable names in code",
      "Clean up copied text from PDFs",
      "Prepare text for social media posts",
      "Format data for import into databases"
    ],
    howToUse: [
      "python main.py case upper \"hello world\"",
      "python main.py case camel \"hello world\"",
      "python main.py clean --aggressive < messy.txt",
      "python main.py count < document.txt"
    ]
  },
  {
    slug: "qr-generator",
    name: "QR Generator",
    shortDesc: "Generate QR codes for URLs, WiFi, vCard, email",
    fullDesc: "Create custom QR codes for any purpose. Generate codes that link to websites, share WiFi credentials automatically, create digital business cards with vCard format, pre-fill email messages, and customize the appearance to match your brand.",
    tier: "free",
    num: 4,
    features: [
      "URL QR codes for websites",
      "WiFi QR codes with automatic connection",
      "vCard QR codes for contact sharing",
      "Email QR codes with pre-filled content",
      "Customizable colors and size"
    ],
    useCases: [
      "Create signage with contactless menu links",
      "Share WiFi credentials with guests",
      "Generate business card alternatives",
      "Add QR codes to printed materials"
    ],
    howToUse: [
      "python main.py url https://smf.works",
      "python main.py wifi \"MyNetwork\" \"password123\"",
      "python main.py vcard \"John Doe\" \"+1234567890\"",
      "python main.py email hello@example.com"
    ]
  },
  {
    slug: "system-monitor",
    name: "System Monitor",
    shortDesc: "Monitor disk, memory, CPU, find large files",
    fullDesc: "Keep track of your system resources and storage usage. Monitor CPU and memory usage in real-time, check disk space across all drives, identify large files consuming storage, and get alerts when resources run low.",
    tier: "free",
    num: 5,
    features: [
      "Real-time CPU and memory monitoring",
      "Disk usage tracking across drives",
      "Identify largest files and folders",
      "Process monitoring and management",
      "System health reports"
    ],
    useCases: [
      "Find what's consuming disk space",
      "Monitor system performance during heavy tasks",
      "Identify memory-hungry applications",
      "Plan storage cleanup efficiently"
    ],
    howToUse: [
      "python main.py health",
      "python main.py disk",
      "python main.py memory",
      "python main.py large-files ~/Downloads 20"
    ]
  },
  {
    slug: "website-checker",
    name: "Website Checker",
    shortDesc: "Check site status, SSL certificates, response time",
    fullDesc: "Monitor website health and performance metrics. Check if sites are online and responding, verify SSL certificate validity and expiration dates, measure response times, and detect common configuration issues that affect accessibility.",
    tier: "free",
    num: 6,
    features: [
      "HTTP status code checking",
      "SSL certificate validation",
      "Response time measurement",
      "DNS resolution checking",
      "Redirect chain analysis"
    ],
    useCases: [
      "Verify your website is online",
      "Check SSL certificate expiration dates",
      "Monitor competitor site uptime",
      "Debug website accessibility issues"
    ],
    howToUse: [
      "python main.py check https://example.com",
      "python main.py check https://example.com --timeout 30",
      "python main.py ssl smf.works",
      "python main.py bulk https://google.com https://github.com"
    ]
  },
  {
    slug: "csv-converter",
    name: "CSV Converter",
    shortDesc: "Convert between CSV, JSON, Excel formats",
    fullDesc: "Seamlessly convert between popular data formats. Transform CSV files to JSON for APIs, convert Excel spreadsheets to CSV for processing, standardize delimiters and encoding, and validate data integrity during conversion.",
    tier: "free",
    num: 7,
    features: [
      "CSV to JSON conversion",
      "Excel/CSV interchange",
      "Delimiter and encoding options",
      "Data validation during conversion",
      "Batch file processing"
    ],
    useCases: [
      "Prepare data for API consumption",
      "Migrate between spreadsheet applications",
      "Standardize data exports from different systems",
      "Convert database exports for analysis"
    ],
    howToUse: [
      "python main.py convert data.csv data.json",
      "python main.py convert data.json data.csv",
      "python main.py validate customers.csv",
      "python main.py stats sales.csv"
    ]
  },
  {
    slug: "image-resizer",
    name: "Image Resizer",
    shortDesc: "Resize, compress, convert, batch process images",
    fullDesc: "Process images efficiently with batch operations. Resize images to specific dimensions or percentages, compress files for web use, convert between formats (PNG, JPG, WebP), and apply watermarks or basic edits to multiple images at once.",
    tier: "free",
    num: 8,
    features: [
      "Batch resize with custom dimensions",
      "Format conversion (PNG, JPG, WebP)",
      "Quality compression for web optimization",
      "Maintain aspect ratio or crop to fit",
      "Add watermarks to multiple images"
    ],
    useCases: [
      "Prepare images for website upload",
      "Create thumbnails for galleries",
      "Convert screenshots to web-friendly formats",
      "Batch process product photos"
    ],
    howToUse: [
      "python main.py resize photo.jpg --width 800 --output small.jpg",
      "python main.py resize photo.jpg --height 150 --output thumb.jpg",
      "python main.py batch ~/Photos/*.jpg --width 1200 --output ~/Small/",
      "python main.py info image.jpg"
    ]
  },
  {
    slug: "password-generator",
    name: "Password Generator",
    shortDesc: "Strong passwords, passphrases, strength check",
    fullDesc: "Generate secure credentials and evaluate password strength. Create cryptographically strong passwords with customizable length and character sets, generate memorable passphrases from word lists, and check existing passwords against common vulnerability patterns.",
    tier: "free",
    num: 9,
    features: [
      "Cryptographically secure random passwords",
      "Memorable passphrase generation",
      "Password strength analysis",
      "Customizable character requirements",
      "Exclude ambiguous characters"
    ],
    useCases: [
      "Create unique passwords for new accounts",
      "Generate secure API keys",
      "Evaluate strength of existing passwords",
      "Create WiFi passwords guests can remember"
    ],
    howToUse: [
      "python main.py password",
      "python main.py password 24",
      "python main.py passphrase",
      "python main.py check \"MyPassword123!\""
    ]
  },
  {
    slug: "markdown-converter",
    name: "Markdown Converter",
    shortDesc: "Convert Markdown to HTML, text, extract TOC",
    fullDesc: "Transform Markdown documents into various output formats. Convert to clean HTML for web publishing, generate plain text versions for email, extract table of contents automatically, and validate Markdown syntax for compatibility.",
    tier: "free",
    num: 10,
    features: [
      "Convert Markdown to clean HTML",
      "Extract plain text from Markdown",
      "Auto-generate table of contents",
      "Syntax validation and error checking",
      "Support for GitHub-flavored Markdown"
    ],
    useCases: [
      "Convert README files for web display",
      "Prepare documentation for email",
      "Generate TOCs for long documents",
      "Validate Markdown before publishing"
    ],
    howToUse: [
      "python main.py to-html README.md",
      "python main.py to-text article.md",
      "python main.py toc documentation.md",
      "python main.py stats article.md"
    ]
  },
  {
    slug: "daily-news-digest",
    name: "Daily News Digest",
    shortDesc: "Get curated news delivered daily — personalized to your interests",
    fullDesc: "Start your day informed with a personalized news digest. Choose your favorite categories (business, technology, science, health, sports, entertainment) and get top headlines delivered automatically. Requires your own free NewsAPI key from newsapi.org.",
    tier: "free",
    num: 11,
    features: [
      "Choose from 7 news categories",
      "Set your country for local headlines",
      "Configure articles per category",
      "Clean, formatted output for messaging",
      "Schedule daily delivery via cron"
    ],
    useCases: [
      "Morning briefing with business and tech news",
      "Stay informed without doom-scrolling",
      "Weekly industry news summary",
      "Quick catch-up on current events"
    ],
    howToUse: [
      "python main.py digest",
      "python main.py digest --category technology",
      "python main.py digest --sources \"BBC,CNN\" --limit 5",
      "python main.py search \"AI\""
    ]
  },
  {
    slug: "webcam-capture",
    name: "Webcam Capture",
    shortDesc: "Capture photos and videos from your webcam — let the AI see what you see",
    fullDesc: "Give your AI assistant eyes. Capture photos and short videos from any connected webcam on demand. Hold something up to the camera — a whiteboard, document, product, or workspace — and ask the AI to analyze it. The camera light always blinks on capture, so you'll always know when it's active.",
    tier: "free",
    num: 13,
    features: [
      "Capture still photos from any connected webcam",
      "Record short video clips (up to any duration)",
      "Works with built-in, USB, or IP cameras",
      "Privacy: camera light always blinks on capture",
      "Specify which camera to use (for multi-camera setups)",
      "Analyze captured images with AI vision models"
    ],
    useCases: [
      "Show the AI a whiteboard or diagram to explain",
      "Document your physical workspace or desk setup",
      "Capture receipts, documents, or products for records",
      "Have AI analyze something you're holding up to the camera",
      "Record a quick video of a demo or process"
    ],
    howToUse: [
      '"Take a photo with the webcam"',
      '"Analyze what I\'m showing you on the camera"',
      '"Record a 10-second video clip"',
      '"Use the second camera to take a photo"'
    ]
  },
  {
    slug: "skill-manager",
    name: "Skill Manager",
    shortDesc: "Visual tool for managing installed OpenClaw skills",
    fullDesc: "Interactive terminal UI to view, backup, and cleanly remove installed SMF Skills. Perfect for testing skills on a machine and cleaning up when done. Shows skill details, disk usage, tier (Free/Pro), and allows batch operations with safety confirmations.",
    tier: "free",
    num: 12,
    features: [
      "Visual table of all installed skills",
      "Checkbox selection for batch operations",
      "One-click backup before removal",
      "Clean removal of files + config + wrapper",
      "Safety warnings for Pro skills",
      "Works with or without 'rich' library"
    ],
    useCases: [
      "Test skills and clean up afterward",
      "Reclaim disk space from unused skills",
      "Backup skills before migration",
      "Manage skill subscriptions"
    ],
    howToUse: [
      "smf run skill-manager",
      "smf run skill-manager --list",
      "smf run skill-manager --remove coffee-briefing",
      "smf run skill-manager --backup some-skill"
    ]
  }
];

export const proSkills: Skill[] = [
  {
    slug: "lead-capture",
    name: "Lead Capture",
    shortDesc: "Capture, qualify, and manage sales leads",
    fullDesc: "A complete lead management system for growing businesses. Capture leads from multiple sources, automatically qualify prospects based on custom criteria, track interactions and follow-ups, and integrate with your CRM or email marketing tools for seamless sales workflows.",
    tier: "pro",
    num: 13,
    features: [
      "Multi-source lead capture",
      "Automated lead scoring and qualification",
      "Follow-up reminders and task management",
      "CRM integration support",
      "Lead source attribution tracking"
    ],
    useCases: [
      "Capture leads from website contact forms",
      "Qualify prospects automatically",
      "Track follow-up activities",
      "Manage sales pipeline efficiently"
    ],
    howToUse: [
      "python main.py capture --name \"Jane Doe\" --email \"jane@company.com\"",
      "python main.py list",
      "python main.py export --format csv --output leads.csv",
      "python main.py search \"enterprise\""
    ]
  },
  {
    slug: "coffee-briefing",
    name: "Coffee Briefing",
    shortDesc: "Your personal morning briefing with weather and priorities",
    fullDesc: "Start your day informed with a personalized morning briefing. Get current weather conditions from OpenWeatherMap, your top 3 priorities from file or auto-generated, and optional calendar integration. Perfect for your 7 AM routine.",
    tier: "pro",
    num: 14,
    features: [
      "Current weather and conditions",
      "OpenWeatherMap integration",
      "Top 3 priorities (file or auto)",
      "Beautiful formatted output",
      "Schedule daily at 7am"
    ],
    useCases: [
      "Morning briefing before starting work",
      "Daily weather and priority overview",
      "Quick planning for the day ahead",
      "Personal daily digest"
    ],
    howToUse: [
      "python main.py briefing",
      "python main.py briefing 2026-03-25",
      "python main.py add \"Review Q1 report\"",
      "python main.py weather"
    ]
  },
  {
    slug: "morning-commute",
    name: "Morning Commute",
    shortDesc: "Your daily commute briefing with traffic, transit, and weather",
    fullDesc: "Plan your commute with real-time traffic estimates, current weather at your location, and departure time alerts. Uses free OSRM routing with optional Google Maps API for accurate traffic. Configure your home and work addresses for personalized route planning.",
    tier: "pro",
    num: 15,
    features: [
      "Route calculation with traffic estimates",
      "OpenStreetMap geocoding (free)",
      "OSRM routing (free)",
      "Optional: OpenWeatherMap for weather",
      "Optional: Google Maps for accurate traffic",
      "Departure time alerts"
    ],
    useCases: [
      "Daily commute planning",
      "Traffic delay warnings",
      "Weather-aware departure times",
      "Weekday morning routine"
    ],
    howToUse: [
      "python main.py commute",
      "python main.py commute --home \"New York\" --work \"Boston\"",
      "python main.py traffic",
      "python main.py weather"
    ]
  },
  {
    slug: "openclaw-backup",
    name: "OpenClaw Backup",
    shortDesc: "Daily backup of your OpenClaw agent with 2-day rolling retention",
    fullDesc: "Automatically backup your OpenClaw workspace, memory, and configuration daily. Maintains a rolling 2-day history with simple one-command restore. Fully local operation - no external APIs required.",
    tier: "pro",
    num: 16,
    features: [
      "Daily automated backups",
      "2-day rolling retention",
      "Compressed tar.gz archives",
      "One-command restore",
      "No external APIs - fully local",
      "Configurable paths and exclusions"
    ],
    useCases: [
      "Protect OpenClaw configuration",
      "Recover from data loss",
      "Migrate to new machine",
      "Maintain backup history"
    ],
    howToUse: [
      "python main.py backup",
      "python main.py backup --dest ~/Backups",
      "python main.py list",
      "python main.py restore OPENCLAW-20260320-143052"
    ]
  },
  {
    slug: "claw-system-backup",
    name: "Claw System Backup",
    shortDesc: "Weekly full Linux system backup with compression and verification",
    fullDesc: "Create compressed archives of your Linux system. Supports full system, incremental, or home-directory-only backups. Requires root access for full system backup. Automatic integrity verification and retention management.",
    tier: "pro",
    num: 17,
    features: [
      "Full system, incremental, or home-only backups",
      "Compressed archives (gzip/bzip2/xz)",
      "Automatic integrity verification",
      "2-week rolling retention",
      "Requires root for full system backup",
      "No external APIs - fully local"
    ],
    useCases: [
      "Weekly system protection",
      "Complete disaster recovery",
      "Migrate to new hardware",
      "System configuration backup"
    ],
    howToUse: [
      "python main.py backup",
      "python main.py backup --dest ~/Backups",
      "python main.py list",
      "python main.py restore BACKUP-20260320-143052"
    ]
  },
  {
    slug: "database-backup",
    name: "Database Backup",
    shortDesc: "Backup SQLite, PostgreSQL, MySQL with compression",
    fullDesc: "Automated database backup solution supporting multiple database types. Schedule regular backups of SQLite, PostgreSQL, and MySQL databases, compress backups to save storage space, encrypt sensitive data, and restore from backup points when needed.",
    tier: "pro",
    num: 18,
    features: [
      "Support for SQLite, PostgreSQL, MySQL",
      "Scheduled automated backups",
      "Compression to reduce storage needs",
      "Encryption for sensitive data",
      "Point-in-time recovery options"
    ],
    useCases: [
      "Schedule daily backups of application databases",
      "Archive old data before migrations",
      "Create development snapshots",
      "Comply with data retention policies"
    ],
    howToUse: [
      "smf run database-backup backup",
      "smf run database-backup list",
      "smf run database-backup restore ~/backups/myapp-20260320.sqlite.sql.gz",
      "smf run database-backup cleanup 30"
    ]
  },
  {
    slug: "report-generator",
    name: "Report Generator",
    shortDesc: "Create business reports from CSV/JSON data",
    fullDesc: "Transform raw data into professional business reports. Import data from CSV or JSON files, apply filters and aggregations, generate charts and visualizations, and export polished PDF or HTML reports ready for stakeholders.",
    tier: "pro",
    num: 19,
    features: [
      "Import CSV and JSON data sources",
      "Custom report templates",
      "Chart and graph generation",
      "Scheduled report delivery",
      "Export to PDF and HTML formats"
    ],
    useCases: [
      "Generate weekly sales reports",
      "Create performance dashboards",
      "Automate monthly summaries",
      "Build client-facing reports"
    ],
    howToUse: [
      "smf run report-generator create --sample sales",
      "smf run report-generator create --data sales.csv --title \"Q1 Report\"",
      "smf run report-generator create --data data.json --format text",
      "smf run report-generator templates"
    ]
  },
  {
    slug: "email-campaign",
    name: "Email Campaign",
    shortDesc: "Create and send email campaigns with tracking",
    fullDesc: "Full-featured email marketing automation. Design email templates with personalization fields, manage subscriber lists and segments, schedule campaign sends, and track open rates, click rates, and conversions to optimize performance.",
    tier: "pro",
    num: 20,
    features: [
      "Template-based email creation",
      "List management and segmentation",
      "Scheduled and drip campaigns",
      "Open and click tracking",
      "A/B testing capabilities"
    ],
    useCases: [
      "Send newsletters to customers",
      "Automate welcome email sequences",
      "Run promotional campaigns",
      "Nurture leads through email"
    ],
    howToUse: [
      "python main.py send --list contacts.csv --template newsletter.html",
      "python main.py preview --template newsletter.html",
      "python main.py validate --list contacts.csv",
      "python main.py schedule --template template.html --list contacts.csv --time \"2026-03-25 10:00\""
    ]
  },
  {
    slug: "task-manager",
    name: "Task Manager",
    shortDesc: "Kanban project management with deadlines",
    fullDesc: "Visual project management using Kanban methodology. Organize tasks into customizable boards and columns, set deadlines and priorities, assign team members, track progress through workflows, and generate reports on completion rates.",
    tier: "pro",
    num: 21,
    features: [
      "Kanban boards with customizable columns",
      "Task assignments and deadlines",
      "Priority levels and tags",
      "Progress tracking and burndown charts",
      "Team collaboration features"
    ],
    useCases: [
      "Manage software development sprints",
      "Track content production workflows",
      "Coordinate marketing campaigns",
      "Organize client projects"
    ],
    howToUse: [
      "smf run task-manager project add \"Website Redesign\"",
      "smf run task-manager task add \"Fix navigation\" --project \"Website\" --priority high",
      "smf run task-manager board",
      "smf run task-manager task move TASK-ABC123 --to done"
    ]
  },
  {
    slug: "self-improvement",
    name: "Self-Improvement",
    shortDesc: "Log errors and learnings for continuous improvement",
    fullDesc: "Build a personal knowledge base of mistakes and lessons learned. Log errors with context and root causes, document solutions for future reference, track patterns in recurring issues, and generate insights for process improvement.",
    tier: "pro",
    num: 22,
    features: [
      "Error logging with context capture",
      "Solution documentation",
      "Pattern analysis and trend detection",
      "Searchable knowledge base",
      "Integration with development workflows"
    ],
    useCases: [
      "Document debugging sessions",
      "Build team runbooks",
      "Track recurring issues",
      "Create onboarding resources"
    ],
    howToUse: [
      "smf run self-improvement log-error \"File not found\" --context \"Reading config\"",
      "smf run self-improvement log-learning \"Always check file exists first\"",
      "smf run self-improvement list",
      "smf run self-improvement search \"json\""
    ]
  },
  {
    slug: "invoice-generator",
    name: "Invoice Generator",
    shortDesc: "Create professional invoices, track payments",
    fullDesc: "Streamlined invoicing for freelancers and small businesses. Generate professional PDF invoices with custom branding, track payment status, send automated reminders for overdue invoices, and export data for accounting software.",
    tier: "pro",
    num: 23,
    features: [
      "Professional PDF invoice generation",
      "Custom branding and templates",
      "Payment status tracking",
      "Automated reminder emails",
      "Multi-currency support"
    ],
    useCases: [
      "Invoice clients for services",
      "Track payment collection",
      "Generate end-of-year summaries",
      "Manage recurring billing"
    ],
    howToUse: [
      "python main.py create --client \"Acme Corp\" --items \"Consulting,150,10\"",
      "python main.py list",
      "python main.py show INV-001",
      "python main.py mark INV-001 --paid"
    ]
  },
  {
    slug: "form-builder",
    name: "Form Builder",
    shortDesc: "Create forms, collect responses, export data",
    fullDesc: "Build custom forms for any data collection need. Design forms with various field types, embed them on websites or share via links, collect responses securely, and export data to CSV or integrate with other tools via webhooks.",
    tier: "pro",
    num: 24,
    features: [
      "Drag-and-drop form builder",
      "Multiple field types and validation",
      "Response collection and management",
      "Data export to CSV/Excel",
      "Webhook integrations"
    ],
    useCases: [
      "Create contact and feedback forms",
      "Build event registration pages",
      "Collect survey responses",
      "Manage application submissions"
    ],
    howToUse: [
      "python main.py create \"Contact Form\"",
      "python main.py create \"Survey\" --fields name,email,feedback",
      "python main.py list",
      "python main.py render contact-form"
    ]
  },
  {
    slug: "booking-engine",
    name: "Booking Engine",
    shortDesc: "Appointment scheduling with availability management",
    fullDesc: "Complete appointment scheduling system. Define availability windows, allow clients to book appointments online, send automatic confirmations and reminders, sync with calendar applications, and manage cancellations and rescheduling.",
    tier: "pro",
    num: 25,
    features: [
      "Customizable availability calendars",
      "Online booking with time slot selection",
      "Automatic email confirmations",
      "Calendar sync (Google, Outlook)",
      "Buffer time and blackout date settings"
    ],
    useCases: [
      "Schedule client consultations",
      "Book service appointments",
      "Manage team meeting rooms",
      "Coordinate group sessions"
    ],
    howToUse: [
      "python main.py book \"Haircut\" \"Jane Doe\" \"2026-03-25\" \"10:00\"",
      "python main.py list 2026-03-25",
      "python main.py cancel BOOK-20260325-001",
      "python main.py availability 2026-03-25"
    ]
  },
  {
    slug: "openclaw-optimizer",
    name: "OpenClaw Optimizer",
    shortDesc: "Audit workspace for cost and performance optimization",
    fullDesc: "Comprehensive workspace analysis for OpenClaw users. Audit your current setup for cost inefficiencies, identify performance bottlenecks, recommend configuration improvements, and generate optimization reports with actionable recommendations.",
    tier: "pro",
    num: 26,
    features: [
      "Cost analysis and spending reports",
      "Performance bottleneck detection",
      "Configuration optimization suggestions",
      "Resource usage monitoring",
      "Security and compliance checks"
    ],
    useCases: [
      "Reduce unnecessary tool subscriptions",
      "Optimize workflow performance",
      "Audit security configurations",
      "Plan infrastructure scaling"
    ],
    howToUse: [
      "smf run openclaw-optimizer audit",
      "smf run openclaw-optimizer analyze --context",
      "smf run openclaw-optimizer recommend --model-routing",
      "smf run openclaw-optimizer report"
    ]
  }
];

export const allSkills = [...freeSkills, ...proSkills];

export function getSkillBySlug(slug: string): Skill | undefined {
  return allSkills.find((skill) => skill.slug === slug);
}

export function getAllSkillSlugs(): string[] {
  return allSkills.map((skill) => skill.slug);
}
