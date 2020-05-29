import React, { Component } from 'react'

import ReactMarkdown from 'react-markdown';

import { useDrag, useDrop } from "react-dnd";

import {ITEM_TYPE} from '../../data/types'

const Item = (props) => {
    const { item, moveItem, listId, itemId, editAction, switchItem } = props;

    const [{ isDragging }, drag] = useDrag({
        item: { item, itemId, type: ITEM_TYPE, listId},
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult()
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    })

    const [{ isOver, canDrop }, drop] = useDrop({
        accept: ITEM_TYPE,
        drop: (item, monitor) => {
            switchItem(item.listId, item.itemId, listId, itemId)
        },
        collect: monitor => (
            {
                isOver: !!monitor.isOver(),
                canDrop: !!monitor.canDrop()
            }
        )
    })

    return(
        <div className="item flex-auto position-relative border m-2 mx-3" ref={drag}>
            <div className="width-full" ref={drop}>
                <div className="labels">{item.labels.map((label, key) => {
                    return <React.Fragment key={key}>
                        <span className="label">{label}</span>
                    </React.Fragment>
                })}</div>
                <div className="content px-2"><ReactMarkdown source={item.content} /></div>
                <button className="edit btn btn-icon" onClick={() => editAction()}><div className="gg-pen"></div></button>
            </div>
        </div>
    );
}

export default Item;
