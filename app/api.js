/**
 * A resource module to simulate interaction with a REST api.
 */
import CITIES from './cities.json';

// let loading data file from env variable
let flightsDataFile = 'flights';
if(process && process.env.FLIGHTS_JSON)
  flightsDataFile = process.env.FLIGHTS_JSON

const FLIGHTS = require('./' + flightsDataFile + '.json');

/**
 * Fetches flights.
 * @return {Promise} Fetch results.
 */
export async function getFlights() {
  const results = await new Promise(resolve => setTimeout(() => {
    resolve(FLIGHTS);
  }, 1));
  return results;
}

/**
 * Fetches results.
 * @return {Promise} Fetch results.
 */
export async function getCities() {
  const results = await new Promise(resolve => setTimeout(() => {
    resolve(CITIES);
  }, 1));
  return results;
}