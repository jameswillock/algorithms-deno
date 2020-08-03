import { filledArray } from "./utilities.ts";
import { shuffle, findSmallest, selectionSort, quickSort } from "./sorting.ts";
import { stupidSearch, binarySearch } from "./searching.ts";
import {
  recursiveSumArray,
  recursiveLength,
  nonRecursiveLength,
  nonRecursiveSumArray,
} from "./recursion.ts";

/////////////////
// *********** //
// * SORTING * //
// *********** //
/////////////////

// Create collection of 10000 integers
const sortNumbers = filledArray(1000);

// Shuffled using `shuffle()`
console.time("shuffle()");
const shuffled = shuffle(sortNumbers);
console.timeEnd("shuffle()");

// Find smallest index
console.time("findSmallest()");
const smallestIndex = findSmallest(shuffled);
console.timeEnd("findSmallest()");
console.log("findSmallest returned", smallestIndex);

// Sort by value
console.time("selectionSort()");
selectionSort(shuffled);
console.timeEnd("selectionSort()");

// Sort by value using quickSort
console.time("quickSort()");
quickSort(shuffled);
console.timeEnd("quickSort()");

///////////////////
// ************* //
// * SEARCHING * //
// ************* //
///////////////////

// Instantiate 100_000 integers in an array
const searchNumbers = filledArray(100000),
  finalSearchNumber = searchNumbers[searchNumbers.length - 1];

// Stupid search for member
console.time("stupidSearch()");
const stupidSearchIndex = stupidSearch(searchNumbers, finalSearchNumber);
console.timeEnd("stupidSearch()");
console.log("stupidSearch returned", stupidSearchIndex);

// Binary search for member
console.time("binarySearch()");
const binarySearchIndex = binarySearch(searchNumbers, finalSearchNumber);
console.timeEnd("binarySearch()");
console.log("binarySearch returned", binarySearchIndex);

///////////////////
// ************* //
// * RECURSION * //
// ************* //
///////////////////

const recursiveSumNumbers = filledArray(100);
const nonRecursiveSumNumbers = recursiveSumNumbers.slice(0);

// Sum array via recursion
console.time("recursiveSumArray()");
const recursiveSum = recursiveSumArray(recursiveSumNumbers);
console.timeEnd("recursiveSumArray()");
console.log("recursiveSumArray returned", recursiveSum);

// Sum array without recursion
console.time("nonRecursiveSumArray()");
const nonRecursiveSum = nonRecursiveSumArray(nonRecursiveSumNumbers);
console.timeEnd("nonRecursiveSumArray()");
console.log("nonRecursiveSumArray returned", nonRecursiveSum);

// Count the length of an array via recursion
const countArray = filledArray(100);
console.time("recursiveLength()");
const countArrayLength = recursiveLength(countArray);
console.timeEnd("recursiveLength()");
console.log("recursiveLength returned", countArrayLength);

console.time("nonRecursiveLength()");
const countArrayLength2 = nonRecursiveLength(countArray);
console.timeEnd("nonRecursiveLength()");
console.log("nonRecursiveLength returned", countArrayLength2);
