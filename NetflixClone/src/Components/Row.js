import React, { useState , useEffect} from 'react'
import Axios from './axios';
import YouTube from "react-youtube"
import movieTrailer from "movie-trailer"
import '../CSS/Row.css'

export default function Row({title,fetchUrl,isLargeRow}) {
    const [movies,setMovies] = useState([]);
    const base_url="https://image.tmdb.org/t/p/original/";
    const [trailerUrl,setTrailerUrl] = useState('');
    useEffect(()=>{
        async function fecthData(){
            const request = await Axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fecthData();
    },[fetchUrl]);

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    
    const handleClick = (movie) =>{
        if(trailerUrl){
            setTrailerUrl('');
        }
        else{
            movieTrailer(movie?.name|| movie?.name || movie?.original_name || " ").then((url)=>{
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"));
            }).catch((error) => console.log(error));
        }
    };

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row-posters">
                {movies.map(movie => (
                    <img
                    key={movie.id} 
                    onClick={()=>handleClick(movie)}
                    className={`row-poster ${isLargeRow && 'row-poster-large'} `} 
                    src ={`${base_url}${isLargeRow ? movie.poster_path:movie.backdrop_path}`} 
                    alt={movie.name} />
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}
