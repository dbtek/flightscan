import expect from 'expect';
import reducer from '../../src/reducers/flights';
import * as types from '../../src/actions/types';

describe('Flights reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      outFlights: [],
      returnFlights: [],
      passengers: 1,
      isFetching: false
    });
  });

  it('should handle REQUEST_FLIGHTS_SEARCH', () => {
    expect(
      reducer([], {
        type: types.REQUEST_FLIGHTS_SEARCH
      })
    ).toEqual({
      isFetching: true
    });
  });

  it('should handle SEARCH_FLIGHTS', () => {
    const mockFlights = [{from: '', to: ''}];
    expect(
      reducer([], {
        type: types.SEARCH_FLIGHTS,
        outFlights: mockFlights,
        returnFlights: mockFlights,
        passengers: 1
      })
    ).toEqual({
      outFlights: mockFlights,
      returnFlights: mockFlights,
      isFetching: false,
      passengers: 1
    });
  });
});
