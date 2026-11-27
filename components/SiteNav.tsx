
type SiteNavProps = {
  activePage: "home" | "projects" | "civic" | "ideas" | "countervailance" | "search";
};

const linkStyle =
  "flex items-center justify-between gap-6 whitespace-nowrap px-4 py-3 text-sm text-white transition-colors hover:bg-white/10 hover:text-white";

export default function SiteNav({ activePage }: SiteNavProps) {
  const workIsActive = activePage !== "home" && activePage !== "search";
  const ideasIsActive =
    activePage === "ideas" || activePage === "countervailance";

  return (
    <header className="relative z-50 border-b border-white/10 bg-[#171717]">
      <nav className="mx-auto flex h-[11vh] min-h-[64px] w-[90%] max-w-[1440px] items-center justify-between">
        <a href="/" aria-label="Samaadi Scott home">
          <img
            src="/hero.jpg"
            alt="Samaadi Scott"
            className="h-[7.64vh] w-[7.64vh] min-h-10 min-w-10 rounded-full border-2 border-black object-cover"
          />
        </a>

        <div className="flex items-center gap-[clamp(0.75rem,2.36vw,2rem)] whitespace-nowrap font-sans text-[0.9rem]">
          <a
            href="/"
            aria-current={activePage === "home" ? "page" : undefined}
            className={`relative py-[1.2vh] text-white transition-opacity hover:opacity-60 ${
              activePage === "home" ? "font-bold" : "font-medium"
            }`}
          >
            Home
            {activePage === "home" && (
              <span className="absolute bottom-0 left-1/2 h-[7px] w-[calc(100%+0.8rem)] -translate-x-1/2 bg-[#A9161E]" />
            )}
          </a>

          <div className="group relative">
            <a
              href="/#work"
              className={`relative flex items-center gap-2 py-[1.2vh] text-white transition-opacity hover:opacity-60 ${
                workIsActive ? "font-bold" : "font-medium"
              }`}
            >
              Work
              <span className="text-[0.65rem] transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180">
                ▼
              </span>
              {workIsActive && (
                <span className="absolute bottom-0 left-1/2 h-[7px] w-[calc(100%+0.8rem)] -translate-x-1/2 bg-[#A9161E]" />
              )}
            </a>

            <div className="invisible absolute right-0 top-full min-w-48 translate-y-1 border border-white/10 bg-[#171717] py-2 opacity-0 shadow-xl transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <div className="group/projects relative">
                <a
                  href="/projects"
                  aria-current={activePage === "projects" ? "page" : undefined}
                  className={`${linkStyle} ${
                    activePage === "projects" ? "font-bold" : "font-medium"
                  }`}
                >
                  <span>Projects</span>
                  <span className="text-white/60">›</span>
                </a>

                <div className="invisible absolute right-full top-0 min-w-44 border border-white/10 bg-[#171717] py-2 opacity-0 transition-all duration-150 group-hover/projects:visible group-hover/projects:opacity-100 group-focus-within/projects:visible group-focus-within/projects:opacity-100">
                  <a href="/projects#rally" className={linkStyle}>
                    Rally
                  </a>
                </div>
              </div>

              <a
                href="/civic"
                aria-current={activePage === "civic" ? "page" : undefined}
                className={`${linkStyle} ${
                  activePage === "civic" ? "font-bold" : "font-medium"
                }`}
              >
                Civic
              </a>

              <div className="group/ideas relative">
                <a
                  href="/ideas"
                  aria-current={activePage === "ideas" ? "page" : undefined}
                  className={`${linkStyle} ${
                    ideasIsActive ? "font-bold" : "font-medium"
                  }`}
                >
                  <span>Ideas</span>
                  <span className="text-white/60">›</span>
                </a>

                <div className="invisible absolute right-full top-0 min-w-48 border border-white/10 bg-[#171717] py-2 opacity-0 transition-all duration-150 group-hover/ideas:visible group-hover/ideas:opacity-100 group-focus-within/ideas:visible group-focus-within/ideas:opacity-100">
                  <a
                    href="/ideas/countervailance"
                    aria-current={
                      activePage === "countervailance" ? "page" : undefined
                    }
                    className={`${linkStyle} ${
                      activePage === "countervailance"
                        ? "font-bold"
                        : "font-medium"
                    }`}
                  >
                    Countervailance
                  </a>
                </div>
              </div>
            </div>
          </div>

          <a
            href="/#about"
            className="py-[1.2vh] font-medium text-white transition-opacity hover:opacity-60"
          >
            About
          </a>
          <a
            href="/search"
            aria-label="Search the site"
            className={`inline-flex items-center gap-2 py-[1.2vh] text-white transition-opacity hover:opacity-60 ${activePage === "search" ? "font-bold" : "font-medium"}`}
          >
            <span aria-hidden="true">⌕</span><span>Search</span>
          </a>
        </div>
      </nav>
    </header>
  );
}