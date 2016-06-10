import React from 'react';
import FlightIcon from 'react-icons/lib/md/flight';

import Tabs from './Tabs';
import Tab from './Tab';
import Select from './Select';
import Button from './Button';

/**
 * Filters component. Renders a form of options.
 * @param  {Object} props
 * @return {Component}
 */
export default (props) => {
  function handleChange(prop) {
    return (e) => props.onChange(prop, e.target.value);
  }

  let ReturnIcon = [
      <FlightIcon key={1}/>,
      <FlightIcon key={2} className="reverse"/>
  ];
  return (
    <div className="filters">
      <Tabs>
        <Tab active={!props.roundTrip} label="One Way" icon={<FlightIcon/>} onClick={() => props.onChange('roundTrip', false)}/>
        <Tab active={props.roundTrip} label="Roundtrip"  icon={ReturnIcon} onClick={() => props.onChange('roundTrip', true)}/>
      </Tabs>
      <form>
        <label>
          From
        </label>
        <Select options={props.cities} value={props.from} onChange={handleChange('from')}/>
        <label>
          Destination
        </label>
        <Select options={props.cities} value={props.to} onChange={handleChange('to')}/>

        <label>Departure Date</label>
        <input type="date" value={props.departDate.toJSON().slice(0,10)} onChange={handleChange('departDate')}/>

        {(() => {
          if(props.roundTrip) {
            return([
                <label key={1}>Return Date</label>,
                <input key={2} type="date" value={props.returnDate.toJSON().slice(0,10)} onChange={handleChange('returnDate')}/>
            ])
          }
        })()}

        <label>Passengers</label>
        <input type="number" value={props.passengers} onChange={handleChange('passengers')} min={1}/>

        <Button block primary raised onClick={props.onSearch}>Search</Button>
      </form>
    </div>
  )
}