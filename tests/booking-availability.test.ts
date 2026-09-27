import assert from "node:assert/strict";
import test from "node:test";
import { bookingTimeSlots, getAvailabilitySymbol, getAvailableTimeSlots, getBookingAvailability } from "../lib/booking-availability.ts";

const today = new Date(2026, 8, 16);

test("calendar exposes available, limited, and full states", () => {
  assert.equal(getBookingAvailability(new Date(2026, 8, 17), today), "available");
  assert.equal(getBookingAvailability(new Date(2026, 8, 18), today), "limited");
  assert.equal(getBookingAvailability(new Date(2026, 8, 19), today), "full");
});

test("past dates and Sundays are closed", () => {
  assert.equal(getBookingAvailability(new Date(2026, 8, 15), today), "closed");
  assert.equal(getBookingAvailability(new Date(2026, 8, 20), today), "closed");
});

test("availability symbols and time slots stay consistent", () => {
  assert.equal(getAvailabilitySymbol("available"), "○");
  assert.equal(getAvailabilitySymbol("limited"), "△");
  assert.equal(getAvailabilitySymbol("full"), "×");
  assert.deepEqual(getAvailableTimeSlots(new Date(2026, 8, 17), today), bookingTimeSlots);
  assert.equal(getAvailableTimeSlots(new Date(2026, 8, 18), today).length, 2);
  assert.deepEqual(getAvailableTimeSlots(new Date(2026, 8, 19), today), []);
});
