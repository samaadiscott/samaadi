"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type Progress = {
  xp: number;
  pages: string[];
  discoveries: string[];
};

const STORAGE_KEY = "samaadi-discovery-v1";
const destinations = [
  { path: "/", label: "Home" },
  { path: "/projects", label: "Projects" },
  { path: "/civic", label: "Civic" },
  { path: "/ideas", label: "Ideas" },
  { path: "/ideas/countervailance", label: "Countervailance" },
];

const emptyProgress: Progress = { xp: 0, pages: [], discoveries: [] };

export default function DiscoveryTracker() {
  const pathname = usePathname();
  const [progress, setProgress] = useState<Progress>(emptyProgress);
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);
  const timers = useRef<Map<Element, ReturnType<typeof setTimeout>>>(new Map());

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as Partial<Progress>;
        setProgress({
          xp: typeof parsed.xp === "number" ? parsed.xp : 0,
          pages: Array.isArray(parsed.pages) ? parsed.pages : [],
          discoveries: Array.isArray(parsed.discoveries) ? parsed.discoveries : [],
        });
      }
    } catch {
      setProgress(emptyProgress);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress, ready]);

  const award = useCallback((key: string, points: number, type: "page" | "discovery") => {
    setProgress((current) => {
      const collection = type === "page" ? current.pages : current.discoveries;
      if (collection.includes(key)) return current;
      return {
        ...current,
        xp: current.xp + points,
        pages: type === "page" ? [...current.pages, key] : current.pages,
        discoveries: type === "discovery" ? [...current.discoveries, key] : current.discoveries,
      };
    });
  }, []);

  useEffect(() => {
    if (!ready) return;
    award(pathname, 10, "page");
  }, [pathname, ready, award]);

  useEffect(() => {
    if (!ready) return;
    const sections = Array.from(document.querySelectorAll("main section"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !timers.current.has(entry.target)) {
            const index = sections.indexOf(entry.target);
            const section = entry.target as HTMLElement;
            const identity = section.id || `section-${index + 1}`;
            const key = `${pathname}#${identity}`;
            const timer = setTimeout(() => {
              if (entry.target.isConnected) award(key, 5, "discovery");
              timers.current.delete(entry.target);
            }, 900);
            timers.current.set(entry.target, timer);
          } else if (!entry.isIntersecting) {
            const timer = timers.current.get(entry.target);
            if (timer) clearTimeout(timer);
            timers.current.delete(entry.target);
          }
        });
      },
      { threshold: 0.35 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => {
      observer.disconnect();
      timers.current.forEach((timer) => clearTimeout(timer));
      timers.current.clear();
    };
  }, [pathname, ready, award]);

  const visitedCount = progress.pages.filter((page) =>
    destinations.some((destination) => destination.path === page)
  ).length;
  const achievements = useMemo(
    () => [
      { title: "First discovery", description: "Explore your first section.", unlocked: progress.discoveries.length >= 1 },
      { title: "Curious mind", description: "Visit three destinations.", unlocked: visitedCount >= 3 },
      { title: "Full tour", description: "Visit all five destinations.", unlocked: visitedCount === destinations.length },
      { title: "Deep reader", description: "Explore ten different sections.", unlocked: progress.discoveries.length >= 10 },
    ],
    [progress.discoveries.length, visitedCount]
  );

  if (!ready) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[60] font-sans">
      {open && (
        <div className="mb-3 w-[min(19rem,calc(100vw-2rem))] border border-white/15 bg-[#171717] p-5 text-white shadow-2xl">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[#F2C94C]">Your field notes</p>
              <p className="mt-1 font-display text-3xl">{progress.xp} XP</p>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close progress panel" className="text-white/60 hover:text-white">✕</button>
          </div>
          <div className="mt-4 h-1.5 overflow-hidden bg-white/15">
            <div className="h-full bg-[#CF1C25] transition-all" style={{ width: `${(visitedCount / destinations.length) * 100}%` }} />
          </div>
          <p className="mt-2 text-xs text-white/55">{visitedCount} of {destinations.length} destinations explored</p>
          <div className="mt-5 border-t border-white/15 pt-4">
            <p className="text-xs font-bold uppercase tracking-wider text-white/60">Achievements</p>
            <div className="mt-3 space-y-3">
              {achievements.map((achievement) => (
                <div key={achievement.title} className="flex gap-3">
                  <span className={achievement.unlocked ? "text-[#F2C94C]" : "text-white/25"}>{achievement.unlocked ? "✦" : "○"}</span>
                  <div>
                    <p className={achievement.unlocked ? "text-sm font-semibold text-white" : "text-sm text-white/45"}>{achievement.title}</p>
                    <p className="text-xs text-white/45">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-4 border-t border-white/15 pt-3 text-[0.68rem] leading-relaxed text-white/40">Progress is saved in this browser. Explore naturally; there are no points for repeated clicks.</p>
        </div>
      )}
      <button
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="ml-auto flex items-center gap-3 border border-white/15 bg-[#171717] px-4 py-3 text-left text-white shadow-xl transition hover:-translate-y-0.5 hover:border-[#F2C94C]/70"
      >
        <span className="text-[#F2C94C]">✦</span>
        <span>
          <span className="block text-[0.6rem] font-bold uppercase tracking-[0.14em] text-white/50">Explore</span>
          <span className="block text-sm font-bold tabular-nums">{progress.xp} XP</span>
        </span>
        <span className="text-xs text-white/50">{open ? "−" : "+"}</span>
      </button>
    </div>
  );
}
