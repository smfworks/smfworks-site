import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Epictetus — WisdomForge by SMF Works",
  description:
    "Free WisdomForge booklets on Epictetus for ages 5 to adult. Download PDFs, listen to audio chapters, and explore Stoic wisdom adapted for every age.",
  alternates: { canonical: "https://smfwisdomforge.com/epictetus" },
};

const ageGroups = [
  {
    label: "Little Thinkers",
    ages: "Ages 5–10",
    title: "The Boy Who Found Freedom Inside",
    slug: "elementary",
    description:
      "Gentle stories about a boy born into slavery who discovered something no one could take away: the freedom inside his own mind. Six chapters, activities, and conversation starters for young readers.",
    color: "#C9A96E",
    price: "Free PDF",
  },
  {
    label: "Young Minds",
    ages: "Ages 11–14",
    title: "The Boy with a Borrowed Name",
    slug: "middle",
    description:
      "Epictetus for middle-school readers: identity, choice, and the difference between what happens to you and what you make of it. Real-life scenarios, creative projects, and discussion questions.",
    color: "#7BA3A8",
    price: "Free PDF",
  },
  {
    label: "Emerging Adults",
    ages: "Ages 15–18",
    title: "The Boy with a Borrowed Name",
    slug: "high",
    description:
      "A sharper, more philosophical telling for older teens. Control, impressions, and the unbreakable center. Designed for readers ready to wrestle with hard questions.",
    color: "#B87D6A",
    price: "Free PDF",
  },
  {
    label: "Lifelong Learners",
    ages: "Adult",
    title: "The Examined Life",
    slug: "adult",
    description:
      "Epictetus as a serious practical philosophy for adults. No self-help padding. Six chapters on work, grief, anger, ambition, and what it means to live according to nature.",
    color: "#8A9A7B",
    price: "Free PDF",
  },
];

const audioClips = [
  { ch: 1, title: "The Boy with No Name" },
  { ch: 2, title: "The Circle You Control" },
  { ch: 3, title: "The Unbreakable Center" },
  { ch: 4, title: "The Two Arrows" },
  { ch: 5, title: "The Guest at the Banquet" },
  { ch: 6, title: "Practice Makes Strong" },
];

export default function EpictetusPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#0a0a0f]">
        <div className="absolute inset-0">
          <Image
            src="/images/wisdomforge-hero.png"
            alt="Ancient forge with philosopher bust"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/70 via-[#0a0a0f]/50 to-[#0a0a0f]" />
        </div>

        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#C9A96E] opacity-[0.08] blur-[150px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C9A96E]/10 border border-[#C9A96E]/20 mb-6">
            <span className="text-[#C9A96E] text-sm font-medium tracking-wide uppercase">WisdomForge — Stoic Series</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#F5F0E8] mb-6 leading-[1.1] tracking-tight">
            Epictetus
          </h1>

          <p className="text-xl md:text-2xl text-[#A89B8C] mb-4 max-w-2xl mx-auto leading-relaxed font-light">
            Born enslaved. Leg broken by his owner. Still became one of the most influential teachers in Rome.
          </p>

          <p className="text-base md:text-lg text-[#6B6560] mb-12 max-w-xl mx-auto leading-relaxed">
            Four free booklets. One for every age. Download, read, share, and keep.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#booklets"
              className="group relative px-8 py-4 bg-[#C9A96E] text-[#0a0a0f] font-semibold rounded-lg hover:bg-[#D4B87A] transition-all duration-300 shadow-lg shadow-[#C9A96E]/20 hover:shadow-[#C9A96E]/40"
            >
              <span className="flex items-center gap-2">
                Download the Free Booklets
                <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </span>
            </Link>
            <Link
              href="#audio"
              className="px-8 py-4 text-[#A89B8C] font-medium hover:text-[#C9A96E] transition-colors border border-[#2a2a2a] rounded-lg hover:border-[#C9A96E]/30"
            >
              Listen Free
            </Link>
          </div>
        </div>
      </section>

      {/* PHILOSOPHER INTRO */}
      <section className="py-20 md:py-28 px-6 bg-[#0f0f14] relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 items-start">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-[#2a2a35] bg-[#13131a]">
              <Image
                src="/images/booklets/epictetus-adult-cover.png"
                alt="Epictetus: The Examined Life — book cover"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6">
              <p className="text-[#C9A96E] text-sm font-semibold uppercase tracking-[0.2em]">About This Philosopher</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#F5F0E8] leading-tight">
                The teacher who said freedom begins inside the mind.
              </h2>
              <div className="space-y-4 text-[#A89B8C] text-lg leading-relaxed">
                <p>
                  Epictetus (c. 50–135 CE) was born enslaved in Hierapolis, taken to Rome as a child, and had his leg broken by his owner before he was a teenager. He was later freed, studied under the Stoic Musonius Rufus, and opened a school in Nicopolis that drew students from across the Roman Empire.
                </p>
                <p>
                  He wrote nothing himself. His student Arrian recorded the <em>Discourses</em> and compiled the <em>Enchiridion</em> — a short handbook of reminders. The central teaching is simple and demanding: some things are in our power (judgments, impulses, desires) and some things are not (bodies, property, reputation). Peace comes from learning the difference and committing to what we control.
                </p>
                <p className="text-[#C9A96E]">
                  WisdomForge adapts Epictetus across four age levels so the same core ideas grow with the reader.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKLETS */}
      <section id="booklets" className="py-24 md:py-32 px-6 bg-[#0a0a0f] relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C9A96E] text-sm font-semibold uppercase tracking-[0.2em] mb-4">The Booklets</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F0E8] mb-4">
              One philosopher. <span className="text-[#7BA3A8]">Four ages.</span>
            </h2>
            <p className="text-[#6B6560] text-lg max-w-2xl mx-auto">
              Each booklet covers the same six chapter themes, shaped for the age reading it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {ageGroups.map((group, i) => (
              <div
                key={i}
                className="group relative bg-[#13131a] border border-[#1e1e28] rounded-2xl p-6 hover:border-[#C9A96E]/30 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A96E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className="relative z-10 flex flex-col sm:flex-row gap-6">
                  <div className="relative w-full sm:w-40 aspect-[3/4] rounded-xl overflow-hidden border border-[#2a2a35] flex-shrink-0">
                    <Image
                      src={`/images/booklets/epictetus-${group.slug}-cover.png`}
                      alt={`Epictetus ${group.title} — ${group.ages}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: group.color }}
                      />
                      <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: group.color }}>
                        {group.label}
                      </span>
                    </div>
                    <p className="text-sm text-[#6B6560] mb-1">{group.ages}</p>
                    <h3 className="text-xl font-bold text-[#F5F0E8] mb-2 group-hover:text-[#C9A96E] transition-colors">
                      {group.title}
                    </h3>
                    <p className="text-[#6B6560] text-sm leading-relaxed mb-4 flex-grow">{group.description}</p>
                    <div className="flex flex-wrap gap-3 mt-auto">
                      <a
                        href={`/wisdomforge/downloads/epictetus-${group.slug}.pdf`}
                        download
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C9A96E] text-[#0a0a0f] text-sm font-semibold rounded-lg hover:bg-[#D4B87A] transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 3H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download PDF
                      </a>
                      <span className="inline-flex items-center px-4 py-2 text-[#8A9A7B] text-sm font-medium border border-[#2a2a35] rounded-lg">
                        {group.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-[#4a4a4a] text-sm mt-10">
            Paperback and Kindle editions are also available on{" "}
            <a
              href="https://www.amazon.com/s?k=Aiona+Edge+Epictetus"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C9A96E] hover:underline"
            >
              Amazon
            </a>
            .
          </p>
        </div>
      </section>

      {/* AUDIO */}
      <section id="audio" className="py-24 md:py-32 px-6 bg-[#0f0f14] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#7BA3A8] opacity-[0.04] blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#7BA3A8] text-sm font-semibold uppercase tracking-[0.2em] mb-4">Audio Series</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F0E8] mb-4">
              Listen to <span className="text-[#7BA3A8]">Epictetus</span>
            </h2>
            <p className="text-[#6B6560] text-lg max-w-2xl mx-auto">
              Twenty-four free audio chapters — six for each age group — read by George, a warm storyteller voice.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {["elementary", "middle", "high", "adult"].map((age) => (
              <div key={age} className="bg-[#13131a] border border-[#1e1e28] rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#F5F0E8] mb-4 capitalize">{age === "high" ? "Ages 15–18" : age === "adult" ? "Adult" : `Ages ${age === "elementary" ? "5–10" : "11–14"}`}</h3>
                <div className="space-y-3">
                  {audioClips.map((clip) => (
                    <div key={`${age}-${clip.ch}`} className="flex items-center gap-3 text-sm">
                      <span className="text-[#6B6560] w-6">{clip.ch}.</span>
                      <a
                        href={`/audio/epictetus/epictetus-${age}-ch0${clip.ch}.mp3`}
                        className="text-[#A89B8C] hover:text-[#7BA3A8] transition-colors truncate"
                      >
                        {clip.title}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-[#4a4a4a] text-sm mt-10">
            Full albums on Amazon Music, Apple Music, and Spotify will follow.
          </p>
        </div>
      </section>

      {/* CHAPTER THEMES */}
      <section className="py-24 md:py-32 px-6 bg-[#0a0a0f] relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C9A96E] text-sm font-semibold uppercase tracking-[0.2em] mb-4">The Arc</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F0E8] mb-4">
              Six chapters. <span className="text-[#B87D6A]">One path.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { n: 1, title: "The Boy with No Name", theme: "Identity & origins" },
              { n: 2, title: "The Circle You Control", theme: "Dichotomy of control" },
              { n: 3, title: "The Unbreakable Center", theme: "Prohairesis & inner freedom" },
              { n: 4, title: "The Two Arrows", theme: "Pain vs. suffering" },
              { n: 5, title: "The Guest at the Banquet", theme: "Impermanence & acceptance" },
              { n: 6, title: "Practice Makes Strong", theme: "Habit & daily exercise" },
            ].map((ch) => (
              <div key={ch.n} className="bg-[#13131a] border border-[#1e1e28] rounded-xl p-6 hover:border-[#C9A96E]/30 transition-colors">
                <span className="text-[#C9A96E] text-sm font-bold">Chapter {ch.n}</span>
                <h3 className="text-lg font-bold text-[#F5F0E8] mt-1 mb-2">{ch.title}</h3>
                <p className="text-[#6B6560] text-sm">{ch.theme}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / NEXT PHILOSOPHER */}
      <section className="py-24 md:py-32 px-6 bg-[#0f0f14] relative overflow-hidden">
        <div className="absolute top-[-50%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] bg-[#C9A96E] opacity-[0.05] blur-[200px] rounded-full pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F0E8] mb-6">Start with the free booklets.</h2>
          <p className="text-xl text-[#A89B8C] mb-8">
            Get the complete Epictetus series for every age group. No email required.
          </p>
          <Link
            href="#booklets"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A96E] text-[#0a0a0f] font-semibold rounded-lg hover:bg-[#D4B87A] transition-all shadow-lg shadow-[#C9A96E]/20"
          >
            Download All Four PDFs
          </Link>
          <p className="text-[#4a4a4a] text-sm mt-6">
            Next up: Marcus Aurelius — the emperor who journaled his way through war, plague, and grief.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <section className="py-12 px-6 bg-[#0a0a0f] border-t border-[#1e1e28]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🏛️</span>
            <div>
              <span className="text-[#F5F0E8] font-bold">WisdomForge</span>
              <span className="text-[#6B6560] text-sm ml-2">by The SMF Works Project</span>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/wisdomforge" className="text-[#6B6560] hover:text-[#C9A96E] transition-colors">
              WisdomForge Home
            </Link>
            <Link href="/projects" className="text-[#6B6560] hover:text-[#C9A96E] transition-colors">
              All Projects
            </Link>
            <Link href="/blog" className="text-[#6B6560] hover:text-[#C9A96E] transition-colors">
              Blog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
