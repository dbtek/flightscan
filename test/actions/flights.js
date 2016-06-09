import mockFlights from '../../app/_mock-flights.json';
import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../app/actions/flights';
import * as types from '../../app/actions/types';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

beforeEach(() => {
  process.env.FLIGHTS_JSON = './_mock-flights.json';
});

describe('Flights actions', () => {
  it('should create correct action for one way search', () => {
    let expectedActions = [
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
      });
  });


  it('should create correct action for roundtrip search', () => {
    let expectedActions = [
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
      });
  });
});