import * as actions from '../actions';

const initialState = {
  movies: [],
};
export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_LAST_MOVIES:
      return {
        ...state,
        movies: action.payload.items,
      };
    default:
      return state;
  }
}
