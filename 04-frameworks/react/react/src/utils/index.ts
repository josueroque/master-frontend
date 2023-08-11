export const fetchItems = (url: string) => {
  const response = fetch(url).then((response) =>
    response.json().then((items) => items)
  );
  return response;
};
