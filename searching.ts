// Stupid search will iterate through each element and return
// when it finds a match
// O(n) - linear time
export const stupidSearch = (
  collection: Array<number>,
  item: number,
): number | null => {
  for (let index = 0; index < collection.length; index++) {
    if (collection[index] === item) {
      return index;
    }
  }

  // We didn't find the item
  return null;
};

// Binary search will operate on a sorted array and search
// through it more efficiently by halving the size of each
// search boundary on each loop
// O(log n) - logaritmic time
export const binarySearch = (
  collection: Array<number>,
  item: number,
): number | null => {
  // Set boundary as start and end of collection
  let low: number = 0,
    high: number = collection.length - 1;

  // Loop over potential candidates
  while (low <= high) {
    // Choose middle of collection as guess candidate
    let middle: number = Math.trunc((low + high) / 2),
      guess: number = collection[middle];

    // If we guessed correctly, return index of guess
    if (guess === item) {
      return middle;
    }

    // If guess was larger than we're looking for,
    // then set high to be the first half of remaining
    if (guess > item) {
      high = middle - 1;
    } else {
      // If guess was too low, set low to be the latter half
      // of the remaining collection
      low = middle + 1;
    }
  }

  // We didn't find the item in the collection
  return null;
};
