import expect from 'expect';
import * as actions from '../../src/actions/filters';
import * as types from '../../src/actions/types';

describe('Filters actions', () => {
  it('creates UPDATE_FROM typed action', () => {
    const mockCity = 'Berlin';
    const expectedAction = {
      type: types.UPDATE_FROM,
      from: mockCity
    };
    expect(actions.updateFrom(mockCity)).toEqual(expectedAction);
  });

  it('creates UPDATE_TO typed action', () => {
    const mockCity = 'Istanbul';
    const expectedAction = {
      type: types.UPDATE_TO,
      to: mockCity
    };
    expect(actions.updateTo(mockCity)).toEqual(expectedAction);
  });

  it('creates UPDATE_DEPART_DATE typed action', () => {
    const mockDate = '2016-06-09';
    const expectedAction = {
      type: types.UPDATE_DEPART_DATE,
      departDate: new Date('2016-06-09T00:00:00')
    };
    expect(actions.updateDepartDate(mockDate)).toEqual(expectedAction);
  });

  it('creates UPDATE_RETURN_DATE typed action', () => {
    const mockDate = '2016-06-09';
    const expectedAction = {
      type: types.UPDATE_RETURN_DATE,
      returnDate: new Date('2016-06-09T00:00:00')
    };
    expect(actions.updateReturnDate(mockDate)).toEqual(expectedAction);
  });

  it('creates UPDATE_ROUND_TRIP typed action', () => {
    const expectedAction = {
      type: types.UPDATE_ROUND_TRIP,
      roundTrip: true
    };
    expect(actions.updateRoundTrip(true)).toEqual(expectedAction);

    const expectedAction2 = {
      type: types.UPDATE_ROUND_TRIP,
      roundTrip: false
    };
    expect(actions.updateRoundTrip(false)).toEqual(expectedAction2);
  });

  it('creates UPDATE_PASSENGERS typed action', () => {
    const expectedAction = {
      type: types.UPDATE_PASSENGERS,
      passengers: 3
    };
    expect(actions.updatePassengers(3)).toEqual(expectedAction);
  });
});
