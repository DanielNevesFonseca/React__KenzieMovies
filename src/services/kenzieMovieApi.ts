import axios from "axios"


export const kenzieMovieApi = axios.create({
  baseURL: "https://kenzie-movie-api-u7h4.onrender.com",
  timeout: 8 * 1000,
})