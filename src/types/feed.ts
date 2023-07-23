import { Post } from "./post";

export type Feed = {
  loading: boolean;
  error: string | null;
  posts: Post[];
};
