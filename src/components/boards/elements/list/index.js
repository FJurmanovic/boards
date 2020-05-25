import React, { useState } from 'react'
import { useDrag, useDrop } from "react-dnd";

import Item from '../item'
import Edit from '../item/edit'
import NewItem from '../newitem'

import { LIST_TYPE, ITEM_TYPE } from "../../data/types"

const List = (props) => {
    const { list, id, addItem, lists, moveItem } = props;

    const [newItem, setNewItem] = useState(false)

    const [itemEdit, setItemEdit] = useState(null)

    const [{ isOver, canDrop }, drop] = useDrop({
        accept: ITEM_TYPE,
        drop: (item, monitor) => {
            moveItem(item.listId, item.itemId, id)
        },
        collect: monitor => (
            {
                isOver: !!monitor.isOver(),
                canDrop: !!monitor.canDrop()
            }
        )
    })

    const addItemToList = (value) => {
        let { items } = list;
        items.push({"content": value})
        setNewItem(false)
        addItem(true);
    }

    const editItem = (id, item) => {
        let { items } = list;
        items[id].content = item;
        setItemEdit(null)
    }

    return(
        <div ref={drop} className="list position-relative d-flex flex-auto flex-column overflow-hidden mr-3 v-align-top rounded-2 border ws-normal hide-sm">
            <div className="title">{list.title} <span className="add">{newItem ? <button onClick={() => setNewItem(false)}>Cancel</button> : <button onClick={() => setNewItem(true)}>New item</button>}</span></div>
            {newItem && <NewItem addItem={addItemToList.bind(this)}/>}
            <div className="itemList">{list.items.map((item, key) => {
                    return <React.Fragment key={key}>
                        {itemEdit == key 
                        ? <Edit item={item} listId={id} itemId={key} editItem={editItem} /> 
                        : <Item item={item} moveItem={moveItem} listId={id} itemId={key} editAction={() => setItemEdit(key)} />
                        }   
                    </React.Fragment>
                })}
            </div>
        </div>
    );
}
export default List;
