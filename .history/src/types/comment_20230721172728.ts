import { User } from "./user";

export type Comment = {
  id: number;
  content: string;
  author: User;
  createdAt: string; // Date type can also be used here
};
