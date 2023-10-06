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

export const getPopularMovies = async () => {
  const options = {
    url: `${API_URL}/movie/popular`,
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

export const getTopRatedMovies = async () => {
  const options = {
    url: `${API_URL}/movie/top_rated`,
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

export const getUpcomingMovies = async () => {
  const options = {
    url: `${API_URL}/movie/upcoming`,
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

export const getAiringTodayShow = async () => {
  const options = {
    url: `${API_URL}/tv/airing_today`,
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

export const getOnTheAirShow = async () => {
  const options = {
    url: `${API_URL}/tv/on_the_air`,
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

export const getPopularShow = async () => {
  const options = {
    url: `${API_URL}/tv/popular`,
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

export const getTopRatedShows = async () => {
  const options = {
    url: `${API_URL}/tv/top_rated`,
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

export const getDetails = async (id) => {
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
