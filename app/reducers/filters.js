import {
  UPDATE_FROM,
  UPDATE_TO,
  UPDATE_DEPART_DATE,
  UPDATE_RETURN_DATE,
  UPDATE_ROUND_TRIP,
  UPDATE_PASSENGERS,
  UPDATE_FILTERS,
} from '../actions';


export default function filters(state = {
    from: 'Istanbul',
    to:   'Antalya',
    departDate: new Date(),
    returnDate: new Date(),
    roundTrip: true,
    passengers: 1
  }, action) {

  switch(action.type) {
    case UPDATE_FILTERS:
      return Object.assign({}, state, action.filters);
    case UPDATE_ROUND_TRIP:
      return Object.assign({}, state, {
          roundTrip: action.roundTrip
        });
    case UPDATE_FROM:
      return Object.assign({}, state, {
          from: action.from
        });
    case UPDATE_TO:
      return Object.assign({}, state, {
          to: action.to
        });
    case UPDATE_DEPART_DATE:
      return Object.assign({}, state, {
          departDate: action.departDate
        });
    case UPDATE_RETURN_DATE:
      return Object.assign({}, state, {
          returnDate: action.returnDate
        });
    case UPDATE_PASSENGERS:
      return Object.assign({}, state, {
          passengers: action.passengers
        });
    default:
      return Object.assign({}, state);
  }

}