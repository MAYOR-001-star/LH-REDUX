import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
//   isLoading: true,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
//   reducers: {
//     increment: (state) => {
//       state.value += 1;
//     },
//     decrement: (state) => {
//       state.value -= 1;
//     },
//     incrementByAmount: (state, action) => {
//       state.value += action.payload;
//     },
//   },
});

console.log(cartSlice)

// export const { increment, decrement, incrementByAmount } = cartSlice.actions;

export default cartSlice;
