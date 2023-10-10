export const secondLargestNum = (arr) => {
  if (arr.length < 2) {
    throw new Error("Array needs at least 2 elements");
  }

  let first = Number.NEGATIVE_INFINITY;
  let second = Number.NEGATIVE_INFINITY;

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > first) {
      second = first;
      first = arr[index];
    } else if (arr[index] > second) {
      second = arr[index];
    }
  }
  return second;
};
