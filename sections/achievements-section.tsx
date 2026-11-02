"use client";

import { useEffect, useState } from "react";
import {
  Award,
  CalendarDays,
  Flame,
  Globe,
  Trophy,
} from "lucide-react";
import { config } from "@/lib/config";
import { SectionShell } from "@/components/ui/section-shell";
import { InteractiveHeatmap, HeatmapDay } from "@/components/common/heatmap";

type CodolioActivity = {
  isAvailable: boolean;
  heatmap?: HeatmapDay[];
};

export function AchievementsSection() {
  const [activity, setActivity] = useState<CodolioActivity | null>(null);

  useEffect(() => {
    fetch("/api/codolio")
      .then((response) => (response.ok ? response.json() : null))
      .then((data: CodolioActivity | null) => setActivity(data))
      .catch((error) => console.error("[Coding Milestones] Failed to load Codolio activity:", error));
  }, []);

  const stats = [
    { label: "Questions Solved", value: config.codolio.questionsSolved.toLocaleString(), icon: Flame, tone: "text-emerald-500" },
    { label: "Active Days", value: config.codolio.activeDays.toLocaleString(), icon: CalendarDays, tone: "text-teal-600" },
    { label: "Contests Attended", value: config.codolio.contestsAttended.toLocaleString(), icon: Trophy, tone: "text-orange-500" },
    { label: "Rating", value: config.codolio.rating.toLocaleString(), icon: Award, tone: "text-orange-500" },
    { label: "Global Rank", value: config.codolio.globalRank.toLocaleString(), icon: Globe, tone: "text-sky-500" },
    { label: "Fundamentals", value: config.codolio.fundamentals.toLocaleString(), icon: Flame, tone: "text-emerald-600" },
    { label: "DSA", value: config.codolio.dsa.toLocaleString(), icon: Flame, tone: "text-green-600" },
    { label: "Competitive Programming", value: config.codolio.competitiveProgramming.toLocaleString(), icon: Award, tone: "text-rose-500" },
  ];

  return (
    <SectionShell
      id="achievements"
      index="03"
      label="CODING JOURNEY"
      title="Coding Milestones"
      description="A unified view of coding progress, competitive programming, and platform achievements."
      quote="Progress is a series of small wins."
    >
      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex min-h-[92px] items-center gap-3 rounded-2xl border border-[#E3E3E1] bg-white px-4 py-4 shadow-[0_3px_15px_rgba(0,0,0,0.025)] transition-transform hover:-translate-y-0.5"
              >
                <Icon size={20} className={`shrink-0 ${stat.tone}`} />
                <div className="min-w-0">
                  <p className="truncate font-serif text-2xl font-extrabold leading-none text-[#1A1A1A] sm:text-[27px]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-medium text-[#686868]">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="rounded-2xl border border-[#E3E3E1] bg-white p-5 shadow-[0_3px_15px_rgba(0,0,0,0.025)] sm:p-7">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#707070]">
                Problem Solving Activity
              </p>
              <p className="mt-2 text-sm font-medium text-[#777]">Codolio profile overview</p>
            </div>
            <a
              href={config.codolio.profile}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-xs font-semibold text-[#222] hover:underline sm:text-sm"
            >
              View Profile ↗
            </a>
          </div>
          <div className="mb-5">
            <InteractiveHeatmap data={activity?.heatmap || []} variant="codolio" />
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ["Fundamentals", config.codolio.fundamentals],
              ["DSA", config.codolio.dsa],
              ["Competitive Programming", config.codolio.competitiveProgramming],
            ].map(([label, count]) => (
              <div key={label} className="rounded-xl bg-[#F7F8F5] p-4">
                <p className="text-xs font-semibold text-[#666]">{label}</p>
                <p className="mt-2 font-serif text-2xl font-extrabold text-[#1A1A1A]">{count}</p>
                <div className="mt-3 h-2 rounded-full bg-[#E4E8E1]">
                  <div
                    className="h-2 rounded-full bg-emerald-500"
                    style={{ width: `${Math.min(100, (Number(count) / config.codolio.dsa) * 100)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
