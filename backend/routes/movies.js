const express = require("express");
const axios = require("axios");
const router = express.Router();
const cors = require("cors");
const jsonfile = require("jsonfile");
const {
    getMoviesByGenre,
    getRandomMovie,
    getMovieDetailsById,
} = require("../utils/moviesManager");
const { requests } = require("../utils/requests");

const app = express();
app.use(cors);
app.use(express.json());

router.get("/:genre", async (req, res, next) => {
    let movies;
    const genre = req.params.genre;
    console.log("get request to movie Genre page");
    try {
        movies = await getMoviesByGenre(requests[genre]);
    } catch (error) {
        console.log(error);
    }

    res.json(movies);
});

router.get("/:genre/random", async (req, res) => {
    const genre = req.params.genre;
    let randomMovie;
    try {
        randomMovie = await getRandomMovie(requests[genre]);
    } catch (error) {}
    console.log(genre);
    res.json(randomMovie);
});

router.get("/", async (req, res) => {
    console.log("get request to movie details page");
    const id = req.query.id;

    console.log(id);
    let movieDetails;
    try {
        if (req.query.credits) {
            movieDetails = await getMovieDetailsById(id, true);
        } else movieDetails = await getMovieDetailsById(id);
    } catch (error) {}
    console.log(movieDetails);
    res.json(movieDetails);
});

module.exports = router;
