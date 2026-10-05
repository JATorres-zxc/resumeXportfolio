import { Clock } from "lucide-react";
import { useEffect, useState } from "react";

const MANILA_TIME_ZONE = "Asia/Manila";
const MANILA_UTC_OFFSET_MINUTES = 8 * 60; // The Philippines has no daylight saving time

const formatTime = (date: Date, timeZone?: string) =>
  date.toLocaleTimeString("en-US", { timeZone, hour: "numeric", minute: "2-digit" });

const formatWeekday = (date: Date, timeZone?: string) =>
  date.toLocaleDateString("en-US", { timeZone, weekday: "short" });

// Positive when Manila is ahead of the visitor, e.g. 720 → "12 hours ahead of you"
const describeOffset = (diffMinutes: number) => {
  if (diffMinutes === 0) return "same time as you";
  const totalMinutes = Math.abs(diffMinutes);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const amount = [hours > 0 && `${hours} ${hours === 1 ? "hour" : "hours"}`, minutes > 0 && `${minutes} min`]
    .filter(Boolean)
    .join(" ");
  return `${amount} ${diffMinutes > 0 ? "ahead of" : "behind"} you`;
};

// Re-renders on each minute boundary instead of every second
const useCurrentMinute = () => {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    let interval: number | undefined;
    const tick = () => setNow(new Date());
    const timeout = window.setTimeout(() => {
      tick();
      interval = window.setInterval(tick, 60_000);
    }, 60_000 - (Date.now() % 60_000));

    return () => {
      window.clearTimeout(timeout);
      window.clearInterval(interval);
    };
  }, []);

  return now;
};

export const LocalTime = () => {
  const now = useCurrentMinute();
  const visitorUtcOffsetMinutes = -now.getTimezoneOffset();
  const manilaWeekday = formatWeekday(now, MANILA_TIME_ZONE);
  const isDifferentDay = manilaWeekday !== formatWeekday(now);

  return (
    <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 py-3 text-xs text-muted-foreground">
      <Clock className="w-3.5 h-3.5" aria-hidden="true" />
      <span>
        <time dateTime={now.toISOString()} className="font-medium">
          {isDifferentDay && `${manilaWeekday} `}
          {formatTime(now, MANILA_TIME_ZONE)}
        </time>{" "}
        in Manila
      </span>
      <span className="text-divider" aria-hidden="true">·</span>
      <span>{describeOffset(MANILA_UTC_OFFSET_MINUTES - visitorUtcOffsetMinutes)}</span>
    </p>
  );
};
