export const filledArray = (total: number): Array<number> =>
  Array(total)
    .fill(0)
    .map((_, index) => index);

export const roundToTwo = (number: number): number =>
  Math.round((number + Number.EPSILON) * 100) / 100;
