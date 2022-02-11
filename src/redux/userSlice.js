import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (start) => {
      state.isFetching = true;
    },
    loginSuccess: (start, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (start) => {
      (state.isFetching = false), (state.error = true);
    },
  },
});

// TODO: Del later
// Pay keen attention to the exports.
export const { loginStart, loginSuccess, loginFailure } = userSlice.actions;
export default userSlice.reducer;
