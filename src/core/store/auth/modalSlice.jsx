import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  modalContent: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.modalContent = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.modalContent = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;