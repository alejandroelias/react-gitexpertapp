import { shallow } from 'enzyme'
import React from 'react'
import { GifExpertApp } from '../GifExpertApp'

describe('Test in <GifExpertApp />', () => {
    
    test('should show the correct component and math with the snapshot', () => {
        
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    })

    test('should show list of categories', () => {
        
        const categories = ['Rick and Morty', 'One Punch'];
        const wrapper = shallow(<GifExpertApp defaultCategories = {categories} />);
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GigGrid').length).toBe(categories.length+1);
    })
    
    
})
