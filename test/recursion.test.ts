import {
  nonRecursiveLength,
  nonRecursiveSumArray,
  recursiveLength,
  recursiveSumArray,
} from "../recursion.ts";

import { assertEquals } from "https://deno.land/std@0.113.0/testing/asserts.ts";

Deno.test("recursiveLength: when collection is empty, return zero", () => {
  assertEquals(recursiveLength([]), 0);
});

Deno.test("recursiveLength: when collection is not emopty, return length", () => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  assertEquals(recursiveLength(numbers), 11);
});

Deno.test("nonRecursiveLength: when collection is empty, return zero", () => {
  assertEquals(nonRecursiveLength([]), 0);
});

Deno.test("nonRecursiveLength: when collection is not emopty, return length", () => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  assertEquals(nonRecursiveLength(numbers), 11);
});

Deno.test("recursiveSumArray: when collection is empty, return zero", () => {
  assertEquals(recursiveSumArray([]), 0);
});

Deno.test("recursiveSumArray: when collection is not emopty, return sum", () => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  assertEquals(recursiveSumArray(numbers), 55);
});

Deno.test("nonRecursiveSumArray: when collection is empty, return zero", () => {
  assertEquals(nonRecursiveSumArray([]), 0);
});

Deno.test("nonRecursiveSumArray: when collection is not emopty, return sum", () => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  assertEquals(nonRecursiveSumArray(numbers), 55);
});
