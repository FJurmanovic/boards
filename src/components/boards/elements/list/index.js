import React, { useState } from 'react'
import { useDrag, useDrop } from "react-dnd";

import Item from '../item'
import NewItem from '../newitem'

import LIST_TYPE from "../../data/types"

const List = (props) => {
    const { list, id, addItem, lists } = props;

    const [newItem, setNewItem] = useState(false)

    const [{ isDragging }, drag] = useDrag({
        item: { 
            type: "list",
            id: id
     },
        canDrag: true,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    })

    const [{ isOver }, drop] = useDrop({
        accept: "list",
        drop(item) {
            switchIds(item.id);
        },
        collect: monitor => (
            {
                isOver: !!monitor.isOver()
            }
        )
    })

    const switchIds = (newId) => {
        let { lists } = props;
        let temp = {};
        temp = lists[id];
        lists[id] = lists[newId]
        lists[newId] = temp
    }

    const addItemToList = (value) => {
        let { items } = list;
        items.push({"content": value})
        setNewItem(false)
        addItem(true);
    }

    return(
        <div className="list position-relative d-flex flex-auto flex-column overflow-hidden mr-3 v-align-top rounded-2 border ws-normal hide-sm" ref={drag}>
            <div className="title" ref={drop}>{list.title} <span className="add">{newItem ? <button onClick={() => setNewItem(false)}>Cancel</button> : <button onClick={() => setNewItem(true)}>New item</button>}</span></div>
            {newItem && <NewItem addItem={addItemToList.bind(this)}/>}
            {list.items.map((item, key) => {
                return <React.Fragment key={key}>
                    <Item item={item}/>
                </React.Fragment>
            })}
        </div>
    );
}
export default List;
