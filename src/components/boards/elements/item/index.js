import React, { Component } from 'react'

const Item = (props) => {
    const { item } = props;
    return(
        <div className="item">
            <div className="labels"><span className="label">ReactJS</span><span className="label">Frontend</span></div>
            <div className="content">{item.content}</div>
        </div>
    );
}

export default Item;
