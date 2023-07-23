// features/feed/feedSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "../../types/post";


interface FeedState {
  posts: Post[];
  // Add more state properties as needed
}

const initialState: FeedState = {
  posts: [],
  // Initialize other state properties here
};

const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    addPost(state, action: PayloadAction<Post>) {
      state.posts.push(action.payload);
    },
    deletePost(state, action: PayloadAction<number>) {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    editPost(state, action: PayloadAction<Post>) {
      const { id, title, content } = action.payload;
      const existingPost = state.posts.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
    // Add more reducers for other feed-related actions
  },
});

export const { addPost, deletePost, editPost } = feedSlice.actions;
export default feedSlice.reducer;
