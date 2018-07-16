/**
 * A resource module to simulate interaction with a REST api.
 */
import CITIES from './cities.json';
import FLIGHTS from './flights.json';
import MOCK_FLIGHTS from './flights_mock.json';

/**
 * Fetches flights.
 * @return {Promise} Fetch results.
 */
export async function getFlights() {
  const results = await new Promise(resolve => setTimeout(() => {
    if (process.env.TEST) {
      resolve(MOCK_FLIGHTS);
      return;
    }
    resolve(FLIGHTS);
  }, 1000));
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
