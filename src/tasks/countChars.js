export const countChars = (word) => {
  const counted = word.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
  return counted;
};
