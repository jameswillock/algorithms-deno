import { filledArray, roundToTwo } from "../utilities.ts";
import { assertEquals } from "https://deno.land/std@0.113.0/testing/asserts.ts";

Deno.test("filledArray: returns an incrementing collection", () => {
  assertEquals(filledArray(5), [0, 1, 2, 3, 4]);
});

Deno.test("roundToTwo: returns a number to two decimal places", () => {
  assertEquals(roundToTwo(1.11111111), 1.11);
});
