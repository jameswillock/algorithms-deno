import {
  filledArray,
} from "../utilities.ts";

import {
  assertEquals,
} from "https://deno.land/std@0.63.0/testing/asserts.ts";

Deno.test("filledArray: returns an incrementing collection", () => {
  assertEquals(filledArray(5), [0, 1, 2, 3, 4]);
});
