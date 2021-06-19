export type ProductPageState = {
  loading: boolean;
  error: Error | null;
  data: Product[] | null;
  count: number;
};

export type ProductPage = {
  count: number;
  next: null | string;
  previous: null | string;
  results: Product[];
};

export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};
