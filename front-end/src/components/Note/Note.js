import React, { Component } from 'react'
import Modal from 'react-responsive-modal';
import './style.scss';

class Note extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editing: false,
            open: false
        }

        this.edit = this.edit.bind(this)
        this.drag = this.drag.bind(this)
        this.remove = this.remove.bind(this)
        this.save = this.save.bind(this)
        this.renderForm = this.renderForm.bind(this)
        this.renderDisplay = this.renderDisplay.bind(this)
        // this.randomBetween = this.randomBetween.bind(this)
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
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

    edit() {
        this.setState({
            editing: true
        })
    }

    remove() {
        this.props.onRemove(this.props.index)
    }
    
    drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
        console.log(' ev.dataTransfer==>', ev.dataTransfer)
        console.log(' ev.target.id==>', ev.target.id)
    }

    save(e) {
        e.preventDefault()
        this.props.onChange(this._newText.value, this.props.index)
        this.setState({
            editing: false
        })
    }


    renderForm() {
        return (
            <div className="note" style={this.style}>
                <form onSubmit={this.save}>
                    <textarea ref={input => this._newText = input}
                        defaultValue={this.props.children} />
                    <button id="save">save</button>
                </form>
            </div>
        )
    }

    renderDisplay() {
        const { open } = this.state;
        console.log('props==>',this.props)
        console.log('props.key==>',this.props.index)
        return (
            <div className="note" draggable="true" id={this.props.index}  onDragStart={this.drag} style={this.style}>
                <p>{this.props.children}</p>
                <span>
                    {/* <button onClick={this.edit} id="edit">edit</button> */}
                    <button onClick={this.onOpenModal} id="edit">edit</button>
                    <button onClick={this.remove} id="remove">delete</button>
                </span>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <form onSubmit={this.save}>
                        <textarea ref={input => this._newText = input}
                            defaultValue={this.props.children} />
                        <button id="save">save</button>
                    </form>
                </Modal>
            </div>
        )
    }

    render() {
        return this.state.editing ? this.renderForm() : this.renderDisplay()
    }
}

export default Note