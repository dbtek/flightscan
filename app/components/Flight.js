import React from 'react';
import Card from './Card';
import ArrowIcon from 'react-icons/lib/md/arrow-forward';
import FlightIcon from 'react-icons/lib/md/flight';
import TakeOffIcon from 'react-icons/lib/md/flight-takeoff';
import LandIcon from 'react-icons/lib/md/flight-land';
import moment from 'moment';

import FlightDetails from './FlightDetails';
import Button from './Button';

/**
 * Flight component. Renders a single flight or a pair of out/return flights.
 * @param  {Object} props
 * @return {Component}
 */
export default (props) => {
  let departure = moment(new Date(props.departure));
  let arrival = moment(new Date(props.arrival));


  if(props.return)
    return (
      <Card className="flight return">
        <FlightDetails {...props.out}/>
        <FlightDetails {...props.return}/>
        <div className="price">
          <span>£{(props.out.price + props.return.price) * (props.passengers || 1)}</span>
        </div>
        <div className="actions">
          <Button success={true}><FlightIcon/> Select this flight</Button>
        </div>
      </Card>
    );
  else
    return (
      <Card className="flight">
        <FlightDetails {...props.out}/>
        <div className="price">
          <span>£{props.out.price * (props.passengers || 1)}</span>
        </div>
        <div className="actions">
          <Button success><FlightIcon/> Select this flight</Button>
        </div>
      </Card>
    );
}