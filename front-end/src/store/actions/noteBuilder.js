import * as actionTypes from './actionTypes';
import axios from 'axios';

const createNoteAction = (note) => {
    return {
        type: actionTypes.ADD_NOTE,
        ...note
    };
};

const updateNoteAction = (note) => {
    return {
        type: actionTypes.UPDATE_NOTE,
        ...note
    };
};

const removeNoteAction = (noteId) => {
    return {
        type: actionTypes.REMOVE_NOTE,
        noteId
    };
};

const fetchNotesAction = (notes) => {
    return {
        type: actionTypes.FETCH_NOTES,
        notes
    };
}



export const removeNote = (noteId) => {
    return dispatch => {

        axios.delete(`http://localhost:9001/task/delete/${noteId}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            dispatch(removeNoteAction(noteId));
        })

            .catch(error => {
                console.log('error==>', error)
            });
    };
};

export const updateNote = (note) => {
    return dispatch => {

        const updatedNote = {
            ...note,
            description: (note.description) ? note.description : 'task description '
        }

        axios.put(`http://localhost:9001/task/update/${updatedNote.id}/${updatedNote.title}/${updatedNote.description}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            dispatch(updateNoteAction(updatedNote));
        })

            .catch(error => {
                console.log('error==>', error)
            });
    };
};

export const createNote = ({ title, description }) => {
    return dispatch => {
        const noteDescription = (description) ? description : 'task description ';

        axios.post(`http://localhost:9001/task/create/${title}/${noteDescription}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })

            .then(response => {
                dispatch(createNoteAction({ id: response.data.id, title, description: noteDescription }));
            })

            .catch(error => {
                console.log('error==>', error)
            });
    };
};
export const fetchNotes = () => async (dispatch) => {

    axios.get(`http://localhost:9001/tasks`, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        dispatch(fetchNotesAction(response.data.tasks));
    })

    .catch(error => {
        console.log('error==>', error)
    });

};
