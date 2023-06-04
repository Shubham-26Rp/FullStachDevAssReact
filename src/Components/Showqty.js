//6) Pass Data from 1 component to another component  ---child component
import React, { Component } from 'react'

export default class Showqty extends Component {
    focusInput = () => {
        this.props.innerRef.current.focus()
    }
    render() {
        return (
            <div>
                <h2 onClick={this.focusInput}>Quantity is</h2>
            </div>
        )
    }
}
