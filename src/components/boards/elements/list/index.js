import React, { useState } from 'react'

import Item from '../item'
import NewItem from '../newitem'

const List = (props) => {
    const { list, id, addItem } = props;

    const [newItem, setNewItem] = useState(false)

    const addItemToList = (value) => {
        let { items } = list;
        items.push({"content": value})
        setNewItem(false)
        addItem(true);
    }

    return(
        <div className="list">
            <div className="title">{list.title} <span className="add">{newItem ? <button onClick={() => setNewItem(false)}>Cancel</button> : <button onClick={() => setNewItem(true)}>New item</button>}</span></div>
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
