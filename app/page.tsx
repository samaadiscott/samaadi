import SiteNav from "@/components/SiteNav";

const work = [
  {
    title: "Projects",
    text: "Things I’m building to turn ideas into something real.",
    href: "/projects",
  },
  {
    title: "Civic",
    text: "The work I do to understand, participate in, and improve the systems around me.",
    href: "/civic",
  },
  {
    title: "Ideas",
    text: "Questions, writing, commentary, and whatever I’m thinking through next.",
    href: "/ideas",
  },
];

const primaryCta =
  "group inline-flex min-h-14 items-center justify-center gap-3 bg-[#CF1C25] px-6 py-4 font-sans text-sm font-bold text-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-base";

const secondaryCta =
  "group inline-flex min-h-12 items-center justify-center gap-3 border border-white/40 bg-transparent px-6 py-3 font-sans text-sm font-bold text-white transition-all duration-200 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-[#171717] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

export default function Home() {
  return (
    <>
      <SiteNav activePage="home" />

      <main className="min-h-screen bg-[#F5F1EA] text-[#171717]">
        {/* HERO: restored to the deliberately designed version */}
        <section className="relative min-h-[65.4vh] overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/hero-background.jpg')" }}
          />
          <div aria-hidden="true" className="absolute inset-0 bg-black/38" />

          <div className="relative z-10 mx-auto flex min-h-[65.4vh] w-[90%] max-w-[1440px] items-end pb-[4.7vh] pt-[7.64vh]">
            <div className="w-full">
              <div className="mb-[1.8vh] w-fit max-w-[38.2%] rounded-[0.65rem] bg-[#DCE5E7] px-[1.2vw] py-[1.1vh]">
                <p className="font-sans text-[clamp(0.85rem,1.05vw,1.1rem)] font-semibold leading-[1.2] text-[#171717]">
                  Trying to figure out how society works?
                </p>
              </div>

              <h1 className="font-display text-[clamp(5rem,14.6vw,14rem)] leading-[0.76] tracking-[-0.02em] text-white">
                Samaadi
                <br />
                Scott
              </h1>

              <div className="mt-[2.36vh] ml-[38.2%] w-[61.8%] max-w-[760px]">
                <p className="font-sans text-[clamp(1rem,1.46vw,1.45rem)] font-medium leading-[1.45] text-white">
                  I’m interested in how <strong>society works</strong>, what <strong>people can build</strong>, and how we can make our systems work better and work for us.
                </p>

                <div className="mt-[1.8vh] flex flex-wrap items-center gap-[1.2vw]">
                  <p className="font-display text-[clamp(1.8rem,3.82vw,3.8rem)] leading-[0.88] tracking-wide text-white">
                    Worker. Thinker. Builder.
                    <br />
                    Civic entrepreneur!
                  </p>

                  <a href="#work" className={primaryCta}>
                    <span>Let my work shape your perspective</span>
                    <span aria-hidden="true" className="inline-block origin-center transition-transform duration-200 ease-out group-hover:rotate-[-18deg] group-hover:scale-110">😁</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* THE QUESTION */}
        <section id="question" className="scroll-mt-8 px-[4.7vw] py-[7.64vw]">
          <div className="mx-auto grid max-w-[1440px] gap-[3.82vw] md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="font-display text-[clamp(4rem,9.44vw,9rem)] leading-[0.82]">
                Wait. Who decided that?
              </h2>
            </div>

            <div className="flex flex-col justify-center">
              <p className="font-sans text-lg leading-[1.8] text-black/75">
                A lot of everyday life is shaped by <strong>everyday systems</strong> most of us <strong>didn’t design</strong>: schools, markets, technology, government, and the rules connecting them.
              </p>
              <p className="mt-5 max-w-[680px] font-sans text-base leading-[1.8] text-black/65">
                They can <strong>open doors</strong> and create opportunities. They can also leave people feeling shut out. When something isn’t working, it’s worth <strong>asking better questions</strong>.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {["Who makes the rules?", "Who benefits from them?", "Who can change them?"].map((question, index) => (
                  <div key={question} className="border-l-2 border-[#CF1C25] bg-white/70 px-4 py-4">
                    <span className="font-sans text-xs font-bold text-[#CF1C25]"> 0{index + 1} </span>
                    <p className="mt-2 font-display text-2xl leading-[1.05]">{question}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT: restored as its own section */}
        <section id="about" className="bg-[#171717] px-[4.7vw] py-[7.64vw] text-white">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-[5vw] md:grid-cols-[1fr_1fr]">
              <div>
                <h2 className="max-w-[700px] font-display text-[clamp(4rem,9.44vw,9rem)] leading-[0.82]">
                  I’m figuring it out
                  <br />
                  by doing it
                </h2>
                <p className="mt-[2.36vw] max-w-[25rem] font-sans text-[0.95rem] leading-[1.6] text-white/65">
                  Which is definitely a <strong>more interesting way</strong> to learn anyway!
                </p>
              </div>

              <div className="flex flex-col justify-center gap-6 font-sans text-base leading-8 text-white/75 md:text-lg">
                <p>
                  I’m interested in how <strong>society works</strong>, what <strong>people can build</strong>, and how we can make our systems work better and work for us.
                </p>
                <p>
                  That <strong>curiosity drives me</strong>. I build things, live and breathe the systems of society, <strong>make videos</strong>, write about ideas, and ask questions they’d rather you not ask.
                </p>
                <p>
                  You really don’t need to <strong>have everything</strong> figured out before you actually start. You learn by trying, building, getting things wrong, and <strong>making them better</strong>.
                </p>
                <p className="text-white">
                  So that’s <strong>what I’m doing</strong>. And this site is where I’m <strong>putting it together</strong>.
                </p>

                <div className="mt-4 flex flex-wrap gap-4">
                  <a href="#work" className={primaryCta}>
                    <span>Let my work shape your perspective</span>
                    <span aria-hidden="true" className="inline-block origin-center transition-transform duration-200 ease-out group-hover:rotate-[-18deg] group-hover:scale-110">😁</span>
                  </a>
                  <a href="/ideas" className={secondaryCta}>
                    <span>What I think about</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* THE WORK */}
        <section id="work" className="scroll-mt-8 px-[4.7vw] py-[7.64vw]">
          <div className="mx-auto max-w-[1440px]">
            <div className="flex flex-col gap-[3.82vw] md:flex-row">
              <div className="w-full md:w-[38.2%]">
                <h2 className="font-display text-[clamp(4rem,9.44vw,9rem)] leading-[0.82]">
                  What I’m
                  <br />
                  doing
                </h2>
                <p className="mt-[1.8vw] max-w-[25rem] font-sans text-base leading-[1.65] text-black/60">
                  An organized collection of things I care about, work on, and occasionally hyper-focus on!
                </p>
              </div>

              <div className="w-full md:w-[61.8%]">
                {work.map((item, index) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="group flex items-start justify-between gap-5 border-t border-black/15 py-7 transition-opacity hover:opacity-65 sm:gap-8 sm:py-9"
                  >
                    <div className="flex min-w-0 items-start gap-4 sm:gap-6">
                      <span className="pt-2 font-sans text-xs font-bold tabular-nums text-[#CF1C25]">0{index + 1}</span>
                      <div className="min-w-0">
                        <h3 className="mt-2 font-display text-[clamp(2.5rem,5vw,4.8rem)] leading-[0.95]">{item.title}</h3>
                        <p className="mt-4 max-w-[38rem] font-sans text-base leading-[1.7] text-black/60">{item.text}</p>
                      </div>
                    </div>
                    <span aria-hidden="true" className="mt-2 shrink-0 font-sans text-xl transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* THE OPEN ENDING */}
        <section className="bg-[#171717] px-[4.7vw] py-[clamp(5rem,10vw,9rem)] text-white">
          <div className="mx-auto max-w-[1440px]">
            <div className="w-full">
              <h2 className="font-display text-[clamp(4rem,10vw,9rem)] leading-[0.8]">
                Still figuring it out.
              </h2>
              <p className="mt-8 max-w-[900px] font-sans text-lg leading-[1.8] text-white/80">
                I’m still testing ideas, <strong>trying things out</strong>, and finding new questions worth chasing. You don’t have to agree with everything here. Just <strong>bring your curiosity</strong>.
              </p>
              <p className="mt-6 font-display text-3xl">There’s more to explore.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#work" className={primaryCta}>
                  <span>Let my work shape your perspective</span>
                  <span aria-hidden="true" className="inline-block origin-center transition-transform duration-200 ease-out group-hover:rotate-[-18deg] group-hover:scale-110">😁</span>
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
