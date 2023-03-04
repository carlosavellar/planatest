import axios from 'axios';

export const getMovies = () => {
  return axios.get('/trending/all/day?api_key=e11274943e564338428e48ffc1fa3059', {
    withCredentials: false,
    params: {
      limit: 1000,
    },
  });
};
