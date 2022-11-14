import axios from 'axios';

const API_KEY = 'd190318c945ae54e51173d6269b7c5f1';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const RequestTrend = async page => {
  const response = await axios.get(`/trending/all/day`, {
    params: {
      api_key: API_KEY,
      page: page,
    },
  });
  return response.data;
};

export const RequestMovieDetails = async movieId => {
  const response = await axios.get(`/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};

export const RequestActres = async movieId => {
  const response = await axios.get(`/movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};

export const RequestReviews = async movieId => {
  const response = await axios.get(`/movie/${movieId}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};

export const RequestSearch = async (text, page) => {
  const response = await axios.get(`/search/movie`, {
    params: {
      api_key: API_KEY,
      query: text,
      page: page,
    },
  });
  return response.data;
};
