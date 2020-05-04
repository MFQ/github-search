import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import SearchBar from ".";

configure({ adapter: new Adapter() });

describe('SearchBar', () => {
  it('should render correctly', () => {
    const mockData = {
      bids: [],
      asks: []
    }
    const output = shallow(
      <SearchBar/>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
