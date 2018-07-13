import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Flights from '../components/Flights';

export class FlightsContainer extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    outFlights: PropTypes.array.isRequired,
    passengers: PropTypes.number.isRequired,
    returnFlights: PropTypes.array.isRequired,
  }

  render() {
    return (
      <Flights {...this.props}/>
    )
  }
}

function mapStateToProps(state) {
  const {
    outFlights,
    returnFlights,
    passengers
  } = state.flights;

  return {
    outFlights,
    returnFlights,
    passengers
  };
}

export default connect(mapStateToProps)(FlightsContainer);
