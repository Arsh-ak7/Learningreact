import React from 'react'
import '../Assets/css/ChannelRow.css'
import VerifiedIcon from '@material-ui/icons/CheckCircleOutlined';
import { Avatar } from '@material-ui/core'

export default function ChannelRow({image,channel,verified,subs,noOfVideos,description}) {
    return (
        <div className="channelRow">
            <Avatar className="channelRow-logo"
            alt={channel}
            src={image} />
            <div className="channelRow-text">
                <h4>
                    {channel} {verified && <VerifiedIcon />}
                </h4>
                <p>
                    {subs} subscribers &middot; {noOfVideos} videos
                </p>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}
