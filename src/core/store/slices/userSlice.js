import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  address: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.address = action.payload.address;
    },
    clearUser: (state) => {
      state.name = '';
      state.email = '';
      state.address = '';
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
