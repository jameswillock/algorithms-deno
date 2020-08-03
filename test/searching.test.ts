import { filledArray } from "../utilities.ts";
import { binarySearch, stupidSearch } from "../searching.ts";
import {
  assertEquals,
} from "https://deno.land/std@0.63.0/testing/asserts.ts";

const numbers = filledArray(1000),
  find = 500,
  missing = 1001;

Deno.test("stupidSearch: when member exists, it returns index", () => {
  const index = stupidSearch(numbers, find);
  assertEquals(index, find);
});

Deno.test("stupidSearch: when member is missing, it returns null", () => {
  const index = stupidSearch(numbers, missing);
  assertEquals(index, null);
});

Deno.test("stupidSearch: when collection is empty, it returns null", () => {
  const index = stupidSearch([], missing);
  assertEquals(index, null);
});

Deno.test("binarySearch: when member exists, it returns index", () => {
  const index = binarySearch(numbers, find);
  assertEquals(index, find);
});

Deno.test("binarySearch: when member is missing, it returns null", () => {
  const index = binarySearch(numbers, missing);
  assertEquals(index, null);
});

Deno.test("binarySearch: when collection is empty, it returns null", () => {
  const index = binarySearch([], missing);
  assertEquals(index, null);
});
