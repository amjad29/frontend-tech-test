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
        this.drop = this.drop.bind(this)
        this.allowDrop = this.allowDrop.bind(this)
        this.eachNote = this.eachNote.bind(this)
        this.update = this.update.bind(this)
        this.remove = this.remove.bind(this)
        this.nextId = this.nextId.bind(this)
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

    update(newText, i) {
        console.log('updating item at index', i, newText)
        this.setState(prevState => ({
            notes: prevState.notes.map(
                note => (note.id !== i) ? note : { ...note, note: newText }
            )
        }))
    }

    remove(id) {
      
        this.setState(prevState => ({
            notes: prevState.notes.filter(note => note.id !== id)
        }))
    }

    eachNote(note, i) {
        console.log('note==>',note)
        return (
        
            <Note key={note.id}
                index={note.id}
                onChange={this.update}
                onRemove={this.remove}>
                {note.note}
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
            <div className="board" >
                <div class="flex-container" onDrop={this.drop} onDragOver={this.allowDrop}>

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