export const arrToObj = (arr) => {
  const resultObj = arr.reduce((acc, obj) => {
    acc[obj.id] = obj;

    if (!idValidator(obj.id)) {
      throw new Error(`Invalid identifier: ${obj.id}`);
    }

    return acc;
  }, {});

  return resultObj;
};

const idValidator = (id) => {
  const identifierRegex = /^[a-zA-Z_][a-zA-Z0-9_$]*$/;
  return identifierRegex.test(id);
};
