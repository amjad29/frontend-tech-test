import React, { Component } from 'react'
import Modal from 'react-responsive-modal';
import PropTypes from 'prop-types';

class NoteDetailForm extends Component {

    constructor(props) {
        super(props)

        this.onSubmit = this.onSubmit.bind(this)
        this.onCloseModal = this.onCloseModal.bind(this)
    }

    onSubmit(e) {
        e.preventDefault()

        const noteData = {
            title: this._newTitle.value,
            description: this._newText.value
        }

        this.props.saveNote(noteData);
    }

    onCloseModal() {
        this.props.closeModal();
    };


    render() {
        const  {openModal, noteData } = this.props; 

        return (
           
                <Modal open={openModal} onClose={this.onCloseModal} center data-test="NoteDetailForm" >
                    <form onSubmit={this.onSubmit} className="edit-note" >
                        <div className="grid-x  align-center">
                            <input className='titleInput' ref={input => this._newTitle = input} required pattern='.*\S+.*' title="This field is required" defaultValue={(noteData)? noteData.title : ''}/>
                            <textarea rows="10" ref={input => this._newText = input} defaultValue={(noteData)? noteData.description : ''} />
                            <button id="save">save</button>
                        </div>
                    </form>
                </Modal>
          
        )
    }
}

NoteDetailForm.propTypes = {
    openModal: PropTypes.bool,
    noteData: PropTypes.object,
    closeModal: PropTypes.func,
    saveNote: PropTypes.func
}

export default NoteDetailForm