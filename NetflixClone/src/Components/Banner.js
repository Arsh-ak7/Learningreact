import React, { useState,useEffect } from 'react'
import Axios from '../Components/axios'
import requests from '../Components/requests'
import '../CSS/Banner.css'

function Banner() {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData(){
            const request = await Axios.get(requests.fetchNetworkOriginals);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length -1)
            ])
            return request;
        }
        fetchData();
    }, [])
    return (
        <header className="banner"
            style={{
                backgroundSize:"cover",
                backgroundImage: `linear-gradient(to right,rgba(0,0,0,1), rgba(0,0,0,0)),url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                backgroundPosition: "center",
            }}
        >
            <div className="banner-contents">
                <h1 className="banner-title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner-buttons">
                    <button className="banner-button">Play</button>
                    <button className="banner-button">My List</button>
                </div>
                <h1 className="banner-description">
                    {movie?.overview}
                </h1>
            </div>
            <div className="banner-fade" />
        </header>
    )
}

export default Banner
