export const longestStr = (arr) => {
  const str = arr.reduce((acc, strElement) => {
    acc = acc.length < strElement.length ? strElement : acc;
    return acc;
  }, "");
  return str;
};
