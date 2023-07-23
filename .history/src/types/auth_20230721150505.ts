import { User } from "./user";

export type Auth = {
  loading: boolean;
  error: string | null;
  user: User | null;
};
