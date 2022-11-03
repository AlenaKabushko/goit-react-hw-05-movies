import axios from 'axios';

const API_KEY = 'd190318c945ae54e51173d6269b7c5f1';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
//https://api.themoviedb.org/3/trending/all/day?api_key=d190318c945ae54e51173d6269b7c5f1
const controller = new AbortController();

export const Request = async () => {
  const response = await axios.get(`/trending/all/day`, {
    signal: controller.signal,
    params: {
      api_key: API_KEY,
    },
  });
    console.log(response.data, 'from request');
  return response.data;
};
