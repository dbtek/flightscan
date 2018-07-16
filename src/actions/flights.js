/**
 * Action creators to fetch / search flights.
 */

import {
  SEARCH_FLIGHTS,
  REQUEST_FLIGHTS_SEARCH
} from './types';

import moment from 'moment';
import * as api from '../api';

/**
 * Search in flight results based on filters.
 * @param  {Array}  results   All flights.
 * @param  {Object} filters   Filters
 * @param  {Boolean} isReturn Whether this search is for return flights.
 * @return {Array}            Search results (filtered flights).
 */
function _search(results, filters, isReturn) {
  let departDate;
  let cFrom, cTo;
  if(isReturn) {
    departDate = filters.returnDate;
    cFrom = filters.to;
    cTo = filters.from;
  }
  else {
    departDate = filters.departDate;
    cFrom = filters.from;
    cTo = filters.to;
  }
  let departDayStart = moment(departDate).startOf('day');
  let departDayEnd = moment(departDate).endOf('day');

  return results.filter(flight => {
    const flightDepartDate = new Date(flight.departure);
    return (flight.from.full.indexOf(cFrom) >= 0 && flight.to.full.indexOf(cTo) >= 0) && (flightDepartDate > departDayStart.toDate() && flightDepartDate < departDayEnd.toDate());
  });
}

/**
 * Initiates flight search with keywords.
 * @return {Object}       Action.
 */
export function searchFlights() {
  return async (dispatch, getState) => {
    const filters = getState().filters;
    dispatch({
      type: REQUEST_FLIGHTS_SEARCH
    })
    const flights = await api.getFlights();
    const outFlights = _search(flights, filters, false);

    if(filters.roundTrip) {
      const returnFlights = _search(flights, filters, true);
      dispatch({
        type: SEARCH_FLIGHTS,
        outFlights: outFlights,
        returnFlights: returnFlights,
        passengers: filters.passengers,
      });
    }
    else {
      dispatch({
        type: SEARCH_FLIGHTS,
        outFlights: outFlights,
        passengers: filters.passengers,
      });
    }
  }
}
