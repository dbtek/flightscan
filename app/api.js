/**
 * A resource module to simulate interaction with a REST api.
 */
let FLIGHTS, CITIES;
if(process && process.env.FLIGHTS_JSON)
  FLIGHTS = require(process.env.FLIGHTS_JSON);
else
  FLIGHTS = require('./flights.json');
if(process && process.env.CITIES_JSON)
  CITIES = require(process.env.CITIES_JSON);
else
  CITIES = require('./cities.json');

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