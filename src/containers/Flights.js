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
    isFetching: PropTypes.bool.isRequired
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
    passengers,
    isFetching
  } = state.flights;

  const {
    priceLow, priceHigh
  } = state.filters;

  return {
    outFlights,
    returnFlights,
    passengers,
    priceHigh,
    priceLow,
    isFetching
  };
}

export default connect(mapStateToProps)(FlightsContainer);
