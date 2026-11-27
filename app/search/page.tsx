import Link from "next/link";
import SiteNav from "@/components/SiteNav";

const pages = [
  { title: "Home", href: "/", description: "An introduction to Samaadi Scott, society, systems, and civic entrepreneurship.", keywords: "society systems questions worker thinker builder civic entrepreneur" },
  { title: "Projects", href: "/projects", description: "Projects and things being built, including Rally.", keywords: "projects building rally community app" },
  { title: "Civic", href: "/civic", description: "Civic work, youth leadership, public service, and community involvement.", keywords: "civic youth leadership public service advocacy CAO YAOTW VOTE" },
  { title: "Ideas & Writings", href: "/ideas", description: "Writing about philosophy, religion, conscience, identity, society, and belonging.", keywords: "ideas philosophy unconscious religion God pride conscience identity soul racism belonging dream" },
  { title: "Countervailance", href: "/ideas/countervailance", description: "An accountability agenda built around the principle that power needs a counterweight.", keywords: "countervailance accountability power government policy democracy liberty checks balances" },
];

type SearchPageProps = {
  searchParams: Promise<{ q?: string }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q = "" } = await searchParams;
  const query = q.trim().toLowerCase();
  const terms = query.split(/\s+/).filter(Boolean);
  const results = query
    ? pages.filter((page) => {
        const haystack = `${page.title} ${page.description} ${page.keywords}`.toLowerCase();
        return terms.every((term) => haystack.includes(term));
      })
    : [];

  return (
    <>
      <SiteNav activePage="search" />
      <main className="min-h-[75vh] bg-[#F5F1EA] px-[6vw] py-[10vh] text-[#171717]">
        <div className="mx-auto max-w-[1000px]">
          <p className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.16em] text-[#CF1C25]">Explore the site</p>
          <h1 className="font-display text-[clamp(4rem,10vw,8rem)] leading-[0.85]">SEARCH.</h1>
          <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-black/65">Find projects, civic work, writing, and ideas across Samaadi.net.</p>

          <form action="/search" method="get" role="search" className="mt-9 flex flex-col gap-3 sm:flex-row">
            <label htmlFor="site-search" className="sr-only">Search Samaadi.net</label>
            <input
              id="site-search"
              type="search"
              name="q"
              defaultValue={q}
              placeholder="Try “civic”, “power”, or “Rally”"
              className="min-h-14 min-w-0 flex-1 border border-black/20 bg-white px-5 font-sans text-base outline-none transition focus:border-[#CF1C25] focus:ring-2 focus:ring-[#CF1C25]/15"
            />
            <button type="submit" className="min-h-14 bg-[#CF1C25] px-8 font-sans text-sm font-bold text-white transition hover:bg-[#A9161E]">Search</button>
          </form>

          {query && (
            <section aria-live="polite" className="mt-12">
              <p className="mb-5 font-sans text-sm font-semibold text-black/55">{results.length} {results.length === 1 ? "result" : "results"} for “{q}”</p>
              {results.length ? (
                <div className="divide-y divide-black/15 border-y border-black/15">
                  {results.map((result) => (
                    <Link key={result.href} href={result.href} className="group flex items-center justify-between gap-6 py-6 transition-opacity hover:opacity-65">
                      <div>
                        <h2 className="font-display text-3xl sm:text-4xl">{result.title}</h2>
                        <p className="mt-2 max-w-2xl font-sans text-sm leading-relaxed text-black/60">{result.description}</p>
                      </div>
                      <span aria-hidden="true" className="font-sans text-xl transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="border-y border-black/15 py-8 font-sans text-base text-black/65">No matches yet. Try a broader term or a different phrase.</p>
              )}
            </section>
          )}
        </div>
      </main>
    </>
  );
}
