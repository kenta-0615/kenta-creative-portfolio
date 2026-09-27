export const bookingTimeSlots = ["10:00", "11:30", "13:00", "14:30", "16:00", "17:30"] as const;

export type BookingAvailability = "available" | "limited" | "full" | "closed";

function startOfDay(date: Date) {
  const normalized = new Date(date);
  normalized.setHours(0, 0, 0, 0);
  return normalized;
}

export function getBookingAvailability(day: Date, today = new Date()): BookingAvailability {
  const target = startOfDay(day);
  if (target < startOfDay(today) || target.getDay() === 0) return "closed";

  const cycle = target.getDate() % 7;
  if (cycle === 0 || cycle === 5) return "full";
  if (cycle === 2 || cycle === 4 || cycle === 6) return "limited";
  return "available";
}

export function getAvailableTimeSlots(day: Date, today = new Date()): readonly string[] {
  const status = getBookingAvailability(day, today);
  if (status === "closed" || status === "full") return [];
  if (status === "available") return bookingTimeSlots;

  const offset = day.getDate() % 3;
  return bookingTimeSlots.filter((_, index) => index % 3 === offset).slice(0, 2);
}

export function getAvailabilitySymbol(status: BookingAvailability) {
  if (status === "available") return "○";
  if (status === "limited") return "△";
  if (status === "full") return "×";
  return "";
}
