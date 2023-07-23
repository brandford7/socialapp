// features/user/userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: number;
  username: string;
  email: string;
  image: string; // The image property should be of type string to store the image URL or base64 data
  dateOfBirth: string; // You can use a string or Date type depending on your use case
  work: string;
  phoneNumber: string;
  // Add more properties as needed
}

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
