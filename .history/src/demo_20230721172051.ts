/*type User = {
  id: number;
  name: string;
  email: string;
  // Add other user properties as needed
};

type Comment = {
  id: number;
  content: string;
  author: User;
  createdAt: string; // Date type can also be used here
};

type Post = {
  id: number;
  content: string;
  image: string; // URL to the post image
  author: User;
  createdAt: string; // You can use the Date type if working with actual Date objects
  likes: number;
  comments: Comment[];
  // Add other post properties as needed
};

// Sample user data
const user1: User = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
};

const user2: User = {
  id: 2,
  name: "Jane Smith",
  email: "jane.smith@example.com",
};

// Sample comments
const comment1: Comment = {
  id: 1,
  content: "This is a great post!",
  author: user1,
  createdAt: "2023-07-20T12:34:56", // Sample date and time
};

const comment2: Comment = {
  id: 2,
  content: "Awesome picture!",
  author: user2,
  createdAt: "2023-07-20T13:45:30", // Sample date and time
};

// Sample posts
const post1: Post = {
  id: 1,
  content: "Having a great time at the beach!",
  image: "https://example.com/beach.jpg",
  author: user1,
  createdAt: "2023-07-19T09:12:34", // Sample date and time
  likes: 10,
  comments: [comment1, comment2],
};

const post2: Post = {
  id: 2,
  content: "Delicious food from the trip!",
  image: "https://example.com/food.jpg",
  author: user2,
  createdAt: "2023-07-19T15:30:00", // Sample date and time
  likes: 15,
  comments: [comment1],
};

// Array of sample posts
const demoPosts: Post[] = [post1, post2];

export default demoPosts;
