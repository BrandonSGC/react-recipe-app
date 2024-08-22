export type User = {
  id: number;
  name: string;
  lastname: string;
  email: string;
  password: string;
};

export type DraftUser = Omit<User, "id">;

export type UserApiResponse = {
  message: string;
  user: Omit<User, "password">;
};
