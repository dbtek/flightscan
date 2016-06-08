import React from 'react';
import moment from 'moment';
import ArrowIcon from 'react-icons/lib/md/arrow-forward';
import TakeOffIcon from 'react-icons/lib/md/flight-takeoff';
import LandIcon from 'react-icons/lib/md/flight-land';

/**
 * Flight details component. Renders flight code, route, time etc.
 * @param  {Object} props
 * @return {Component}
 */
export default (props) => {
  let departure = moment(new Date(props.departure));
  let arrival = moment(new Date(props.arrival));

  return (
    <div className="flight-details">
      <div className="code">{props.code}</div>
      <div className="route">
        {props.from.short} <ArrowIcon/> {props.to.short}
      </div>
      <div className="times">
        <TakeOffIcon/> {departure.format('LT')}
        <br/>
        <LandIcon/> {arrival.format('LT')}
      </div>
    </div>
  )
}