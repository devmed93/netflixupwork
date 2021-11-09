const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
    getMyMoviesList,
    addToMyMoviesList,
} = require("../utils/moviesManager");

const app = express();
app.use(cors);
app.use(express.json());

router.get("/", async (req, res, next) => {
    let moviesList;
    try {
        moviesList = await getMyMoviesList("./myMoviesListData.json");
    } catch (error) {
        console.log("Could not get the movieList data");
    }

    res.json(moviesList);
});

router.post("/", async (req, res, next) => {
    let movie = { ...req.body };
    let myMoviesList;

    try {
        myMoviesList = await addToMyMoviesList(
            "./myMoviesListData.json",
            movie
        );
    } catch (error) {}
    res.json(myMoviesList);
});

module.exports = router;
