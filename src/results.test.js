import React from 'react';
import {shallow, mount} from 'enzyme';
import sampleResults from './sampleResults';

import Results from './components/results';
import {Button} from 'react-bootstrap'
    
describe('<Results />', () => {

    //showMore button is working
    it('showMoreResults() is called when showMore button is clicked', () => {
        const callback = jest.fn();
        const wrapper = shallow(<Results results={sampleResults} showMoreResults={callback}/>);
        const showMoreButton = wrapper.find('.show-more-button')
        showMoreButton.simulate('click');
        expect(callback).toHaveBeenCalled();

    })

})