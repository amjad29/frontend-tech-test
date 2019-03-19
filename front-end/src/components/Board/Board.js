import React, { Component } from 'react'
import './style.scss';
import Note from '../Note/Note'
// import FaPlus from 'react-icons/lib/fa/plus'

class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: []
        }
        this.add = this.add.bind(this)
        // this.eachNote = this.eachNote.bind(this)
        // this.update = this.update.bind(this)
        // this.remove = this.remove.bind(this)
        // this.nextId = this.nextId.bind(this)
    }

    add(text) {
        this.setState(prevState => ({
            notes: [
                ...prevState.notes,
                {
                    id: this.nextId(),
                    note: text
                }
            ]
        }))
    }

    nextId() {
        this.uniqueId = this.uniqueId || 0
        return this.uniqueId++
    }

    eachNote(note, i) {
        return (
            <Note key={note.id}
                index={note.id}>
                {note.note}
            </Note>
        )
    }


    render() {
        return (
            <div className="board grid-x">
                <div class="flex-container">

                    {this.state.notes.map(this.eachNote)}
                    <button id="add" onClick={this.add.bind(null, "New Note")}>
                        add
				</button>
                </div>

            </div>
        )
    }
}

export default Board