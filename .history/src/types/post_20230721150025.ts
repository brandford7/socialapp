export type Post = {
  id: number;
  content: string;
  author: User;
  createdAt: string; // You can use the Date type if working with actual Date objects
  likes: number;
  comments: number;
  // Add other post properties as needed
};
