/**
 * Action creators to set filters.
 */

import {
  UPDATE_FROM,
  UPDATE_TO,
  UPDATE_DEPART_DATE,
  UPDATE_RETURN_DATE,
  UPDATE_ROUND_TRIP,
  UPDATE_PASSENGERS,
  UPDATE_PRICE_LOW,
  UPDATE_PRICE_HIGH
} from './types';

export function updateRoundTrip(opt) {
  return {
    type: UPDATE_ROUND_TRIP,
    roundTrip: opt
  }
}

export function updateFrom(opt) {
  return {
    type: UPDATE_FROM,
    from: opt
  }
}

export function updateTo(opt) {
  return {
    type: UPDATE_TO,
    to: opt
  }
}

export function updateDepartDate(opt) {
  return {
    type: UPDATE_DEPART_DATE,
    departDate: new Date(opt+'T00:00:00')
  }
}

export function updateReturnDate(opt) {
  return {
    type: UPDATE_RETURN_DATE,
    returnDate: new Date(opt+'T00:00:00')
  }
}

export function updatePassengers(opt) {
  return {
    type: UPDATE_PASSENGERS,
    passengers: opt*1
  }
}

export function updatePriceLow(opt) {
  return {
    type: UPDATE_PRICE_LOW,
    priceLow: opt
  }
}

export function updatePriceHigh(opt) {
  return {
    type: UPDATE_PRICE_HIGH,
    priceHigh: opt
  }
}
