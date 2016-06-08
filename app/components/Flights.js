import React from 'react';
import Flight from '../components/Flight';
import Header from './Header';

/**
 * Renders flight options with or without return flight pairs.
 * @param  {Object} outFlight     Out flight.
 * @param  {Array} returnFlights  Available return flights.
 * @param  {Number} passengers    Number of passengers.
 * @return {various}              Array of React components or singular component.
 */
function renderFlight(outFlight, returnFlights, passengers) {
  if(returnFlights)
     return returnFlights.map(returnFlight => {
        // check return departure time for the sake of the trip
        if(returnFlight.departure > outFlight.departure)
          return (
            <Flight out={outFlight} return={returnFlight} passengers={passengers}/>
          );
        return;
      });
  else
    return <Flight out={outFlight} passengers={passengers}/>;
}

/**
 * Flights component. Renders out / return pairs of flights.
 * @param  {Object} props Props.
 * @return {Component}    React component.
 */
export default (props) => {
  const { outFlights, returnFlights, passengers } = props;
  return (
    <div className="flights">
      <Header>Available Flights</Header>
      { outFlights && outFlights.map(flight => renderFlight(flight, returnFlights, passengers)) }
    </div>
  );
}