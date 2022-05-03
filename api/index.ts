import axios from "axios";
import { LoginResponse, User } from "../typings";

// create an axios instance
const authApi = axios.create({
  baseURL: "http://restapi.adequateshop.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const login = async (
  email: string,
  password: string
): Promise<LoginResponse | null> => {
  try {
    const data = JSON.stringify({ email, password });
    const response = await authApi.post("/authaccount/login", data);
    if (response && response.status === 200) {
      const responseData = response.data.data;
      if (responseData) {
        return {
          user: {
            id: responseData.Id,
            email: responseData.Email,
            name: responseData.Name,
          },
          token: responseData.Token,
        };
      } else {
        throw new Error(response.data.message || "Login failed");
      }
    }
    return null;
  } catch (error: Error | any) {
    throw new Error(error.message || "Login failed");
  }
};

export const getUserData = async (userId: string): Promise<User | null> => {
  try {
    const token = localStorage.getItem("token") || "";
    const response = await authApi.get(`/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response && response.status === 200) {
      const responseData = response.data;
      if (responseData) {
        return {
          id: responseData.id,
          email: responseData.email,
          name: responseData.name,
        };
      } else {
        throw new Error(response.data.message || "Failed to fetch user data");
      }
    }
    return null;
  } catch (error: Error | any) {
    throw new Error(error.message || "Failed to fetch user data");
  }
};
