import React from 'react';
import {shallow} from 'enzyme';
import Progress from './Progress';
import items from './data';

describe('Progress', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<Progress item={''}
    setBarname={''}
    setUpdate={''}
    setValue={''}
    barname={''}
    />));
  it('should render a <div />', () => {
    expect(wrapper.find('div').length).not.toBe(0);
  });
});