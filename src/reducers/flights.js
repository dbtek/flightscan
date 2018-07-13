import {
  SEARCH_FLIGHTS,
  REQUEST_FLIGHTS_SEARCH,
} from '../actions';

export default function flights(state = {
    outFlights: [],
    returnFlights: [],
    isFetching: false,
    passengers: 1,
  }, action) {

  switch(action.type) {
    case REQUEST_FLIGHTS_SEARCH:
      return Object.assign({}, state, {
        isFetching: true
      });
    case SEARCH_FLIGHTS:
      return Object.assign({}, state, {
          outFlights: action.outFlights,
          returnFlights: action.returnFlights,
          passengers: action.passengers,
          isFetching: false
        });
    default:
      return Object.assign({}, state);
  }

}