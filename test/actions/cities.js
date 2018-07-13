import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../src/actions/cities';
import * as types from '../../src/actions/types';
import cities from '../../src/cities.json';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('Cities actions', () => {
  it('creates FETCH_CITIES typed action when fetching cities has been done', () => {

    const expectedActions = [
      { type: types.REQUEST_CITIES },
      {
        type: types.FETCH_CITIES,
        cities: cities
      }
    ]
    const store = mockStore({
      list: {
        items: [],
        isFetching: false
      }
    })

    return store.dispatch(actions.fetchCities())
      .then(() => { // return of async actions
        let actions = store.getActions();
        expect(actions[0]).toEqual(expectedActions[0]);
        let action2 = actions[1];
        expect(action2).toEqual(expectedActions[1]);
      })
  })
})
