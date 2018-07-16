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
    return (
      <Card className="flight return">
        <FlightDetails {...props.out} />
        <FlightDetails {...props.return} />
        <div className="price">
          <span>£{(props.out.price + props.return.price) * (props.passengers ||  1)}</span>
        </div>
        <div className="actions">
          <Button success={true}><FlightIcon /> Select this flight</Button>
        </div>
      </Card>
    );
}
