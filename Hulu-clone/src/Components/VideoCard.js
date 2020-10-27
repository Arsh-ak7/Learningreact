import React, { forwardRef } from 'react'
import TextTruncate from 'react-text-truncate'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import '../CSS/VideoCard.css'

const VideoCard= forwardRef(({movie}, ref) => {
    const base_url="https://image.tmdb.org/t/p/original/";
    return (
        <div ref={ref} className="videoCard">
            <img src ={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt=" "/>
            <TextTruncate 
            line={1}
            element="p"
            truncateText="..."
            text={movie.overview}
            />
            <h2>{movie.title||movie.name}</h2>
            <p className="videoCard-stats">
                {movie.media_type && `${movie.media_type}${" "}`}{` `}
                {movie.release_date||movie.first_air_data} &middot; {` `}
                <ThumbUpAltIcon />{` `}
                {movie.vote_count}</p> 
        </div>
    )
});

export default VideoCard;