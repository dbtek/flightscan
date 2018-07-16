import React from 'react';
import Flight from './Flight';
import ReturningFlight from './FlightReturning';
import Header from './Header';
import Loading from './Loading';

function isInPriceRange(price, low, high) {
  if (low) {
    if (price < low) return false
  }
  if (high) {
    if (price > high) return false
  }
  return true
}


/**
 * Renders a flight with or without return flight pairs.
 * @param  {Object} outFlight     Out flight.
 * @param  {Array} returnFlights  Available return flights.
 * @param  {Number} passengers    Number of passengers.
 * @return {various}              Array of React components or singular component.
 */
function renderFlight(outFlight, returnFlights, passengers, priceLow, priceHigh) {
  if(returnFlights)
     return returnFlights.filter(returnFlight => isInPriceRange(outFlight.price + returnFlight.price, priceLow, priceHigh))
      .map(returnFlight => (<ReturningFlight out={outFlight} return={returnFlight} passengers={passengers} />));
  else if (isInPriceRange(outFlight.price, priceLow, priceHigh))
    return <Flight {...outFlight} passengers={passengers} />;
  return null
}

/**
 * Flights component. Renders out / return pairs of flights.
 * @param  {Object} props Props.
 * @return {Component}    React component.
 */
export default (props) => {
  const { outFlights, returnFlights, passengers, priceLow, priceHigh, isFetching } = props;
  return (
    <div className="flights">
      <Header>Available Flights</Header>
      {isFetching ? <Loading /> : outFlights && outFlights.map(flight => renderFlight(flight, returnFlights, passengers, priceLow, priceHigh)) }
    </div>
  );
}
