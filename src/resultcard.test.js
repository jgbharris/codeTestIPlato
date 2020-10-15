import React from 'react';
import {shallow, mount} from 'enzyme';
import sampleResults from './sampleResults';

import ResultCard from './components/resultcard';
import {Card} from 'react-bootstrap'
    
describe('<ResultCard />', () => {

    //new tab opens when a result url is clicked
    it('new tab is opened when a result url is clicked', () => {
        const wrapper = shallow(<ResultCard result={sampleResults[0]}/>);
        //finished test here
    })

})