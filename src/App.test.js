import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import App from "./App";

configure({ adapter: new Adapter() });
const mockStore = configureStore([]);

describe('App', () => {

  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      searchRepoReducer: {
        repos: [],
        fetching: false,
        fetched: false,
      }
    });

    component = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it('should render correctly', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
