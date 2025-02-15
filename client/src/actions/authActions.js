import { axios } from "../api/axios.js";
// Register a new user
export const register = async (name, email, password) => {
  try {
    const response = await axios.post("signup", {
      name,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Registration failed:", error);
    throw error;
  }
};

// Authenticates a user with google
export const googleAuth = async (authCode) => {
  try {
    const response = await axios.post("google", {
      authCode,
    });
    return response.data;
  } catch (error) {
    console.error("Google auth failed:", error);
    throw error;
  }
};

// Login a user
export const login = async (email, password) => {
  try {
    const response = await axios.post("login", {
      email,
      password,
    });
    return response.data; // Return the response data (e.g., access token)
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

export const logout = async () => {
  try {
    const response = await axios.post("logout");
    return response.data;
  } catch (error) {
    console.error("Logout failed:", error);
    throw error;
  }
};

// Get user data (Profile)
export const getUserData = async () => {
  try {
    const response = await axios.get("me");
    return response.data; // Return user data
  } catch (error) {
    console.error("Failed to fetch user data:", error);
    throw error;
  }
};

// Refresh the session (refresh token flow)
export const refreshSession = async () => {
  try {
    const response = await axios.post("refresh-session");
    return response.data; // Handle response data (new access token, etc.)
  } catch (error) {
    console.error("Session refresh failed:", error);
    throw error;
  }
};
