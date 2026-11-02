import { NextResponse } from "next/server";
import { config } from "@/lib/config";

type CodolioPlatform = {
  totalQuestionStats?: { totalQuestionCounts?: number | null };
  contestActivityStats?: { contestActivityList?: unknown[] | null };
  dailyActivityStatsResponse?: { submissionCalendar?: Record<string, number> | null };
};

type CodolioResponse = {
  data?: {
    platformProfiles?: { platformProfiles?: CodolioPlatform[] };
  };
};

export async function GET() {
  try {
    const response = await fetch(
      `https://api.codolio.com/profile?userKey=${encodeURIComponent(config.socials.codolio.username)}`,
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) {
      console.error(`[Codolio API] HTTP ${response.status}`);
      return NextResponse.json({ isAvailable: false }, { status: response.status });
    }

    const payload = (await response.json()) as CodolioResponse;
    const platforms = payload.data?.platformProfiles?.platformProfiles ?? [];
    const calendar = new Map<string, number>();
    let totalSolved = 0;
    let contestsAttended = 0;

    for (const platform of platforms) {
      totalSolved += platform.totalQuestionStats?.totalQuestionCounts ?? 0;
      contestsAttended += platform.contestActivityStats?.contestActivityList?.length ?? 0;

      for (const [timestamp, count] of Object.entries(
        platform.dailyActivityStatsResponse?.submissionCalendar ?? {}
      )) {
        const date = new Date(Number(timestamp) * 1000).toISOString().slice(0, 10);
        calendar.set(date, (calendar.get(date) ?? 0) + Number(count));
      }
    }

    const today = new Date();
    const heatmap = [];
    for (let offset = 364; offset >= 0; offset -= 1) {
      const date = new Date(today);
      date.setDate(today.getDate() - offset);
      const dateString = date.toISOString().slice(0, 10);
      const count = calendar.get(dateString) ?? 0;
      const level = count > 8 ? 4 : count > 5 ? 3 : count > 2 ? 2 : count > 0 ? 1 : 0;
      heatmap.push({ date: dateString, count, level });
    }

    return NextResponse.json({
      isAvailable: true,
      totalSolved,
      contestsAttended,
      totalActiveDays: calendar.size,
      heatmap,
    });
  } catch (error) {
    console.error("[Codolio API] Failed to load profile activity:", error);
    return NextResponse.json({ isAvailable: false }, { status: 502 });
  }
}
