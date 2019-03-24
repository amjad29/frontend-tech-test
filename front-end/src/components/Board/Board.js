import React, { Component } from 'react'
import { connect } from 'react-redux';
import './style.scss';
import Note from '../Note/Note'
import NoteDetailForm from '../NoteDetailForm/NoteDetailForm'
import PropTypes from 'prop-types';
// import FaPlus from 'react-icons/lib/fa/plus'

import * as actions from '../../store/actions/index';

class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            openModal: false
        }

        this.saveNote = this.saveNote.bind(this)
        this.onOpenModal = this.onOpenModal.bind(this)
        this.allowDrop = this.allowDrop.bind(this)
        this.eachNote = this.eachNote.bind(this)
        this.update = this.update.bind(this)
        this.remove = this.remove.bind(this)
        this.onCloseModal = this.onCloseModal.bind(this)

    }

    componentDidMount() {
        this.props.fetchNotes()
    }

    saveNote(noteData) {
        this.props.createNote(noteData);
        this.setState({
            openModal: false
        })
    }

    onOpenModal() {
        this.setState({ openModal: true });
    };

    onCloseModal() {
        this.setState({ openModal: false });
    };

    update(noteData) {
        this.props.updateNote(noteData);
    }

    remove(id) {
        this.props.removeNote(id)
    }

    eachNote(note, i) {
        return (
            <Note key={note.id}
                index={note.id}
                onChange={this.update}
                onRemove={this.remove}
                noteData={note}>

            </Note>
        )
    }

    drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    }

    allowDrop(ev) {
        ev.preventDefault();
    }


    render() {
        return (
            <div className="board" data-test="Board">
                <div className="flex-container" onDrop={this.drop} onDragOver={this.allowDrop} >

                    {this.props.notes.map(this.eachNote)}
                    <button id="add" onClick={this.onOpenModal}>  add </button>

                </div>

                <NoteDetailForm onChange={this.add} openModal={this.state.openModal} closeModal={this.onCloseModal} saveNote={this.saveNote} />

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        notes: state.noteBuilder.notes,

    };
}

const mapDispatchToProps = dispatch => {
    return {
        removeNote: (id) => dispatch(actions.removeNote(id)),
        updateNote: ({ id, title, description }) => dispatch(actions.updateNote({ id, title, description })),
        createNote: ({ title, description }) => dispatch(actions.createNote({ title, description })),
        fetchNotes: () => dispatch(actions.fetchNotes())
    }
}

Board.propTypes = {
    notes: PropTypes.array,
    updateNote: PropTypes.func,
    removeNote: PropTypes.func,
    createNote: PropTypes.func,
    fetchNotes: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)