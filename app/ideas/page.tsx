import Link from "next/link";
import SiteNav from "@/components/SiteNav";

const mainEssay = [
  `What if part of the reason the idea of the “Holy Spirit,” or God itself, resonates is that it offers a visceral description of an unknowable part of the human self? Something within us has desires that people have struggled to understand. Let’s call it the unconscious. Suppose much of desire arises from a sense of lack, and much of it seeks acknowledgment. What if your more virtuous desires reflect what your Soul believes the unconscious desires?`,
  `This echoes Jacques Lacan’s ideas of the “Other” and the “big Other,” in which desire is shaped by a sense of lack and by the need for recognition from an authority beyond the self.`,
  `The unconscious is always present, shaping how you judge whether your desires are acceptable and whether you are a virtuous person. Perhaps the “Holy Spirit” and scripture help people resist becoming consumed by the desires of the unconscious, and help them navigate shame by giving them a way to pursue what they believe is virtuous.`,
  `In this sense, religion and scripture can function as a kind of “big Other”: internal and external systems of language and law that help humanity give structure to parts of the mind that might otherwise feel chaotic.`,
  `But what if there is also a primordial part of the unconscious that seeks to be all-powerful, and can convince people that those judged unvirtuous deserve to suffer, with scripture used to affirm that judgment?`,
  `What if the unconscious is humanity’s portal to experiencing God? Religion may be one of the main ways people make sense of what is unknowable. Its resonance could suggest that Islam and Christianity, among other traditions, give people ways to encounter something deep in human nature and in the world around them.`,
  `Others have approached related questions from different directions. Carl Jung interpreted religious archetypes as expressions of a collective unconscious, and saw religious symbols as ways people encounter and integrate powerful psychic forces. From a harsher perspective, Friedrich Nietzsche examined how the human will to power can be projected onto religion, allowing aggression and resentment to be recast in the language of divine justice and righteous wrath.`,
];

const prideEssay = <>Plato’s argument suggests that when people believe they can act unjustly without consequence, they will. Perhaps the Unconscious’s constant judgment helps restrain that impulse. The reason pride is considered the worst sin <em>is</em> that it can lead you to believe your Ego or Soul is greater than God. It can also convince you that you are above the judgment of the Unconscious. Once that happens, you may feel free to act unjustly. The more often you act unjustly, the more vulnerable your Soul, and eventually your Ego, may become to obsession with those actions. Beyond those inner consequences, living in society requires us to act justly.</>;
const soulEssay = `I’ve been noticing that the desires, actions, and thoughts of your Ego (the conscious self) may take longer to become embedded in your Soul (the subconscious self). But when they do, they can settle deeply, shaping the part of you the world cannot directly see, even if it eventually sees the effects.`;
const racismEssay = `Modern racism isn’t about hate of another race; it’s about a love of your own. Racism is one love language, but it’s the most destructive, leading to hateful fears, power-concentrations, and systems, and it’s one we need to root out of society. This language of a love for your own race leads to indifference toward its hateful machinations. And when these hateful machinations lead to more power, they’ll seize it.`;
const notes = [
  "I have unrecognized greatness within me, so I'll give it to the world.",
  "I don't want thinking to be my responsibility; I want it to be my freedom.",
  "Winning through conquest is less admirable than winning without it. We should be so formidable that we can deter enemies without killing. Killing is a degree of losing.",
  "The most interesting thing to me is the science of building a better world.",
  "In worldly matters, others may be loyal to an ideology. My loyalty is to effectiveness.",
  "It is a blessing to dream.",
];

function DiceMarker({ value }: { value: number }) {
  const faces: number[] = [];
  let remaining = value;
  while (remaining > 6) {
    faces.push(6);
    remaining -= 6;
  }
  if (remaining > 0) faces.push(remaining);
  const pipLayouts: Record<number, number[]> = {
    1: [4],
    2: [0, 8],
    3: [0, 4, 8],
    4: [0, 2, 6, 8],
    5: [0, 2, 4, 6, 8],
    6: [0, 3, 6, 2, 5, 8],
  };
  return (
    <span className="flex shrink-0 items-center gap-1" aria-label={`Snippet ${value}`}>
      {faces.map((face, dieIndex) => (
        <span key={dieIndex} aria-hidden="true" className="grid h-7 w-7 grid-cols-3 grid-rows-3 gap-0.5 rounded-[5px] bg-[#171717] p-1">
          {Array.from({ length: 9 }, (_, cell) => (
            <span key={cell} className={`rounded-full ${pipLayouts[face].includes(cell) ? "bg-[#F5F1EA]" : "bg-transparent"}`} />
          ))}
        </span>
      ))}
    </span>
  );
}

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

        <section className="bg-[#DCE5E7] px-[6vw] py-[10vh]">
          <div className="mx-auto grid max-w-[1440px] gap-8 md:grid-cols-[0.35fr_1fr]">
            <aside><p className="font-sans text-xs font-bold uppercase tracking-[0.16em] text-[#164E63]">03 / Society</p></aside>
            <article className="max-w-3xl">
              <h2 className="font-display text-[clamp(2.8rem,6vw,5.5rem)] leading-[0.9]">ON WHEN BELONGING...</h2>
              <p className="mt-7 font-sans text-base leading-[1.9] text-black/75">{racismEssay}</p>
            </article>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-[6vw] py-[10vh]">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-5"><div><p className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.16em] text-[#CF1C25]">04 / Fragments</p><h2 className="font-display text-[clamp(3rem,6vw,5.5rem)] leading-[0.9]">THOUGHTS IN PASSING.</h2></div><p className="max-w-sm font-sans text-sm leading-relaxed text-black/65">Not every idea arrives as a fully formed essay. Some are just thoughts I wanted to keep before they wandered off.</p></div>
          <div className="grid gap-0 border-t border-black/20 md:grid-cols-2">
            {notes.map((note, index) => <blockquote key={index} className="flex items-start gap-5 border-b border-black/20 py-8 md:px-8 md:first:pl-0 md:nth-[2]:border-l md:nth-[2]:border-l-black/20 md:nth-[2]:pr-0"><DiceMarker value={index + 1} /><p className="max-w-xl font-display text-[clamp(1.7rem,3vw,2.7rem)] leading-[1.12]">“{note}”</p></blockquote>)}
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
