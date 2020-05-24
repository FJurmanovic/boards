import React, { Component } from 'react'

export default class NewItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            contentVal: ''
        }
        this.contentChange = this.contentChange.bind(this);
    }

    contentChange(e) {
        e.preventDefault();
        this.setState({contentVal: e.target.value})
    }

    render() {
        return (
            <div>
                <input onChange={this.contentChange} value={this.state.contentVal} />
                <button onClick={() => this.props.addItem(this.state.contentVal)}>Submit</button>
            </div>
        )
    }
}
