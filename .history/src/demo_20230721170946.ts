import { Post } from "./types/post";


export const posts:Post[] = [
  {
    post: {
      author: {username:"Kwame",
      content: "How is your day going?",
      comments: [
        { user: "Kofi", comment: "I'm good." },
        { user: "Kwasi", comment: "I'm fine." },
      ],
    },
  },
  {
    post: {
      author: { username: "Kwadwo" },
      content: "How is your day going?",
      comments: [
        { user: "Kofi", comment: "I'm good." },
        { user: "Kwasi", comment: "I'm fine." },
      ],
    },
  },
  {
    post: {
      user: { name: "Kwaku" },
      content: "How is your day going?",
      comments: [
        { user: "Kofi", comment: "I'm good." },
        { user: "Kwasi", comment: "I'm fine." },
      ],
    },
  },
  {
    post: {
      user: { name: "Yaw" },
      content: "How is your day going?",
      comments: [
        { user: "Kofi", comment: "I'm good." },
        { user: "Kwasi", comment: "I'm fine." },
      ],
    },
  },
];
