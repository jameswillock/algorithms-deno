export const filledArray = (total: number): Array<number> =>
  Array(total)
    .fill(0)
    .map((_, index) => index);
