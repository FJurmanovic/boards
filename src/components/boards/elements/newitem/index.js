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
            <div className="edititem m-2 mx-3 my-2">
                <textarea className="width-full" onChange={this.contentChange} value={this.state.contentVal} />
                <button className="d-block width-full btn btn-blue btn-squared mb-2" onClick={() => this.props.addItem(this.state.contentVal)}>Submit</button>
            </div>
        )
    }
}
