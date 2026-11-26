import SiteNav from "@/components/SiteNav";

const principles = [
  {
    number: "01",
    title: "Make power answer for its actions.",
    description: <><strong>Strengthen oversight</strong>, expose conflicts of interest, protect whistleblowers, and hold public officials, corporations, and contractors accountable for <strong>serious failures</strong>.</>,
    color: "#F2C94C",
  },
  {
    number: "02",
    title: "Change the rules that protect the powerful.",
    description: <>Challenge <strong>concentrated wealth</strong>, corporate dominance, political corruption, unfair markets, and institutions that shift their costs onto <strong>everyone else</strong>.</>,
    color: "#DCE5E7",
  },
  {
    number: "03",
    title: "Protect freedom and personal agency.",
    description: <>Defend <strong>civil liberties</strong>, personal data, privacy, digital autonomy, and people's ability to make informed choices without <strong>institutional abuse</strong>.</>,
    color: "#F0B5B8",
  },
  {
    number: "04",
    title: "Make public systems work for people.",
    description: <>Improve healthcare, housing, education, infrastructure, and <strong>public services</strong>. Measure results, learn from failure, and <strong>change what doesn't work</strong>.</>,
    color: "#D7E5C5",
  },
];

const areas = [
  {
    number: "01",
    formalTitle: "Democracy and Government Accountability",
    title: "So, Who Put Them in Charge?",
    intro: "Public office is a responsibility, not a personal possession.",
    description: <>
      Strengthen <strong>congressional oversight</strong>, protect military independence, improve judicial ethics, protect whistleblowers, and make legislation and government contracting more transparent. The agenda also proposes a larger House of Representatives, multimember districts, proportional ranked-choice voting, and constitutional reform addressing <strong>money in elections</strong> and presidential immunity.
    </>,
  },
  {
    number: "02",
    formalTitle: "Economic Fairness and Corporate Power",
    title: "A Little Less Untouchable, Please",
    intro: "A successful business should compete by serving people, not by making itself impossible to challenge.",
    description: <>
      Strengthen <strong>antitrust enforcement</strong>, raise worker protections and wages, reform taxes on extreme wealth, restrict exploitative private-equity practices, and expand employee ownership. Support public-benefit grocery systems, public banks, affordable housing, independent businesses, and special economic zones for cooperatives and open-source startups. Hold digital advertising platforms accountable when they facilitate <strong>fraud</strong>.
    </>,
  },
  {
    number: "03",
    formalTitle: "Financial Market Reform",
    title: "Wall Street Isn't an Island",
    intro: "Financial markets should help people build wealth, not profit from confusion or desperation.",
    description: <>
      Restore clear separation between commercial and investment banking, close fintech regulatory loopholes, make major index providers fiduciaries, eliminate consumer deposit-account maintenance fees, and cap credit-card interest at 30%. Prohibit election betting and contracts tied to death, violent crime, terrorism, military operations, and other events where financial incentives could contribute to <strong>serious public harm</strong>.
    </>,
  },
  {
    number: "04",
    formalTitle: "Technology, Privacy, and Artificial Intelligence",
    title: "Your Data Isn't a Public Playground",
    intro: "Technology should expand your agency, not turn you into the “great walking dataset.”",
    description: <>
      Give people <strong>control over their data</strong>. Require affirmative consent before personal information is shared or used to train AI, and before optional AI features are activated. Prohibit surveillance pricing and undisclosed cross-platform tracking. Establish enforceable rights to access and delete personal data, strengthen platform transparency and net neutrality, make digital services easier to leave, protect vehicle privacy, and improve responses to organized online fraud. Support an internationally coordinated slowdown of superintelligent AI until <strong>safety can be established</strong> and the public agrees to proceed.
    </>,
  },
  {
    number: "05",
    formalTitle: "Intelligence and Transparency",
    title: "The More Secret the Power, the Stronger the Oversight",
    intro: "National security can require secrecy. It cannot make oversight optional.",
    description: <>
      Strengthen <strong>congressional and judicial oversight</strong> of intelligence agencies and classified programs. Establish automatic review of domestic intelligence records after 25 years, subject to narrow national-security exceptions. Release the Epstein files to the maximum extent permitted by law while protecting victims, minors, and legally protected information. Require companies to disclose <strong>material safety risks</strong> and adverse findings to regulators and affected communities.
    </>,
  },
  {
    number: "06",
    formalTitle: "Justice, Rights, and Civil Liberties",
    title: "Okay, But What Happens When Things Go Wrong?",
    intro: "Rights matter most when protecting them is inconvenient.",
    description: <>
      Shift corrections toward rehabilitation, strengthen due process, protect journalists and whistleblowers, end for-profit detention, and prohibit law enforcement from relying on automated predictions alone to justify action. Replace ICE in its current form with an <strong>accountable successor agency</strong> and enforceable civil-rights safeguards. Establish a carefully bounded right to self-defense, including proportionate non-lethal defensive force in public, strict limits on deadly force, voluntary state-funded de-escalation and self-defense training, and <strong>independent review</strong> of defensive-force incidents before immunity or prosecution decisions.
    </>,
  },
  {
    number: "07",
    formalTitle: "Health and Environment",
    title: "A Healthier Society Is a Public Project",
    intro: "People should not have to choose between getting care and staying financially secure.",
    description: <>
      Guarantee <strong>comprehensive healthcare</strong> without premiums or cost-sharing for essential covered care. Negotiate prescription drug prices, maintain and inflation-adjust the insulin cap, strengthen drinking-water standards, hold polluters accountable, improve food nutrition labeling, support behavioral health, and protect nursing-home residents from extractive ownership. Make healthcare costs clearer and invest in <strong>prevention and safer communities</strong>.
    </>,
  },
  {
    number: "08",
    formalTitle: "Reproductive Rights",
    title: "Your Autonomy Deserves Protection",
    intro: <>Personal medical decisions deserve <strong>real protection</strong>.</>,
    description: <>Protect access to <strong>free abortion</strong> during the first four months of pregnancy. After four months, protect access for maternal health, severe fetal conditions, rape, and incest.</>,
  },
  {
    number: "09",
    formalTitle: "Education and Social Infrastructure",
    title: "School Should Open Doors, Not Just Fill Seats",
    intro: "Education should prepare people to think, participate, work, and build a life.",
    description: <>
      Strengthen <strong>civics and critical thinking</strong>, literacy, mentorship, and career preparation. Raise teacher compensation, expand counseling and apprenticeships, guarantee access to work-based learning before graduation, improve childcare, and guarantee paid parental leave. Invest in public spaces, language learning, digital and media literacy, and <strong>practical educational resources</strong>.
    </>,
  },
  {
    number: "10",
    formalTitle: "Civic Participation and National Service",
    title: "Civic Life Needs More Than Election Day",
    intro: "Democracy works better when people can participate between elections, too.",
    description: <>
      Expand <strong>citizen assemblies</strong>, participatory budgeting, public forums, citizen review panels, and voluntary civic service. Strengthen civic education and dialogue, create leadership fellowships, protect lawful political activity, and make Election Day a paid federal holiday while requiring <strong>accessible early voting</strong> in states receiving federal election funding.
    </>,
  },
  {
    number: "11",
    formalTitle: "Information and Media",
    title: "Who Gets to Shape What We Know?",
    intro: "Free speech matters. So does access to reliable information and the ability to question it.",
    description: <>
      Increase transparency in <strong>media ownership</strong>, political advertising, and algorithmic content systems while protecting freedom of speech. Support independent and local journalism, media literacy, public access to primary sources and government records, and clearer distinctions between <strong>reporting, analysis, and opinion</strong>.
    </>,
  },
  {
    number: "12",
    formalTitle: "Government Effectiveness",
    title: "Government Should Actually Work",
    intro: "A government that cannot deliver competently will struggle to earn trust.",
    description: <>
      Modernize government technology, publish accessible public data, reduce unnecessary administrative delays, and <strong>evaluate major programs</strong> independently. Improve public-safety response models, disclose when consultants materially influence major decisions, strengthen contractor oversight, protect research funding, and consider <strong>public alternatives</strong> when private markets consistently fail to serve the public interest.
    </>,
  },
  {
    number: "13",
    formalTitle: "Maryland Innovation",
    title: "Maryland Can Be the Test Kitchen",
    intro: "Good ideas should be tested, measured, and improved in the real world.",
    description: <>
      Build a College Park–Rockville quantum enterprise zone, reform corporate political spending, make data centers pay their full additional infrastructure costs, expand land-value taxation options, publish state contract records, support employee ownership, prohibit artificial entities from voting in municipal elections, and end Maryland's participation in mass-surveillance systems such as Flock, subject to <strong>transparent public safeguards</strong>.
    </>,
  },
  {
    number: "14",
    formalTitle: "Climate and Energy Transition",
    title: "Make the Clean Choice the Easier Choice",
    intro: "Climate policy should protect the future without ignoring today's costs and needs.",
    description: <>
      Expand renewable and nuclear energy, storage, grid modernization, domestic manufacturing, and energy efficiency through <strong>performance-based incentives</strong>. Invest in climate adaptation and resilient infrastructure. Reduce unnecessary permitting delays while maintaining safety and environmental standards, and require <strong>transparent costs</strong> and independent evaluation of major programs.
    </>,
  },
  {
    number: "15",
    formalTitle: "National Transportation Innovation Zones",
    title: "Transportation Should Serve You, Not Force You to Serve It",
    intro: "A city should be more than a place to drive through.",
    description: <>
      Car-dominated development can separate neighbors, push local businesses farther apart, and make ordinary errands expensive and exhausting. It can discourage walking, limit independence, and turn streets into stressful places to cross rather than places to gather. A city should support the <strong>community and local economy</strong>, as well as people's mind, body, and soul, not organize daily life around moving cars. Create a federal program that funds communities to test walkable neighborhoods, mixed-use zoning, pedestrian-priority streets, cycling infrastructure, and expanded public transit. Evaluate affordability, accessibility, safety, economic activity, and <strong>transportation costs</strong>. Expand successful models while preserving local authority over participation and implementation.
    </>,
  },
  {
    number: "16",
    formalTitle: "Foreign Policy",
    title: "Strength Is Not a Blank Check",
    intro: "Power with purpose. Strength with restraint. Peace with accountability.",
    description: <>
      Strengthen <strong>congressional oversight</strong> of military operations, require clearer public justification for extended interventions, prioritize diplomacy, and apply human-rights standards consistently to allies and adversaries. Recognize the genocide committed against Palestinians in Gaza as concluded by the UN Independent International Commission of Inquiry, reassess U.S. support for Israel accordingly, and prohibit federal contracts and military exports to companies knowingly facilitating <strong>serious human-rights abuses</strong>, subject to independent review and due process.
    </>,
  },
  {
    number: "17",
    formalTitle: "The American AI Dividend",
    title: "You Helped Build AI. Where's Your Money?",
    intro: "The public helped build the future. The public deserves a stake in it.",
    description: <>
      Establish an independent <strong>AI sovereign wealth fund</strong> that acquires limited, minority, non-voting stakes in major AI companies over time. Prevent the fund from acquiring corporate control, establish transparent revenue mechanisms, require independent audits and long-term governance safeguards, and <strong>distribute investment returns</strong> directly to American citizens.
    </>,
  },
];

export default function CountervailancePage() {
  return (
    <>
      <SiteNav activePage="countervailance" />

      <main className="min-h-screen overflow-x-clip bg-[#F5F1EA] text-[#171717]">
        {/* OPENING */}
        <section className="relative overflow-hidden bg-[#164E63] px-[6vw] py-[clamp(5rem,10vw,9rem)] text-white">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.12]" style={{ backgroundImage: "radial-gradient(#FFFFFF 1.3px, transparent 1.3px)", backgroundSize: "22px 22px" }} />
          <div aria-hidden="true" className="pointer-events-none absolute -right-[8vw] -top-[12vw] h-[40vw] w-[40vw] rounded-full bg-[#F2C94C]/20 blur-[6vw]" />

          <div className="relative mx-auto max-w-[1200px]">
            <p className="mb-6 font-sans text-sm font-semibold tracking-[0.08em] text-[#F2C94C]">COUNTERVAILANCE · THE ACCOUNTABILITY AGENDA</p>
            <h1 className="max-w-[1100px] font-display text-[clamp(4.2rem,12vw,10.5rem)] leading-[0.8]">
              Power should<br />never lack a<br />counterweight.
            </h1>

            <div className="mt-10 grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
              <div>
                <p className="max-w-[700px] font-sans text-[clamp(1.1rem,2vw,1.5rem)] leading-[1.6] text-white/90">
                  Start with one question: <strong>who has the power</strong>, and who gets to check it?
                </p>
                <details className="group mt-4 max-w-[660px]">
                  <summary className="cursor-pointer list-none font-sans text-sm font-semibold text-[#F2C94C] underline decoration-white/40 underline-offset-4">
                    What does that mean? <span aria-hidden="true" className="inline-block transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 font-sans leading-[1.8] text-white/75">
                    Countervailance is a working policy agenda for making power <strong>answerable</strong>, changing rules that protect the powerful, and building systems that <strong>serve the people</strong> affected by them.
                  </p>
                </details>
              </div>
              <div className="md:justify-self-end md:max-w-[390px]">
                <p className="font-display text-3xl leading-tight text-[#F2C94C]">Not left versus right.<br />Power versus accountability.</p>
                <a href="#agenda" className="mt-7 inline-flex items-center gap-3 bg-[#F2C94C] px-6 py-4 font-sans font-bold text-[#171717] transition-transform hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                  Explore the agenda <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
            <p className="mt-8 font-sans text-sm text-white/60">Nobody should be above accountability. =)</p>
          </div>
        </section>

        {/* THE BASIC IDEA */}
        <section className="px-[6vw] py-[clamp(4rem,8vw,7rem)]">
          <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="font-sans text-sm font-bold uppercase tracking-[0.1em] text-[#164E63]">First, the ground rules</p>
              <h2 className="mt-4 font-display text-[clamp(3.4rem,7vw,6rem)] leading-[0.86]">Government: useful tool, terrible religion.</h2>
            </div>
            <div className="max-w-[720px]">
              <p className="font-sans text-lg leading-[1.8] text-black/75">
                Government is <strong>one tool</strong>, not the answer to everything. The best solution might be a public program, a competitive market, a new technology, or a <strong>community-led alternative</strong>.
              </p>
              <details className="group mt-4">
                <summary className="cursor-pointer list-none font-sans text-sm font-semibold text-[#164E63] underline underline-offset-4">
                  When should government step in? <span aria-hidden="true" className="inline-block transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="mt-3 space-y-3 font-sans text-sm leading-[1.8] text-black/65">
                  <p>Government should be a <strong>real remedy</strong> for market failure, concentrated power, systemic risk, or abuse of authority.</p>
                  <p>When government does act, it should set clear goals, disclose costs, measure results, and <strong>change course</strong> when the evidence calls for it.</p>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* PRINCIPLES */}
        <section className="bg-[#E9E2D6] px-[6vw] py-[clamp(4rem,8vw,7rem)]">
          <div className="mx-auto max-w-[1200px]">
            <p className="font-sans text-sm font-bold uppercase tracking-[0.1em] text-[#164E63]">The mission</p>
            <h2 className="mt-4 max-w-[900px] font-display text-[clamp(3.5rem,8vw,7rem)] leading-[0.84]">Change the rules.<br />Keep the power checkable.</h2>
            <p className="mt-6 max-w-[720px] font-sans text-lg leading-[1.75] text-black/70">
              Accountability matters. So do the <strong>rules and incentives</strong> that shape behavior.
            </p>
            <details className="group mt-3 max-w-[720px]">
              <summary className="cursor-pointer list-none font-sans text-sm font-semibold text-[#164E63] underline underline-offset-4">
                A little more context <span aria-hidden="true" className="inline-block transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 font-sans text-sm leading-[1.8] text-black/60">
                The agenda stays <strong>open to criticism</strong>. No proposed solution gets a <strong>free pass</strong>.
              </p>
            </details>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {principles.map((item) => (
                <article key={item.number} className="rounded-2xl p-6 sm:p-8" style={{ backgroundColor: item.color }}>
                  <p className="font-sans text-sm font-bold text-black/45">{item.number}</p>
                  <h3 className="mt-5 max-w-[440px] font-display text-[clamp(2.2rem,4vw,3.6rem)] leading-[0.92]">{item.title}</h3>
                  <p className="mt-4 font-sans leading-[1.75] text-black/70">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* A QUICK MAP */}
        <section id="agenda" className="scroll-mt-8 bg-white px-[6vw] py-[clamp(4rem,8vw,7rem)]">
          <div className="mx-auto max-w-[1200px]">
            <p className="font-sans text-sm font-bold uppercase tracking-[0.1em] text-[#164E63]">A map, not a magic wand 🗺️</p>
            <h2 className="mt-4 max-w-[1000px] font-display text-[clamp(3.5rem,8vw,7rem)] leading-[0.84]">Seventeen areas.<br />One basic question.</h2>
            <p className="mt-6 max-w-[720px] font-sans leading-[1.8] text-black/70">
              Seventeen subjects. <strong>No required order.</strong> Start wherever your curiosity takes you.
            </p>

            <nav aria-label="Jump to a policy area" className="mt-9 flex flex-wrap gap-2">
              {areas.map((area) => (
                <a key={area.number} href={`#area-${area.number}`} className="rounded-full border border-black/15 px-3 py-2 font-sans text-xs font-semibold text-black/65 transition-colors hover:border-[#164E63] hover:bg-[#164E63] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#164E63]">
                  {area.number} · {area.formalTitle}
                </a>
              ))}
            </nav>

            <div className="mt-12 space-y-3">
              {areas.map((area) => (
                <article id={`area-${area.number}`} key={area.number} className="scroll-mt-24 rounded-2xl border border-black/10 bg-[#F5F1EA] p-5 sm:p-7">
                  <div className="flex items-start gap-4 sm:gap-6">
                    <span className="pt-1 font-sans text-sm font-bold tabular-nums text-[#164E63]">{area.number}</span>
                    <div className="min-w-0 flex-1">
                      <p className="font-sans text-xs font-bold uppercase tracking-[0.1em] text-black/45">{area.formalTitle}</p>
                      <h3 className="mt-2 font-display text-[clamp(2rem,4vw,3.5rem)] leading-[0.95]">{area.title}</h3>
                      <p className="mt-3 max-w-[800px] font-sans leading-[1.75] text-black/75">{area.intro}</p>
                      {area.number === "08" ? (
                        <p className="mt-3 max-w-[850px] font-sans text-sm leading-[1.8] text-black/60">{area.description}</p>
                      ) : (
                        <details className="group mt-5 border-t border-black/10 pt-4">
                          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-sans text-sm font-bold text-[#164E63] marker:content-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#164E63]">
                            <span>Explore the proposals</span>
                            <span aria-hidden="true" className="text-xl transition-transform group-open:rotate-45">+</span>
                          </summary>
                          <div className="mt-4 max-w-[850px] font-sans text-sm leading-[1.9] text-black/65">{area.description}</div>
                        </details>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* ACCOUNTABILITY MECHANISMS */}
            <section className="mt-12 grid gap-4 lg:grid-cols-2">
              <article className="rounded-2xl bg-[#171717] p-7 text-white sm:p-9">
                <p className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-[#F2C94C]">A proposed accountability mechanism</p>
                <details className="group mt-4 border-t border-white/20 pt-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                    <span className="font-display text-[clamp(2.7rem,5vw,4.5rem)] leading-[0.9]">Executive Demerit</span>
                    <span aria-hidden="true" className="shrink-0 text-2xl text-[#F2C94C] transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <div className="mt-5 space-y-3 font-sans text-sm leading-[1.85] text-white/75">
                    <p>Establish an Executive Demerit system administered by the Executive Office to publicly identify serious failures in <strong>ethics and accountability</strong>, safety, transparency, or public stewardship.</p>
                    <p>A demerit would require verified misconduct, abuse of authority, gross negligence, or a serious failure of responsibility causing significant public harm or substantial erosion of public trust. An <strong>independent bipartisan panel</strong> would review the evidence and publicly explain its recommendation.</p>
                    <p>It would be a <em>public accountability</em> measure, not a criminal or civil punishment. It could not be issued solely for political disagreement, ideology, lawful unpopular speech, or disagreement over policy. Demerits should be rare enough not to become <strong>another political weapon</strong>.</p>
                  </div>
                </details>
              </article>
              <article className="rounded-2xl bg-[#164E63] p-7 text-white sm:p-9">
                <p className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-[#F2C94C]">The standard</p>
                <details className="group mt-4 border-t border-white/20 pt-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                    <span className="font-display text-[clamp(2.7rem,5vw,4.5rem)] leading-[0.9]">Learn. Test. Correct.</span>
                    <span aria-hidden="true" className="shrink-0 text-2xl text-[#F2C94C] transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <div className="mt-5 space-y-3 font-sans text-sm leading-[1.85] text-white/80">
                    <p>Ask the same questions of every institution: who has the power, who checks it, what evidence supports its use, who can challenge the decision, and <strong>what happens when it fails</strong>?</p>
                    <p>No corporation should dictate a market's terms without competition. No government agency should evade oversight. No technology platform should control people's information without giving them <strong>agency over it</strong>. No intelligence agency should be beyond democratic review. No political ally should receive an exemption from standards applied to an adversary.</p>
                    <p>No institution should operate <strong>without accountability</strong>.</p>
                  </div>
                </details>
              </article>
            </section>

            <p className="mt-7 max-w-[800px] font-sans text-sm leading-[1.8] text-black/50">
              This page is an overview, not the <a href="https://docs.google.com/document/d/10vc88JKkNPM6tvgCyUFty89aLTJn36lq/edit?usp=sharing&ouid=109046789529405891188&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#164E63] underline underline-offset-4 transition-colors hover:text-[#A9161E]">complete policy text</a>. Proposals remain open to research, legal analysis, public scrutiny, and revision.
            </p>
          </div>
        </section>

        {/* CLOSING */}
        <section className="relative overflow-hidden bg-[#F2C94C] px-[6vw] py-[clamp(5rem,10vw,9rem)]">
          <div aria-hidden="true" className="pointer-events-none absolute -right-[5vw] -top-[10vw] h-[30vw] w-[30vw] rounded-full bg-[#E05A60]/20 blur-[5vw]" />
          <div className="relative mx-auto max-w-[1200px]">
            <p className="font-sans text-sm font-bold uppercase tracking-[0.1em] text-black/55">And that's the point</p>
            <h2 className="mt-5 max-w-[950px] font-display text-[clamp(4rem,10vw,9rem)] leading-[0.8]">Power is a<br />responsibility.</h2>
            <p className="mt-8 max-w-[720px] font-sans text-lg leading-[1.8]">
              Power's purpose is to <strong>build better systems</strong>. Democracy is strongest when <strong>power is distributed</strong>, institutions can be challenged, people are informed, and accountability still applies when it is inconvenient.
            </p>
            <p className="mt-6 font-display text-3xl">Power should never lack a counterweight.</p>
            <a href="/" className="mt-8 inline-flex items-center gap-3 bg-[#171717] px-6 py-4 font-sans font-bold text-white transition-transform hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#164E63]">
              Back to Samaadi.net <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
