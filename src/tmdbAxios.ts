import axios from "axios";

const API_KEY = "7e6cb748e55608f80513396ce71a4752";
const BASE_URL = "https://api.themoviedb.org/3";

const tmdbAxios = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export default tmdbAxios;
