const express = require("express");
const axios = require("axios");
const router = express.Router();
const cors = require("cors");
const jsonfile = require("jsonfile");
const { getMoviesByGenre, getRandomMovie } = require("../utils/moviesManager");
const { requests } = require("../utils/requests");

const app = express();
app.use(cors);
app.use(express.json());

router.get("/:genre", async (req, res, next) => {
    let movies;
    const genre = req.params.genre;
    console.log(genre);
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
        await console.log(randomMovie);
    } catch (error) {}
    res.json(randomMovie);
});

module.exports = router;
