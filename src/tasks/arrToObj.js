export const arrToObj = (arr) => {
  const identifierRegex = /^[a-zA-Z_][a-zA-Z0-9_$]*$/;
  const filteredArr = arr.filter((obj) => identifierRegex.test(obj.id));

  const resultObj = filteredArr.reduce((acc, obj) => {
    acc[obj.id] = obj;

    return acc;
  }, {});

  return resultObj;
};
