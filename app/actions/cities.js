/**
 * Action creators to fetch cities.
 */

import {
  FETCH_CITIES,
  REQUEST_CITIES
} from './types';
import * as api from '../api';

export function fetchCities() {
  return async (dispatch, getState) => {
    dispatch({type: REQUEST_CITIES});
    const results = await api.getCities();
    return dispatch({
      type: FETCH_CITIES,
      cities: results
    });
  }
}