import React from 'react'
import Banner from '../Components/Banner'
import Row from '../Components/Row'
import requests from '../Components/requests'

export default function Home() {
    return (
        <div>
            <Banner />
            <Row title="NETFLIX Originals" fetchUrl={requests.fetchNetworkOriginals} isLargeRow />
            <Row title ="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title ="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title ="Action" fetchUrl={requests.fetchActionMovies} />
            <Row title ="Comedy" fetchUrl={requests.fetchComedyMovies} />
            <Row title ="Romance" fetchUrl={requests.fetchRomanceMovies} />
            <Row title ="Horror" fetchUrl={requests.fetchHorrorMovies} />
            <Row title ="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        </div>
    )
}
