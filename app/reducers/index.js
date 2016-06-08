import { combineReducers } from 'redux';

import flights from './flights';
import cities from './cities';
import filters from './filters';

const reducers = combineReducers({
  flights: flights,
  cities: cities,
  filters: filters,
});

export default reducers;
