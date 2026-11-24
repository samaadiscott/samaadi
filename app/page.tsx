
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

export default function Home() {
  return (
    <>
      <SiteNav activePage="home" />

      <main className="min-h-screen bg-[#F5F1EA] text-[#171717]">
        {/* HERO */}
        <section className="relative min-h-[65.4vh] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/hero-background.jpg')",
            }}
          />

          <div className="absolute inset-0 bg-black/38" />

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
                  I’m interested in how society works, what people can build,
                  and how we can make our systems work better and work for us.
                </p>

                <div className="mt-[1.8vh] flex flex-wrap items-center gap-[1.2vw]">
                  <p className="font-display text-[clamp(1.8rem,3.82vw,3.8rem)] leading-[0.88] tracking-wide text-white">
                    Worker. Thinker. Builder.
                    <br />
                    Civic entrepreneur!
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
            </div>
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="px-[4.7vw] py-[7.64vw]">
          <div className="mx-auto max-w-[1440px]">
            <div className="flex flex-col gap-[3.82vw] md:flex-row">
              <div className="w-full md:w-[38.2%]">
                <h2 className="font-display text-[clamp(4rem,9.44vw,9rem)] leading-[0.82]">
                  What I’m
                  <br />
                  doing
                </h2>

                <p className="mt-[1.8vw] max-w-[25rem] font-sans text-[0.95rem] leading-[1.55] text-black/60">
                  An organized collection of things I care about, work on, and
                  occasionally hyper-focus on!
                </p>
              </div>

              <div className="w-full md:w-[61.8%]">
                {work.map((item, index) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="group flex items-start justify-between border-t border-black/15 py-[1.8vw] transition-opacity hover:opacity-65"
                  >
                    <div className="flex items-start gap-[1.2vw]">
                      <span className="font-sans text-[0.72rem] font-bold text-[#A9161E]">
                        0{index + 1}
                      </span>

                      <div>
                        <h3 className="font-display text-[clamp(2.2rem,4.7vw,4.5rem)] leading-none">
                          {item.title}
                        </h3>

                        <p className="mt-[0.9vw] max-w-[38rem] font-sans text-[clamp(0.9rem,1.05vw,1.05rem)] leading-[1.5] text-black/60">
                          {item.text}
                        </p>
                      </div>
                    </div>

                    <span className="ml-4 font-sans text-[1.3rem] transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="bg-[#171717] px-[4.7vw] py-[7.64vw] text-white"
        >
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-[5vw] md:grid-cols-[1fr_1fr]">
              <div>
                <h2 className="max-w-[61.8%] font-display text-[clamp(4rem,9.44vw,9rem)] leading-[0.82]">
                  I’m figuring it out
                  <br />
                  by doing it
                </h2>

                <p className="mt-[2.36vw] max-w-[38.2%] font-sans text-[0.95rem] leading-[1.6] text-white/65">
                  Which is definitely a more interesting way to learn anyway!
                </p>
              </div>

              <div className="flex flex-col justify-center gap-6 font-sans text-base leading-8 text-white/75 md:text-lg">
                <p>
                  I’m interested in how society works, what people can build,
                  and how we can make our systems work better and work for us.
                </p>

                <p>
                  That curiosity drives me. I build things, live and breathe
                  the systems of society, make videos, write about ideas,
                  and ask questions they'd rather you not ask.
                </p>

                <p>
                  You really don't need to have everything figured out before
                  you actually start. You learn by trying, building, getting
                  things wrong, and making them better!
                </p>

                <p className="font-semibold text-white">
                  So that’s what I’m doing. And this site is where I’m putting
                  it all together.
                </p>

                <div className="mt-4 flex flex-wrap gap-4">
                  <a
                    href="#work"
                    className="group inline-flex min-h-12 items-center justify-center gap-3 bg-[#CF1C25] px-6 py-3 font-sans text-sm font-bold text-white transition-all duration-200 hover:-translate-y-1 hover:bg-[#A9161E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    <span>Let my work shape your perspective</span>
                    <span className="text-base transition-transform duration-200 group-hover:rotate-12">
                      😁
                    </span>
                  </a>

                  <a
                    href="/ideas"
                    className="inline-flex min-h-12 items-center justify-center gap-3 border border-white/40 bg-transparent px-6 py-3 font-sans text-sm font-bold text-white transition-all duration-200 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-[#171717] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    What I think about
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}