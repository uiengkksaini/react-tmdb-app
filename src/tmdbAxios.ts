import axios from "axios";

const tmdbAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://api.themoviedb.org/3",
  params: {
    api_key: import.meta.env.VITE_API_KEY,
  },
});

export default tmdbAxios;
