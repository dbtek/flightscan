import mockFlights from '../../src/flights_mock.json';
import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../src/actions/flights';
import * as types from '../../src/actions/types';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

beforeEach(() => {
  process.env.FLIGHTS_JSON = './flights_mock.json';
});

describe('Flights actions', () => {
  it('should create correct action for one way search', () => {
    let expectedActions = [
      {
        type: types.REQUEST_FLIGHTS_SEARCH
      },
      {
        type: types.SEARCH_FLIGHTS,
        outFlights: [mockFlights[0]],
        passengers: 1
      }
    ];
    const store = mockStore({
      filters: {
        passengers: 1,
        from: 'Antalya',
        to: 'Istanbul',
        departDate: new Date(2016,5,7)
      },
      flights: {
        list: {
          items: [],
          isFetching: false
        }
      }
    });

    return store.dispatch(actions.searchFlights())
      .then(() => { // return of async actions
        let actions = store.getActions();
        expect(actions[0]).toEqual(expectedActions[0]);
        expect(actions[1]).toEqual(expectedActions[1]);
      });
  });


  it('should create correct action for roundtrip search', () => {
    let expectedActions = [
      {
        type: types.REQUEST_FLIGHTS_SEARCH
      },
      {
        type: types.SEARCH_FLIGHTS,
        outFlights: [mockFlights[0]],
        returnFlights: [mockFlights[1]],
        passengers: 1
      }
    ];

    const store = mockStore({
      filters: {
        passengers: 1,
        from: 'Antalya',
        to: 'Istanbul',
        roundTrip: true,
        departDate: new Date(2016,5,7),
        returnDate: new Date(2016,5,8)
      },
      flights: {
        list: {
          items: [],
          isFetching: false
        }
      }
    });

    return store.dispatch(actions.searchFlights())
      .then(() => { // return of async actions
        let actions = store.getActions();
        expect(actions[0]).toEqual(expectedActions[0]);
        expect(actions[1]).toEqual(expectedActions[1]);
      });
  });
});
