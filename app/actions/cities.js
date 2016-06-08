import {
  FETCH_CITIES
} from './types';
import * as api from '../api';

export function fetchCities() {
  return async (dispatch, getState) => {
    const results = await api.getCities();
    return dispatch({
      type: FETCH_CITIES,
      cities: results
    });
  }
}