import axios from "axios";

// const API_URL = "http://localhost:8080";
const API_URL = "https://perfume-shop-4.onrender.com"

// ✅ Fix: Correct login endpoint
export const loginUser = async ({ email, password }) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, { email, password });
    return response.data; // User data or token
  } catch (error) {
    throw new Error(error.response?.data || "Login failed");
  }
};

export const AddProduct = async ({ product}) => {
  try {
    const response = await axios.post(`${API_URL}/products`,  product,{
      headers: { "Content-Type": "application/json" }
    });
    

    return response.data; // User data or token
  } catch (error) {
    throw new Error(error.response?.data || "Failed to add");
  }
};

// ✅ Fix: Correct register endpoint
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users/register`, userData);
    return response.data; // Newly created user
  } catch (error) {
    throw new Error(error.response?.data || "Registration failed");
  }
};
