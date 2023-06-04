//6) Pass Data from 1 component to another component  ---parent component
import React, { Component } from 'react'
import Showqty from './showqty'


export default class IncreaseQty extends Component {
    constructor(props) {
        super(props)
        this.qtyref = React.createRef()
    }
    qtyHandler = () => {
        this.qtyref.current.value++
    }
    render() {
        return (
            <div>
                <div className="input-group">
                    <input type="text" className="form-control" ref={this.qtyref} />
                    <button type="button" className="btn btn-primary" onclick={this.qtyHandler}>+</button>
                    <br /> </div>
                <Showqty innerRef={this.qtyref}/>
            </div>
        )
    }
}
