import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Progress from '../src/components/Progressbar/Progress';

describe('App', () => {
  it('should render a <div />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').length).not.toBe(0);
  });

  it('should render the Display Component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(
        <Progress item={wrapper.instance() && wrapper.instance().state.item}
    setBarname={wrapper.instance() && wrapper.instance().state.setBarname}
    setUpdate={wrapper.instance() && wrapper.instance().state.setUpdate}
    setValue={wrapper.instance() && wrapper.instance().state.setValue}
    barname={wrapper.instance() && wrapper.instance().state.barname}
    />
    )).toEqual(true);
  });
});