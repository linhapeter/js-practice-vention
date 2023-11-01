/*
    Task 1:
    Write an analogue of the built-in forEach method for working with arrays
    See how forEach works and repeat this behavior for the array that will be passed in the array parameter
 */
function forEach(array, fn) {
  for (let index = 0; index < array.length; index++) {
    fn(array[index], index, array);
  }
}

/*
 Task 2:
    Write an analogue of the built-in map method for working with arrays
    See how map works and repeat this behavior for the array that will be passed in the array parameter
 */
function map(array, fn) {
  let copy = [];
  for (let index = 0; index < array.length; index++) {
    copy.push(fn(array[index], index, array));
  }
  return copy;
}
/*
 Task 3:

    Write an analogue of the built-in reduce method for working with arrays
    See how reduce works and repeat this behavior for the array that will be passed in the array parameter
 */
function reduce(array, fn, initial) {
  let prev = initial !== undefined ? initial : array[0];

  for (
    let index = initial !== undefined ? 0 : 1;
    index < array.length;
    index++
  ) {
    prev = fn(prev, array[index], index, array);
  }
  return prev;
}

/*
 Task 4:
    The function should iterate over all the properties of the object, convert their names to uppercase and return them as an array
    Example:
        upperProps({ name: 'Sem', lastName: 'Mus' }) will return ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
  const arr = [];

  for (const key in obj) {
    arr.push(key.toUpperCase());
  }

  return arr;
}

/*
 Task 5 *:
    Write an analogue of the built-in slice method for working with arrays
    See how slice works and repeat this behavior for the array that will be passed in the array parameter
 */
function slice(array, from = 0, to = array.length) {
  if (from < 0) {
    from = array.length + from;
    if (from < 0) {
      from = 0;
    }
  }

  if (to < 0) {
    to = array.length + to;
    if (to < 0) {
      to = 0;
    }
  }

  if (to > array.length) {
    to = array.length;
  }

  let copy = [];
  for (let index = from; index < to; index++) {
    copy.push(array[index]);
  }
  return copy;
}

/*
 Task 6 *:
   The function accepts an object and must return a Proxy for that object
   The proxy should intercept all attempts to write property values and square that value
 */
function createProxy(obj) {
  const handler = {
    set(target, prop, value) {
      if (typeof value === "number") {
        value = value * value;
      }
      target[prop] = value;
      return true;
    },
  };
  return new Proxy(obj, handler);
}

module.exports = {
  forEach,
  map,
  reduce,
  upperProps,
  slice,
  createProxy,
};
