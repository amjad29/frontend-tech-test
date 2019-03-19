import React, { Component } from 'react'
import './style.scss';
// import Note from './Note'
// import FaPlus from 'react-icons/lib/fa/plus'

class Note extends Component {

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


    render() {
        return (

            <div className="note" style={this.style}>
                <p></p>
                <span> test</span>
            </div>

        )
    }
}

export default Note