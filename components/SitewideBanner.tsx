import Link from "next/link";

export default function SitewideBanner() {
  return (
    <div className="relative z-[60] flex flex-wrap items-center justify-center gap-x-3 gap-y-1 bg-[#DCE5E7] px-4 py-2.5 text-center font-sans text-xs font-semibold text-[#171717] sm:text-sm">
      <span>Take the YAOTW survey and share your perspective.</span>
      <Link
        href="https://docs.google.com/forms/d/e/1FAIpQLSe6YNYVf_2jgIUtf90wgTVKQ_t2CUqGjfeUhcVGiNIMntYc1w/viewform"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1 font-extrabold text-[#A9161E] underline decoration-[#A9161E]/40 underline-offset-4 transition-colors hover:text-[#171717]"
      >
        Take the survey <span aria-hidden="true">↗</span>
      </Link>
    </div>
  );
}
