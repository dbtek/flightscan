import {
  FETCH_CITIES,
} from '../actions';

export default function cities(state = {
    items: [],
    isFetching: false,
  }, action) {

  switch(action.type) {
    case FETCH_CITIES:
      return Object.assign({}, state, {
        items: action.cities
      });
    default:
      return Object.assign({}, state);
  }

}