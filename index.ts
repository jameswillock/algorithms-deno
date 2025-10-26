import { filledArray, roundToTwo } from "./utilities.ts";
import { findSmallest, quickSort, selectionSort, shuffle } from "./sorting.ts";
import { binarySearch, stupidSearch } from "./searching.ts";
import {
  nonRecursiveLength,
  nonRecursiveSumArray,
  recursiveLength,
  recursiveSumArray,
} from "./recursion.ts";

/////////////////
// *********** //
// * SORTING * //
// *********** //
/////////////////

// Create collection of 100_000 integers
const sortNumbers = filledArray(50000);

// Shuffle numbers
const shuffleTimeStart = performance.now();
const shuffled = shuffle(sortNumbers);
const shuffleTimeEnd = performance.now();
console.log(`shuffle() returned ${shuffled.length} randomly sorted numbers.`);
console.log(
  `shuffle() took ${
    roundToTwo(shuffleTimeEnd - shuffleTimeStart)
  } miliseconds.`,
);

// Find smallest index
const findSmallestTimeStart = performance.now();
const smallestIndex = findSmallest(sortNumbers);
const findSmallestEnd = performance.now();
console.log("findSmallest() returned", smallestIndex);
console.log(
  `findSmallest() took ${findSmallestEnd - findSmallestTimeStart} miliseconds.`,
);

// Sort by value
const selectionSortTimeStart = performance.now();
const selectionSorted = selectionSort(shuffled);
const selectionSortTimeEnd = performance.now();
console.log(
  `selectionSort() returned ${selectionSorted.length} sorted by value.`,
);
console.log(
  `selectionSort() took ${
    selectionSortTimeEnd - selectionSortTimeStart
  } miliseconds.`,
);

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
const searchNumbers = filledArray(10000),
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

const recursiveSumNumbers = filledArray(1000);
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
const countArray = filledArray(1000);
console.time("recursiveLength()");
const countArrayLength = recursiveLength(countArray);
console.timeEnd("recursiveLength()");
console.log("recursiveLength returned", countArrayLength);

console.time("nonRecursiveLength()");
const countArrayLength2 = nonRecursiveLength(countArray);
console.timeEnd("nonRecursiveLength()");
console.log("nonRecursiveLength returned", countArrayLength2);
