import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { findByTestAtrr, checkProps } from '../../shared/testUtility';
import NoteDetailForm from './NoteDetailForm';

import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });




describe('NoteDetailForm Component', () => {

    describe('Checking PropTypes', () => {

        it('Should NOT throw a warning', () => {
            const expectedProps = {
                openModal: true,
                noteData: {},
                closeModal: () => { },
                saveNote: () => { }
            };
            const propsError = checkProps(NoteDetailForm, expectedProps);
            expect(propsError).toBeUndefined();
        });

    });


    describe('Renders', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                openModal: true,
            };

            wrapper = shallow(<NoteDetailForm {...props} />);
        });

        it('Should Render the form', () => {

            const form = findByTestAtrr(wrapper, 'NoteDetailForm');
            expect(form.length).toBe(1);
        });



    });

});