import React from 'react';
import Enzyme, { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { findByTestAtrr, checkProps, testStore } from '../../shared/testUtility';
import Board from './Board';

import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });




describe('Board Component', () => {


    describe('Renders', () => {

        let wrapper;
        beforeEach(() => {

            const props = {
                notes: [],
                updateNote: () => { },
                removeNote: () => { },
                createNote: () => { },
                fetchNotes: () => { }
            };
            const store = testStore();

            wrapper = mount(
                <Provider store={store}>
                    <Board {...props} />
                </Provider>
            );
        });

        it('Should Render the form', () => {

            const board = findByTestAtrr(wrapper, 'Board');
            expect(board.length).toBe(1);

        });



    });

    describe('Checking PropTypes', () => {

        it('Should NOT throw a warning', () => {
            const expectedProps = {
                notes: [],
                updateNote: () => { },
                removeNote: () => { },
                createNote: () => { },
                fetchNotes: () => { }
            };
            const propsError = checkProps(Board, expectedProps);
            expect(propsError).toBeUndefined();
        });

    });




});