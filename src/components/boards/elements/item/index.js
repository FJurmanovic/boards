import React, { Component } from 'react'

import ReactMarkdown from 'react-markdown';

import { useDrag } from "react-dnd";

import {ITEM_TYPE} from '../../data/types'

const Item = (props) => {
    const { item, moveItem, listId, itemId, editAction } = props;

    const [{ isDragging }, drag] = useDrag({
        item: { item, itemId, type: ITEM_TYPE, listId},
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult()
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
        })

    return(
        <div className="item flex-auto position-relative border m-2 mx-3" ref={drag}>
            <div className="labels"><span className="label">ReactJS</span><span className="label">Frontend</span></div>
            <div className="content px-2"><ReactMarkdown source={item.content} /></div>
            <button className="edit btn btn-icon" onClick={() => editAction()}><div className="gg-pen"></div></button>
        </div>
    );
}

export default Item;
