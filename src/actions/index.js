import { action } from 'typesafe-actions';

export const GET_LAST_MOVIES = 'GET_LAST_MOVIES';

export const getMoviesRequest = ({ items }) => {
  return {
    type: action.GET_LAST_MOVIES,
    payload: {
      items,
    },
  };
};
