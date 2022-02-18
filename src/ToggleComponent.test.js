

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ToggleComponent from './components/ToggleComponent';
Enzyme.configure({ adapter: new Adapter() });
describe('ToggleComponent', () => {
  it('should show the text', () => {
  const toggleInstance = shallow(<ToggleComponent />);
  const element = toggleInstance.find('div div');
  expect(element.text()).toBe('I am the Full Stack developer');
 });
});