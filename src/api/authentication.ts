import { DraftUser, Login, LoginApiResponse, UserApiResponse } from "../types";

const API_URL = import.meta.env.VITE_API_URL;

export const registerUser = async (user: DraftUser) => {
  try {
    const response = await fetch(`${API_URL}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return (await response.json()) as UserApiResponse;
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
    };
  }
};

export const login = async (credentials: Login): Promise<LoginApiResponse> => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(credentials),
    });

    return (await response.json()) as LoginApiResponse;
  } catch (error) {
    console.error("Login error:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
    };
  }
};
