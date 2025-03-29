// utils/dataFetcher.ts
export const fetchData = async () => {
  const response = await fetch("https://example.org/products.json");
  const data = await response.json();
  return data;
};
