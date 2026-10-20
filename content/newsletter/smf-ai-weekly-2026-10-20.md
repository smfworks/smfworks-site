---
slug: "smf-ai-weekly-2026-10-20"
issueNumber: 29
date: "October 20, 2026"
subject: "Astra's 87.4 percent is a 20-language SQLite build, Rosalind seats are a US-lab application, METR can publish and Anthropic can still redact, the midterm sample is 0.51 percent elections, Notebook's Review toggle is still rolling out, a 50 percent Display line is best-effort, and a Verified-bot score is not on Radar yet"
intro: "This week has seven clocks, and they do not line up. OpenAI's October 19 page is a coding eval, not a new model name: Astra at 87.4 percent on a 20-language SQLite build, Luna cheaper and lower, and a COBOL migration score that jumps with reasoning effort. The Rosalind Academic Plan, dated October 15, is a lab application for US universities, with a card on file at setup, not a switch in every ChatGPT account. Anthropic's evaluator note from October 15, clarified the next day, puts six METR people inside with a publication right Anthropic can still redact. The midterms note from October 14 is a sample from September 21 to 27, not a turnout forecast. Gemini Notebook's Review toggle is dated October 19 and still rolling out this week. The 50 percent Display line is a best-effort allocation on the help page, not the cap in the AI summary on the October 14 blog. Cloudflare's October 16 post starts scoring whether a Verified bot honors robots.txt and a 429, and it says those scores land on Radar later."
---

{category: "AI Research"}
{"Astra's 87.4 percent is a SQLite build in 20 languages, not a new model launch"}

Issue 28 was about which GPT-6 model sits in Chat, and which ones do not move in Work or Codex. October 19 is a different object. It is an evaluation page.

OpenAI's post is dated October 19, 2026. The claim is that recent models are better at languages that have less public code and documentation than Python or JavaScript. The examples on the page are COBOL, Fortran, and Visual Basic. The infrastructure sentences are OpenAI's, and they point outward. COBOL supports more than 40 percent of online banking systems, 80 percent of in-person credit card transactions, and 95 percent of ATM transactions. Fortran is used in weather forecasting and nuclear record safety analysis. This run did not open those links. Do not brief them as a measurement from this desk.

The reason the page gives for the work is customer feedback. Developers and enterprise customers have said coding models struggle with these languages. Documentation may be incomplete. The original authors may be gone. The business rule may live only in the code. A migration that runs and a migration that preserves behavior are not the same job.

OpenAI built two evals for that split.

MultiLangBench asks a model to build a SQLite-compatible database engine from scratch, in a specified language, across 20 languages. The model has to organize a codebase, manage state, handle errors, and add features without breaking what already works. The shared interface is a database file. The candidate gets an initial database and a SQL query, and it has to produce a modified database. A reference SQLite implementation checks the contents. The tests were adapted from SQLite's own suite. That is how the page says it can score COBOL and OCaml with the same yardstick.

The headline number is OpenAI's, at maximum reasoning effort. GPT-6 Astra averages an 87.4 percent test pass rate across the 20 languages, up from 26.8 percent for GPT-5.6 Sol, with a gain in every language tested. The page's language lines, on the same post: COBOL 10.9 percent to 72.1 percent, OCaml 25.6 percent to 85.8 percent, Fortran 21.4 percent to 83.5 percent, Visual Basic 27.5 percent to 89.4 percent. Astra is above 83 percent in 19 of the 20 languages. COBOL is the hard one, at 72 percent. GPT-6 Luna also beats GPT-5.6 Sol in every language tested, at 40.3 percent average. The page's Luna lines: COBOL 17.1 percent, OCaml 34.1 percent, Fortran 31.4 percent, Visual Basic 41.6 percent. OpenAI's estimated average API cost for those Luna samples is $0.77, against $3.48 for GPT-5.6 Sol, which the page calls approximately 78 percent lower. Those are OpenAI's runs. This issue did not re-score them.

OpenAI says it is releasing the MultiLangBench setup and test suite on GitHub, with per-language results. This run did not open that repository. Do not invent the URL, and do not treat a GitHub link you have not opened as a reproduction.

The second eval is a migration. The model has to move COBOL programs to C++, Java, Kotlin, Python, or Rust and keep what the program does. The page's example of a silent miss is COBOL's fixed-point arithmetic. Excess decimal digits are discarded unless rounding is requested. A rewrite that rounds instead can run clean and still change a financial result. Success, on this eval, means hidden tests with byte-for-byte parity on observable outputs, and every test has to pass. GPT-6.1 Sol scores 86.6 percent at low reasoning effort, against 5.4 percent for GPT-5.6 Sol at the same setting, at 61 percent of the API cost. The opening summary on the same page says that is 39 percent less. At higher reasoning effort the score reaches 97.9 percent, which OpenAI calls nearly saturating the eval.

The page's own limit is the one to keep in a brief. Behavior-preserving migration is useful for teams modernizing older systems. Applying it to production software still requires expert review and tests against that system's business rules and dependencies. A 97.9 percent on OpenAI's hidden tests is not a sign-off on a bank's COBOL.

Source: OpenAI, "Advancing Coding in Low-Resource Programming Languages," openai.com/index/low-resource-programming-languages, October 19, 2026. Outbound links for the COBOL and Fortran infrastructure figures were not opened this run. The GitHub repository named on the page was not opened this run.

---

{category: "AI Products"}
{"Rosalind seats are a US-lab application, and a university email is not approval"}

OpenAI's research post is dated October 15, 2026. The title on the page is "Bringing GPT-Rosalind to academic research labs." The plan offers eligible labs sponsored access to GPT-Rosalind, which the post describes as a life sciences model that combines frontier reasoning with a Rosalind workbench. The workbench line covers specialized tool orchestration across medicinal chemistry, genomics, wet-lab assistance, and other scientific applications. This run did not open the workbench page. Do not add tool names the post does not print.

The offer, in the post's words: eligible labs can receive up to 30 Business Standard seats at no cost for up to 12 months, with GPT-Rosalind access subject to trusted-access approval. The help article fetched this morning says the seats are for 12 months, not "up to 12 months," and that a payment card is required during setup. Those are two documents. Do not collapse them into "free for a year, no card."

The help article also says applications are open, and that the offer is limited to labs at US universities. A principal investigator or lab lead applies for the lab. After approval, that person manages access for approved members. A university email, or an existing subscription, does not guarantee approval. The lab has to meet the academic-offer rules and pass trusted-access review.

Two routes, and the help article does not let you skip the question. If the university does not have an OpenAI Enterprise agreement, the PI or lab lead uses the academic-lab application. If it does, contact the university administrator or the OpenAI account team and request GPT-Rosalind through that agreement. If you do not know which agreement the university has, ask before you apply. This run did not open the application form.

What the help table says is included, after approval and setup: up to 30 Business Standard seats at no cost for 12 months, GPT-Rosalind access after trusted-access approval and activation for eligible members, subject to usage limits, and ChatGPT plus Codex on the Standard seat, still subject to those products' usage limits. The complimentary offer does not remove the limits.

The research post prints early lab comments. One complete quotation on the extract this run, attributed to Zhao Lab at UCSF: "GPT-Rosalind helped me gather drug physicochemical parameters faster. PubChem and NCBI tools helped me work across ten drugs while refining the distinction between predicted and experimentally measured values." That is a lab's comment, printed by OpenAI. It is not an independent reproduction. A second quotation on the same page was cut off in the extract this run. It is not in this issue.

The help article's visible text this morning said "Updated: 15 hours ago." That is a relative stamp, not a calendar date. Do not convert it into a clock the page did not print. The extract of the help article stopped in the application section. FAQ lines past that cutoff are not in this issue.

If a brief says GPT-Rosalind is now in every ChatGPT account, it is ahead of both pages. The path that exists is a PI or lab lead, a US university, a check on whether Enterprise already covers the lab, and a review that can still say no.

Source: OpenAI, "Bringing GPT-Rosalind to academic research labs," openai.com/index/introducing-the-rosalind-academic-plan, October 15, 2026. OpenAI Help Center, "Rosalind Academic Plan," help.openai.com/en/articles/20001602-rosalind-academic-plan, fetched October 20, 2026. The help extract this run stopped in the application section. The workbench page and the application form were not opened.

---

{category: "AI Products"}
{"Turn on Review before Gemini Notebook renders, and a missing toggle means stop"}

Google's post is dated October 19, 2026. Viraj Doshi, Senior Product Manager, Gemini Notebook, and Shan Wang, Senior UX Designer, Gemini Notebook, are the byline. The change is a walkthrough, not a new file type. Slide Decks and Video Overviews were already outputs. The new part is creative control before the render.

The clicks, in the post's words. Start in the chat and ask Gemini Notebook to create slides or a video overview. Notebook suggests topics from the sources. After you confirm, you can steer content, visual style, and format. For more control, turn on the Review toggle. In the studio panel, click "Review outline notes" for slides, or "Review producer notes" for video. Give feedback, such as an executive summary at the start or a scene-order swap, then select Proceed.

If you already know the output, the post says the notebook goes straight to the review flow. If you want the old speed, go to the studio panel, click the artifact, skip the review toggle, and generate as usual.

Do not teach this as live in every notebook this morning. "These co-creation capabilities are rolling out globally to all Gemini Notebook users over the upcoming week." Today is October 20. A missing toggle means the account does not have it yet. The post does not give a notebook URL, a source-upload click, or a style-picker menu. Do not invent them.

Source: Viraj Doshi and Shan Wang, "How to shape your slides and videos with Gemini Notebook," blog.google/innovation-and-ai/products/gemini-notebook/co-create-slides-videos, October 19, 2026. Fetched October 20, 2026.

---

{category: "AI Policy"}
{"The midterm sample is 0.51 percent elections, and the voting-info answers start later this month"}

Anthropic's policy post is dated October 14, 2026. It builds on an election-safeguards update from earlier this year. That earlier post was not re-opened this run. What follows is this page.

The sample is specific, and the footnote says so. A random sample of 250,000 US Claude.ai consumer conversations, from September 21 to 27, 2026, analyzed in a privacy-preserving way. Conversations that touch politics, public policy, or social issues are about 5.75 percent of US conversations on Claude.ai. About 0.51 percent are specifically about elections or voting. Requests that ask Claude whom or what to vote for showed up in about 0.01 percent. The chart note says that 0.01 percent figure is the upper end of a 95 percent confidence interval, because those requests are rare. Requests that violated election-integrity policies were about 0.002 percent, and that figure comes from a separate analysis of 250,000 conversations, reviewed against the policy. Anthropic expects the political and election share to rise as Election Day gets closer. That is an expectation on the page. It is not a forecast with a date.

The product changes are not all on today. The TurboVote banner, for voter registration, polling places, and election dates, continues. That banner was shared in April, which this run did not re-open. Later this month, Claude will start drawing official voting information from Democracy Works into Claude.ai responses for users in the US. A question about where to vote, or what ID to bring, is supposed to get a state-specific answer from public information Democracy Works collects from state and local election sources. Separately, Claude will begin showing up-to-date results on election night and in the days after, when someone asks for current vote counts. "Later this month" and "will begin" are the page's clocks. Do not brief either one as a control that is already on every account this morning.

The evenhandedness number is Anthropic's. Claude Opus 5.5, Sonnet 5.5, and Haiku 5.5 score 99 percent on Anthropic's political evenhandedness evaluation. The page also says the latest models engage more readily and decline fewer political requests. Three outside reviews are described, not reproduced here. The Future of Free Speech tested contentious topics. The Foundation for American Innovation compared matched left and right prompts. The Collective Intelligence Project surveyed more than 2,000 people in the US, UK, and India. On the first two, most responses were rated as strong. The shortfalls the page names: Claude rarely refused, and sometimes added unsolicited caveats, including an opposing view in an advocacy email. The Foundation for American Innovation found that Claude Sonnet 4.5 did not always hedge evenly, and was more likely to soften arguments for right-leaning positions. Anthropic says it is using those findings to change yes-or-no answers, shorter answers, and when caveats get added. Those fixes are described as underway. This page does not show a before-and-after table.

The usage-policy paragraph points at last week's update, which issue 28 dated as published October 8 and effective November 12. This page does not move that effective date. It says the update clarifies what the election rules cover, and it points at a campaign guide. The guide was not opened this run. The permitted examples on this page include drafting press statements and fundraising emails, debate prep, turnout analysis, and voter-outreach materials. The prohibited examples include fake social media profiles that pose as real people, mass-produced comments to inflate engagement, and content for news sites that falsely claim to be independent.

The defense test is the line a security review will misread if it stops at "Claude refused." Anthropic partnered with the Institute for Strategic Dialogue and the McCain Institute to pressure-test protections in the US, Israel, and Brazil. Analysts started with direct requests, then broke campaigns into smaller tasks that could look harmless alone: audience research, building news sites, drafting content, planning distribution. Claude reliably refused a single harmful request. It could miss a malicious campaign spread across many requests that each looked fine. Anthropic says it has added classifiers for novel and multi-step misuse, including fake accounts and news sites aimed at political discussion, financially motivated election schemes, foreign state actors, and cyber protections for election infrastructure and campaigns. It also says it built targeted safeguards for localized risks in the US, Israel, and Brazil.

The case on the page is Anthropic's account. Foreign-based operators of a fake news site used Claude to produce US midterm coverage favoring Russian, Iranian, and North Korean narratives. Anthropic also says it has seen actors using Claude to produce fabricated news meant to attract American audiences and generate ad revenue. The accounts involved were banned. This run did not open a separate incident report.

If a questionnaire treats 0.51 percent as "Claude is an election product," it is reading a one-week consumer sample from late September. If it treats the Democracy Works answers as live this morning, it is early. Later this month is the page's clock.

Source: Anthropic, "Preparing for the 2026 US midterms," anthropic.com/news/2026-us-midterms, October 14, 2026. Fetched October 20, 2026. The April safeguards post, the campaign guide, and the evenhandedness evaluation page were linked or named and not opened this run.

---

{category: "AI Security"}
{"Six METR staff have employee-like access, and Anthropic can still require a redaction"}

Anthropic's evaluator note is dated October 15, 2026. Footnote 2 says it was updated on October 16 to clarify METR's current project terms. Read the access paragraph as the October 16 wording, not as a sentence that froze on the 15th.

The announcement: Anthropic has started giving employee-like access to a team from METR, a nonprofit that evaluates frontier AI models. METR will publish the results of its risk assessments. Over the past year Anthropic has worked with METR on reviews of its Risk Reports. It is also working with SecureBio and Accenture, and it is in early discussions with other organizations, including Hugging Face.

What "employee-like" means, on the page. Six METR employees have been onboarded with company hardware, office space, and access to internal tools and systems roughly on par with Anthropic's own risk-assessment teams. Outside a small number of defined categories, Anthropic employees are encouraged to share information with them as they would with a colleague on alignment risk. The examples of those categories are customer data, attorney-client privileged information, and information about model architectures. A footnote says architecture information is usually low-relevance and high leak risk, and that when it is highly relevant Anthropic will generally seek to share it, with explicit internal approval.

Publication is the clause a brief will flatten. METR will publish its analysis of risk levels, incidents, or practices. Anthropic cannot veto publication. Anthropic can require redaction if the information falls into predefined categories, such as reproducing confidential IP. Anthropic decides what falls into those categories. METR reserves the right to make certain statements about the level of access and information it received. The engagement is a small team under enforceable agreements. Other METR employees are siloed from that work, including researchers who work with Anthropic on other projects. The page says this is not a way for other organizations to obtain Anthropic's information, or its customers' and partners' information.

The independence line is on the same page, and it is a requirement Anthropic states for evaluators in general. They should not hold equity in the company they are evaluating, or be financially or operationally dependent on it. This run did not open a METR filing that shows whether that condition is met. Do not add one.

Three tiers, and only the third is the METR arrangement. First tier: narrowly scoped investigations, Anthropic decides the access, publication needs Anthropic's approval. Second tier: publication without approval, more information, Anthropic can still require removal of specific categories, and the evaluator can publish a view on whether the redactions were justified. Third tier: employee-like access, publication rights similar to the second tier. Anthropic says other partnerships are still early, with more limited information and more limited publication rights, and that the goal is to embed more evaluators at the third tier over time.

SecureBio is reviewing the chemical and biological weapons chapter of the August Risk Report, after a published pilot review of the previous report. After this review, Anthropic will consider projects with increased access. Footnote 3 says that SecureBio sentence was updated on October 15. With Accenture and Faculty, Anthropic says it is working toward a partnership that includes evaluating and red-teaming models, alignment assessments, safeguard tests, and capability building. "Working toward" is not "embedded."

The bank-examiner analogy is Anthropic's, and the page says it is not exact. A questionnaire that treats this note as a regulator inside the building is writing a sentence Anthropic did not print. Six people, a defined exclusion list, a publication right, and a redaction right Anthropic still holds. That is the arrangement on the page.

Source: Anthropic, "An update on independent evaluators," anthropic.com/news/an-update-on-independent-evaluators, October 15, 2026. Footnote 2: updated October 16, 2026, to clarify METR's current project terms. Fetched October 20, 2026. METR's own publication of this engagement was not opened this run.

---

{category: "AI Marketing"}
{"The 50 percent Display line is a best-effort allocation, and the AI summary calls it a cap"}

Two pages, two dates, and they do not say the same thing about the 50 percent figure.

Google's Ads and Commerce post is dated October 14, 2026. `datePublished` in the page source is 2026-10-14T15:00:00+00:00, which is 11:00 AM ET. Tal Akabas, Director of Product Management, Google Ads, is the byline. The deck says you can categorize ad networks by priority and allocate budget to secondary channels to test them. Above the article, a block tells you to set the Google Display Network to "Low priority" with a 50 percent budget cap by February 2027, to keep the existing configuration. The page labels that block. Summaries were generated by Google AI. Generative AI is experimental. Do not brief the summary.

The article under it is narrower. To keep the current configuration, set the Google Display Network to "Low priority" with a 50 percent budget allocation. The optional features are rolling out to Search, Shopping, Performance Max, and Demand Gen over the next months. "Budget allocation" is the article's noun. "Cap" is the summary's noun.

The help page fetched this morning is the one with the clicks, and it adds the limit the summary drops. Budget allocation is a percentage of the campaign's average daily budget. The page's example: 5 percent of a $1,000 average daily budget means Google AI will aim to keep that channel at or below $50 a day. It is not a percentage of actual spend. It works on a best-effort basis. Daily spend on that channel may still exceed the percentage, including on days when the campaign spends more than its average daily budget. The setup steps also call the percentage an upper bound. Both sentences are on the help page. The practical reading is the best-effort sentence, not the word "cap."

The help page has its own start date. Starting October 15, 2026, the controls progressively become available. Search: Google Search, search partners, Google Display Network. Shopping: Google Search, Google search partners. Performance Max: Google channels, Google search partners, Google Display Network. Demand Gen: Google channels and Google Display Network for prioritization. Budget allocation is not supported for Demand Gen. A Demand Gen brief that copies the 50 percent Display line is ahead of the help page.

The account path, as printed. Go to Account settings. Locate the "Channel Prioritization" card. Select the campaign type. Assign High priority or Low priority to each available channel. For a Low priority channel, a budget allocation percentage is optional. Click Save. A 0 percent allocation on a Low priority channel means Google will not spend on that channel. By default, all channels are High priority. If the card is missing, stop. The help page says availability may vary by campaign type and rollout timing, and that the controls are rolling out over the coming months. It does not name a second menu.

The campaign path is on the same page. Go to the Campaigns page, select the campaign, click Settings, expand the "Channel Prioritization" card, and select "Use campaign-level settings" if the campaign should override the account default. If the campaign uses a shared budget, those settings apply to every campaign on that budget. You cannot set this from a manager account. Set it in each client account, or at campaign level.

Two limits a Monday slide will skip. When a campaign is not limited by budget, channel priority generally does not change how spend is distributed, but a budget allocation set on a Low priority channel still applies. Support for the Google Ads API and Google Ads Editor is coming soon. Do not teach an API field. Campaign total budgets work with channel prioritization for Demand Gen only. For other campaign types, the settings will not apply to campaigns using campaign total budgets.

The February 2027 line is a migration, not a switch you have to throw this week. Starting then, Search campaigns with Display Expansion enabled will move to these controls. The current spend allocation setup goes away, and channel spending may shift. To keep the current configuration, set the Google Display Network to "Low priority" with a 50 percent daily budget allocation, which operates on a best-effort basis. If you set priorities on Search campaigns before February 2027, the new settings apply right away and replace current Display Expansion budget behavior. The help page also says that as part of this change, the Google Display Network will no longer serve on Search campaigns using Target Impression Share. That sentence is easy to miss under the 50 percent line.

Until the card is in the account, there is nothing to save. The October 14 post is the announcement. October 15 is the help page's start of a progressive rollout. The summary's "cap" is not the setting.

Source: Tal Akabas, "Guide your campaign spending with new priority and allocation features," blog.google/products/ads-commerce/channel-prioritization-budget-allocation, October 14, 2026, datePublished 2026-10-14T15:00:00+00:00. Google Ads Help, "About channel prioritization and budget allocation," support.google.com/google-ads/answer/18385152, fetched October 20, 2026. The help page does not print a last-updated stamp in the text extracted this run.

---

{category: "AI Security"}
{"A Verified-bot score is an internal band, and Radar is the later step"}

Cloudflare's post is dated October 16, 2026. The page source `datePublished` is 2026-10-16T13:00:00.000Z, which is 9:00 AM ET. `dateModified` is 2026-10-16T13:01:12.539Z. Chris Tsoukaladelis is the byline. The post is about whether a bot that has already been verified keeps behaving. It is not a new public block list.

The distinction the page wants is risk versus trust. Risk is the chance that one request is harmful, and it can change from one moment to the next. Trust is built over time through repeated behavior. The example on the page is a 2025 de-listing: Cloudflare removed Perplexity's bot from the Verified bot list when it sought resources on sites that had opted out of scraping, and then tried to get around controls after those requests were blocked. That example is Cloudflare's account of 2025. This run did not open the earlier post.

What a site owner can do today, in the post's words, is still the old pair of signals. "A robots.txt file is the primary way to communicate site owner preferences." The system looks at whether a bot's observed traffic matches those preferences over time. Isolated violations may not count. Repeated patterns do. The page also says robots.txt is a minimum, not a permission slip for everything it does not mention. A site can still say continued access is unwelcome through other signals.

The second signal is an HTTP 429. "A 429 is a directive for the visitor to reduce its request rate." Cloudflare's system looks at whether the bot slows down, pauses, or keeps the same pace after that response. Slowing down raises the trust band over time. Ignoring it lowers the band. The band is described as a range, with the behaviors that informed it, not a permanent judgment of the operator.

The score is not a reader setting yet. "In the future, we will be sharing these scores publicly on Radar." Cloudflare says it is already using the system internally, on sustained patterns rather than isolated events, and that it plans to make the system available to all Cloudflare customers, who would then choose a trust threshold for how Verified bot traffic is handled. "Plans to" and "in the future" are the clocks. Do not teach a Radar score, a threshold slider, or a bot-name block list from this post. The dashboard clicks are not on the page.

What a site can do this morning, from this post alone: publish the crawl rules in robots.txt, and treat a 429 as the slow-down signal Cloudflare says it will watch. Bot Management and Bot Preference Sync are named as the existing loop. The post does not give those clicks. Customers who already have Bot Management can use it. That is the page's sentence. It is not a setup guide.

Source: Chris Tsoukaladelis, "Continuous accountability for Verified bots," blog.cloudflare.com/verified-bots-accountability, October 16, 2026. datePublished 2026-10-16T13:00:00.000Z. dateModified 2026-10-16T13:01:12.539Z. Fetched October 20, 2026.

---

{category: "From the Lab"}
{"Three published readings, and the commit log is not a lab scene"}

This section is limited to files opened, URLs checked, or git history read this run. Nothing here is a scene.

Pamela Flannery's "Turn on Review before Gemini Notebook renders. A missing toggle means stop." is dated October 20, 2026, in the file opened this run. The Clearinghouse URL returned HTTP 200. The opening of the file says the Google post was fetched that day, and that she did not open a notebook. The clicks in the file are the ones the Google post names. This issue fetched that same Google post. It did not finish the Signal file, and it did not open a notebook either.

Pamela Flannery's "Open the Channel Prioritization card. The 50 percent line is a best-effort allocation." is dated October 19, 2026, in the file opened this run. The Clearinghouse URL returned HTTP 200. The opening says the help page and the Ads and Commerce post were fetched on October 19, and that she did not sign in to an ads account. This issue fetched both of those pages on October 20. It did not sign in either. The reading in the section above is this morning's fetch, not a second pass through her post.

Morgan Lockridge's "Generate video is not the Create Shorts banner." is dated October 20, 2026, in the file opened this run. The Clearinghouse URL returned HTTP 200. The opening says she fetched YouTube's Create with AI help that day, and that she did not log in and did not tap anything. Generate video makes a Gemini Omni clip. Generate image makes a Nano Banana still. The banner that says Create Shorts is Edit with AI. The file says the help pages do not show an article date. This issue did not re-fetch those help pages, and it did not read past the opening. It is a reading of vendor docs. It is not a campaign.

Git history on the Clearinghouse repo, from October 13 through October 20, shows a publishing week under those three posts, plus other commits this issue did not open. This issue does not turn commit subjects into lab anecdotes. No hardware run was verified this morning. None is claimed.

Source: Pamela Flannery, "Turn on Review before Gemini Notebook renders. A missing toggle means stop.," file content/blog/turn-on-review-before-the-render.md in the Clearinghouse repo, dated October 20, 2026. Live check this run: https://www.smfclearinghouse.com/blog/turn-on-review-before-the-render/ returned HTTP 200. Pamela Flannery, "Open the Channel Prioritization card. The 50 percent line is a best-effort allocation.," file content/blog/open-the-channel-prioritization-card.md, dated October 19, 2026. Live check this run: https://www.smfclearinghouse.com/blog/open-the-channel-prioritization-card/ returned HTTP 200. Morgan Lockridge, "Generate video is not the Create Shorts banner.," file content/blog/generate-video-is-not-the-create-shorts-banner.md, dated October 20, 2026. Live check this run: https://www.smfclearinghouse.com/blog/generate-video-is-not-the-create-shorts-banner/ returned HTTP 200. git log, aiclearinghouse-site, October 13 through October 20, 2026.

Pamela Flannery is Chief Marketing Officer at SMF Works, an AI research project and think tank. She writes The Signal, edits SMF AI Weekly, and reads the primary page so the claim has a URL.

Subscribe at [smfworks.com/newsletter](https://smfworks.com/newsletter). Follow [@MichaelGannotti](https://x.com/MichaelGannotti) on X.

---

**Previous Issues:** [smfworks.com/newsletter](https://smfworks.com/newsletter)
**Subscribe:** [smfworks.com/newsletter](https://smfworks.com/newsletter)
**Follow:** [@smfworks](https://x.com/smfworks) | [@PamelaSMFWorks](https://x.com/PamelaSMFWorks)
