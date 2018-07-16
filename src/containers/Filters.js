import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  searchFlights,
  updateFrom,
  updateTo,
  updateRoundTrip,
  updateDepartDate,
  updateReturnDate,
  updatePassengers,
  fetchCities,
  updatePriceLow,
  updatePriceHigh,
} from '../actions';

import Filters from '../components/Filters';

export class FiltersContainer extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    roundTrip: PropTypes.bool.isRequired,
    departDate: PropTypes.instanceOf(Date).isRequired,
    returnDate: PropTypes.instanceOf(Date).isRequired,
    passengers:  PropTypes.number.isRequired,
    cities:  PropTypes.array.isRequired,
    priceLow:  PropTypes.number,
    priceHigh:  PropTypes.number,
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCities());
  }

  handleSearch() {
    const { dispatch } = this.props;
    dispatch(searchFlights());
  }

  handleChange(prop, val) {
    console.debug(`${prop} changed to: ${val}`);
    const { dispatch } = this.props;
    switch(prop) {
      case 'from':
        return dispatch(updateFrom(val));
      case 'to':
        return dispatch(updateTo(val));
      case 'roundTrip':
        return dispatch(updateRoundTrip(val));
      case 'departDate':
        return dispatch(updateDepartDate(val));
      case 'returnDate':
        return dispatch(updateReturnDate(val));
      case 'passengers':
        return dispatch(updatePassengers(val));
      case 'priceLow':
        return dispatch(updatePriceLow(val));
      case 'priceHigh':
        return dispatch(updatePriceHigh(val));
      default:
        return
    }
  }

  render() {
    return (
      <Filters {...this.props}
        onSearch={this.handleSearch.bind(this)}
        onChange={this.handleChange.bind(this)}/>
    )
  }
}

function mapStateToProps(state) {
  const {
    from,
    to,
    roundTrip,
    departDate,
    returnDate,
    passengers,
    priceHigh,
    priceLow
  } = state.filters;

  const {
    items: cities
  } = state.cities;

  return {
    from,
    to,
    roundTrip,
    departDate,
    returnDate,
    passengers,
    cities,
    priceHigh,
    priceLow
  };
}

export default connect(mapStateToProps)(FiltersContainer);
