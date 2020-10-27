const API_KEY="7c803c0068705dff3ef83f250d8d8b64";

const requests=  {
    fetchTrending : `/trending/all/week?api_key=${API_KEY}&languange=en-US`,
    fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&languange=en-US`,
    fetchActionMovies : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies : `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies : `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies : `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchMystery : `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    fetchScifi : `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchWestern : `/discover/movie?api_key=${API_KEY}&with_genres=37`,
    fetchTv : `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchAnimation : `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
};

export default requests;
