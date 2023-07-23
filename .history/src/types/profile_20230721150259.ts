import { User } from "./user";

export type ProfileState = {
  loading: boolean;
  error: string | null;
  profile: User | null;
};
