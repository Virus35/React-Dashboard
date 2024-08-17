import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (_state, action) => {
      return action.payload;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    removeUser: (_state) => {
      return null;
    },
  },
});

// Exporting actions
export const { addUser, removeUser } = userSlice.actions;

// Exporting the reducer as the default export
export default userSlice.reducer;
