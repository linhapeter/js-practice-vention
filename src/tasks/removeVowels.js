export const removeVowels = (str) => {
  const filteredStr = str
    .split("")
    .filter((char) => !/[aeiouAEIOU]/.test(char))
    .join("");

  return filteredStr;
};
