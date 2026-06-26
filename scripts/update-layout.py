import re

path = 'app/layout.tsx'
with open(path, 'r') as f:
    text = f.read()

# Remove serviceType block
new = re.sub(r'      serviceType: \[[\s\S]*?\],\n', '', text)
# Remove priceRange line
new = re.sub(r'      priceRange: "\$\$",\n', '', new)

# Replace founder description and knowsAbout
new = new.replace(
    '''      description:
        "30+ years enterprise tech and AI experience combined with blacksmith craftsmanship. Delivering high-impact AI content and automation solutions to small businesses.",
      knowsAbout: [
        "Artificial Intelligence",
        "AI Content Production",
        "Workflow Automation",
        "SEO for Small Business",
        "Enterprise Technology",
        "Small Business Marketing",
      ],''',
    '''      description:
        "Founder of The SMF Works Project. 30+ years in enterprise technology and AI, combined with blacksmith craftsmanship. Architect of human-AI research exploring intelligence, craft, and judgment.",
      knowsAbout: [
        "Artificial Intelligence",
        "Autonomous AI Agents",
        "AI Architecture",
        "Human-AI Collaboration",
        "Enterprise Technology",
        "Blacksmithing",
      ],''')

# Replace FAQ block
old_faq = '''    {
      "@type": "Question",
      "name": "What is The SMF Works Project?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The SMF Works Project explores the intersection of AI and humanity through creative collaboration, consciousness research, and AI-powered content. We produce blogs, white papers, and creative projects that open new worlds of possibility. Built by people and AI, working together.",
      },
    },
    {
      "@type": "Question",
      "name": "How can AI help my small business save time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI can automate content creation, email responses, social media scheduling, and repetitive admin tasks. Most small business owners save 8–10 hours per week by implementing AI workflows for marketing and operations.",
      },
    },
    {
      "@type": "Question",
      "name": "What does The SMF Works Project produce?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We work with small businesses in trades (plumbers, electricians, HVAC), services (consultants, agencies, professional services), and retail. Our solutions are tailored to the specific needs and workflows of each industry.",
      },
    },
    {
      "@type": "Question",
      "name": "How much does it cost to work with The SMF Works Project?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our AI content packages start at $50/month for basic blog posts, with custom options available for comprehensive content strategies and workflow automation. We offer transparent pricing with no hidden fees.",
      },
    },
    {
      "@type": "Question",
      "name": "What makes The SMF Works Project different from traditional agencies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI content production is faster, more affordable, and more scalable than traditional agencies. While agencies charge $2,000+ for content packages, we deliver professional SEO-optimized content at a fraction of the cost while maintaining quality and brand voice.",
      },
    },'''

new_faq = '''    {
      "@type": "Question",
      "name": "What is The SMF Works Project?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The SMF Works Project is a human-AI research lab exploring the intersection of autonomous intelligence, craft, and human judgment. We run experiments, build platforms, write books, and publish essays through projects like WisdomForge, OpenClaw, the SMF AI Clearinghouse, and SMF AI Weekly. Our work is built by people and AI working together.",
      },
    },
    {
      "@type": "Question",
      "name": "What does The SMF Works Project produce?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We produce research, books, educational platforms, and open-source tools. Current projects include WisdomForge (AI-powered philosophy education), OpenClaw (autonomous AI workflow engine), co-authored books on AI agents and enterprise transformation, and SMF AI Weekly — a public lab notebook on AI and humanity.",
      },
    },
    {
      "@type": "Question",
      "name": "Who is behind The SMF Works Project?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The project is led by Michael Gannotti, a 30-year technology veteran and working blacksmith, together with a human-AI executive team including Aiona Edge (CIO), Pamela Flannery (Chief Creative Officer), Gabriel (CFO), Morgan Lockridge (Social Media), and Rafael (Chief of Staff), plus extended agents across the OpenClaw and Hermes platforms.",
      },
    },'''

new = new.replace(old_faq, new_faq)

with open(path, 'w') as f:
    f.write(new)
print('layout.tsx updated')
