import React, { Component } from 'react'

import List from './elements/list'

class Boards extends Component {
    constructor(props){
        super(props);

        this.state = {
            lists: [
                {
                    title: "Title one",
                    items: [   
                        {
                            content: "One"
                        },
                        {
                            content: "Two"
                        }
                    ]
                },
                {
                    title: "Title two",
                    items: [   
                        {
                            content: "Three"
                        },
                        {
                            content: "Four"
                        }
                    ]
                }
            ]
        }
    }

    render() {
        return (
            <div className="boards">
                {this.state.lists.map((list, key) => {
                    return <React.Fragment key={key}>
                        <List list={list}/>
                    </React.Fragment>
                })}
            </div>
        )
    }
}

export default Boards;