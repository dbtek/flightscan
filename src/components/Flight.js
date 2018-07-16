import React from 'react';
import FlightIcon from 'react-icons/lib/md/flight';
import Card from './Card';
import FlightDetails from './FlightDetails';
import Button from './Button';

/**
 * Flight component. Renders a single flight or a pair of out/return flights.
 * @param  {Object} props
 * @return {Component}
 */
export default (props) => {
  const { price, passengers } = props
  return (
    <Card className="flight">
      <FlightDetails {...props}/>
      <div className="price">
        <span>£{price * (passengers || 1)}</span>
      </div>
      <div className="actions">
        <Button success><FlightIcon/> Select this flight</Button>
      </div>
    </Card>
  );
}
