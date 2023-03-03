import { delay } from 'redux-saga';
import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
// import { ActionType } from 'typesafe-actions';
import * as actions from '../../actions';
import { API_KEY } from '../../config';
import TheMovieDbAPI from '../../lib/api';

const api = new TheMovieDbAPI(API_KEY);

function* fetchPopularMovies(action) {
  yield put(actions.fetchedPopularMovies(yield call(api.getPopularMovies, action.payload)));
}

export default function* rootSaga() {
  yield all([yield takeEvery(actions.GET_POPULAR_MOVIES, fetchPopularMovies)]);
}
