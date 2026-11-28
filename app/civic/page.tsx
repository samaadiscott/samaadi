import SiteNav from "@/components/SiteNav";

const blueFilter =
  "grayscale(1) brightness(0) saturate(100%) invert(13%) sepia(62%) saturate(2554%) hue-rotate(202deg) brightness(83%) contrast(109%)";

const caoTint = "saturate(0.9) sepia(0.12) hue-rotate(330deg)";

const initiatives = [
  {
    name: "YAOTW Maryland",
    emphasis: ["Anne Arundel County", "local opportunities"],
    detailEmphasis: ["youth advocacy", "take part"],
    context: "Anne Arundel County",
    description:
      "I lead YAOTW's Anne Arundel County chapter, connecting statewide youth-led work with local opportunities to get involved.",
    detail:
      "The point is to make youth advocacy feel less distant. Statewide conversations matter, but young people also need ways to take part where they live.",
    status: "Local chapter lead",
    logo: "/yaotw-logo.png",
    color: "#f0b05c",
    filter: undefined,
    href: "https://www.instagram.com/yaotw_maryland/",
    linkLabel: "Follow YAOTW Maryland",
  },
  {
    name: "Maryland Vote of Teens",
    emphasis: ["founding director", "civic participation"],
    detailEmphasis: ["more ways", "participate"],
    context: "Statewide",
    description:
      "As a founding director, I'm helping build a youth-led effort to make civic participation more accessible across Maryland.",
    detail:
      "The work is about creating more ways for young people to understand civic life, find opportunities, and participate in their communities.",
    status: "Founding director",
    logo: "https://vote-of-teens.org/img/logo.png",
    color: "#0B2A6B",
    filter: blueFilter,
    href: "https://vote-of-teens.org/chapters/md",
    linkLabel: "Explore Maryland chapters",
  },
  {
    name: "Civic Action Organization",
    emphasis: ["students", "turn ideas into action"],
    detailEmphasis: ["civic action", "take responsibility"],
    context: "New Village Academy",
    description:
      "I'm building a space where students can take on issues they care about and turn ideas into action at school and beyond.",
    detail:
      "The goal is to make civic action approachable: students should be able to show up, contribute, take responsibility, and see what their work changes.",
    status: "Founder",
    logo: "/cao-logo.png",
    color: "#CF1C25",
    filter: caoTint,
    href: undefined,
    linkLabel: undefined,
  },
];

const experiences = [
  {
    title: "Wonder Kids Books",
    emphasis: ["Founder & CEO", "four books"],
    detailEmphasis: ["more than 300 copies", "branding, outreach, and operations"],
    eyebrow: "Youth literacy initiative · 2022–2025",
    description:
      "I was the Founder & CEO of Wonder Kids Books, a youth literacy initiative built around books by kids for kids. I authored and published four books, including a collection.",
    detail:
      "The books sold more than 300 copies. I also managed branding, outreach, and operations, learning what it takes to build an organization around a clear mission.",
    link: "https://www.wonderhq.space/home",
    linkLabel: "Explore Wonder",
  },
  {
    title: "Student government",
    emphasis: ["Student Council President", "student representation"],
    detailEmphasis: ["organize meetings", "more visible"],
    eyebrow: "Wiley H. Bates Middle School",
    description:
      "I served as Student Council President and Acting Social Media Manager, helping lead student representation and build a consistent school communications presence.",
    detail:
      "That meant helping organize meetings, communicate student perspectives, work with school leadership, and make the council's work more visible to the school community.",
    link: "https://www.instagram.com/forabetterbates/",
    linkLabel: "See @forabetterbates",
  },
  {
    title: "Youth & Government",
    emphasis: ["Senator and Delegation President", "legislative process"],
    detailEmphasis: ["how policy", "work together"],
    eyebrow: "Greater Annapolis Y Leaders Club",
    description:
      "I served as a Senator and Delegation President, taking part in the legislative process and helping lead my delegation.",
    detail:
      "The experience gave me a closer look at how policy is debated, developed, and challenged, as well as what it takes to help a group work together.",
    link: "https://docs.google.com/document/d/1O4G7ykq1ZMIbDqXOqNZL_V0MBY2_lKA4WGC7KbEsyLY/edit?usp=sharing",
    linkLabel: "View my Youth & Government bill",
  },
];

const smobRoles = [
  {
    title: "AACPS SMOB Social Media Director",
    emphasis: ["social media role", "still taking shape"],
    status: "Current role",
    description:
      "I've taken on the county Student Member of the Board's social media role. The responsibilities and direction of the work are still taking shape.",
  },
  {
    title: "Maryland State SMOB Advisory Council",
    emphasis: ["council discussions", "student issues"],
    status: "Council member",
    description:
      "I take part in council discussions, share my perspective on student issues, and support outreach to county student leads and advisors.",
  },
];

function EmphasizedText({ text, emphasis }: { text: string; emphasis: string[] }) {
  const sentences = text.match(/[^.!?]+[.!?]+|[^.!?]+$/g) ?? [text];

  return (
    <>
      {sentences.map((sentence, index) => {
        const phrase = emphasis[index];
        if (!phrase) return <span key={index}>{sentence}</span>;
        const position = sentence.toLowerCase().indexOf(phrase.toLowerCase());
        if (position < 0) return <span key={index}>{sentence}</span>;
        return (
          <span key={index}>
            {sentence.slice(0, position)}
            <strong>{sentence.slice(position, position + phrase.length)}</strong>
            {sentence.slice(position + phrase.length)}
          </span>
        );
      })}
    </>
  );
}

const primaryCta =
  "group inline-flex min-h-14 items-center justify-center gap-3 bg-[#CF1C25] px-6 py-4 font-sans text-sm font-bold text-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-base";

const secondaryCta =
  "group inline-flex min-h-12 items-center justify-center gap-3 border border-white bg-[#171717] px-6 py-3 font-sans text-sm font-bold text-white transition-all duration-200 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-[#171717] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

const secondaryCtaOnDark = secondaryCta;

export default function CivicPage() {
  return (
    <>
      <SiteNav activePage="civic" />

      <main className="min-h-screen overflow-x-clip bg-[#F5F1EA] text-[#171717]">
        {/* THE OPENING */}
        <section className="relative px-[6vw] pb-[8vw] pt-[8vw]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage: "radial-gradient(#171717 1px, transparent 1px)",
              backgroundSize: "22px 22px",
              maskImage: "linear-gradient(to right, black, transparent 65%)",
            }}
          />

          <div className="relative mx-auto max-w-[1440px]">
            <p className="mb-7 font-sans text-sm font-bold uppercase tracking-[0.16em] text-[#A9161E]">
              Civic work
            </p>

            <h1 className="max-w-[1200px] font-display text-[clamp(3.8rem,10vw,9.5rem)] leading-[0.84] tracking-[-0.025em]">
              Making youth
              <br />
              programs around
              <br />
              Annapolis work
              <br />
              better<span className="text-[#CF1C25]">.</span>
            </h1>

            <div className="mt-10 grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
              <p className="max-w-md font-display text-[clamp(1.8rem,3.2vw,3rem)] leading-[0.98]">
                An invitation is nice. A real say is better.
              </p>
              <p className="max-w-3xl font-sans text-lg leading-[1.8] text-black/65">
                <EmphasizedText text="I'm interested in what happens when young people get more than an invitation to participate. When we get the chance to organize, make decisions, and take action." emphasis={["young people", "organize, make decisions"]} />
              </p>
            </div>
          </div>
        </section>

        {/* WHY IT MATTERS */}
        <section className="bg-[#171717] px-[6vw] py-[8vw] text-[#F5F1EA]">
          <div className="mx-auto grid max-w-[1440px] gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
            <div>
              <p className="font-sans text-sm font-bold uppercase tracking-[0.16em] text-[#E05A60]">
                The thing I'm trying to change
              </p>
              <h2 className="mt-6 font-display text-[clamp(3.4rem,7vw,6.5rem)] leading-[0.86]">
                Okay, but
                <br />
                can we
                <br />
                actually do
                <br />
                something?
              </h2>
            </div>

            <div className="flex flex-col justify-end gap-6 pb-1">
              <p className="font-sans text-lg leading-[1.8] text-white/75">
                <EmphasizedText text="Young people have opinions about our schools and communities. But having a voice and having a meaningful way to use it are two different things." emphasis={["opinions", "meaningful way"]} />
              </p>
              <p className="font-sans text-lg leading-[1.8] text-white/75">
                <EmphasizedText text="I want to help close that gap by building organizations, bringing people together, communicating ideas, and making institutions more responsive to the people they affect." emphasis={["close that gap"]} />
              </p>
              <p className="border-l-2 border-[#E05A60] pl-5 font-display text-[clamp(1.8rem,3vw,2.8rem)] leading-[1.05] text-white">
                You don't have to be great to make a difference. You just need to show up.
              </p>
            </div>
          </div>
        </section>

        {/* CURRENT INITIATIVES */}
        <section id="work" className="scroll-mt-8 px-[6vw] py-[8vw]">
          <div className="mx-auto max-w-[1440px]">
            <p className="mb-5 font-sans text-sm font-bold uppercase tracking-[0.16em] text-[#A9161E]">
              The work in motion
            </p>

            <div className="mb-12 grid gap-6 md:grid-cols-[1fr_0.65fr] md:items-end md:gap-16">
              <h2 className="font-display text-[clamp(3.8rem,8vw,7.5rem)] leading-[0.85]">
                Three things
                <br />
                taking shape.
              </h2>
              <p className="max-w-md font-sans text-base leading-7 text-black/55">
                <EmphasizedText text="Different settings, different challenges. The common thread is making it easier for young people to take part and make things happen." emphasis={["Different settings", "young people"]} />
              </p>
            </div>

            <div className="space-y-4">
              {initiatives.map((initiative, index) => (
                <article
                  key={initiative.name}
                  className="grid gap-6 rounded-2xl border border-black/10 bg-white/55 p-6 sm:p-8 md:grid-cols-[64px_0.8fr_1.2fr] md:gap-8 md:p-10"
                >
                  <div className="flex items-start justify-between md:block">
                    <span className="font-sans text-sm font-bold text-black/40">
                      0{index + 1}
                    </span>
                    <span
                      aria-hidden="true"
                      className="mt-1 h-3 w-3 rounded-full md:mt-5 md:block"
                      style={{ backgroundColor: initiative.color }}
                    />
                  </div>

                  <div>
                    <p className="font-sans text-xs font-bold uppercase tracking-[0.1em] text-black/45">
                      {initiative.context}
                    </p>
                    <h3 className="mt-3 font-display text-[clamp(2.4rem,4vw,4rem)] leading-[0.9]">
                      {initiative.name}
                    </h3>
                    <p
                      className="mt-4 font-sans text-xs font-semibold"
                      style={{ color: initiative.color }}
                    >
                      {initiative.status}
                    </p>
                  </div>

                  <div className="flex flex-col items-start justify-between gap-5">
                    <div className="flex w-full flex-col items-start gap-5 sm:flex-row">
                      <div
                        className={`flex h-16 w-20 shrink-0 items-center justify-center ${
                          initiative.name === "YAOTW Maryland"
                            ? "rounded-lg bg-white p-2"
                            : ""
                        }`}
                      >
                        <img
                          src={initiative.logo}
                          alt={`${initiative.name} logo`}
                          className="max-h-full max-w-full object-contain"
                          style={{ filter: initiative.filter ?? "none" }}
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="max-w-xl font-sans text-sm leading-7 text-black/65">
                          <EmphasizedText text={initiative.description} emphasis={initiative.emphasis} />
                        </p>
                        <p className="mt-3 max-w-xl font-sans text-sm leading-7 text-black/60">
                          <EmphasizedText text={initiative.detail} emphasis={initiative.detailEmphasis} />
                        </p>
                      </div>
                    </div>

                    {initiative.href && (
                      <a
                        href={initiative.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 border-b border-black/25 pb-1 font-sans text-sm font-bold transition-colors hover:border-[#CF1C25] hover:text-[#A9161E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#CF1C25]"
                      >
                        {initiative.linkLabel}
                        <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="border-y border-black/10 bg-[#DCE5E7] px-[6vw] py-[8vw]">
          <div className="mx-auto max-w-[1440px]">
            <p className="mb-5 font-sans text-sm font-bold uppercase tracking-[0.16em] text-[#164E63]">
              Before the current chapter
            </p>
            <h2 className="max-w-5xl font-display text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.86]">
              Learned by
              <br />
              getting involved.
            </h2>

            <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
              {experiences.map((experience, index) => (
                <article
                  key={experience.title}
                  className="border-t border-black/15 pt-5"
                >
                  <p className="font-sans text-xs font-bold text-[#164E63]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-5 font-display text-4xl leading-[0.95]">
                    {experience.title}
                  </h3>
                  <p className="mt-3 font-sans text-xs font-bold uppercase tracking-[0.08em] text-black/45">
                    {experience.eyebrow}
                  </p>
                  <p className="mt-5 font-sans text-sm leading-7 text-black/65">
                    <EmphasizedText text={experience.description} emphasis={experience.emphasis} />
                  </p>
                  <p className="mt-3 max-w-xl font-sans text-sm leading-7 text-black/60">
                    <EmphasizedText text={experience.detail} emphasis={experience.detailEmphasis} />
                  </p>
                  <a
                    href={experience.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 border-b border-black/25 pb-1 font-sans text-sm font-bold transition-colors hover:border-[#164E63] hover:text-[#164E63] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#164E63]"
                  >
                    {experience.linkLabel}
                    <span aria-hidden="true">↗</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROOF OF IMPACT */}
        <section className="border-y border-black/10 bg-[#F5F1EA] px-[6vw] py-[8vw]">
          <div className="mx-auto max-w-[1440px]">
            <p className="mb-5 font-sans text-sm font-bold uppercase tracking-[0.16em] text-[#A9161E]">Proof of impact</p>
            <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end md:gap-16">
              <h2 className="font-display text-[clamp(3.5rem,7vw,6.5rem)] leading-[0.86]">Reach, work,<br />results.</h2>
              <p className="max-w-2xl font-sans text-base leading-7 text-black/60">
                Titles tell you where I served. These numbers add context: what I produced, what reached an audience, and the scale of the school communities involved.
              </p>
            </div>
            <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              <article className="border-t border-black/15 pt-5">
                <p className="font-display text-5xl tabular-nums text-[#164E63]">711</p>
                <h3 className="mt-3 font-sans text-base font-bold">Wiley H. Bates Middle students</h3>
                <p className="mt-2 font-sans text-sm leading-6 text-black/60">Official school enrollment for 2024–25, during my Student Council presidency.</p>
                <a href="https://files-backend.assets.thrillshare.com/documents/asset/uploaded_file/4458/Aacps/29641b8b-d0cc-4879-b85f-44cda1edf1bc/Official_FARMS_Statistics_SY_2024-2025.pdf?disposition=inline" target="_blank" rel="noreferrer" className="mt-4 inline-flex font-sans text-xs font-bold text-[#164E63] underline underline-offset-4 hover:text-[#A9161E]">AACPS enrollment data ↗</a>
                <p className="mt-2 font-sans text-xs leading-5 text-black/40">School size, not a count of students directly reached.</p>
              </article>
              <article className="border-t border-black/15 pt-5">
                <p className="font-display text-5xl tabular-nums text-[#164E63]">2,085</p>
                <h3 className="mt-3 font-sans text-base font-bold">Annapolis High students</h3>
                <p className="mt-2 font-sans text-sm leading-6 text-black/60">Official school enrollment for 2024–25, during my news-anchor work at Annapolis High.</p>
                <a href="https://files-backend.assets.thrillshare.com/documents/asset/uploaded_file/4458/Aacps/29641b8b-d0cc-4879-b85f-44cda1edf1bc/Official_FARMS_Statistics_SY_2024-2025.pdf?disposition=inline" target="_blank" rel="noreferrer" className="mt-4 inline-flex font-sans text-xs font-bold text-[#164E63] underline underline-offset-4 hover:text-[#A9161E]">AACPS enrollment data ↗</a>
                <p className="mt-2 font-sans text-xs leading-5 text-black/40">School size, not a count of viewers.</p>
              </article>
              <article className="border-t border-black/15 pt-5">
                <p className="font-display text-5xl tabular-nums text-[#164E63]">49</p>
                <h3 className="mt-3 font-sans text-base font-bold">Student-council communications posts</h3>
                <p className="mt-2 font-sans text-sm leading-6 text-black/60">Produced during the 2024–25 school year while serving as Student Council President and Acting Social Media Manager.</p>
                <a href="https://www.instagram.com/forabetterbates/" target="_blank" rel="noreferrer" className="mt-4 inline-flex font-sans text-xs font-bold text-[#164E63] underline underline-offset-4 hover:text-[#A9161E]">See @forabetterbates ↗</a>
              </article>
              <article className="border-t border-black/15 pt-5">
                <p className="font-display text-5xl tabular-nums text-[#164E63]">300+</p>
                <h3 className="mt-3 font-sans text-base font-bold">Wonder Kids Books copies sold</h3>
                <p className="mt-2 font-sans text-sm leading-6 text-black/60">Four books published through a youth literacy initiative I founded and led from 2022–25.</p>
                <a href="https://www.wonderhq.space/home" target="_blank" rel="noreferrer" className="mt-4 inline-flex font-sans text-xs font-bold text-[#164E63] underline underline-offset-4 hover:text-[#A9161E]">Explore Wonder Kids Books ↗</a>
              </article>
              <article className="border-t border-black/15 pt-5">
                <p className="font-display text-5xl tabular-nums text-[#164E63]">100k+</p>
                <h3 className="mt-3 font-sans text-base font-bold">Cross-platform video views</h3>
                <p className="mt-2 font-sans text-sm leading-6 text-black/60">Creator-reported views across three platforms over three months. Public profiles show the work; the aggregate figure comes from platform analytics.</p>
                <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-sans text-xs font-bold text-[#164E63]">
                  <a href="https://www.youtube.com/@samaadicivic" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-[#A9161E]">YouTube</a>
                  <a href="https://www.tiktok.com/@samaadicivic" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-[#A9161E]">TikTok</a>
                  <a href="https://www.instagram.com/samaadicivic/" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-[#A9161E]">Instagram</a>
                </div>
              </article>
            </div>
            <p className="mt-10 border-t border-black/10 pt-5 font-sans text-xs leading-6 text-black/45">
              Context matters: enrollment measures the size of a school, not the audience for a broadcast. Posts measure output, views measure reported reach, and book sales are a direct result. I do not treat those as interchangeable.
            </p>
          </div>
        </section>

        {/* SMOB ROLES */}
        <section className="px-[6vw] py-[8vw]">
          <div className="mx-auto max-w-[1440px]">
            <p className="mb-5 font-sans text-sm font-bold uppercase tracking-[0.16em] text-[#A9161E]">
              New responsibilities
            </p>
            <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
              <div>
                <h2 className="font-display text-[clamp(3.5rem,7vw,6.5rem)] leading-[0.86]">
                  New rooms.
                  <br />
                  Bigger
                  <br />
                  conversations.
                </h2>
              </div>
              <div className="space-y-4">
                {smobRoles.map((role, index) => (
                  <article
                    key={role.title}
                    className="rounded-2xl border border-black/10 bg-white/45 p-6 sm:p-8"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="font-sans text-xs font-bold uppercase tracking-[0.1em] text-black/45">
                        {role.status}
                      </p>
                      <span className="font-sans text-xs font-bold text-[#A9161E]">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-3xl leading-tight">
                      {role.title}
                    </h3>
                    <p className="mt-3 font-sans text-sm leading-7 text-black/65">
                      <EmphasizedText text={role.description} emphasis={role.emphasis} />
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CIVIC MEDIA */}
        <section className="relative overflow-hidden bg-[#171717] px-[6vw] py-[8vw] text-[#F5F1EA]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-[7vw] -top-[8vw] h-[min(48vw,620px)] w-[min(48vw,620px)] rounded-full blur-[5vw]"
            style={{
              background:
                "radial-gradient(circle at 28% 32%, rgba(255,0,51,0.22), transparent 34%), radial-gradient(circle at 72% 30%, rgba(37,244,238,0.18), transparent 36%), radial-gradient(circle at 58% 76%, rgba(225,48,108,0.22), transparent 38%)",
            }}
          />
          <div className="relative mx-auto grid max-w-[1440px] gap-12 md:grid-cols-[1fr_0.8fr] md:items-center md:gap-20">
            <div>
              <p className="mb-6 font-sans text-sm font-bold uppercase tracking-[0.16em] text-[#E05A60]">
                Outside the meeting room
              </p>
              <h2 className="font-display text-[clamp(3.8rem,8vw,7.5rem)] leading-[0.84]">
                And yes,
                <br />
                I talk about it.
              </h2>
            </div>

            <div className="flex flex-col items-start">
              <div className="mb-8">
                <p className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.12em] text-white/45">
                  Video and social media
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-2xl border border-white/10 bg-[#FF0033]/15 text-[#FF0033]" aria-label="YouTube">
                    <svg viewBox="0 0 64 48" className="h-9 w-12" aria-hidden="true">
                      <path d="M58 8.2a7.5 7.5 0 0 0-5.3-5.3C48 1.6 32 1.6 32 1.6s-16 0-20.7 1.3A7.5 7.5 0 0 0 6 8.2C4.7 12.9 4.7 24 4.7 24s0 11.1 1.3 15.8a7.5 7.5 0 0 0 5.3 5.3C16 46.4 32 46.4 32 46.4s16 0 20.7-1.3a7.5 7.5 0 0 0 5.3-5.3C59.3 35.1 59.3 24 59.3 24s0-11.1-1.3-15.8Z" fill="currentColor" />
                      <path d="m26 33.5 14-9.5-14-9.5v19Z" fill="#171717" />
                    </svg>
                  </div>
                  <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-2xl border border-white/10 bg-[#25F4EE]/10 text-[#25F4EE]" aria-label="TikTok">
                    <svg viewBox="0 0 48 48" className="h-9 w-9" aria-hidden="true">
                      <path d="M28 5h7c.5 4.3 2.8 7.1 7 8v7c-3.2-.1-6.1-1.1-8.8-2.9v13.1c0 8.1-5.2 13-12.4 13C13.9 43.2 9 38.5 9 32c0-7 5.5-12.2 13.1-12.2 1 0 2 .1 2.9.4v7.3a8 8 0 0 0-2.9-.6c-3.2 0-5.5 2-5.5 5s2.2 5 5.2 5c3.5 0 5.2-2.1 5.2-6.1V5Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-2xl border border-white/10 bg-[#E1306C]/15 text-[#E1306C]" aria-label="Instagram">
                    <svg viewBox="0 0 48 48" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="3.2" aria-hidden="true">
                      <rect x="6" y="6" width="36" height="36" rx="10" />
                      <circle cx="24" cy="24" r="8.5" />
                      <circle cx="35" cy="13" r="2" fill="currentColor" stroke="none" />
                    </svg>
                  </div>
                  <p className="ml-1 font-display text-2xl">Samaadi Scott</p>
                </div>
              </div>

              <p className="max-w-lg font-sans text-base leading-7 text-white/65">
                <EmphasizedText text="I also make content under my own name. It's another way to explore how society works, share ideas, and get people asking questions they might not otherwise think to ask." emphasis={["make content", "asking questions"]} />
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://www.youtube.com/@samaadicivic"
                  target="_blank"
                  rel="noreferrer"
                  className={secondaryCtaOnDark}
                >
                  YouTube <span aria-hidden="true">↗</span>
                </a>
                <a
                  href="https://www.tiktok.com/@samaadicivic"
                  target="_blank"
                  rel="noreferrer"
                  className={secondaryCtaOnDark}
                >
                  TikTok <span aria-hidden="true">↗</span>
                </a>
                <a
                  href="https://www.instagram.com/samaadicivic/"
                  target="_blank"
                  rel="noreferrer"
                  className={secondaryCtaOnDark}
                >
                  Instagram <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* THE NEXT STEP */}
        <section className="bg-[#F5F1EA] px-[6vw] py-[clamp(5rem,9vw,8rem)]">
          <div className="mx-auto grid max-w-[1440px] gap-8 md:grid-cols-[1fr_0.8fr] md:items-end">
            <h2 className="font-display text-[clamp(3.8rem,8vw,7.5rem)] leading-[0.84]">
              Still more
              <br />
              to get done.
            </h2>
            <div className="flex flex-col items-start gap-6">
              <p className="max-w-xl font-sans text-base leading-7 text-black/65">
                <EmphasizedText text="This work is ongoing. There are more people to bring in, more questions to ask, and plenty left to figure out." emphasis={["ongoing", "more questions"]} />
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#work" className={primaryCta}>
                  <span>Let my work shape your perspective</span>
                  <span
                    aria-hidden="true"
                    className="inline-block origin-center transition-transform duration-200 ease-out group-hover:rotate-[-18deg] group-hover:scale-110"
                  >
                    😁
                  </span>
                </a>
                <a href="/ideas" className={secondaryCta}>
                  <span>What I think about</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
