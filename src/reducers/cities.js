import {
  FETCH_CITIES,
  REQUEST_CITIES
} from '../actions';

export default function cities(state = {
    items: [],
    isFetching: false,
  }, action) {

  switch(action.type) {
    case REQUEST_CITIES:
      return Object.assign({}, state, {
        isFetching: true
      });
    case FETCH_CITIES:
      return Object.assign({}, state, {
        items: action.cities,
        isFetching: false
      });
    default:
      return Object.assign({}, state);
  }

}