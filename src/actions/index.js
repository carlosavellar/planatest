import { action } from 'typesafe-actions';

export const FETCHED_POPULAR_MOVIES = 'FETCHED_POPULAR_MOVIES';
export const GET_POPULAR_MOVIES = 'GET_POPULAR_MOVIES';

export const fetchedPopularMovies = (payload) => action(FETCHED_POPULAR_MOVIES, payload);
