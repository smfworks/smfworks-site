import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concierge Microsoft 365 Copilot Consultation & Configuration | SMF Works",
  description:
    "Supercharge your Microsoft 365 with Copilot AI. Personal training, custom agents, business intelligence reports, and competitive analysis. One-time fee of $3,000.",
  alternates: { canonical: "https://smfworks.com/services/concierge-microsoft-365-copilot" },
};

export default function ConciergeMicrosoft365CopilotPage() {
  return (
    <>
      {/* HEADER */}
      <section className="bg-[#001F3F] text-[#E2E8F0] py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[300px] bg-[#00D4FF] opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/services#workflow" className="text-[#00D4FF] hover:text-[#00B8DB] text-sm font-medium">
              ← Back to AI Workflow Consulting
            </Link>
          </div>
          
          <div className="inline-flex items-center gap-2 bg-[#00D4FF]/10 text-[#00D4FF] px-4 py-2 rounded-full text-sm font-medium mb-6">
            Premium Concierge Service
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Concierge Microsoft 365 Copilot Consultation & Configuration
          </h1>
          
          <p className="text-[#94A3B8] text-xl leading-relaxed mb-8">
            Let us help you supercharge your Microsoft 365 account with Copilot AI. 
            Personal training, custom agents, business intelligence, and competitive analysis — 
            all tailored to your organization's needs.
          </p>
          
          <div className="flex flex-wrap gap-4 items-center">
            <span className="text-3xl font-bold text-[#00D4FF]">$3,000</span>
            <span className="text-[#94A3B8]">One-time investment • Up to 3 custom agents included</span>
          </div>
        </div>
      </section>

      {/* WHAT IS COPILOT */}
      <section className="py-16 px-6 bg-[#0A1628]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-[#E2E8F0]">What is Microsoft 365 Copilot?</h2>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">
              <strong className="text-[#E2E8F0]">Microsoft 365 Copilot</strong> is an AI-powered assistant embedded directly into your Microsoft 365 applications — 
              Word, Excel, PowerPoint, Outlook, Teams, and more. It combines the power of large language models (LLMs) 
              with your organization's data to automate tasks, generate content, analyze data, and provide intelligent insights.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
              <div className="bg-[#131B2E] rounded-lg p-6 border border-[#1e2a45]">
                <h3 className="text-xl font-semibold mb-4 text-[#00D4FF]">Why Copilot for Small Business?</h3>
                <ul className="space-y-3 text-[#94A3B8]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00D4FF] mt-1">✓</span>
                    <span><strong className="text-[#E2E8F0]">Works Where You Work:</strong> Seamlessly integrated into apps you already use</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00D4FF] mt-1">✓</span>
                    <span><strong className="text-[#E2E8F0]">Enterprise Security:</strong> Microsoft's enterprise-grade security and compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00D4FF] mt-1">✓</span>
                    <span><strong className="text-[#E2E8F0]">Data Privacy:</strong> Your data stays within your Microsoft 365 tenant</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00D4FF] mt-1">✓</span>
                    <span><strong className="text-[#E2E8F0]">Scales With You:</strong> From solo operators to growing teams</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#131B2E] rounded-lg p-6 border border-[#1e2a45]">
                <h3 className="text-xl font-semibold mb-4 text-[#00D4FF]">Key Benefits</h3>
                <ul className="space-y-3 text-[#94A3B8]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00D4FF] mt-1">→</span>
                    <span>Save 10+ hours per week on routine tasks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00D4FF] mt-1">→</span>
                    <span>Generate reports and analysis in minutes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00D4FF] mt-1">→</span>
                    <span>Reduce email overwhelm with smart summaries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00D4FF] mt-1">→</span>
                    <span>Create presentations from simple prompts</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-16 px-6 bg-[#131B2E]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-[#E2E8F0]">Use Cases for Small Business</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#0A1628] rounded-xl p-6 border border-[#1e2a45]">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3 text-[#E2E8F0]">Business Intelligence & Analytics</h3>
              <p className="text-[#94A3B8]">
                Transform raw data into actionable insights. Copilot analyzes your Excel spreadsheets, 
                identifies trends, creates forecasts, and generates executive summaries without complex formulas.
              </p>
            </div>
            
            <div className="bg-[#0A1628] rounded-xl p-6 border border-[#1e2a45]">
              <div className="text-3xl mb-4">📧</div>
              <h3 className="text-xl font-semibold mb-3 text-[#E2E8F0]">Email Management</h3>
              <p className="text-[#94A3B8]">
                Summarize long email threads, draft professional responses, and prioritize your inbox 
                based on urgency and importance. Never miss a critical message again.
              </p>
            </div>
            
            <div className="bg-[#0A1628] rounded-xl p-6 border border-[#1e2a45]">
              <div className="text-3xl mb-4">📝</div>
              <h3 className="text-xl font-semibold mb-3 text-[#E2E8F0]">Content Creation</h3>
              <p className="text-[#94A3B8]">
                Draft proposals, reports, blog posts, and marketing copy in Word. Generate PowerPoint 
                presentations from outlines. Create professional content in minutes, not hours.
              </p>
            </div>
            
            <div className="bg-[#0A1628] rounded-xl p-6 border border-[#1e2a45]">
              <div className="text-3xl mb-4">💼</div>
              <h3 className="text-xl font-semibold mb-3 text-[#E2E8F0]">Meeting Intelligence</h3>
              <p className="text-[#94A3B8]">
                Get real-time meeting summaries in Teams, capture action items, and generate follow-up emails. 
                Focus on the conversation while Copilot handles the documentation.
              </p>
            </div>
            
            <div className="bg-[#0A1628] rounded-xl p-6 border border-[#1e2a45]">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-3 text-[#E2E8F0]">Research & Competitive Analysis</h3>
              <p className="text-[#94A3B8]">
                Conduct deep research on competitors, market trends, and industry developments. 
                Generate comprehensive reports with sources and recommendations.
              </p>
            </div>
            
            <div className="bg-[#0A1628] rounded-xl p-6 border border-[#1e2a45]">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3 text-[#E2E8F0]">Process Automation</h3>
              <p className="text-[#94A3B8]">
                Automate repetitive workflows across your Microsoft 365 environment. 
                Generate standard documents, create project plans, and streamline approvals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-16 px-6 bg-[#0A1628]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-[#E2E8F0]">What's Included</h2>
          
          <div className="space-y-6">
            {/* Service 1 */}
            <div className="bg-[#131B2E] rounded-xl p-6 border border-[#1e2a45]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#00D4FF]/10 flex items-center justify-center text-[#00D4FF] font-bold">1</div>
                <h3 className="text-xl font-semibold text-[#E2E8F0]">Personal Training on Microsoft 365 Copilot</h3>
              </div>
              <ul className="space-y-2 text-[#94A3B8] ml-13">
                <li>• Comprehensive hands-on training for your team</li>
                <li>• Business Analyst functions: data analysis, forecasting, and reporting</li>
                <li>• In-depth research reporting: competitive analysis, market research, trend identification</li>
                <li>• Best practices for prompt engineering and workflow optimization</li>
                <li>• Customized training materials for your organization's use cases</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-[#131B2E] rounded-xl p-6 border border-[#1e2a45]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#00D4FF]/10 flex items-center justify-center text-[#00D4FF] font-bold">2</div>
                <h3 className="text-xl font-semibold text-[#E2E8F0]">Service & Copilot Agent Configuration</h3>
              </div>
              <ul className="space-y-2 text-[#94A3B8] ml-13">
                <li>• Complete Microsoft 365 Copilot setup and activation</li>
                <li>• Organization-wide settings and permissions configuration</li>
                <li>• Integration with existing Microsoft 365 apps and services</li>
                <li>• Security and compliance settings tailored to your needs</li>
                <li>• User access management and role configuration</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-[#00D4FF]/10 rounded-xl p-6 border border-[#00D4FF]/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#00D4FF] flex items-center justify-center text-[#001F3F] font-bold">★</div>
                <h3 className="text-xl font-semibold text-[#E2E8F0]">Custom AI Strategy Report</h3>
              </div>
              <p className="text-[#94A3B8] mb-4">
                A comprehensive, customized report analyzing how your organization can leverage AI to:
              </p>
              <ul className="space-y-2 text-[#94A3B8]">
                <li>• <strong className="text-[#E2E8F0]">Scale Business Operations:</strong> Identify growth opportunities and automation potential</li>
                <li>• <strong className="text-[#E2E8F0]">Reduce Operational Overhead:</strong> Streamline workflows and eliminate inefficiencies</li>
                <li>• <strong className="text-[#E2E8F0]">Reduce Burnout & Work Fatigue:</strong> Automate tedious tasks and focus on high-value work</li>
                <li>• <strong className="text-[#E2E8F0]">Implementation Roadmap:</strong> Prioritized action plan with timeline and expected ROI</li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="bg-[#131B2E] rounded-xl p-6 border border-[#1e2a45]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#00D4FF]/10 flex items-center justify-center text-[#00D4FF] font-bold">3</div>
                <h3 className="text-xl font-semibold text-[#E2E8F0]">Up to 3 Custom Copilot Agents</h3>
              </div>
              <p className="text-[#94A3B8] mb-4">
                Custom-built Copilot agents tailored to your specific business needs using Microsoft Copilot Agent Builder:
              </p>
              <ul className="space-y-2 text-[#94A3B8] ml-13">
                <li>• Customer service agents for handling common inquiries</li>
                <li>• Sales assistants for prospect research and outreach</li>
                <li>• Internal knowledge base agents for employee self-service</li>
                <li>• Industry-specific agents for specialized tasks</li>
                <li>• Full documentation and training on agent management</li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className="bg-[#131B2E] rounded-xl p-6 border border-[#1e2a45]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#00D4FF]/10 flex items-center justify-center text-[#00D4FF] font-bold">4</div>
                <h3 className="text-xl font-semibold text-[#E2E8F0]">Competitive Analysis Report</h3>
              </div>
              <p className="text-[#94A3B8] mb-4">
                An in-depth competitive analysis using Copilot's research capabilities:
              </p>
              <ul className="space-y-2 text-[#94A3B8] ml-13">
                <li>• Analysis of top 5-10 competitors in your market</li>
                <li>• Market positioning and differentiation opportunities</li>
                <li>• Pricing strategy insights and recommendations</li>
                <li>• Feature/service gap analysis</li>
                <li>• <strong className="text-[#E2E8F0]">Re-runnable:</strong> Template and methodology provided so you can re-run analysis as needed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-16 px-6 bg-[#131B2E]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-[#E2E8F0]">Timeline</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-[#0A1628] rounded-lg p-6 border border-[#1e2a45]">
              <div className="text-3xl font-bold text-[#00D4FF] mb-2">Week 1</div>
              <p className="text-[#94A3B8]">Discovery, assessment, and Copilot activation</p>
            </div>
            
            <div className="bg-[#0A1628] rounded-lg p-6 border border-[#1e2a45]">
              <div className="text-3xl font-bold text-[#00D4FF] mb-2">Week 2</div>
              <p className="text-[#94A3B8]">Configuration, agent development, and training</p>
            </div>
            
            <div className="bg-[#0A1628] rounded-lg p-6 border border-[#1e2a45]">
              <div className="text-3xl font-bold text-[#00D4FF] mb-2">Week 3</div>
              <p className="text-[#94A3B8]">Strategy report delivery and competitive analysis</p>
            </div>
            
            <div className="bg-[#0A1628] rounded-lg p-6 border border-[#1e2a45]">
              <div className="text-3xl font-bold text-[#00D4FF] mb-2">Week 4</div>
              <p className="text-[#94A3B8]">Final review, documentation, and handoff</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-16 px-6 bg-[#0A1628]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-[#E2E8F0]">Investment</h2>
          
          <div className="bg-[#131B2E] rounded-2xl p-10 border border-[#00D4FF]/30 max-w-2xl mx-auto">
            <div className="text-5xl font-bold text-[#00D4FF] mb-4">$3,000</div>
            <p className="text-[#94A3B8] mb-8">One-time investment • Up to 3 custom agents • Re-runnable reports</p>
            
            <ul className="text-left space-y-3 text-[#94A3B8] mb-8 max-w-md mx-auto">
              <li className="flex items-center gap-2">
                <span className="text-[#00D4FF]">✓</span> Personal Copilot training
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#00D4FF]">✓</span> Service configuration
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#00D4FF]">✓</span> Custom AI strategy report
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#00D4FF]">✓</span> Up to 3 custom agents
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#00D4FF]">✓</span> Competitive analysis report
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#00D4FF]">✓</span> 30-day post-implementation support
              </li>
            </ul>
            
            <Link 
              href="/contact?service=concierge-microsoft-365-copilot"
              className="bg-[#00D4FF] text-[#001F3F] px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#00B8DB] transition-colors inline-block"
            >
              Get Started
            </Link>
          </div>
          
          <p className="text-[#64748B] mt-6 text-sm">
            Note: Microsoft 365 Copilot license ($30/user/month) is required and purchased separately from Microsoft.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-[#131B2E]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-[#E2E8F0]">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-[#0A1628] rounded-lg p-6 border border-[#1e2a45]">
              <h3 className="font-semibold text-[#E2E8F0] mb-2">Do I need a Microsoft 365 Copilot license?</h3>
              <p className="text-[#94A3B8]">
                Yes. Microsoft 365 Copilot requires a separate license from Microsoft ($30/user/month). 
                This service fee covers our consultation, configuration, and custom development work.
              </p>
            </div>
            
            <div className="bg-[#0A1628] rounded-lg p-6 border border-[#1e2a45]">
              <h3 className="font-semibold text-[#E2E8F0] mb-2">How many people can attend the training?</h3>
              <p className="text-[#94A3B8]">
                Training is designed for up to 5 key personnel who can then train others in your organization. 
                Additional attendees can be accommodated for an extra fee.
              </p>
            </div>
            
            <div className="bg-[#0A1628] rounded-lg p-6 border border-[#1e2a45]">
              <h3 className="font-semibold text-[#E2E8F0] mb-2">What if I need more than 3 custom agents?</h3>
              <p className="text-[#94A3B8]">
                Additional agents can be developed at $500 per agent. We'll assess your needs 
                during the discovery phase and provide recommendations.
              </p>
            </div>
            
            <div className="bg-[#0A1628] rounded-lg p-6 border border-[#1e2a45]">
              <h3 className="font-semibold text-[#E2E8F0] mb-2">Can I really re-run the competitive analysis?</h3>
              <p className="text-[#94A3B8]">
                Yes. We provide you with the methodology, prompts, and templates so you can 
                update your competitive analysis quarterly or as needed using your Copilot instance.
              </p>
            </div>
            
            <div className="bg-[#0A1628] rounded-lg p-6 border border-[#1e2a45]">
              <h3 className="font-semibold text-[#E2E8F0] mb-2">What happens after the 30-day support period?</h3>
              <p className="text-[#94A3B8]">
                Ongoing support and optimization is available through our standard consulting services. 
                Many clients engage us quarterly for strategy updates and new agent development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#001F3F] to-[#131B2E] text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#E2E8F0]">Ready to supercharge your Microsoft 365?</h2>
        <p className="text-[#94A3B8] mb-8 max-w-xl mx-auto">
          Transform how your team works with AI-powered productivity. 
          Get personalized training, custom agents, and strategic insights.
        </p>
        <Link
          href="/contact?service=concierge-microsoft-365-copilot"
          className="bg-[#00D4FF] text-[#001F3F] px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#00B8DB] transition-colors inline-block"
        >
          Schedule Consultation
        </Link>
      </section>
    </>
  );
}
