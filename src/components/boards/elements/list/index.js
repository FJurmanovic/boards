import React, { Component } from 'react'

import Item from '../item'

const List = (props) => {
    const { list } = props;
    return(
        <div className="list">
            <div className="title">{list.title}</div>
            {list.items.map((item, key) => {
                return <React.Fragment key={key}>
                    <Item item={item}/>
                </React.Fragment>
            })}
        </div>
    );
}

export default List;
