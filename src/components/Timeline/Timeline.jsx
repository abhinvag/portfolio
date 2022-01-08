import React from 'react'
import "./Timeline.css"

function Timeline(props) {

    let temp = (props.last==="true") ? "timeline-div-last" : "timeline-div";

    return (
        <div className={temp}>
            <p className='timeline-div-time'>{props.from}</p>
            <a className='timeline-div-name' href={props.link}>{props.name}</a>
            <p className='timeline-div-des'>{props.description}</p>
        </div>
    )
}

export default Timeline
