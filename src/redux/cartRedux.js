import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      //This quantity is cart quantity
      state.quantity += 1;
      state.products.push(action.payload);
      // This quantity is product quantity
      state.total += action.payload.price * action.payload.quantity;
    },
  },
});

// TODO: Del later
// Pay keen attention to the exports.
export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
