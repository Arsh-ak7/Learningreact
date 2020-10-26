import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import '../Assets/css/VideoCard.css'

export default function VideoCard({image, title, channel, views , timestamp, channelImage }) {
    return (
        <div className="videoCard">
            <img src={image} alt="" className="videoCard-thumbnail"/>
            <div className="videoCard-info">
                <Avatar className="videoCard-avatar" alt={channel} src={channelImage} />
                <div className="videoCard-text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} &middot; {timestamp}
                    </p>
                </div>
            </div>
        </div>
    )
}
