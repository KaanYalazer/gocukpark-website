"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  icon: string;
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
};

const stats: Stat[] = [
  {
    icon: "calendar_month",
    value: 7,
    suffix: "+",
    label: "Yıllık Sektör Tecrübesi",
  },
  {
    icon: "car_repair",
    value: 5000,
    suffix: "+",
    label: "Onarılan Araç Deneyimi",
  },
  {
    icon: "verified",
    value: 100,
    prefix: "%",
    suffix: "",
    label: "Müşteri Memnuniyeti",
  },
  {
    icon: "shield",
    value: 1,
    suffix: " Yıl",
    label: "Tamirat Garantisi",
  },
];

function useCountUp(target: number, start: boolean, duration = 1600) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;
    const startTs = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - startTs) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(eased * target));
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [start, target, duration]);

  return value;
}

function StatCard({ stat, animate }: { stat: Stat; animate: boolean }) {
  const current = useCountUp(stat.value, animate);
  return (
    <div className="bg-surface-container rounded-xl p-6 md:p-8 metallic-edge flex flex-col gap-4 hover:bg-surface-container-high transition-colors border border-outline-variant/20">
      <div className="w-12 h-12 rounded bg-surface-variant flex items-center justify-center border border-outline-variant/50">
        <span className="material-symbols-outlined text-surface-tint">
          {stat.icon}
        </span>
      </div>
      <div className="text-headline-md text-primary tabular-nums">
        {stat.prefix}
        {current.toLocaleString("tr-TR")}
        {stat.suffix}
      </div>
      <p className="text-body-sm text-on-surface-variant">{stat.label}</p>
    </div>
  );
}

export default function StatsGrid() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pb-8 md:pb-12 px-page"
    >
      <div className="container-max">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} animate={animate} />
          ))}
        </div>
      </div>
    </section>
  );
}
