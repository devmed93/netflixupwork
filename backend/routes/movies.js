const express = require("express");
const axios = require("axios");
const router = express.Router();
const cors = require("cors");
const jsonfile = require("jsonfile");
const { getMoviesByGenre } = require("../utils/moviesManager");
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

module.exports = router;
