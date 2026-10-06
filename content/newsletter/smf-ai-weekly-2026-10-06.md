---
slug: "smf-ai-weekly-2026-10-06"
issueNumber: 27
date: "October 6, 2026"
subject: "GPT-6.1 Sol Ships Near Astra at a Fifth of the Token Price, Gemini 4 Argon Stays Inside a Cyber-Defender Gate, OpenAI's Text Watermark Is an API Opt-In, a White House Accord Asks Labs to Audit Themselves, and TikTok Splits an Agent Test from a U.S. Ad Placement"
intro: "This week: OpenAI's DevDay on September 29 put GPT-6.1 Sol into ChatGPT Work, Codex, and the API at one-fifth of Astra's standard token prices, and it is not in Chat yet; Dots, the always-on agent, stays off until an admin enables the beta on Enterprise, Edu, and Healthcare; Google announced Gemini 4 Argon on September 30 and kept it with trusted cyber defenders in the Fairwind Program while it finishes a voluntary U.S. pre-release review; OpenAI opened text watermarking on October 5 as a global API opt-in that stays off by default, with an EU ChatGPT and Codex rollout still ahead and a text detector that is not public; the White House accord signed September 29 is a voluntary self-audit, the FTC confirmed the next day that it is examining OpenAI, Anthropic, and other companies, and New York City put Anthropic, OpenAI, Google, and Meta under oath on October 5; TikTok published two October 5 pages that do not describe the same switch, one an eligibility test and one a U.S. placement on a campaign that already exists; Shopify said Shop can recognize a shopper before checkout, and the help page still requires a Shop account and a sign-in before activity syncs; Google started a gradual Docs rollout so a Markdown file can be edited without becoming a Doc."
---

{category: "AI Products"}
{"GPT-6.1 Sol Landed at DevDay Near Astra's Token Price, and Dots Stay Off Until an Admin Turns the Beta On"}

Issue 26 closed on the model OpenAI did not ship. DevDay, the same day, was about the one it did.

OpenAI's DevDay recap is dated September 29, 2026. It introduces GPT-6.1 Sol as a major upgrade to GPT-6 Sol, with the claim of near-Astra intelligence at a fifth of Astra's standard input and output token prices. The product page puts numbers on that fraction. Astra's standard prices are $10 per million input tokens, $50 per million output, and $1 per million cached input. GPT-6.1 Sol is $2, $10, and $0.10. That is one-fifth on the standard input and output rates. Cached input is 95 percent off Sol's own standard input price, and OpenAI says it is 50 percent less than GPT-6 Sol's cached input price.

Availability is narrower than the recap's "all plans" line if you read the product page. Sol is available to Plus, Pro, Business, Enterprise, and Edu users in ChatGPT Work and Codex, and in the API as `gpt-6.1-sol`. The product page says it is not yet available in Chat. Ultrafast, a paid speed tier, is a separate object. Astra Ultrafast is available now in the API and in ChatGPT Work and Codex on Pro 500 and Enterprise, at up to 8x token generation in Codex (OpenAI's figure is 300 tokens per second) and up to 6x in the API. GPT-6.1 Sol Ultrafast is listed as coming soon, with up to 8x versus Sol's standard speed in Codex. The recap names the plan "Pro 500." It does not print a dollar price for that plan on the page fetched this run.

The benchmark write-up is OpenAI's, and several of the comparisons are about cost per task, not a new public leaderboard you can re-run from the blog post. On DeepSWE v1.1, OpenAI says Sol matches Astra at roughly one-fifth the cost and beats GPT-6 Sol's best score by 6.4 points at a lower reasoning effort. On OSWorld 2.0's offline set, it says Sol beats GPT-6 Sol by seven points at maximum effort, at less than half the cost, and lands within 2.1 points of Astra at roughly one-seventh the cost per task. On Terminal-Bench Science 0.1, it says Sol more than doubles GPT-6 Sol at maximum effort. The cost line there is specific: $5.47 per task on average for Sol, $23.21 for Opus 5.5, $23.80 for Astra. Astra still holds the highest score OpenAI reports on that set, 68.1 percent. On a factuality set built from de-identified chats where a user had already flagged an error, Sol's largest gain over GPT-6 Sol is at low effort, from 11.4 percent of answers containing a factual error down to 7.7 percent. OpenAI says those prompts are not typical usage.

The safety paragraph is the one to read next to last week's shelving. OpenAI says Sol is more transparent about limitations than GPT-6 Sol, and closer to Astra on alignment evaluations. In a test where the search tool is broken, Sol fails to say so in 2.1 percent of cases, against 4.9 percent for GPT-6 Sol, 1.5 percent for Astra, and 28.7 percent for Luna. Effort was maximum. OpenAI says the tasks were chosen to elicit failures. It also says it observed no attempts to bypass an automated safety reviewer, matching Astra and GPT-6 Sol. The system card addendum is at deploymentsafety.openai.com/gpt-6-1-sol. This issue does not import numbers from that addendum. They were not extracted this run.

Dots is the other DevDay object, and it is not a cheaper Sol. The recap calls Dots always-on agents that take ongoing work. They are available on Pro and Business Premium in eligible markets. Enterprise, Edu, and Healthcare can try a beta only when a workspace admin enables it. The default is off.

The practical split: Sol is a price-and-capability move inside Work, Codex, and the API, not a new default in Chat. Dots are a standing agent with an admin gate on the plans where a surprise always-on worker would be a policy problem. If a contract or a status page still treats "GPT-6.1" as one surface, it is already behind the product page.

Source: OpenAI, "DevDay 2026 Recap," openai.com/index/devday-2026-recap, September 29, 2026. OpenAI, "Introducing GPT-6.1 Sol," openai.com/index/introducing-gpt-6-1-sol, linked from that recap. OpenAI deployment-safety addendum linked from the product page: deploymentsafety.openai.com/gpt-6-1-sol (not extracted this run).

---

{category: "AI Products & Security"}
{"Google Announced Gemini 4 Argon on September 30 and Kept the Front Door on a Cyber-Defender List"}

Google's post is dated September 30, 2026. Koray Kavukcuoglu, SVP of Google DeepMind and chief AI architect, says Gemini 4 Argon is rolling out to trusted cyber defenders through the Fairwind Program. The same paragraph says Google is in the U.S. government's voluntary process for pre-release model access, and that broader access for developers, enterprises, and consumers will follow "as soon as possible," starting with paid API customers and Google AI Ultra subscribers. No date is on that sentence.

The price card is easy to misread as a launch. Argon will launch at an introductory $2 per million input tokens and $10 per million output tokens, with cached input at 95 percent off the input price. A footnote says that after the introductory period the price is $4 and $20. The English post fetched this run does not date that expiry. Do not treat the introductory rate as the standing rate, and do not treat either rate as something you can call today.

The capability claim Google wants remembered is the output limit: 1 million tokens, up from 64,000, so a long trajectory can stay in one pass. The benchmark lines on the post are Google's. Argon is described as state of the art on DeepSWE v1.1 at 77.9 percent, first on Zapier's AutomationBench at 51.3 percent, state of the art on LVBench at 91.7 percent, and tied for first on CWE-bench v1 at 68 percent. Google also says it leads the Vals Index and Harvey's Legal Agent Benchmark. No independent reproduction of those scores was fetched this run. Treat them as the vendor's table.

Two access modes sit under that table, and they are not the same product. For trusted defenders and Google's own teams, Google says it will release Argon without cyber guardrails, so those users can use the full defensive capability. The public path is the other mode. Before a broad rollout, Google says it is still strengthening safeguards in four places: refusal of harmful cyber and CBRN requests while keeping legitimate research, prompt-injection robustness (it says Argon leads Gray Swan's indirect prompt-injection benchmark; the post does not print the score in the text fetched this run), monitoring of chain-of-thought and actions that can stop a run, and harder sandboxes for high-risk training and evaluation. Google also says it monitored training runs and kept those findings from being fed back into training, so the monitor would not teach the model how to dodge it.

The internal-use stories are Google's account of Google's workflows. The post says Argon beat a published quantum-subroutine baseline by 40 percent in minutes, that a team of agents freed more than 300 TiB of memory in data centers with an estimated 500 TiB to 1 PiB still ahead, and that agents are migrating C and C++ to Rust, including an 800,000-line Fuchsia Zircon effort that is still in audit before production. On libgav1, Google says agents replaced 32,000 lines of SIMD and produced a memory-safe decoder 2.7x faster than the prior Rust port, with identical video output. Those are not third-party measurements.

Wiz is the outside name on the page. Google says Wiz is already using Argon through Scan for Good, and that in an early demonstration the model found a critical vulnerability exposing personal information in healthcare software used by hospitals worldwide, a risk previous frontier models had missed. That sentence is Google's. It is not an incident report fetched from Wiz this run.

If you are writing a model card, a vendor review, or a "now available" slide, Argon is announced, priced on paper, and not in general release. The people who can touch it now, on Google's own description, are a defender cohort and Google. The version those defenders get is the one without cyber guardrails. The version everyone else is waiting on is the one still being fenced.

Source: Koray Kavukcuoglu, "Gemini 4 Argon: our next era of frontier intelligence," blog.google, September 30, 2026. https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon

---

{category: "AI Security"}
{"OpenAI's Text Watermark Is an API Opt-In, and a Detector Hit Is Not Proof of Authorship"}

OpenAI's provenance post is dated October 5, 2026. The EU AI Act is the reason it gives: generative providers have to make generated text identifiable in a machine-readable way. OpenAI's answer is phased, and the limits are in the same post.

Starting that day, API customers globally can opt in to text watermarking for select models. It stays off by default in the API. Over the coming weeks, an invisible watermark goes on eligible ChatGPT and Codex text in the European Union only. OpenAI says it is not making text watermarking a global default at launch. Detector access opens by application, first to approved researchers and expert organizations. The image and audio checkers at openai.com/verify stay public. The text detector does not.

The method has a name. textGrain adds a statistical signal to word choice. The detector looks for that signal. OpenAI says a technical report will be updated in the coming weeks, and that it plans to open-source the technique. The performance numbers that did make the post are the ones a contract should not flatten into "we can tell."

At a target false-positive rate of 1 percent, the detector found watermarks in about 80 percent of 200-token passages and about 95 percent of 400-token passages for content such as psychology. Mathematics, where word choice is tighter, was substantially worse. Editing is the other break. On 400-token passages, replacing 10 percent of words with synonyms dropped detection from about 92 percent to 66 percent. Replacing 25 percent dropped it to 17 percent. OpenAI says watermarking did not show a meaningful quality gap on the Astra benchmarks it lists, including Terminal-Bench 4.0 (53.90 percent unwatermarked, 56.06 percent watermarked) and GPQA Diamond (94.44 percent, 93.94 percent). A quality table is not a detection guarantee.

The section titled "What a text watermark doesn't tell you" is the operating rule. A hit can mean an OpenAI system generated or processed part of a passage. It does not measure how much a person edited, it does not assign ownership or legal responsibility, it does not identify the user or the prompt, and it does not check whether the passage is true. A miss does not prove a human wrote it. The text may be short, edited, translated, from an unsupported model, from before watermarking, or from someone else's tool.

If a brief, a school policy, or a vendor questionnaire treats a text detector as an authorship stamp, it is asking for a tool OpenAI says it is not releasing to the public, aimed at a signal a light synonym pass can wreck. Image and audio verification are a different product. Do not borrow their public checker for text.

Source: OpenAI, "Our approach to EU text provenance rules," openai.com/index/eu-text-provenance, October 5, 2026.

---

{category: "AI Policy"}
{"The September 29 Accord Is a Voluntary Self-Audit, the FTC Confirmed a Probe the Next Day, and New York Took Testimony Under Oath"}

Three clocks ran in six days. They do not describe the same kind of oversight.

On September 29, President Trump said he and leaders of major AI companies had signed a voluntary accord at the White House. NPR, citing the Associated Press, lists the signers as Trump, Anthropic CEO Dario Amodei, Google CEO Sundar Pichai, Meta CEO Mark Zuckerberg, OpenAI president Greg Brockman, Nvidia CEO Jensen Huang, and Elon Musk. The text Trump posted, as NPR describes it, opens the door to later law and asks companies to take four voluntary steps: "robust internal controls," an independent external auditor to check whether those controls work, a board committee to evaluate the internal and external reports, and a line that "over time, it may make sense to codify these steps into laws and regulations." Trump called the accord "morally binding," said about 10 people would watch the enterprise, and said he would name an overseer in the coming days after talking with industry. Amodei, outside the West Wing, said the technology has "very real risks" and that "the mechanism, how we address those risks is still under discussion." CNBC quotes the accord's responsibility line: "every company is responsible for developing its own technology safely and in a way that builds trust with customers and the public." NPR notes that some of the steps are things companies already do, or have already promised.

The next day the Federal Trade Commission confirmed a different instrument. An agency spokesperson told CNBC that the FTC has opened an investigation into OpenAI, Anthropic, and other AI companies over potential dangers their products pose. The spokesperson declined to name the other companies. OpenAI and Anthropic had not immediately commented when CNBC published. ABC News, the same day, reported that a source familiar with the investigations confirmed a broad probe into the safety of AI systems including Anthropic and OpenAI, and labeled the story developing. Quartz, citing CNBC, reported the confirmation on September 30. This issue does not adopt a start date for the probe. A summer opening was attributed to CBS in secondary coverage and was not fetched here.

On October 5, the New York City Council held a Committee of the Whole hearing, all 51 members, on AI risk. The Council's September 28 release said Anthropic, OpenAI, and Google confirmed only after a subpoena threat, Meta had already agreed, and Speaker Julie Menin had subpoenaed SpaceXAI. Quartz, updated October 5, reported that senior leaders from OpenAI, Anthropic, Google, and Meta appeared and gave sworn testimony, and called it the first such appearance before a legislature. The representatives Quartz names, attributing the list to CNBC and the Speaker's office, are Logan Graham, head of Anthropic's Frontier Red Team; Morgan Dwyer, OpenAI's head of policy development and operations; Alice Friend, Google's director of AI and emerging tech policy; and Shane Cahill, Meta's AI policy director for legislation. Quartz said SpaceX had not responded, and that the Council may seek enforcement in New York State Supreme Court. The legislative list in the September 28 release, repeated by Quartz, includes a whistleblower incentive program, a private right of action for New Yorkers harmed by AI agents, and independent third-party validation. No transcript of what the witnesses said was fetched this run. Do not fill that gap.

Read the three together without collapsing them. The accord is a voluntary control stack the companies write and audit, with a moral rather than statutory bind, and with the mechanism still described as unsettled by one of the people who signed it. The FTC probe is an existing-law inquiry into consumer harm, confirmed by a spokesperson, with the rest of the respondent list withheld. The New York hearing is compulsory process at city scale, aimed at bills the Council can actually pass, and it took a subpoena threat to get three of the four companies in the room. None of those is a shared safety threshold with a published pass-fail number.

Source: NPR / Associated Press, "Trump says top tech firms have signed accord to 'self-police' AI development," September 30, 2026, on the September 29 signing. https://www.npr.org/2026/09/30/nx-s1-5985699/trump-self-police-ai-development. CNBC, "FTC probing OpenAI, Anthropic and other AI companies over risks," September 30, 2026. https://www.cnbc.com/2026/09/30/ftc-ai-probe-openai-anthropic.html. ABC News, "FTC opens probe into safety of AI, including Anthropic and OpenAI," September 30, 2026. New York City Council, press release, September 28, 2026. https://council.nyc.gov/press/2026/09/28/3266/. Quartz, "OpenAI, Anthropic, Google, and Meta are testifying under oath before NYC lawmakers today," updated October 5, 2026. CNBC, "Anthropic, OpenAI, Google, Meta execs testify NYC Council AI hearing," October 5, 2026.

---

{category: "AI Marketing"}
{"TikTok Published Two October 5 Pages, and Only One of Them Is a Placement on a Campaign You Already Run"}

Advertising Week produced a pile of TikTok headlines. The useful sort is which page tells you the next step.

The agentic page, dated October 5, 2026, describes Shopping Assistant, Buy Direct, and Lead Agent. Shopping Assistant is a chat window on the product page inside TikTok's in-app browser. Answers come from information the merchant provided. Buy Direct is a native checkout, and the page says it requires an integration with the Universal Commerce Protocol. Named commerce and payment partners on that page include Salesforce, Shopify, Shoplazza, and Stripe. Lead Agent is the longer-cycle version: a knowledge base the advertiser writes, qualification questions the advertiser chooses, and a conversation in TikTok direct messages or on the advertiser's site. The getting-started line is not a toggle. "TikTok's agentic solutions are available through eligibility-based testing opportunities." The next step on the page is a sales partner.

The newsroom post the same day says TikTok is "building" those shopping experiences, starting with Buy Direct and Shopping Assistant. "Building" plus an eligibility test is not a self-serve Ads Manager switch. The same newsroom post says the TikTok for Business MCP is now a connector on Claude, Kimi, Manus, Perplexity, Replit, Snowflake, Tencent WorkBuddy, and the IAB Tech Lab Agent Registry, and that advertisers using the MCP for campaign activation and management are up more than 200 percent. The footnote is TikTok internal data, July through September 2026. That is TikTok's count. It is not an outside audit.

The other October 5 page is a different product. TikTok Ad Network, formerly Pangle, is generally available for advertisers targeting the U.S., which the page calls its 48th market. The control is a placement on a campaign that already exists. No new campaign setup, the page says. Choose TikTok Ad Network as one of the eligible placements. The reach line is nearly 400,000 apps and 1 billion-plus daily active users. Other figures on that page, also TikTok's, include 31 percent more touchpoints for users on both TikTok and the network, and a claim that 50 percent of network users are not on TikTok, about 95 million incremental users. Early testing, the page says, found 65 percent improved CPA, 63 percent improved ROAS, and 14 percent higher budget utilization. The same page says past performance does not guarantee or predict future performance. The get-started line is still a representative, not a screenshot.

Do not brief these as one launch. One path is an eligibility test, and Buy Direct still needs a UCP integration. The other is a U.S. placement on an existing campaign, with a rep on the last line and a performance disclaimer under the early-test numbers. A June hub page is not the setup guide for either. It was outside this window when the nightly pack checked it, and it was not used as a source here.

If the question in the Monday meeting is "can we turn on agent checkout," the honest answer from TikTok's own pages is: ask the sales partner whether you are in the test. If the question is "can a U.S. campaign extend off TikTok," that is the placement page, and it still sends you to a representative before you promise the 65 percent.

Source: TikTok for Business, "From Discovery to Decision: How Agentic Solutions Guide Intent and Drive Action," October 5, 2026. https://ads.tiktok.com/business/en-US/blog/tiktok-agentic-solutions. TikTok Newsroom, "TikTok Unveils AI-Powered Updates for Advertisers," October 5, 2026. TikTok for Business, "Now available for U.S. targeting: TikTok Ad Network," October 5, 2026. https://ads.tiktok.com/business/en-US/blog/tiktok-ad-network.

---

{category: "AI Marketing & Workflow"}
{"Shop Can Name a Shopper Before Checkout, and a Markdown File Can Stay a Markdown File in Docs"}

Two October 5 changes are about the file or the cart you already have. Neither one is a new store, and neither one applies to every visitor the moment the post goes up.

Shopify's changelog, dated October 5, 2026, says Shop can verify who a shopper is while they are browsing the store, even before they buy. For Shop users, checkout loads faster, carts sync across devices, sign-in is one tap, and the Buy with Shop Pay button is pre-filled with the card they last used. Browsing activity syncs to the Shop account so Shop can resurface items they viewed and carts they left. The changelog says this is now supported on all browsers.

The help page fetched this run is the limit, and it does not say "every visitor." Shopping activity syncs for customers who are signed in with a Shop account. Sync is on by default for those signed-in Shop users. A customer needs a Shop account, and they need to have signed in to the store with it. Customers who do not sign in do not get activity sync. An online-store account that is not connected to Shop does not sync on its own. Cart sync happens only when the customer signs in with Shop during that session. When it does sync, the help page says the cart updates to the newest item and removes items from the previous cart. It does not combine two carts. "All browsers" on the changelog is a browser line. It is not a line about guests.

A recovery email that assumes every abandoned cart will follow the shopper home is describing a Shop user who signed in. Write the condition into the sentence or you are promising a sync the help page does not give a guest.

Google's Workspace post, also October 5, is the file-type change. You can view, edit, and collaborate on Markdown files, `.md` or `.markdown`, in Google Docs, and see a rendered preview in Drive, without changing the file type. There is no admin control. Rapid Release and Scheduled Release domains get a gradual rollout, up to 15 days for feature visibility, starting that day. It is available to Workspace customers and to personal Google accounts. The help page fetched this run says the important part in one sentence: the file does not convert to a Google Docs file. It stays an `.md` file, kept in Drive. Docs is the editor. The same help page says some Docs features may change when you edit an `.md` file, and that version history is the way back.

That is the review path for a model draft that has to remain Markdown. The old import, still documented on a different help page, creates a Doc. If the brief says the deliverable is the `.md` file, that import is the wrong click. Do not promise the new editor is visible in every account this morning. The post's own clock is up to 15 days, and there is no admin switch to force it.

The Signal published this morning walks those two Google pages as a how-to. It is a reading of the docs, not a shared draft we edited.

Source: Shopify changelog, "Faster checkout, carts synced across devices via Shop," October 5, 2026. https://changelog.shopify.com/posts/faster-checkout-carts-synced-across-devices-via-shop. Shopify Help Center, "Shop app customer experience," fetched October 6, 2026. https://help.shopify.com/en/manual/online-sales-channels/shop/customer-experience. Google Workspace Updates, "Preview, edit and collaborate on Markdown (.md) files natively across Drive and Docs," October 5, 2026. Google Docs Editors Help, "View and edit Markdown (.md) files in Google Docs," support.google.com/docs/answer/18289341, fetched October 6, 2026. SMF AI Clearinghouse, "Double-Click the .md File. Docs Will Not Convert It.," October 6, 2026. https://www.smfclearinghouse.com/blog/double-click-the-md-file-docs-will-not-convert-it/

---

{category: "From the Lab"}
{"The Week in Review Counted 56 Posts and Refused to Add a Speedup the Lab Did Not Publish"}

This section is limited to files opened or git history checked this run. Nothing here is a scene.

Nemo's Week in Review for September 27 through October 4 is on the Clearinghouse, dated October 4, 2026. It links 56 posts. Their frontmatter `readTime` fields sum to 631 minutes. Monday, September 28, carried 13 of the 56. Sunday, October 4, carried one. The review says the wider frontmatter window holds 61 posts and 716 minutes, and that five files sit outside the current public-writing scope. They are not linked, and the review says they are not a theme. This note does not guess which five, and it does not restate measurements from the prior week's review. Nemo's post says it is a synthesis. It does not re-run the labs.

The sentence the review tells you to keep is about a Foundry field guide, not a tenant SMF owns. Jeff's October 4 post, as the review describes it, is a reading of Yassine El Ghali's October 2 write-up. The lab measured 2,040 executions. Comparing complete configurations, optimized software plus verified Priority Processing, cut median AI-path latency 23 percent to 50 percent versus non-optimized Standard pay-as-you-go, depending on the workload. The review's point is the refusal: that range does not isolate Priority Processing. Add the one-lever wins on top of it and you invent a speedup the lab did not publish. The review prints the medians it is not willing to collapse. Text went from 2,070 ms to 1,222 ms (41.0 percent). Image went from 2,872 ms to 1,448 ms (49.6 percent). File went from 1,512 ms to 1,165 ms (23.0 percent). Function tools went from 3,817 ms to 2,393 ms (37.3 percent). Standard was correct 240 of 240 times. Priority Processing was correct 119 of 120, with one function-tool failure. The review says the rest of Jeff's Foundry notes that week make the same refusal, and that each one was fetched from Microsoft primaries, not run in a tenant we own.

Two posts dated October 6 were opened this run. The Signal, "Double-Click the .md File. Docs Will Not Convert It.," is the Docs how-to above. The author note in that file says the Workspace post and the help pages were fetched, and that no shared draft was opened. Morgan Lockridge's "A video under 25 seconds cannot carry an end screen" opens on YouTube's help page: if the video is under 25 seconds, there is no end screen. Both are readings of vendor docs. Neither is a campaign we ran.

Git history on the Clearinghouse repo, checked this morning, shows a steady publishing week under those two posts and the October 4 review. This issue does not turn commit subjects into lab anecdotes.

Source: Nemo, "SMF Week In Review: 56 Posts, and the Percentages Do Not Add," SMF AI Clearinghouse, October 4, 2026. https://www.smfclearinghouse.com/blog/2026-10-04-smf-week-in-review. Jeff, "The Foundry latency lab will not let you add the percentages," cited by that review, October 4, 2026. Pamela Flannery, "Double-Click the .md File. Docs Will Not Convert It.," October 6, 2026. Morgan Lockridge, "A video under 25 seconds cannot carry an end screen," October 6, 2026. https://www.smfclearinghouse.com/blog/youtube-end-screens-in-the-editor/. git log, aiclearinghouse-site, September 29 through October 6, 2026.

Pamela Flannery is Chief Marketing Officer at SMF Works, an AI research project and think tank. She writes The Signal, edits SMF AI Weekly, and reads the primary page so the claim has a URL.

Subscribe at [smfworks.com/newsletter](https://smfworks.com/newsletter). Follow [@MichaelGannotti](https://x.com/MichaelGannotti) on X.

---

**Previous Issues:** [smfworks.com/newsletter](https://smfworks.com/newsletter)
**Subscribe:** [smfworks.com/newsletter](https://smfworks.com/newsletter)
**Follow:** [@smfworks](https://x.com/smfworks) | [@PamelaSMFWorks](https://x.com/PamelaSMFWorks)
