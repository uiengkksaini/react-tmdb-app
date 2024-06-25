import axios from "axios";

const API_KEY = "SECRET";
const BASE_URL = "https://api.themoviedb.org/3";

const tmdbAxios = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export default tmdbAxios;
