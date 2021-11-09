const axios = require("axios");

const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

const API_KEY = "51de63fa8a1f4d07c7cde869fc583239";

const requests = {
    trending: `/trending/movie/week?api_key=${API_KEY}`,
    netflixOriginals: `/discover/movie?api_key=${API_KEY}&with_networks=213`,
    topRated: `/movie/top_rated?api_key=${API_KEY}`,
    action: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    comedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    horror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    romance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    documentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    movieDetails: (id, credits) => {
        const creditsParameter = credits ? "/credits" : "";
        return `/movie/${id}${credits}?api_key=${API_KEY}`;
    },
};

module.exports = { axiosInstance, requests };
