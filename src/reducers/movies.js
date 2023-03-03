import * as actions from '../actions';

const initialState = {
  genres: [],
  isFetching: false,
};

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_POPULAR_MOVIES:
      return {
        ...state,
        isFetching: true,
      };
    case actions.FETCHED_POPULAR_MOVIES:
      return {
        ...state,
        genres: action.payload.genres,
        isFetching: false,
      };
    default:
      return state;
  }
}
