
import SiteNav from "@/components/SiteNav";

const principles = [
  {
    number: "01",
    title: "Make power answer for its actions.",
    description:
      "Strengthen democratic oversight, expose conflicts of interest, protect whistleblowers, and hold public officials, corporations, and contractors accountable for serious failures.",
    color: "#F2C94C",
  },
  {
    number: "02",
    title: "Change the rules that protect the powerful.",
    description:
      "Challenge concentrated wealth, corporate dominance, political corruption, unfair markets, and institutions that shift their costs onto the public.",
    color: "#DCE5E7",
  },
  {
    number: "03",
    title: "Protect freedom and personal agency.",
    description:
      "Defend civil liberties, personal data, digital autonomy, privacy, and the ability of individuals to make informed choices without institutional abuse.",
    color: "#F0B5B8",
  },
  {
    number: "04",
    title: "Make public systems work for people.",
    description:
      "Improve healthcare, housing, education, infrastructure, and public services. Measure results, learn from failure, and change what does not work.",
    color: "#D7E5C5",
  },
];

const areas = [
  {
    number: "01",
    title: "Democracy and Government Accountability",
    description:
      "Strengthen congressional oversight, military independence, judicial ethics, whistleblower protections, legislative transparency, and contractor accountability. Expand the House toward 585 seats immediately and approximately 930 over time, transition to multimember districts and proportional ranked-choice voting, and overturn Citizens United through constitutional reform.",
  },
  {
    number: "02",
    title: "Economic Fairness and Corporate Power",
    description:
      "Strengthen antitrust enforcement, raise worker protections and wages, tax extreme wealth, restrict exploitative private equity practices, and expand employee ownership. Support public-benefit grocery systems, public banks, affordable housing, independent businesses, and special economic zones for cooperatives and open-source startups. Hold digital platforms accountable for fraudulent advertising.",
  },
  {
    number: "03",
    title: "Financial Market Reform",
    description:
      "Restore separation between commercial and investment banking, close fintech regulatory loopholes, make major index providers fiduciaries, eliminate consumer deposit-account maintenance fees, and cap credit-card interest at 30%. Prohibit election betting and contracts tied to death, violent crime, terrorism, and other events that could create serious public harm.",
  },
  {
    number: "04",
    title: "Technology, Privacy, and Artificial Intelligence",
    description:
      "Give people control over their data, require affirmative consent for AI features and data training, prohibit surveillance pricing and undisclosed cross-platform tracking, and establish enforceable data-access and deletion rights. Strengthen AI safety audits, platform transparency, net neutrality, digital portability, vehicle privacy, and protections against organized online fraud. Support an internationally coordinated slowdown of superintelligent AI until safety can be established and the public agrees to proceed.",
  },
  {
    number: "05",
    title: "Intelligence and Transparency",
    description:
      "Strengthen congressional and judicial oversight of intelligence agencies and classified programs, establish automatic review of domestic intelligence records after 25 years, release the Epstein files to the maximum extent permitted by law while protecting victims, and require disclosure of material safety risks.",
  },
  {
    number: "06",
    title: "Justice, Rights, and Civil Liberties",
    description:
      "Shift corrections toward rehabilitation, strengthen due process, protect journalists and whistleblowers, end for-profit detention, and prohibit law enforcement from relying on automated predictions alone to justify action. Abolish ICE in its current form and establish an accountable successor agency with enforceable civil-rights, privacy, and operational safeguards.",
  },
  {
    number: "07",
    title: "Health and Environment",
    description:
      "Guarantee comprehensive healthcare without premiums or cost-sharing for essential covered care. Negotiate drug prices, strengthen drinking-water standards, hold polluters accountable, improve food nutrition labeling, support behavioral health, and protect nursing-home residents from extractive ownership.",
  },
  {
    number: "08",
    title: "Reproductive Rights",
    description:
      "Protect free abortion access during the first four months of pregnancy, with continued free access afterward for maternal health, severe fetal conditions, rape, or incest.",
  },
  {
    number: "09",
    title: "Education and Social Infrastructure",
    description:
      "Strengthen civics, critical thinking, literacy, mentorship, and career preparation. Raise teacher compensation, expand counseling and apprenticeships, guarantee access to work-based learning before graduation, improve childcare, and guarantee paid parental leave.",
  },
  {
    number: "10",
    title: "Civic Participation and National Service",
    description:
      "Expand citizen assemblies, participatory budgeting, public forums, and voluntary civic service. Strengthen civic education and dialogue, create leadership fellowships, and make Election Day a paid federal holiday with accessible early voting.",
  },
  {
    number: "11",
    title: "Information and Media",
    description:
      "Increase transparency in media ownership, political advertising, and recommendation systems. Support independent journalism, media literacy, and public access to primary sources, government records, and evidence behind major public claims.",
  },
  {
    number: "12",
    title: "Government Effectiveness",
    description:
      "Modernize government technology, publish accessible public data, reduce unnecessary administrative delays, and evaluate major programs independently. Improve public safety response models, disclose consultant influence, strengthen contractor oversight, protect research funding, and create competing public alternatives when private markets consistently fail.",
  },
  {
    number: "13",
    title: "Maryland Innovation",
    description:
      "Build a College Park–Rockville quantum enterprise zone, reform corporate political spending, make data centers pay their full infrastructure costs, expand land-value taxation options, publish state contract records, support employee ownership, prohibit artificial entities from voting in municipal elections, and end Maryland's participation in mass-surveillance systems such as Flock.",
  },
  {
    number: "14",
    title: "Climate and Energy Transition",
    description:
      "Accelerate renewable and nuclear energy, storage, grid modernization, domestic manufacturing, and energy efficiency through performance-based incentives. Invest in climate resilience, modernize water infrastructure, and require transparent costs and independent evaluation.",
  },
  {
    number: "15",
    title: "National Transportation Innovation Zones",
    description:
      "Create a federal program funding communities to test less car-dependent development, including walkable neighborhoods, mixed-use zoning, pedestrian-priority streets, cycling infrastructure, and expanded public transit. Evaluate pilot programs and expand successful models while preserving local authority.",
  },
  {
    number: "16",
    title: "Foreign Policy",
    description:
      "Strengthen congressional oversight of military operations, prioritize diplomacy, and apply human-rights standards consistently to allies and adversaries. Recognize the genocide committed against Palestinians in Gaza, reassess U.S. support for Israel, and prohibit federal contracts and military exports to companies knowingly facilitating serious human-rights abuses.",
  },
  {
    number: "17",
    title: "The American AI Dividend",
    description:
      "Establish an independent AI sovereign wealth fund that acquires limited, minority, nonvoting stakes in major AI companies. Prevent corporate control, require independent audits and transparent revenue mechanisms, and distribute a portion of investment returns directly to American citizens.",
  },
];

export default function CountervailancePage() {
  return (
    <>
      <SiteNav activePage="countervailance" />

      <main className="min-h-screen overflow-x-clip bg-[#F5F1EA] text-[#171717]">
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#164E63] px-[6vw] py-[9vw] text-white">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "radial-gradient(#FFFFFF 1.3px, transparent 1.3px)",
              backgroundSize: "22px 22px",
            }}
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-[8vw] -top-[12vw] h-[40vw] w-[40vw] rounded-full bg-[#F2C94C]/20 blur-[6vw]"
          />

          <div className="relative mx-auto max-w-[1200px]">
            <p className="mb-[2vw] font-sans text-sm font-semibold text-[#F2C94C]">
              The accountability agenda
            </p>

            <h1 className="max-w-[1100px] font-display text-[clamp(4.5rem,12vw,11rem)] leading-[0.78]">
              Power must
              <br />
              work for you.
            </h1>

            <p className="mt-[3.82vw] max-w-[720px] font-sans text-[clamp(1.05rem,1.8vw,1.45rem)] leading-[1.65] text-white/90">
              Government exists to serve you and must remain accountable to you.
            </p>

            <p className="mt-5 max-w-[680px] font-sans text-base leading-[1.8] text-white/75">
              Countervailance begins with a simple question: Who has the power,
              and who checks them? It is an evolving policy agenda to challenge
              concentrated power, realign institutional incentives, and build
              systems that serve the people affected by them.
            </p>

            <a
              href="#agenda"
              className="mt-[2.36vw] inline-flex items-center gap-3 bg-[#F2C94C] px-6 py-4 font-sans font-bold text-[#171717] transition-transform hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              See what needs to change <span aria-hidden="true">↓</span>
            </a>

            <p className="mt-5 font-sans text-sm text-white/65">
              Nobody should be above accountability. =)
            </p>
          </div>
        </section>

        {/* CORE PRINCIPLES */}
        <section className="px-[6vw] py-[8vw]">
          <div className="mx-auto max-w-[1200px]">
            <p className="font-sans text-sm font-bold text-[#164E63]">
              The mission
            </p>

            <h2 className="mt-4 max-w-[900px] font-display text-[clamp(3.5rem,8vw,7rem)] leading-[0.85]">
              Change the rules.
              <br />
              Challenge concentrated power.
            </h2>

            <p className="mt-6 max-w-[700px] font-sans text-lg leading-[1.7] text-black/65">
              Accountability alone cannot solve problems when the rules and
              incentives keep producing them. Countervailance seeks to change
              those systems while preserving the ability to challenge the
              solutions themselves.
            </p>

            <div className="mt-[4vw] grid gap-5 sm:grid-cols-2">
              {principles.map((item) => (
                <article
                  key={item.number}
                  className="rounded-2xl p-6 sm:p-8"
                  style={{ backgroundColor: item.color }}
                >
                  <p className="font-sans text-sm font-bold text-black/50">
                    {item.number}
                  </p>

                  <h3 className="mt-5 max-w-[440px] font-display text-[clamp(2.3rem,4vw,3.8rem)] leading-[0.92]">
                    {item.title}
                  </h3>

                  <p className="mt-4 font-sans leading-[1.7] text-black/75">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* POLICY AREAS */}
        <section
          id="agenda"
          className="scroll-mt-8 bg-white px-[6vw] py-[8vw]"
        >
          <div className="mx-auto max-w-[1200px]">
            <p className="font-sans text-sm font-bold text-[#164E63]">
              Where the rules need to change
            </p>

            <h2 className="mt-4 max-w-[1000px] font-display text-[clamp(3.5rem,8vw,7rem)] leading-[0.85]">
              Seventeen fronts.
              <br />
              One fight.
            </h2>

            <p className="mt-6 max-w-[720px] font-sans text-base leading-[1.8] text-black/65">
              These policy areas connect democratic accountability, economic
              fairness, civil liberties, human wellbeing, and institutional
              performance. The goal is not to concentrate every solution in
              government. It is to use competition, public institutions,
              technology, and community alternatives where each can best
              serve the public interest.
            </p>

            <div className="mt-[3.82vw] grid gap-3 md:grid-cols-2">
              {areas.map((area) => (
                <article
                  key={area.number}
                  className="rounded-xl bg-[#F5F1EA] p-5 transition-colors hover:bg-[#E9E2D6] sm:p-6"
                >
                  <div className="flex items-start gap-4">
                    <span className="pt-1 font-sans text-sm font-bold text-[#164E63]">
                      {area.number}
                    </span>

                    <div>
                      <h3 className="font-sans text-lg font-bold leading-snug">
                        {area.title}
                      </h3>

                      <p className="mt-2 font-sans text-sm leading-[1.8] text-black/65">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* EXECUTIVE DEMERIT */}
            <div className="mt-[4vw] rounded-2xl bg-[#171717] p-7 text-white sm:p-10">
              <p className="font-sans text-sm font-bold uppercase tracking-[0.12em] text-[#F2C94C]">
                Accountability mechanism
              </p>

              <h3 className="mt-4 font-display text-[clamp(2.8rem,5vw,4.8rem)] leading-[0.9]">
                Executive Demerit
              </h3>

              <p className="mt-5 max-w-[720px] font-sans leading-[1.8] text-white/80">
                Establish a public accountability system identifying serious
                failures in ethics, transparency, safety, or public stewardship.
                Demerits would require verified evidence and independent
                bipartisan review. They would not be criminal or civil
                punishments, and could never be issued solely for political
                disagreement or lawful speech. Each determination would include
                a public explanation.
              </p>
            </div>

            {/* THE STANDARD */}
            <div className="mt-5 rounded-2xl bg-[#164E63] p-7 text-white sm:p-10">
              <p className="font-sans text-sm font-bold uppercase tracking-[0.12em] text-[#F2C94C]">
                The standard
              </p>

              <h3 className="mt-4 font-display text-[clamp(2.8rem,5vw,4.8rem)] leading-[0.9]">
                Learn. Test. Correct.
              </h3>

              <p className="mt-5 max-w-[720px] font-sans leading-[1.8] text-white/80">
                Who has the power? Who checks it? What evidence supports its
                use? Who can challenge the decision? And what happens when the
                institution fails? No proposal should be beyond scrutiny.
                Countervailance must draw on evidence, test assumptions, measure
                results, and revise its policies when experience reveals
                something better.
              </p>
            </div>

            <p className="mt-5 max-w-[760px] font-sans text-sm leading-[1.8] text-black/50">
              This page is an overview, not the{" "}
              <a
                href="https://docs.google.com/document/d/10vc88JKkNPM6tvgCyUFty89aLTJn36lq/edit?usp=sharing&ouid=109046789529405891188&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#164E63] underline underline-offset-4 transition-colors hover:text-[#A9161E]"
              >
                complete policy text
              </a>
              . Individual proposals remain subject to further research, legal
              analysis, public scrutiny, and refinement.
            </p>
          </div>
        </section>

        {/* CLOSING */}
        <section className="relative overflow-hidden bg-[#F2C94C] px-[6vw] py-[9vw]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-[5vw] -top-[10vw] h-[30vw] w-[30vw] rounded-full bg-[#E05A60]/20 blur-[5vw]"
          />

          <div className="relative mx-auto max-w-[1200px]">
            <h2 className="max-w-[900px] font-display text-[clamp(4rem,10vw,9rem)] leading-[0.8]">
              Power must
              <br />
              have a
              <br />
              counterweight.
            </h2>

            <p className="mt-7 max-w-[650px] font-sans text-lg leading-[1.7]">
              Power's purpose is to build systems that improve your life.
              Democracy is strongest when power is distributed, institutions
              are contestable, and accountability applies even when it is
              inconvenient.
            </p>

            <a
              href="/"
              className="mt-8 inline-flex items-center gap-3 bg-[#171717] px-6 py-4 font-sans font-bold text-white transition-transform hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#164E63]"
            >
              Back to Samaadi.net <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}