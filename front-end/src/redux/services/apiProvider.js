import axios from "axios";

const baseURL = "https://ecommerceweb-emk3.onrender.com/";

export const apiProvider = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json", // Example of setting a default Content-Type header
    // Add other default headers here if needed
  },
});
