import axios from 'axios';

const API_KEY = 'd190318c945ae54e51173d6269b7c5f1';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const controller = new AbortController();

export const RequestTrend = async () => {
  const response = await axios.get(`/trending/all/day`, {
    signal: controller.signal,
    params: {
      api_key: API_KEY,
    },
  });
  console.log(response.data, 'from request');
  return response.data;
};

export const RequestMovieDetails = async movieId => {
  const response = await axios.get(`/movie/${movieId}`, {
    signal: controller.signal,
    params: {
      api_key: API_KEY,
    },
  });
  // console.log(response.data, 'RequestMovieDetails');
  return response.data;
};

// export const Config = async () => {
//   const response = await axios.get(`/configuration`, {
//     signal: controller.signal,
//     params: {
//       api_key: API_KEY,
//     },
//   });

//   return response.data;
// };

export const RequestActres = async movieId => {
  const response = await axios.get(`/movie/${movieId}/credits`, {
    signal: controller.signal,
    params: {
      api_key: API_KEY,
    },
  });
  // console.log(response.data, 'RequestActres');
  return response.data;
};

export const RequestReviews = async movieId => {
  const response = await axios.get(`/movie/${movieId}/reviews`, {
    signal: controller.signal,
    params: {
      api_key: API_KEY,
    },
  });
  // console.log(response.data, 'RequestActres');
  return response.data;
};
