import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { findByTestAtrr, checkProps } from '../../shared/testUtility';
import Note from './Note';

import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });




describe('Note Component', () => {

    describe('Checking PropTypes', () => {
   
        it('Should NOT throw a warning', () => {
            const expectedProps = {
                index: 21312,
                noteData: {},
                onRemove: () => { },
                onChange: () => { }
            };
            const propsError = checkProps(Note, expectedProps);
            expect(propsError).toBeUndefined();
        });

    });


    describe('Renders', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                index: 21312,
                noteData: {},
                onRemove: () => { },
                onChange: () => { }
            };

            wrapper = shallow(<Note {...props} />);
        });

        it('Should Render the form', () => {

            const note = findByTestAtrr(wrapper, 'Note');
            expect(note.length).toBe(1);
        });



    });

});