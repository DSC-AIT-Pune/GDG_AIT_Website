import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_TO_BACKEND_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
