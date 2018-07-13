import expect from 'expect';
import reducer from '../../src/reducers/cities';
import * as types from '../../src/actions/types';

describe('Cities reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      items: [],
      isFetching: false
    });
  });

  it('should handle REQUEST_CITIES', () => {
    expect(
      reducer([], {
        type: types.REQUEST_CITIES
      })
    ).toEqual({
      isFetching: true
    });
  });

  it('should handle FETCH_CITIES', () => {
    expect(
      reducer([], {
        type: types.FETCH_CITIES,
        cities: ['Berlin']
      })
    ).toEqual({
      items: ['Berlin'],
      isFetching: false
    });
  });
});
