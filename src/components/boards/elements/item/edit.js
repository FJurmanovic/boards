import React, { useState } from 'react'


import { useDrag, useDrop } from "react-dnd";

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

    const handleLabels = (e) => {
        setLabels(e.target.value)
    }

    const labelsString = () => {
        let string = "";
        
        item.labels.map((label, key) => {
            if(key < item.labels.length-1) {
                string += label + ", ";
            }else{
                string += label;
            }
        })

        return string;
    }

    const stringToList = () => {
        let list = labels.split(/(?:,| )+/)
        console.log(list)

        return list
    }

    const [labels, setLabels] = useState(labelsString)

    return(
        <div className="item flex-auto position-relative border m-2 mx-3" ref={drag}>
            <div className="edit-labels m-2"><input className="width-full" value={labels} onChange={(e) => handleLabels(e)} /></div>
            <div className="m-2"><textarea className="content" value={content} onChange={(e) => handleContent(e)} /></div>
            <div className="m-2"><button className="btn btn-blue btn-squared d-block width-full" onClick={() => {editItem(itemId, content, stringToList()) }}>Edit</button></div>
        </div>
    );
}

export default Edit;
