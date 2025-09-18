import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [
    {
      id: 1,
      name: "Atlas Cloud Sync",
      code: "ACS-3.2.5-SaaS-MultiNode",
      price: 149.99,
      quantity: 1,
      image:
        "https://images.pexels.com/photos/33796884/pexels-photo-33796884.jpeg?_gl=1*on75tl*_ga*Njc5MTk1MDkyLjE3NTc1MzU2MzU.*_ga_8JE65Q40S6*czE3NTc1NDI3MzQkbzIkZzEkdDE3NTc1NDI3NzgkajE2JGwwJGgw",
    },
    {
      id: 2,
      name: "AAI Script Pack 1",
      code: "Build-AAI-1.0.0-Release-STM32X",
      price: 139.99,
      quantity: 1,
      image:
        "https://images.pexels.com/photos/33796884/pexels-photo-33796884.jpeg?_gl=1*on75tl*_ga*Njc5MTk1MDkyLjE3NTc1MzU2MzU.*_ga_8JE65Q40S6*czE3NTc1NDI3MzQkbzIkZzEkdDE3NTc1NDI3NzgkajE2JGwwJGgw",
    },
  ],
  amount: 0,
  total: 0,
  //   isLoading: true,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },

    removeItem: (state, action) => {
      const itemId = action.payload;
      const filteredItem = state.cartItems.filter((item) => item.id !== itemId);
      state.cartItems = filteredItem;
    },

    increaseItem: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === itemId);
      cartItem.quantity = cartItem.quantity + 1;
    },

    decreaseItem: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === itemId);
      cartItem.quantity = cartItem.quantity - 1;
    },

    calculateTotals: (state) => {
      let quantity = 0;
      let total = 0;
      state.cartItems.map((item) => {
        quantity += item.quantity;
        total += item.quantity * item.price;
      });
      state.amount = quantity;
      state.total = total;
    },
  },
});


export const {
  clearCart,
  removeItem,
  increaseItem,
  decreaseItem,
  calculateTotals,
} = cartSlice.actions;

export default cartSlice;
