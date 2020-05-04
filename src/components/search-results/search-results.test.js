import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import SearchResults from ".";

configure({ adapter: new Adapter() });

describe('SearchResults', () => {
  it('should render correctly', () => {
    const mockData = {
      bids: [],
      asks: []
    }
    const output = shallow(
      <SearchResults repos={[ {name: "rails"} ]}/>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
