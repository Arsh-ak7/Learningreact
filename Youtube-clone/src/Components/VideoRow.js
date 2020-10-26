import React from 'react'
import '../Assets/css/VideoRow.css'

export default function VideoRow({views , subs , description , channel ,timestamp, title , image}) {
    return (
        <div className="videoRow">
            <img src={image} alt="" />
            <div className="videoRow-text">
                <h3>{title}</h3>
                <p className="videoRow-headline">
                    {channel} &middot;{" "}
                    <span className="videoRow-subs">
                        <span className="videoRow-subsnumber">{ subs }</span> Subscribers </span> {" "}{views} views &middot; {timestamp}
                    <p className="videoRow-description">{description}</p>
                </p>
            </div>
        </div>
    )
}
