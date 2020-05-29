import React, { useState } from 'react'
import { useDrag, useDrop } from "react-dnd";


import Item from '../item'
import Edit from '../item/edit'
import NewItem from '../newitem'

import { LIST_TYPE, ITEM_TYPE } from "../../data/types"

const List = (props) => {
    const { list, id, addItem, lists, moveItem, switchItems } = props;

    const [newItem, setNewItem] = useState(false)

    const [itemEdit, setItemEdit] = useState(null)

    const [{ isOver, canDrop }, drop] = useDrop({
        accept: ITEM_TYPE,
        drop: (item, monitor) => {
            if (monitor.didDrop()) {
                return
              }

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
        items.push({"content": value, "labels": []})
        setNewItem(false)
        addItem(true);
    }

    const editItem = (id, content, labels) => {
        let { items } = list;

        items[id].content = content;
        items[id].labels = labels;

        console.log(labels)
        setItemEdit(null)
    }

    const switchItem = (newId, oldList, oldId, newList) => {
        switchItems(newId, oldList, oldId, newList)

    }

    return(
        <div ref={drop} className="list position-relative d-flex flex-auto flex-column overflow-hidden mr-3 v-align-top rounded-2 border ws-normal hide-sm">
            <div className="title">{list.title}</div>
            <div className="itemList">{list.items.map((item, key) => {
                    return <React.Fragment key={key}>
                        {itemEdit == key 
                        ? <Edit item={item} listId={id} itemId={key} editItem={editItem} /> 
                        : <Item item={item} moveItem={moveItem} listId={id} itemId={key} editAction={() => setItemEdit(key)} switchItem={switchItem.bind(this, key)} />
                        }   
                    </React.Fragment>
                })}
                <div className={newItem && "border m-2 mx-3"}>
                    <div className="add flex-auto position-relative m-2 mx-3 ">{newItem ? <button className="btn btn-blue-transparent btn-sm btn-rounder" onClick={() => setNewItem(false)}>Cancel</button> : <button className="width-full py-4 btn btn-white btn-squared border" onClick={() => setNewItem(true)}>New item</button>}</div>
                    {newItem && <NewItem addItem={addItemToList.bind(this)}/>}
                </div> 
            </div>
        </div>
    );
}
export default List;
