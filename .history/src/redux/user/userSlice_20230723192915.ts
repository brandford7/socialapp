// features/user/userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";



interface UserState {
  currentUser: User | null;
  // Add more state properties as needed
}

const initialState: UserState = {
  currentUser: null,
  // Initialize other state properties here
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser(state, action: PayloadAction<User | null>) {
      state.currentUser = action.payload;
    },
    // Add more reducers for other user-related actions
  },
});

export const { setCurrentUser } = userSlice.actions;
export default userSlice.reducer;
