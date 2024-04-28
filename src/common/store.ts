// store.ts
import { configureStore, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product, State } from './models';

// Define initial state
const initialState: State = {
  companies: [],
  companySeries: {},
  products: [],
};

// Define thunks
export const fetchData = createAsyncThunk('products/fetchData', async () => {
  const response = await axios.get<Product[]>('data/products.json');
  return response.data;
});

// Define slice
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      const payload = action.payload;
      const companies = Array.from(new Set(payload.map(item => item.company)));
      const companySeries: { [key: string]: string[] } = {};
      companies.forEach(company => {
        const series = Array.from(new Set(payload.filter(item => item.company === company).map(item => item.series)));
        companySeries[company] = series;
      });
      const products = payload;
      state.companies = companies;
      state.companySeries = companySeries;
      state.products = products;
    });
  },
});

// Create store
const store = configureStore({
  reducer: productsSlice.reducer,
});

export default store;
