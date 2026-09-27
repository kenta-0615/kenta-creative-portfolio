export const reservationStatuses = ["new", "confirmed", "visited", "cancelled"] as const;
export type ReservationStatus = typeof reservationStatuses[number];

export type IzakayaReservation = {
  id: string;
  createdAt: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  partySize: number;
  course: string;
  notes: string;
  status: ReservationStatus;
};

export type ReservationInput = Omit<IzakayaReservation, "id" | "createdAt" | "status">;

export function validateReservation(input: ReservationInput): string[] {
  const errors: string[] = [];
  if (!/^\d{4}-\d{2}-\d{2}$/.test(input.date)) errors.push("日付を選択してください");
  if (!/^\d{2}:\d{2}$/.test(input.time)) errors.push("時間を選択してください");
  if (input.name.trim().length < 2) errors.push("お名前を入力してください");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) errors.push("メールアドレスを確認してください");
  if (!/^[0-9-]{10,13}$/.test(input.phone)) errors.push("電話番号を確認してください");
  if (input.partySize < 1 || input.partySize > 12) errors.push("人数は1〜12名で選択してください");
  return errors;
}

export function createReservation(input: ReservationInput, now = new Date()): IzakayaReservation {
  return {
    ...input,
    id: `R-${now.getTime().toString(36).toUpperCase()}`,
    createdAt: now.toISOString(),
    status: "new",
  };
}

export function changeReservationStatus(
  reservations: IzakayaReservation[],
  id: string,
  status: ReservationStatus,
): IzakayaReservation[] {
  return reservations.map((reservation) => reservation.id === id ? { ...reservation, status } : reservation);
}
