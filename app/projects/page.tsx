
import SiteNav from "@/components/SiteNav";

const projects = [
  {
    title: "Rally",
    status: "Building",
    href: "#rally",
  },
  {
    title: "Countervailance",
    status: "Developing",
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
        {/* INTRO */}
        <section className="px-[4.7vw] pb-[4.7vw] pt-[7.64vw]">
          <div className="mx-auto max-w-[1440px]">
            <p className="mb-[1.8vw] font-sans text-sm font-bold uppercase tracking-[0.16em] text-[#A9161E]">
              The workshop
            </p>

            <h1 className="font-display text-[clamp(4.5rem,11vw,10rem)] leading-[0.8] tracking-[-0.02em]">
              Things I’m
              <br />
              building.
            </h1>

            <p className="mt-[2.36vw] max-w-[38rem] font-sans text-[clamp(1rem,1.3vw,1.25rem)] leading-[1.65] text-black/60">
              Ideas are interesting.{" "}
              <strong className="font-semibold text-[#171717]">
                Making them work
              </strong>{" "}
              is a different sport. These are a couple of attempts to take
              something from “what if?” to “what happens if I{" "}
              <strong className="font-semibold text-[#171717]">
                actually build it
              </strong>
              ?”
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
                className={`group relative isolate flex min-h-[300px] flex-col justify-between overflow-hidden rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(23,23,23,0.18)] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#164E63] sm:p-9 ${
                  project.title === "Rally"
                    ? "bg-[#171717] text-[#FAFAF7]"
                    : "bg-[#164E63] text-[#FAFAF7]"
                }`}
              >
                {project.title === "Countervailance" && (
                  <>
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12]"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle, #FFFFFF 1.3px, transparent 1.3px)",
                        backgroundSize: "22px 22px",
                      }}
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-16 -top-20 -z-10 h-64 w-64 rounded-full bg-[#F2C94C]/20 blur-3xl transition-transform duration-500 group-hover:scale-125"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-[#F2C94C] transition-transform duration-300 group-hover:scale-x-100"
                    />
                  </>
                )}

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                      {project.status}
                    </p>

                    <h2 className="mt-4 font-display text-[clamp(3.2rem,5.5vw,5.5rem)] leading-[0.85]">
                      {project.title}
                      <span
                        className={
                          project.title === "Rally"
                            ? "text-[#FF6B35]"
                            : "text-[#F2C94C]"
                        }
                      >
                        .
                      </span>
                    </h2>
                  </div>

                  {project.title === "Rally" && (
                    <img
                      src="/rally-logo.png"
                      alt=""
                      className="h-12 w-12 rounded-xl object-contain transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
                    />
                  )}
                </div>

                <div className="mt-8 flex items-end justify-between gap-5">
                  <p className="max-w-md font-sans text-sm leading-6 text-white/75">
                    {project.title === "Rally" ? (
                      <>
                        Finding your people shouldn’t require becoming a{" "}
                        <strong className="font-semibold text-white">
                          full-time content creator.
                        </strong>
                      </>
                    ) : (
                      <>
                        Ideas for making{" "}
                        <strong className="font-semibold text-white">
                          concentrated power
                        </strong>{" "}
                        more accountable, transparent, and responsive to people.
                      </>
                    )}
                  </p>

                  <span
                    aria-hidden="true"
                    className={`shrink-0 text-2xl transition-all duration-300 group-hover:translate-x-2 ${
                      project.title === "Rally"
                        ? "text-[#FF6B35]"
                        : "text-[#F2C94C]"
                    }`}
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
            <div className="grid gap-8 md:grid-cols-[1fr_1fr] md:gap-[7.64vw]">
              {/* RALLY INTRO */}
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
                  better at{" "}
                  <strong className="font-semibold text-[#171717]">
                    connecting people
                  </strong>{" "}
                  with communities, activities, and opportunities to
                  participate in real life.
                </p>

                <p className="mt-5 max-w-xl font-sans text-base leading-[1.8] text-[#6B6B6B]">
                  Instead of competing for attention through followers,
                  likes, and endless feeds, Rally focuses on{" "}
                  <strong className="font-semibold text-[#171717]">
                    discovering communities
                  </strong>{" "}
                  and making participation easier.
                </p>

                <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#E7E5DF] px-4 py-2 font-sans text-sm font-medium text-[#6B6B6B]">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#FF6B35]" />
                  In development
                </div>

              </div>

              {/* PRODUCT PREVIEW EXPANDER */}
              <div className="flex flex-col justify-center rounded-2xl bg-[#F0EEE8] p-5 sm:p-8 md:p-10">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl bg-[#FAFAF7] p-5 shadow-sm transition-all hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF6B35] [&::-webkit-details-marker]:hidden">
                    <span>
                      <span className="block font-sans text-xs font-bold uppercase tracking-wider text-[#FF6B35]">
                        Take a peek
                      </span>
                      <span className="mt-2 block font-sans text-xl font-bold text-[#171717]">
                        See a Rally preview
                      </span>
                    </span>

                    <span className="text-2xl text-[#FF6B35] transition-transform duration-200 group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <div className="mt-5 w-full overflow-hidden rounded-2xl border border-[#E7E5DF] bg-[#FAFAF7] font-sans shadow-[0_20px_60px_rgba(23,23,23,0.08)]">
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
                          <div className="rounded-xl border border-[#E7E5DF] p-4 transition-colors duration-200 hover:border-[#FF6B35]/60 hover:bg-[#FF6B35]/[0.03]">
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
                        Illustrative preview based on Rally’s current interface and design system.
                      </p>
                    </div>
                  </div>
                </details>
              </div>
            </div>

            {/* PRINCIPLES EXPANDER */}
            <div className="mt-[7.64vw]">
              <details className="group rounded-2xl bg-[#F0EEE8] p-6 sm:p-8">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF6B35] [&::-webkit-details-marker]:hidden">
                  <span>
                    <span className="block font-sans text-xs font-bold uppercase tracking-[0.16em] text-[#FF6B35]">
                      Behind the idea
                    </span>
                    <span className="mt-2 block font-sans text-xl font-bold text-[#171717]">
                      What guides Rally?
                    </span>
                  </span>

                  <span className="text-2xl text-[#FF6B35] transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>

                <div className="mt-7 grid gap-7 border-t border-black/10 pt-10 md:grid-cols-3 md:gap-[3.82vw]">
                  {rallyPrinciples.map((principle) => (
                    <article key={principle.number}>
                      <p className="font-sans text-xs font-bold text-[#FF6B35]">
                        {principle.number}
                      </p>

                      <h3 className="mt-3 font-sans text-xl font-bold tracking-tight text-[#171717]">
                        {principle.title}
                      </h3>

                      <p className="mt-2 font-sans text-sm leading-7 text-[#6B6B6B]">
                        {principle.text}
                      </p>
                    </article>
                  ))}
                </div>
              </details>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}