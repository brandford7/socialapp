import { User } from "./user";

export type Post = {
  id: number;
  image: string;
  content: string;
  author: User;
  createdAt: string; // You can use the Date type if working with actual Date objects
  likes: number;
  comments?: comment[];
  // Add other post properties as needed
};
