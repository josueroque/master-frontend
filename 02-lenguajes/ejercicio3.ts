//Ejercicio 3

const clone = (source: {}) => {
  return { ...source };
};

console.log(clone({ name: "Maria", surname: "Ibañez", country: "SPA" }));

const merge = (source: {}, target: {}) => {
  const merged = { ...target, ...source };
  return merged;
};

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

console.log(merge(a, b));
