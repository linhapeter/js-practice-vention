export const summEven = (arr) => {
  const sum = arr.reduce((acc, number) => {
    acc += number % 2 === 0 ? number : 0;
    return acc;
  }, 0);
  return sum;
};
