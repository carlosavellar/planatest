import { all } from 'redux-saga/effects';
import moviesSaga from './Movies';

export default function* rootSaga() {
  yield all([...moviesSaga]);
}
