export const arrToObj = (arr) => {
  const resultObj = arr.reduce((acc, obj) => {
    acc[obj.id] = obj;

    return acc;
  }, {});

  return resultObj;
};
