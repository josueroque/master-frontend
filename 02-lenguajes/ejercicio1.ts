//Ejercicio 1

const head = (array: unknown[]): unknown => {
  const [first] = array;
  return first;
};

console.log(head([5, 2, 4]));

const tail = ([first, ...rest]: unknown[]) => {
  return rest;
};

console.log(tail([5, 2, 4]));

const init = (array: unknown[]) => {
  const modified = array.slice(0, array.length - 1);
  return modified;
};

console.log(init([5, 2, 4]));

const last = (array: unknown[]) => {
  return array[array.length - 1];
};

console.log(last([5, 2, 4]));
