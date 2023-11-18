import axios from "axios";
import { useQuery } from "react-query";

const baseURL = "https://ecommerceweb-emk3.onrender.com/";

// export const apiProvider = axios.create({
//   baseURL,
//   headers: {
//     "Content-Type": "application/json", // Example of setting a default Content-Type header
//     // Add other default headers here if needed
//   },
// });

export function useGetUsers() {
  return useQuery("users", async () => {
    const response = await fetch(`${baseURL}/users`);
    const data = await response.json();
    console.log(data, "data");
    return response.data; // Assuming the response contains user data
  });
}

// export function useGetUsers() {
//   return useQuery("users", async () => {
//     const response = await axios.get(`${baseURL}/users`);
//     // console.log(response.data);
//     return response.data; // Assuming the response contains user data
//   });
// }
