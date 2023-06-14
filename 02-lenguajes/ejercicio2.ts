//Ejercicio 2

const concat = (a: unknown[], b: unknown[]) => {
  const mergedArray = [...a, ...b];
  return mergedArray;
};

console.log(concat([1, 2, 3], [4, 5, 6]));

const concatMultiple = (...rest: any) => {
  let mergedArray: unknown[] = [];
  for (let arr of rest) {
    mergedArray = [...mergedArray, ...arr];
  }

  return mergedArray;
};

console.log(concatMultiple([1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]));
