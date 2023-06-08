//Ejercicio 1

var head = (array: unknown[]): unknown => {
  const [first] = array;
  return first;
};

console.log(head([5, 2, 4]));

var tail = ([first, ...rest]: unknown[]) => {
  return rest;
};

console.log(tail([5, 2, 4]));

var init = (array: unknown[]) => {
  const modified = array.slice(0, array.length - 1);
  return modified;
};

console.log(init([5, 2, 4]));

var last = (array: unknown[]) => {
  return array[array.length - 1];
};

console.log(last([5, 2, 4]));
