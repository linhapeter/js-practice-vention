export const reverseString = (str) => {
  if (str === "") {
    return str;
  }
  return reverseString(str.slice(1)) + str[0];
};
