import React, { Component } from 'react'
import NoteDetailForm from '../NoteDetailForm/NoteDetailForm'
import PropTypes from 'prop-types';
import './style.scss';

class Note extends Component {
    constructor(props) {
        super(props)
        this.state = {
            openModal: false
        }

        this.remove = this.remove.bind(this)
        this.saveNote = this.saveNote.bind(this)
        this.renderDisplay = this.renderDisplay.bind(this)

    }


    onOpenModal = () => {
        this.setState({ openModal: true });
    };

    onCloseModal = () => {
        this.setState({ openModal: false });
    };

    randomBetween(x, y, s) {
        return x + Math.ceil(Math.random() * (y - x)) + s
    }

    componentWillMount() {
        this.style = {
            right: this.randomBetween(0, window.innerWidth - 150, 'px'),
            top: this.randomBetween(0, window.innerHeight - 150, 'px'),
            transform: `rotate(${this.randomBetween(-25, 25, 'deg')})`
        }
    }


    remove() {
        this.props.onRemove(this.props.index)
    }

    drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    saveNote(noteDate) {
        const updatedNote = {
            id: this.props.index,
            ...noteDate
        };

        this.props.onChange(updatedNote);

        this.setState({
            openModal: false
        });
    }



    renderDisplay() {

        return (
            <div className="note" draggable="true" id={this.props.index} onDragStart={this.drag} style={this.style} data-test="Note">
                <p>{this.props.noteData.title}</p>
                <span>{this.props.noteData.description}</span>
                <span className='hidden'>
                    <button onClick={this.onOpenModal} id="edit">edit</button>
                    <button onClick={this.remove} id="remove">delete</button>
                </span>

                <NoteDetailForm onChange={this.add} openModal={this.state.openModal} closeModal={this.onCloseModal} saveNote={this.saveNote} noteData={this.props.noteData} />
            </div>
        )
    }

    render() {
        return this.renderDisplay()
    }
}

Note.propTypes = {
    index: PropTypes.number,
    noteData: PropTypes.object,
    onRemove: PropTypes.func,
    onChange: PropTypes.func
}

export default Note