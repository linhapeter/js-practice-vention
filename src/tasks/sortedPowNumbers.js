export const pow = (inpt) => {
  const sqrdArr = inpt.map((element) => element ** 2);
  const sortedArr = sqrdArr.slice().sort((a, b) => a - b);
  return sortedArr;
};
