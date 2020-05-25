import React, { Component } from 'react'

export default class NewBoard extends Component {
    constructor(props){
        super(props);
        this.state = {
            titleVal: ''
        }
        this.titleChange = this.titleChange.bind(this);
    }

    titleChange(e) {
        e.preventDefault();
        this.setState({titleVal: e.target.value})
    }

    render() {
        return (
            <div className="newBoard">
                <input onChange={this.titleChange} value={this.state.titleVal} />
                <button onClick={() => this.props.addBoard(this.state.titleVal)}>Submit</button>
            </div>
        )
    }
}
