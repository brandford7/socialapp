import { User } from "./user";

export type Profile = {
  loading: boolean;
  error: string | null;
  profile: User | null;
};
