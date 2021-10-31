const API_KEY = "51de63fa8a1f4d07c7cde869fc583239";

const requests = {
    fetchTrending: `/trending/movie/week?api_key=${API_KEY}`,
    fetchNetflixOriginals: `/discover/movie?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentariesMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchMovieDetails: (id, credits) => {
        const creditsParameter = credits ? "/credits" : "";
        return `/movie/${id}${credits}?api_key=${API_KEY}`;
    },
};

export default requests;

// https://api.themoviedb.org/3
// https://api.themoviedb.org/3/discover/tv?api_key=51de63fa8a1f4d07c7cde869fc583239
