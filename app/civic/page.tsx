
import SiteNav from "@/components/SiteNav";

const blueFilter =
  "grayscale(1) brightness(0) saturate(100%) invert(13%) sepia(62%) saturate(2554%) hue-rotate(202deg) brightness(83%) contrast(109%)";

const caoTint = "saturate(0.9) sepia(0.12) hue-rotate(330deg)";

const initiatives = [
  {
    name: "YAOTW Maryland",
    context: "Anne Arundel County",
    description:
      "I lead YAOTW's Anne Arundel County chapter, connecting statewide youth-led work with opportunities for other youth to get involved locally.",
    status: "Local chapter lead",
    logo: "/yaotw-logo.png",
    color: "#f0b05c",
    href: "https://www.instagram.com/yaotw_maryland/",
    linkLabel: "Follow YAOTW Maryland",
  },
  {
    name: "Maryland Vote of Teens",
    context: "Statewide",
    description:
      "As a founding director, I'm helping establish a youth-led effort to make civic participation more accessible to other youth across Maryland.",
    status: "Founding director",
    logo: "https://vote-of-teens.org/img/logo.png",
    color: "#0B2A6B",
    filter: blueFilter,
    href: "https://vote-of-teens.org/chapters/md",
    linkLabel: "Explore Maryland chapters",
  },
  {
    name: "Civic Action Organization",
    context: "New Village Academy",
    description:
      "I'm building a space where students can work on projects, take on issues we care about, and make a difference at school and beyond.",
    status: "Founder",
    logo: "/cao-logo.png",
    color: "#CF1C25",
    filter: caoTint,
  },
];

const experiences = [
  {
    title: "Student government",
    eyebrow: "Wiley H. Bates Middle School",
    description:
      "I was Student Council President and Acting Social Media Manager. I helped lead student representation and school communications, including building a consistent social media presence for the student council.",
    link: "https://www.instagram.com/forabetterbates/",
    linkLabel: "See @forabetterbates",
  },
  {
    title: "Youth & Government",
    eyebrow: "Greater Annapolis Y Leaders Club",
    description:
      "I was a Senator and Delegation President in Youth & Government, taking part in the legislative process and helping lead my delegation.",
    link: "https://docs.google.com/document/d/1O4G7ykq1ZMIbDqXOqNZL_V0MBY2_lKA4WGC7KbEsyLY/edit?usp=sharing",
    linkLabel: "View my Youth & Government bill",
  },
];

const smobRoles = [
  {
    title: "AACPS SMOB Social Media Director",
    status: "Current role",
    description:
      "I've taken on the county Student Member of the Board's social media role. The responsibilities and direction of the work are still taking shape.",
  },
  {
    title: "Maryland State SMOB Advisory Council",
    status: "Council member",
    description:
      "I take part in council discussions, sharing my perspective on student issues. I've also carried out outreach to county student leads and advisors as part of the council's work.",
  },
];

export default function CivicPage() {
  return (
    <>
      <SiteNav activePage="civic" />

      <main className="min-h-screen overflow-x-clip bg-[#F5F1EA] text-[#171717]">
        {/* INTRO */}
        <section className="relative px-[6vw] pb-[8vw] pt-[8vw]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "radial-gradient(#171717 1px, transparent 1px)",
              backgroundSize: "22px 22px",
              maskImage:
                "linear-gradient(to right, black, transparent 65%)",
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

            <div className="mt-10 max-w-3xl">
              <p className="font-sans text-lg leading-[1.8] text-black/65">
                I'm interested in what happens when us youth get more than
                an invitation to participate. When we get the opportunity
                to organize, make decisions, communicate, and take action.
              </p>
            </div>
          </div>
        </section>

        {/* PURPOSE */}
        <section className="bg-[#171717] px-[6vw] py-[8vw] text-[#F5F1EA]">
          <div className="mx-auto grid max-w-[1440px] gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
            <div>
              <p className="font-sans text-sm font-bold uppercase tracking-[0.16em] text-[#E05A60]">
                Why I do this
              </p>

              <h2 className="mt-6 font-display text-[clamp(3.4rem,7vw,6.5rem)] leading-[0.86]">
                Better
                <br />
                systems.
                <br />
                More
                <br />
                participation.
              </h2>
            </div>

            <div className="flex flex-col justify-end gap-6 pb-1">
              <p className="font-sans text-lg leading-[1.8] text-white/75">
                Us youth have opinions about our schools, our
                communities, and the world around us. But having something
                to say and having a way to act on it are two different things.
              </p>

              <p className="font-sans text-lg leading-[1.8] text-white/75">
                I want to help close that gap. That means building
                organizations, communicating ideas, bringing people together,
                and making the systems around us work better for{" "}
                <strong className="text-white">We the People.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* CURRENT INITIATIVES */}
        <section id="work" className="scroll-mt-8 px-[6vw] py-[8vw]">
          <div className="mx-auto max-w-[1440px]">
            <p className="mb-5 font-sans text-sm font-bold uppercase tracking-[0.16em] text-[#A9161E]">
              What I'm working on
            </p>

            <div className="mb-12 grid gap-6 md:grid-cols-[1fr_0.65fr] md:items-end md:gap-16">
              <h2 className="font-display text-[clamp(3.8rem,8vw,7.5rem)] leading-[0.85]">
                In the making.
              </h2>

              <div className="flex flex-col items-start gap-6">
                <p className="max-w-md font-sans text-base leading-7 text-black/55">
                  Three projects at different stages, from local organizing to
                  statewide work.
                </p>

                <a
                  href="#work"
                  className="group inline-flex items-center gap-[0.55rem] bg-[#CF1C25] px-[1.4vw] py-[1.05vh] font-sans text-[clamp(0.85rem,0.95vw,1rem)] font-bold text-white transition-all duration-200 hover:-translate-y-1"
                >
                  <span>Let my work shape your perspective</span>
                  <span className="text-[1.15rem] transition-transform duration-200 group-hover:rotate-12">
                    😁
                  </span>
                </a>
              </div>
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
                    <div className="flex items-start gap-5">
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
                          style={{
                            filter: initiative.filter ?? "none",
                          }}
                        />
                      </div>

                      <p className="max-w-xl font-sans text-sm leading-7 text-black/65">
                        {initiative.description}
                      </p>
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
              Work that shaped me
            </p>

            <h2 className="max-w-5xl font-display text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.86]">
              Not just titles.
              <br />
              Actual experience.
            </h2>

            <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-8">
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
                    {experience.description}
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

        {/* SMOB ROLES */}
        <section className="px-[6vw] py-[8vw]">
          <div className="mx-auto max-w-[1440px]">
            <p className="mb-5 font-sans text-sm font-bold uppercase tracking-[0.16em] text-[#A9161E]">
              New responsibilities
            </p>

            <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
              <div>
                <h2 className="font-display text-[clamp(3.5rem,7vw,6.5rem)] leading-[0.86]">
                  Statewide
                  <br />
                  involvement.
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
                      {role.description}
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
            className="pointer-events-none absolute right-0 top-0 h-[min(34vw,440px)] w-[min(34vw,440px)] rounded-full bg-[radial-gradient(circle_at_center,_rgba(207,28,37,0.2),_rgba(207,28,37,0)_70%)]"
          />

          <div className="relative mx-auto grid max-w-[1440px] gap-12 md:grid-cols-[1fr_0.8fr] md:items-center md:gap-20">
            <div>
              <p className="mb-6 font-sans text-sm font-bold uppercase tracking-[0.16em] text-[#E05A60]">
                Outside the meeting room
              </p>

              <h2 className="font-display text-[clamp(3.8rem,8vw,7.5rem)] leading-[0.84]">
                Ideas
                <br />
                worth
                <br />
                discussing.
              </h2>
            </div>

            <div className="flex flex-col items-start">
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-16 w-20 items-center justify-center rounded-xl bg-[#CF1C25]">
                  <svg
                    viewBox="0 0 64 48"
                    className="h-9 w-12"
                    aria-hidden="true"
                  >
                    <path
                      d="M58 8.2a7.5 7.5 0 0 0-5.3-5.3C48 1.6 32 1.6 32 1.6s-16 0-20.7 1.3A7.5 7.5 0 0 0 6 8.2C4.7 12.9 4.7 24 4.7 24s0 11.1 1.3 15.8a7.5 7.5 0 0 0 5.3 5.3C16 46.4 32 46.4 32 46.4s16 0 20.7-1.3a7.5 7.5 0 0 0 5.3-5.3C59.3 35.1 59.3 24 59.3 24s0-11.1-1.3-15.8Z"
                      fill="white"
                    />
                    <path d="m26 33.5 14-9.5-14-9.5v19Z" fill="#CF1C25" />
                  </svg>
                </div>

                <div>
                  <p className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-white/45">
                    Video and social media
                  </p>
                  <p className="mt-1 font-display text-2xl">
                    Samaadi Scott
                  </p>
                </div>
              </div>

              <p className="max-w-lg font-sans text-base leading-7 text-white/65">
                I also make content under my own name. It's another way to
                explore how society works, share ideas, and get people asking
                questions they might not otherwise think to ask.
              </p>

              <a
                href="https://www.youtube.com/@samaadicivic"
                target="_blank"
                rel="noreferrer"
                className="mt-12 inline-flex items-center gap-3 border border-white/30 px-5 py-4 font-sans text-sm font-bold text-white transition-colors hover:border-[#CF1C25] hover:bg-[#CF1C25] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Visit my YouTube channel
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}