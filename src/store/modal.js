import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    state: false,
    options: {
      children: "",
    },
  },
  reducers: {
    openModal: (state, action) => {
      state.state = true;
      state.options = action.payload;
    },
    closeModal: (state, action) => {
      state.state = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export const selectModalState = ({ modal }) => modal.state;

export const selectModalOptions = ({ modal }) => modal.options;

export default modalSlice.reducer;
