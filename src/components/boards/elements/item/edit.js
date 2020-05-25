import React, { useState } from 'react'


import { useDrag } from "react-dnd";

import {EDIT_TYPE} from '../../data/types'

const Edit = (props) => {
    const { item, listId, itemId, editItem } = props;

    const [content, setContent] = useState(item.content)

    const [{ isDragging }, drag] = useDrag({
        item: { type: EDIT_TYPE},
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult()
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    })

    const handleContent = (e) => {
        setContent(e.target.value)
    }

    return(
        <div className="item flex-auto position-relative border m-2 mx-3" ref={drag}>
            <div className="labels"><span className="label">ReactJS</span><span className="label">Frontend</span></div>
            <textarea className="content px-2" value={content} onChange={(e) => handleContent(e)} />
            <button className="edit btn btn-icon" onClick={() => editItem(itemId, content)}><div className="gg-pen"></div></button>
        </div>
    );
}

export default Edit;
