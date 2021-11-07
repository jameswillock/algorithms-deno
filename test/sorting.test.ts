import { findSmallest, quickSort, selectionSort, shuffle } from "../sorting.ts";

import {
  assertArrayIncludes,
  assertEquals,
  assertNotEquals,
} from "https://deno.land/std@0.113.0/testing/asserts.ts";

const numbers = [4, 7, 2, 4, 10, 7, 3, 2, 5, 7];
const sorted = [2, 2, 3, 4, 4, 5, 7, 7, 7, 10];

Deno.test("selectionSort: sorts collection", () => {
  assertEquals(selectionSort(numbers), sorted);
});

Deno.test("quickSort: sorts collection", () => {
  assertEquals(quickSort(numbers), sorted);
});

Deno.test("findSmallest: returns index of smallest member", () => {
  assertEquals(findSmallest(numbers), 2);
});

Deno.test("shuffle: shuffled the collection", () => {
  assertNotEquals(shuffle(numbers), numbers);
});

Deno.test("shuffle: contains all the original members", () => {
  assertArrayIncludes(shuffle(numbers), numbers);
});
