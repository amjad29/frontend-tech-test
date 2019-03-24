import * as actionTypes from '../actions/actionTypes';
import { updateList, updateObject } from '../../shared/utility';

const initialState = {
    notes: [ ]
};

const addNote = (state, { id, title, description }) => {
    return {
        notes: updateList(state.notes, { id, title, description })
    };
};

const fetchNotes = (state, notes) => {
    return {
        notes: notes.notes
    };
};

const removeNote = (state, { noteId }) => {
    return {
        notes: state.notes.filter(note => note.id !== noteId)
    };
};

const updateNote = (state, {id, title, description}) => {
    return {
        notes: state.notes.map(note => (note.id !== id) ? note : updateObject(note,{ description, title }) )  
    };
};

 
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_NOTE: return addNote(state, action);
        case actionTypes.FETCH_NOTES: return fetchNotes(state, action);
        case actionTypes.REMOVE_NOTE: return removeNote(state, action);
        case actionTypes.UPDATE_NOTE: return updateNote(state, action);

        default: return state;
    }
};

export default reducer;