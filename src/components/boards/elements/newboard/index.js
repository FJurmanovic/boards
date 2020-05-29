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
            <div className="newBoard border pr-5">
                <div className="mx-2 my-3"><label className="mx-3 my-3" for="title">Title</label><span className="float-right"><button className="mx-2 mt-n2 btn btn-sm btn-blue-transparent btn-rounder" onClick={() => this.props.cancelBtn()}>Cancel</button></span></div>
                <input onChange={this.titleChange} id="title" value={this.state.titleVal} className="m-2 mx-3 d-block width-full" />
                <button className="m-2 mx-3 my-6 btn btn-blue btn-squared d-block width-full submit" onClick={() => this.props.addBoard(this.state.titleVal)}>Submit</button>
            </div>
        )
    }
}
