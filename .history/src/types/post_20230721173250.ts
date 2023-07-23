import { User } from "./user";
import {Comm}

export type Post = {
  
  id: number;
  image: string;
  content: string;
  author: User;
  createdAt: string; // You can use the Date type if working with actual Date objects
  likes: number;
  comments?: Comment[];
  // Add other post properties as needed
};
