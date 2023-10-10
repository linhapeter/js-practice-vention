export const reverseString = (str) => {
  if (str === "") {
    return str;
  } else {
    return reverseString(str.slice(1)) + str[0];
  }
};
