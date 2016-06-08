import {
  FETCH_FLIGHTS,
  SEARCH_FLIGHTS,
} from '../actions';

export default function flights(state = {
    outFlights: [],
    returnFlights: [],
    isFetching: false,
    searchTerm: '',
    passengers: 1,
  }, action) {

  switch(action.type) {
    case FETCH_FLIGHTS:
      return Object.assign({}, state, {
        outFlights: action.flights,
        returnFlights: [],
        passengers: action.passengers,
      });
    case SEARCH_FLIGHTS:
      return Object.assign({}, state, {
          outFlights: action.outFlights,
          returnFlights: action.returnFlights,
          passengers: action.passengers,
        });
    default:
      return Object.assign({}, state);
  }

}