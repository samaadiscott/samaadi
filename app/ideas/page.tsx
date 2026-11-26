import Link from "next/link";
import SiteNav from "@/components/SiteNav";

const mainEssay = [
  `What if part of the reason the idea of the “holy spirit” or God itself resonates is because it is a visceral description of an unknowable part of your, or man’s (as in humankind’s), self? Something which has desires that man has been in a constant battle to understand. We’ll call it the unconscious. Let’s assume much of desire is created from a lack of something, and much of desire seeks to be acknowledged. What if your more virtuous desires are a reflection of what your soul thinks the unconscious desires?`,
  `This directly mirrors Jacques Lacan’s idea of the "other" and the "big other," where human desire is fundamentally born from an inherent sense of lack and a desperate need to be acknowledged by an external authority.`,
  `The unconscious is ever present, and causes you to judge whether your own desires are acceptable, and if you are a virtuous person. Maybe the “holy spirit” and our scriptures are mechanisms that help fend off obsession with the desires of the unconscious, and fend off shame; as long as you’re doing the virtuous thing.`,
  `In this sense, religion and scripture function as the ultimate "big other." The external system of language and law that humanity uses to structure the parts of the mind that are pure chaos.`,
  `And what if there’s a primordial part of the unconscious that seeks to be all-powerful, and believes it’s right for those not virtuous to suffer, affirmed by scripture?`,
  `So what if the unconscious is man’s portal to experience God? Religion is the only way the vast majority of man can understand the unknowable, which is why it resonates with so many. This implies there is something inherent about Islam and christianity that succeeds in showing us the unknowable that exists in our and our world’s nature.`,
  `Others have come to similar conclusions from entirely different angles, highlighting concepts that didn't directly inspire this thought process. Carl Jung argued that religious archetypes are actually projections of a collective unconscious, viewing scriptures as necessary evolutional systems to safely integrate these overwhelming internal forces. From a harsher perspective, Friedrich Nietzsche explored how the primordial, power-seeking part of the human psyche, the "will to power," gets projected onto religion, allowing humanity to cloak its inherent aggression and desire to see others suffer in the acceptable language of divine justice and righteous wrath.`,
];

const prideEssay = `Plato said wherever one is confident they may act unjustly, they will. The unconscious' constant judgement is guarding man from acting unjustly. The reason pride is considered the worst sin IS because it can make you (as in your ego or soul) believe you are greater than God, but it can make you believe you are greater than the judgements of the unconscious. Once that is true, you are free to act unjustly. The more you act unjustly, the more vulnerable your soul and eventually ego is to obsession with your unjust actions. Also, operating in society demands acting justly.`;
const soulEssay = `I’ve been noticing more and more that your desires, actions and thoughts of your ego (conscious) will take longer to embed themselves into your soul (subconscious), but when they do will embed deep into your soul and affect the underlying part of you that the world doesn’t explicitly see, but will see.`;
const notes = [
  "I have unrecognized greatness within me, so i'll give it to the world.",
  "I don't want it to be my responsibility to think, i want it to be my freedom to think.",
  "Winning through conquer is less admirable than winning without. we must be so formidable we could deter enemies without killing. killing is a degree of losing.",
  "The most interesting thing to me is the science of building a better world.",
];

export default function IdeasPage() {
  return (
    <>
      <SiteNav activePage="ideas" />
      <main className="overflow-hidden bg-[#F5F1EA] text-[#171717]">
        <section className="relative border-b border-black/10">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.12]" style={{ backgroundImage: "radial-gradient(#171717 1px, transparent 1px)", backgroundSize: "18px 18px" }} />
          <div className="relative mx-auto grid max-w-[1440px] gap-10 px-[6vw] pb-[10vh] pt-[12vh] md:grid-cols-[1.4fr_0.6fr] md:items-end">
            <div>
              <p className="mb-5 font-sans text-xs font-bold uppercase tracking-[0.18em] text-[#CF1C25]">Ideas / Writings</p>
              <h1 className="font-display text-[clamp(4.5rem,10vw,9rem)] leading-[0.82] tracking-[-0.025em]">THE INNER<br />WORKINGS.</h1>
            </div>
            <div className="max-w-sm md:justify-self-end">
              <p className="font-sans text-lg leading-relaxed">I keep coming back to questions about <strong>what drives us</strong>, what restrains us, and how we build a society that reflects the better parts of human nature.</p>
              <details className="group mt-5">
                <summary className="cursor-pointer list-none font-sans text-sm font-semibold text-black/55 underline decoration-black/25 underline-offset-4">A little more about this page <span aria-hidden="true" className="inline-block transition-transform group-open:rotate-45">+</span></summary>
                <p className="mt-3 font-sans text-sm leading-relaxed text-black/65">Some thoughts are political. Some are personal. Some involve <strong>following questions</strong> much further than I originally intended. There is no guarantee of a tidy conclusion. You have been warned. =)</p>
              </details>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1440px] gap-12 px-[6vw] py-[11vh] lg:grid-cols-[0.35fr_1fr]">
          <aside className="lg:pt-2"><p className="font-sans text-xs font-bold uppercase tracking-[0.16em] text-[#CF1C25]">01 / Philosophy</p></aside>
          <article className="max-w-3xl">
            <h2 className="mb-8 font-display text-[clamp(2.7rem,5.5vw,5rem)] leading-[0.9]">THE UNCONSCIOUS,<br />RELIGION &amp; GOD.</h2>
            <details className="group border-y border-black/15 py-5">
              <summary className="cursor-pointer list-none font-sans text-sm font-bold underline decoration-[#CF1C25] underline-offset-4">Read the full writing <span aria-hidden="true" className="ml-2 inline-block transition-transform group-open:rotate-45">+</span></summary>
              <div className="mt-7 space-y-7 font-sans text-base leading-[1.85] text-black/80">
                {mainEssay.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
              </div>
            </details>
            <div className="my-12 border-l-[3px] border-[#CF1C25] py-2 pl-6"><p className="font-display text-3xl leading-tight">What if the unconscious is man's portal to experience God?</p></div>
          </article>
        </section>

        <section className="bg-[#171717] text-[#F5F1EA]">
          <div className="mx-auto max-w-[1440px] px-[6vw] py-[10vh]">
            <div className="mb-12 grid gap-6 md:grid-cols-[1fr_1fr] md:items-end">
              <div><p className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.16em] text-[#CF1C25]">02 / Related thoughts</p><h2 className="font-display text-[clamp(3rem,6vw,5.5rem)] leading-[0.88]">THE SELF<br />AS ITS OWN CHECK.</h2></div>
              <div className="max-w-lg md:justify-self-end">
                <p className="font-sans leading-relaxed text-white/75">If something within us judges our desires, what happens when we <strong>stop listening</strong>? And how do our choices change who we become?</p>
                <details className="group mt-4"><summary className="cursor-pointer list-none font-sans text-sm font-semibold text-[#F2C94C] underline decoration-white/40 underline-offset-4">Why these belong together <span aria-hidden="true" className="inline-block transition-transform group-open:rotate-45">+</span></summary><p className="mt-3 font-sans text-sm leading-relaxed text-white/65">These are separate thoughts, not chapters of one grand theory. They circle a shared question: how do we keep our own judgment honest?</p></details>
              </div>
            </div>

            <article className="grid gap-6 border-t border-white/20 py-8 md:grid-cols-[0.35fr_1fr]">
              <div><p className="font-sans text-xs font-bold uppercase tracking-[0.14em] text-[#F2C94C]">02A / Conscience</p><h3 className="mt-3 font-display text-3xl">Pride &amp; injustice</h3></div>
              <div className="max-w-3xl"><p className="font-sans leading-relaxed text-white/75">A thought about <strong>pride</strong>, <strong>conscience</strong>, and the point at which confidence becomes permission to act <strong>unjustly</strong>.</p><details className="group mt-4"><summary className="cursor-pointer list-none font-sans text-sm font-semibold text-[#F2C94C] underline decoration-white/40 underline-offset-4">Read the full note <span aria-hidden="true" className="inline-block transition-transform group-open:rotate-45">+</span></summary><p className="mt-4 font-sans text-lg leading-[1.85] text-white/85">{prideEssay}</p></details></div>
            </article>
            <article className="grid gap-6 border-t border-white/20 py-8 md:grid-cols-[0.35fr_1fr]">
              <div><p className="font-sans text-xs font-bold uppercase tracking-[0.14em] text-[#F2C94C]">02B / Identity</p><h3 className="mt-3 font-display text-3xl">The conscious self &amp; the soul</h3></div>
              <div className="max-w-3xl"><p className="font-sans leading-relaxed text-white/75">A note on how <strong>conscious choices</strong> might gradually shape the <strong>deeper self</strong>.</p><details className="group mt-4"><summary className="cursor-pointer list-none font-sans text-sm font-semibold text-[#F2C94C] underline decoration-white/40 underline-offset-4">Read the full note <span aria-hidden="true" className="inline-block transition-transform group-open:rotate-45">+</span></summary><p className="mt-4 font-sans text-lg leading-[1.85] text-white/85">{soulEssay}</p></details></div>
            </article>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-[6vw] py-[10vh]">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-5"><div><p className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.16em] text-[#CF1C25]">03 / Fragments</p><h2 className="font-display text-[clamp(3rem,6vw,5.5rem)] leading-[0.9]">THOUGHTS IN PASSING.</h2></div><p className="max-w-sm font-sans text-sm leading-relaxed text-black/65">Not every idea arrives as a fully formed essay. Some are just thoughts I wanted to keep before they wandered off.</p></div>
          <div className="grid gap-0 border-t border-black/20 md:grid-cols-2">
            {notes.map((note, index) => <blockquote key={index} className="border-b border-black/20 py-8 md:px-8 md:first:pl-0 md:nth-[2]:border-l md:nth-[2]:border-l-black/20 md:nth-[2]:pr-0"><span className="mb-5 block font-sans text-xs font-bold text-[#CF1C25]">0{index + 1}</span><p className="max-w-xl font-display text-[clamp(1.7rem,3vw,2.7rem)] leading-[1.12]">“{note}”</p></blockquote>)}
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#164E63] px-[6vw] py-[10vh] text-white">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.12]" style={{ backgroundImage: "radial-gradient(#FFFFFF 1.2px, transparent 1.2px)", backgroundSize: "20px 20px" }} />
          <div aria-hidden="true" className="pointer-events-none absolute -right-[7vw] -top-[10vw] h-[32vw] w-[32vw] rounded-full bg-[#F2C94C]/15 blur-[5vw]" />
          <div className="relative mx-auto grid max-w-[1440px] gap-10 md:grid-cols-[1fr_0.8fr] md:items-end">
            <div>
              <p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#F2C94C]">
                From the individual to society
              </p>
              <h2 className="font-display text-[clamp(3.5rem,8vw,7rem)] leading-[0.85]">
                POWER NEEDS
                <br />
                A COUNTERWEIGHT.
              </h2>
            </div>
            <div>
              <p className="mb-8 max-w-lg font-sans text-lg leading-relaxed text-white/90">
                These writings explore the forces that shape and restrain the
                individual. Countervailance takes a related question into
                public life: what keeps powerful people and institutions
                accountable when their own judgment is not enough?
              </p>
              <Link
                href="/ideas/countervailance"
                className="group inline-flex items-center gap-3 bg-[#F2C94C] px-6 py-4 font-sans text-sm font-bold text-[#171717] transition-transform duration-200 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Explore Countervailance
                <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </section>

        <footer className="px-[6vw] py-8"><div className="mx-auto flex max-w-[1440px] justify-between gap-4 font-sans text-xs text-black/50"><span>Ideas &amp; writings</span><Link href="/" className="transition-colors hover:text-[#CF1C25]">Samaadi.net →</Link></div></footer>
      </main>
    </>
  );
}
