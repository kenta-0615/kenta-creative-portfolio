import assert from "node:assert/strict";
import test from "node:test";
import { changeReservationStatus, createReservation, validateReservation, type ReservationInput } from "../lib/izakaya-reservation.ts";

const valid:ReservationInput={date:"2026-10-01",time:"18:30",name:"山田 太郎",email:"demo@example.com",phone:"090-0000-0000",partySize:3,course:"席のみ",notes:""};

test("valid reservation creates a new-status record",()=>{
  assert.deepEqual(validateReservation(valid),[]);
  const created=createReservation(valid,new Date("2026-09-25T00:00:00.000Z"));
  assert.equal(created.status,"new");
  assert.match(created.id,/^R-/);
});

test("invalid reservation reports required corrections",()=>{
  const errors=validateReservation({...valid,email:"bad",partySize:13});
  assert.ok(errors.length>=2);
});

test("admin can update a reservation status",()=>{
  const created=createReservation(valid);
  assert.equal(changeReservationStatus([created],created.id,"confirmed")[0].status,"confirmed");
});

