import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import Axios from './axios'
import FlipMove from 'react-flip-move'
import '../CSS/Results.css'

export default function Results({selectedOption}) {
    const [movies,setMovies] = useState([]);
    useEffect(()=>{
        async function fetchData(){
            const request = await  Axios.get(selectedOption)
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[selectedOption])
    return (
        <div className="results">
            <FlipMove>
                {movies.map((movie) =>(
                <VideoCard key={movie.id} movie={movie}/>
            ))}
            </FlipMove>
        </div>
    )
}
