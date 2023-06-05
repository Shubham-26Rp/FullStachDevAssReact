//5) create a Div reference and Using Div reference scroll into Div
import React, { Component } from 'react'

export class ScrollDiv extends Component {
    constructor(props) {
        super(props);
        this.scrollDiv = createRef();
    }
    render() {
        return (
            <div className="App">
                <h1>Hello CodeSandbox</h1>
                <button onClick={() => { this.scrollDiv.current.scrollIntoView({ behavior: 'smooth' }); }}>click me!</button>
                <h2>Start editing to see some magic happen!</h2>
                <div ref={this.scrollDiv}>hi</div>
            </div>
        )
    }
}
