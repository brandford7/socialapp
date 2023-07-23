import { Post } from "./types/post";
import { User } from "./types/user";

const users: User[] = [
  {
    id: 1,
    username: "john_doe",
    email: "john.doe@example.com",
  },
  {
    id: 2,
    username: "jane_smith",
    email: "jane.smith@example.com",
  },
];

// Sample comments data
const comments: Comment[] = [
  {
    id: 1,
    content: "This is a great post!",
    author: users[0], // John Doe authored this comment
    createdAt: "2023-07-20T12:34:56", // Sample date and time
  },
  {
    id: 2,
    content: "Awesome picture!",
    author: users[1], // Jane Smith authored this comment
    createdAt: "2023-07-20T13:45:30", // Sample date and time
  },
];

// Sample posts data
const posts: Post[] = [
  {
    id: 1,
    content: "Having a great time at the beach!",
    image: "https://example.com/beach.jpg",
    author: users[0], // John Doe authored this post
    createdAt: "2023-07-19T09:12:34", // Sample date and time
    likes: 10,
    comments: [comments[0], comments[1]], // Includes the two sample comments
  },
  {
    id: 2,
    content: "Delicious food from the trip!",
    image: "https://example.com/food.jpg",
    author: users[1], // Jane Smith authored this post
    createdAt: "2023-07-19T15:30:00", // Sample date and time
    likes: 15,
    comments: [comments[0]], // Includes one sample comment
  },
];

export { users, comments, posts };
