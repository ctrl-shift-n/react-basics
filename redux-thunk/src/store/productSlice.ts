import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export type productType = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

type initialDataType = {
  data: productType[];
  loading: boolean;
  error: string;
};

const initialState: initialDataType = { data: [], loading: false, error: "" };

export const getProducts = createAsyncThunk(
  "getAllProducts",
  async (thunkAPI) => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data: any = await response.json();
      return data?.products;
    } catch (err) {
      return err;
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.rejected, (state) => {
        state.loading = false;
        state.error = "An error occured";
      });
  },
});
