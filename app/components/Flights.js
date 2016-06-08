import React from 'react';
import Flight from '../components/Flight';
import Header from './Header';

function renderFlight(outFlight, returnFlights, passengers) {
  if(returnFlights)
     return returnFlights.map(returnFlight => {
        if(returnFlight.departure > outFlight.departure)
          return (
            <Flight out={outFlight} return={returnFlight} passengers={passengers}/>
          );
        return;
      });
  else
    return <Flight out={outFlight} passengers={passengers}/>;
}

export default (props) => {
  const { outFlights, returnFlights, passengers } = props;
  return (
    <div className="flights">
      <Header>Available Flights</Header>
      { outFlights && outFlights.map(flight => renderFlight(flight, returnFlights, passengers)) }
    </div>
  );
}