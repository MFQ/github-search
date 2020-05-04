import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import { FormControl } from 'react-bootstrap';
import { shallow, configure } from 'enzyme';

import SearchBar from ".";

configure({ adapter: new Adapter() });

describe('SearchBar', () => {
  it('should render correctly', () => {
    const output = shallow(
      <SearchBar/>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it("should trigger onChange event for SearchBar", () => {
    const wrapper = shallow(<SearchBar fetchRepos={jest.fn()}/>);
    const formControlWrapper = wrapper.find(FormControl);
    expect(formControlWrapper.length).toEqual(1);
    wrapper.find(FormControl).simulate('change', { target: { value: "a" } })
    wrapper.find(FormControl).simulate('blur', { target: { value: "a" } })
  });
});
