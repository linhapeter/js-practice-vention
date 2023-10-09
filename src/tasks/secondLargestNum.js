export const secondLargestNum = (arr) => {
  if (arr.length < 2) {
    throw new Error("Array needs at least 2 elements");
  }
  const arrWithoutLargest = arr.filter((number) => number != Math.max(...arr));
  const result = Math.max(...arrWithoutLargest);
  return result;
};
