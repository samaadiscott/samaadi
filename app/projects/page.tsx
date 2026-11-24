
import SiteNav from "@/components/SiteNav";

const projects = [
  {
    title: "Rally",
    description:
      "A community app I'm independently building to help people discover communities, events, and people around them.",
    status: "Building",
    color: "#FF6B35",
    href: "#rally",
    logo: "/rally-logo.png",
  },
  {
    title: "Countervailance",
    description:
      "Ideas for making concentrated power more accountable, transparent, and responsive to people.",
    status: "Developing",
    color: "#164E63",
    href: "/ideas/countervailance",
  },
];

const rallyPrinciples = [
  {
    number: "01",
    title: "Real community",
    text: "Help people find groups and shared interests around them.",
  },
  {
    number: "02",
    title: "Participation over attention",
    text: "Make it easier to get involved instead of optimizing for endless scrolling.",
  },
  {
    number: "03",
    title: "People first",
    text: "Build around connection, privacy, and local participation.",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <SiteNav activePage="projects" />

      <main className="min-h-screen bg-[#F5F1EA] text-[#171717]">
        {/* PAGE INTRO */}
        <section className="px-[4.7vw] pb-[4.7vw] pt-[7.64vw]">
          <div className="mx-auto max-w-[1440px]">
            <p className="mb-[1.8vw] font-sans text-sm font-bold uppercase tracking-[0.16em] text-[#A9161E]">
              Selected work
            </p>

            <h1 className="font-display text-[clamp(4.5rem,11vw,10rem)] leading-[0.8] tracking-[-0.02em]">
              Things I’m
              <br />
              building.
            </h1>

            <p className="mt-[2.36vw] max-w-[38rem] font-sans text-[clamp(1rem,1.3vw,1.25rem)] leading-[1.65] text-black/60">
              Projects that take ideas out of my head and into the world.
              Some are still taking shape. That’s part of the point.
            </p>
          </div>
        </section>

        {/* PROJECT CARDS */}
        <section className="px-[4.7vw] pb-[7.64vw]">
          <div className="mx-auto grid max-w-[1440px] gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.href}
                className="group flex min-h-[280px] flex-col justify-between rounded-2xl p-7 transition-transform duration-200 hover:-translate-y-1 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#164E63] sm:p-9"
                style={{
                  backgroundColor:
                    project.title === "Rally" ? "#171717" : project.color,
                  color: "#FAFAF7",
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                      {project.status}
                    </p>

                    <h2 className="mt-4 font-display text-[clamp(3.2rem,5.5vw,5.5rem)] leading-[0.85]">
                      {project.title}
                      {project.title === "Rally" && (
                        <span className="text-[#FF6B35]">.</span>
                      )}
                    </h2>
                  </div>

                  {project.title === "Rally" && (
                    <img
                      src={project.logo}
                      alt=""
                      className="h-12 w-12 rounded-xl object-contain"
                    />
                  )}
                </div>

                <div className="mt-8 flex items-end justify-between gap-5">
                  <p className="max-w-md font-sans text-sm leading-6 text-white/70">
                    {project.description}
                  </p>

                  <span
                    aria-hidden="true"
                    className="shrink-0 text-2xl transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* RALLY PORTFOLIO */}
        <section
          id="rally"
          className="scroll-mt-8 border-t border-black/10 bg-[#FAFAF7] px-[4.7vw] py-[7.64vw]"
        >
          <div className="mx-auto max-w-[1440px]">
            {/* CASE STUDY HEADER */}
            <div className="grid gap-8 md:grid-cols-[1fr_1fr] md:gap-[7.64vw]">
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <img
                    src="/rally-logo.png"
                    alt="Rally logo"
                    className="h-11 w-11 rounded-xl object-contain"
                  />

                  <div>
                    <p className="font-sans text-sm font-bold text-[#171717]">
                      Rally
                    </p>
                    <p className="font-sans text-xs text-[#6B6B6B]">
                      Independent product project
                    </p>
                  </div>
                </div>

                <h2 className="font-display text-[clamp(4rem,9.44vw,9rem)] leading-[0.82] tracking-[-0.02em]">
                  Community,
                  <br />
                  not clout.
                </h2>

                <p className="mt-7 max-w-xl font-sans text-lg leading-[1.7] text-[#6B6B6B]">
                  Rally is a community app I’m designing and building
                  independently. It’s an attempt to make digital spaces
                  better at connecting people with communities, activities,
                  and opportunities to participate in real life.
                </p>

                <p className="mt-5 max-w-xl font-sans text-base leading-[1.8] text-[#6B6B6B]">
                  Rather than competing for attention through followers,
                  likes, and endless feeds, I'm building Rally around
                  discovering communities and making participation easier.
                </p>

                <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#E7E5DF] px-4 py-2 font-sans text-sm font-medium text-[#6B6B6B]">
                  <span className="h-2 w-2 rounded-full bg-[#FF6B35]" />
                  In development
                </div>
              </div>

              {/* PRODUCT PREVIEW */}
              <div className="flex items-center justify-center rounded-2xl bg-[#F0EEE8] p-5 sm:p-8 md:p-10">
                <div className="w-full max-w-[440px] overflow-hidden rounded-2xl border border-[#E7E5DF] bg-[#FAFAF7] font-sans shadow-[0_20px_60px_rgba(23,23,23,0.08)]">
                  <div className="border-b border-[#E7E5DF] px-5 py-5">
                    <p className="text-sm font-semibold uppercase tracking-wider text-[#FF6B35]">
                      Rally
                    </p>

                    <h3 className="mt-2 text-3xl font-bold tracking-tight text-[#171717]">
                      Find your community.
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#6B6B66]">
                      Discover communities, events, and people like you,
                      around you.
                    </p>
                  </div>

                  <div className="space-y-5 p-5">
                    <div className="rounded-2xl border border-[#E7E5DF] bg-white p-5">
                      <div className="flex items-center justify-between gap-3">
                        <h4 className="text-base font-bold text-[#171717]">
                          Communities
                        </h4>

                        <span className="rounded-xl bg-[#FF6B35] px-3 py-2 text-xs font-semibold text-white">
                          + Create community
                        </span>
                      </div>

                      <div className="mt-5 space-y-3">
                        <div className="rounded-xl border border-[#E7E5DF] p-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FF6B35]/10 text-lg text-[#FF6B35]">
                              ◉
                            </div>

                            <div>
                              <p className="text-sm font-semibold text-[#171717]">
                                Community space
                              </p>
                              <p className="mt-1 text-xs leading-5 text-[#6B6B66]">
                                A place to connect around shared interests.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="rounded-xl border border-dashed border-[#D8D6CE] px-4 py-5 text-center">
                          <p className="text-sm font-medium text-[#171717]">
                            No communities yet.
                          </p>
                          <p className="mt-1 text-xs text-[#8A8983]">
                            Be the first to create one.
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className="text-center text-xs leading-5 text-[#8A8983]">
                      Illustrative preview based on Rally’s current interface
                      and design system.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* PRODUCT PRINCIPLES */}
            <div className="mt-[7.64vw] border-t border-[#E7E5DF] pt-[3.82vw]">
              <p className="mb-8 font-sans text-sm font-bold uppercase tracking-[0.16em] text-[#FF6B35]">
                What I’m building toward
              </p>

              <div className="grid gap-8 md:grid-cols-3 md:gap-[3.82vw]">
                {rallyPrinciples.map((principle) => (
                  <article
                    key={principle.number}
                    className="border-t border-[#E7E5DF] pt-5"
                  >
                    <p className="font-sans text-xs font-bold text-[#FF6B35]">
                      {principle.number}
                    </p>

                    <h3 className="mt-4 font-sans text-xl font-bold tracking-tight text-[#171717]">
                      {principle.title}
                    </h3>

                    <p className="mt-3 font-sans text-sm leading-7 text-[#6B6B6B]">
                      {principle.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            {/* BUILDER CREDIT */}
            <div className="mt-[7.64vw] rounded-2xl bg-[#171717] p-7 text-[#FAFAF7] sm:p-10 md:p-12">
              <p className="font-sans text-xs font-bold uppercase tracking-[0.16em] text-[#FF6B35]">
                Built by me
              </p>

              <div className="mt-5 grid gap-5 md:grid-cols-[1fr_1fr] md:items-end">
                <h3 className="font-display text-[clamp(2.8rem,6vw,5.5rem)] leading-[0.88]">
                  An idea I’m
                  <br />
                  making real.
                </h3>

                <p className="max-w-lg font-sans text-sm leading-7 text-white/65">
                  I’m responsible for building Rally as an independent
                  project, from shaping the product direction to developing
                  the application. This is my work in progress, not a product
                  built or owned by New Village Academy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}