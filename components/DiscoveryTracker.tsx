"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type Progress = {
  xp: number;
  pages: string[];
  discoveries: string[];
};

type Celebration = {
  title: string;
  description: string;
  grand: boolean;
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
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [celebration, setCelebration] = useState<Celebration | null>(null);
  const timers = useRef<Map<Element, ReturnType<typeof setTimeout>>>(new Map());
  const audioContext = useRef<AudioContext | null>(null);
  const previousUnlocked = useRef<string[] | null>(null);

  const enableAudio = useCallback(() => {
    try {
      if (!audioContext.current) {
        audioContext.current = new window.AudioContext();
      }
      if (audioContext.current.state === "suspended") {
        void audioContext.current.resume();
      }
    } catch {
      // The visual celebration still works when audio is unavailable.
    }
  }, []);

  const playChime = useCallback((grand: boolean) => {
    const context = audioContext.current;
    if (!soundEnabled || !context || context.state !== "running") return;

    const notes = grand ? [523.25, 659.25, 783.99, 1046.5, 1318.5] : [659.25, 880, 1174.66];
    const start = context.currentTime;

    notes.forEach((frequency, index) => {
      const oscillator = context.createOscillator();
      const volume = context.createGain();
      const noteStart = start + index * (grand ? 0.11 : 0.09);
      const noteEnd = noteStart + (grand ? 0.42 : 0.34);

      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(frequency, noteStart);
      volume.gain.setValueAtTime(0.0001, noteStart);
      volume.gain.exponentialRampToValueAtTime(grand ? 0.095 : 0.065, noteStart + 0.025);
      volume.gain.exponentialRampToValueAtTime(0.0001, noteEnd);
      oscillator.connect(volume);
      volume.connect(context.destination);
      oscillator.start(noteStart);
      oscillator.stop(noteEnd);
    });
  }, [soundEnabled]);

  useEffect(() => {
    const activateAudio = () => enableAudio();
    document.addEventListener("pointerdown", activateAudio, { once: true });
    document.addEventListener("keydown", activateAudio, { once: true });
    return () => {
      document.removeEventListener("pointerdown", activateAudio);
      document.removeEventListener("keydown", activateAudio);
    };
  }, [enableAudio]);

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
    if (ready) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
      } catch {
        // Progress remains available for the current session.
      }
    }
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

  useEffect(() => {
    if (!ready) return;
    const unlockedNow = achievements.filter((achievement) => achievement.unlocked).map((achievement) => achievement.title);

    if (previousUnlocked.current === null) {
      previousUnlocked.current = unlockedNow;
      return;
    }

    const newlyUnlocked = unlockedNow.filter((title) => !previousUnlocked.current?.includes(title));
    previousUnlocked.current = unlockedNow;
    if (newlyUnlocked.length === 0) return;

    const grand = achievements.every((achievement) => achievement.unlocked);
    const title = grand ? "Full explorer" : newlyUnlocked[0];
    const description = grand
      ? "Every achievement. Every destination. You explored the whole site."
      : achievements.find((achievement) => achievement.title === title)?.description ?? "You found something worth exploring.";

    setCelebration({ title, description, grand });
    playChime(grand);
  }, [achievements, playChime, ready]);

  if (!ready) return null;

  return (
    <>
      {celebration && (
        <div
          className={`achievement-overlay ${celebration.grand ? "achievement-overlay--grand" : ""}`}
          role="presentation"
          onClick={() => setCelebration(null)}
        >
          <div className="achievement-confetti" aria-hidden="true">
            {Array.from({ length: celebration.grand ? 42 : 24 }, (_, index) => (
              <span
                key={index}
                style={{
                  left: `${(index * 37 + 11) % 100}%`,
                  animationDelay: `${(index % 9) * 0.075}s`,
                  animationDuration: `${1.6 + (index % 5) * 0.16}s`,
                }}
              />
            ))}
          </div>

          <section
            className={`achievement-card ${celebration.grand ? "achievement-card--grand" : ""}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="achievement-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="achievement-emblem" aria-hidden="true">
              <span>{celebration.grand ? "✦" : "★"}</span>
            </div>
            <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#F2C94C]">
              {celebration.grand ? "All achievements unlocked" : "Achievement unlocked"}
            </p>
            <h2 id="achievement-title" className="mt-4 font-display text-5xl leading-[0.9] text-white sm:text-6xl">
              {celebration.grand ? "YOU DID THE WHOLE THING." : celebration.title}
            </h2>
            <p className="mx-auto mt-5 max-w-sm font-sans text-sm leading-7 text-white/75">
              {celebration.description}
            </p>
            {celebration.grand && (
              <p className="mt-5 font-display text-3xl text-[#F2C94C]">THE SITE IS YOURS TO EXPLORE.</p>
            )}
            <button
              onClick={() => setCelebration(null)}
              className="mt-8 bg-[#F2C94C] px-7 py-3 font-sans text-sm font-bold text-[#171717] transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {celebration.grand ? "Take a victory lap" : "Nice. Keep exploring."}
            </button>
          </section>
        </div>
      )}

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
              <div
                className="h-full transition-all"
                style={{
                  width: `${(visitedCount / destinations.length) * 100}%`,
                  backgroundColor:
                    pathname === "/projects"
                      ? "#FF6B35"
                      : pathname === "/ideas/countervailance"
                        ? "#F2C94C"
                        : "#CF1C25",
                }}
              />
            </div>
            <p className="mt-2 text-xs text-white/55">{visitedCount} of {destinations.length} destinations explored</p>
            <div className="mt-5 border-t border-white/15 pt-4">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-bold uppercase tracking-wider text-white/60">Achievements</p>
                <button
                  onClick={() => {
                    if (!soundEnabled) enableAudio();
                    setSoundEnabled((value) => !value);
                  }}
                  aria-pressed={soundEnabled}
                  className="text-[0.65rem] font-semibold text-[#F2C94C] underline underline-offset-2"
                >
                  Sound {soundEnabled ? "on" : "off"}
                </button>
              </div>
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
            <p className="mt-4 border-t border-white/15 pt-3 text-[0.68rem] leading-relaxed text-white/40">Progress is saved in this browser. Sound activates after your first interaction with the page.</p>
          </div>
        )}
        <button
          onClick={() => {
            enableAudio();
            setOpen((value) => !value);
          }}
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
    </>
  );
}
