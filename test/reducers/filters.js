import expect from 'expect';
import reducer from '../../src/reducers/filters';
import * as types from '../../src/actions/types';

let now = new Date();

describe('Filters reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      from: 'Istanbul',
      to:   'Antalya',
      departDate: new Date(now.getFullYear(), now.getMonth(), now.getDate()+1),
      returnDate: new Date(now.getFullYear(), now.getMonth(), now.getDate()+1),
      roundTrip: true,
      passengers: 1
    });
  });

  it('should handle UPDATE_FROM', () => {
    expect(
      reducer([], {
        type: types.UPDATE_FROM,
        from: 'Test city'
      })
    ).toEqual({
      from: 'Test city'
    });
  });

  it('should handle UPDATE_TO', () => {
    expect(
      reducer([], {
        type: types.UPDATE_TO,
        to: 'Test city 2'
      })
    ).toEqual({
      to: 'Test city 2'
    });
  });

  it('should handle UPDATE_DEPART_DATE', () => {
    expect(
      reducer([], {
        type: types.UPDATE_DEPART_DATE,
        departDate: new Date(2016, 5, 9)
      })
    ).toEqual({
      departDate: new Date(2016, 5, 9)
    });
  });

  it('should handle UPDATE_RETURN_DATE', () => {
    expect(
      reducer([], {
        type: types.UPDATE_RETURN_DATE,
        returnDate: new Date(2016, 5, 9)
      })
    ).toEqual({
      returnDate: new Date(2016, 5, 9)
    });
  });

  it('should handle UPDATE_ROUND_TRIP', () => {
    expect(
      reducer([], {
        type: types.UPDATE_ROUND_TRIP,
        roundTrip: true
      })
    ).toEqual({
      roundTrip: true
    });

    expect(
      reducer([], {
        type: types.UPDATE_ROUND_TRIP,
        roundTrip: false
      })
    ).toEqual({
      roundTrip: false
    });
  });

  it('should handle UPDATE_PASSENGERS', () => {
    expect(
      reducer([], {
        type: types.UPDATE_PASSENGERS,
        passengers: 4
      })
    ).toEqual({
      passengers: 4
    });
  });
});
