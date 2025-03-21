import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice.js';
import cartSlice from './slices/cartSlice.js';
import userSlice from './slices/userSlice.js';
import modalSlice from './auth/modalSlice.jsx';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
    user: userSlice,
    modal: modalSlice,
  },
});

export default store;

