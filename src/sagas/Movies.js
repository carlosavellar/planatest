import { call, put, takeEvery, fork } from 'redux-saga/effects';
// import { ActionType } from 'typesafe-actions';
import * as actions from '../actions';
// import { API_KEY } from '../../config';
// import TheMovieDbAPI from '../../lib/api';

// const api = new TheMovieDbAPI(API_KEY);

import * as api from '../api/movies';

function* fetchPopularMovies() {
  try {
    const results = yield call(api.getMovies);
    yield put(actions.getMoviesRequest({ movies: results.results }));
    console.log(results);
  } catch (err) {
    console.log(err.message);
  }
}

function* wacthGetMoviesRequest() {
  yield takeEvery(actions.GET_LAST_MOVIES, fetchPopularMovies);
}

const moviesSaga = [fork(wacthGetMoviesRequest)];

export default moviesSaga;
