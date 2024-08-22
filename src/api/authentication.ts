import { DraftUser, UserApiResponse } from "../types";

const API_URL = import.meta.env.VITE_API_URL;

// Comand enf to create the arrow function
export const registerUser = async (user: DraftUser) => {
  try {
    const response = await fetch(`${API_URL}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data: UserApiResponse = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
