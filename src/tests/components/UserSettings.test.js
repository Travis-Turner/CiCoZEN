import React from 'react';
import { shallow } from 'enzyme';
import { UserSettings } from '../../components/UserSettings';


test('should render user settings page correctly', () => {
    const wrapper = shallow(<UserSettings />);
    expect(wrapper).toMatchSnapshot();
});