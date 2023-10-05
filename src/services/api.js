import {
  API_BEARER_TOKEN,
  API_URL,
  API_IMG_URL,
  API_LANG,
} from "../config/apiConfig";
import qs from "qs";
import axios from "axios";

const headerOptions = {
  accept: "application/json",
  Authorization: `Bearer ${API_BEARER_TOKEN}`,
};

export const getNowPlayingMovies = async () => {
  const options = {
    url: `${API_URL}/movie/now_playing`,
    method: "GET",
    params: { language: API_LANG, page: "1" },
    headers: headerOptions,
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getMovieDetails = async (id) => {
  const options = {
    url: `${API_URL}/movie/${id}`,
    method: "GET",
    params: { language: API_LANG },
    headers: headerOptions,
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
