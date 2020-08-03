// Count the number of members in a collection
export const recursiveLength = (collection: Array<number>): number => {
  // If the collection is empty, return zero
  if (!collection.length) {
    return 0;
  }

  // If the collection is non-empty, add one
  // to the length of the rest of the collection
  // obtained via recursion
  return 1 + recursiveLength(collection.slice(1));
};

// Count the number of members in a collection without recursion
export const nonRecursiveLength = (collection: Array<number>): number => {
  let count = 0;

  for (let index = 0; index < collection.length; index++) {
    count++;
  }

  return count;
};

// Sum the contents of an array using recursion
export const recursiveSumArray = (collection: Array<number>): number => {
  // If the collection is empty, return zero
  if (collection.length < 1) {
    return 0;
  }

  // If the collection is non-empty, shift the first
  // element, and add it to the sum'd value of the rest
  // of the collection obtained via recursion
  return collection.shift()! + recursiveSumArray(collection);
};

// Sum the contents of an array without recursion
export const nonRecursiveSumArray = (collection: Array<number>): number => {
  if (collection.length < 1) {
    return 0;
  }

  let sum = collection[0];

  for (let index = 1; index < collection.length; index++) {
    sum += collection[index];
  }

  return sum;
};
