export type User = {
  id: number;
  name: string;
  lastname: string;
  email: string;
  password: string;
};

export type DraftUser = Omit<User, "id"> & {
  terms: boolean;
};

export type UserApiResponse = {
  success: boolean;
  message: string;
  user?: Omit<User, "password">;
};

export type Login = {
  email: User["email"];
  password: User["password"];
};

export type LoginApiResponse = {
  success: boolean;
  message: string;
  user?: Omit<User, "password">;
};
