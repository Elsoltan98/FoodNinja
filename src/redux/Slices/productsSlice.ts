import { createSlice } from "@reduxjs/toolkit";

export interface IProduct {
  id: number;
  name: string;
  price: number;
}

const products: IProduct[] = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
  },
];

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products,
  },
  reducers: {
    getProducts: (state) => {
      state.products;
    },
  },
});

export const { getProducts } = productsSlice.actions;
export default productsSlice.reducer;
