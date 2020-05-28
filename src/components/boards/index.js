import React, { Component } from 'react'

import List from './elements/list'
import NewBoard from './elements/newboard'

class Boards extends Component {
    constructor(props){
        super(props);

        this.state = {
            newItem: false,
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

        this.addBoard = this.addBoard.bind(this);
    }

    addBoard(value) {
        console.log("htis")
        let { lists } = this.state;
        lists.push({"title": value, items: []})

        this.setState({newItem: false})
        console.log(lists)
    }

    addItem(key, value) {
        this.setState({updateState: value})
    }

    moveItem(key, listId, itemId, newId) {
        console.log(listId, itemId, newId)
        let { lists } = this.state;
        let item = lists[listId].items[itemId];
        lists[newId].items.push(item)
        lists[listId].items.splice(itemId, 1)
    }

    onDrop() {

    }

    switchItems(newList, newId, oldList, oldId) {
        const { lists } = this.state;
        lists[newList].items.splice(newId, 0, lists[oldList].items[oldId])
        lists[oldList].items.splice(oldId, 1)

    }

    render() {
        return (
            <div className="boards-container d-flex flex-auto flex-column clearfix position-relative no-wrap">
                <div className="boards d-flex flex-auto flex-row p-sm-3 position-relative overflow-auto border-black">
                        {this.state.lists.map((list, key) => {
                            return <React.Fragment key={key}>
                                <List list={list} id={key} addItem={this.addItem.bind(this, key)} lists={this.state.lists} moveItem={this.moveItem.bind(this, key)} switchItems={this.switchItems.bind(this, key)} />
                            </React.Fragment>
                        })}
                {this.state.newItem 
                ? <NewBoard addBoard={this.addBoard.bind(this)} />
                : <button className="newBoard" onClick={() => this.setState({newItem: true})}>Add new board</button>}
                </div>
            </div>

        )
    }
}

export default Boards;