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
    num: 11,
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
    ]
  },
  {
    slug: "database-backup",
    name: "Database Backup",
    shortDesc: "Backup SQLite, PostgreSQL, MySQL with compression",
    fullDesc: "Automated database backup solution supporting multiple database types. Schedule regular backups of SQLite, PostgreSQL, and MySQL databases, compress backups to save storage space, encrypt sensitive data, and restore from backup points when needed.",
    tier: "pro",
    num: 12,
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
    ]
  },
  {
    slug: "report-generator",
    name: "Report Generator",
    shortDesc: "Create business reports from CSV/JSON data",
    fullDesc: "Transform raw data into professional business reports. Import data from CSV or JSON files, apply filters and aggregations, generate charts and visualizations, and export polished PDF or HTML reports ready for stakeholders.",
    tier: "pro",
    num: 13,
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
    ]
  },
  {
    slug: "email-campaign",
    name: "Email Campaign",
    shortDesc: "Create and send email campaigns with tracking",
    fullDesc: "Full-featured email marketing automation. Design email templates with personalization fields, manage subscriber lists and segments, schedule campaign sends, and track open rates, click rates, and conversions to optimize performance.",
    tier: "pro",
    num: 14,
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
    ]
  },
  {
    slug: "task-manager",
    name: "Task Manager",
    shortDesc: "Kanban project management with deadlines",
    fullDesc: "Visual project management using Kanban methodology. Organize tasks into customizable boards and columns, set deadlines and priorities, assign team members, track progress through workflows, and generate reports on completion rates.",
    tier: "pro",
    num: 15,
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
    ]
  },
  {
    slug: "self-improvement",
    name: "Self-Improvement",
    shortDesc: "Log errors and learnings for continuous improvement",
    fullDesc: "Build a personal knowledge base of mistakes and lessons learned. Log errors with context and root causes, document solutions for future reference, track patterns in recurring issues, and generate insights for process improvement.",
    tier: "pro",
    num: 16,
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
    ]
  },
  {
    slug: "invoice-generator",
    name: "Invoice Generator",
    shortDesc: "Create professional invoices, track payments",
    fullDesc: "Streamlined invoicing for freelancers and small businesses. Generate professional PDF invoices with custom branding, track payment status, send automated reminders for overdue invoices, and export data for accounting software.",
    tier: "pro",
    num: 17,
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
    ]
  },
  {
    slug: "form-builder",
    name: "Form Builder",
    shortDesc: "Create forms, collect responses, export data",
    fullDesc: "Build custom forms for any data collection need. Design forms with various field types, embed them on websites or share via links, collect responses securely, and export data to CSV or integrate with other tools via webhooks.",
    tier: "pro",
    num: 18,
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
    ]
  },
  {
    slug: "booking-engine",
    name: "Booking Engine",
    shortDesc: "Appointment scheduling with availability management",
    fullDesc: "Complete appointment scheduling system. Define availability windows, allow clients to book appointments online, send automatic confirmations and reminders, sync with calendar applications, and manage cancellations and rescheduling.",
    tier: "pro",
    num: 19,
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
    ]
  },
  {
    slug: "openclaw-optimizer",
    name: "OpenClaw Optimizer",
    shortDesc: "Audit workspace for cost and performance optimization",
    fullDesc: "Comprehensive workspace analysis for OpenClaw users. Audit your current setup for cost inefficiencies, identify performance bottlenecks, recommend configuration improvements, and generate optimization reports with actionable recommendations.",
    tier: "pro",
    num: 20,
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
