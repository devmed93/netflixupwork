const express = require("express");
const router = express.Router();
const cors = require("cors");
const jsonfile = require("jsonfile");
const {
    getMyMoviesList,
    addToMyMoviesList,
    removeFromMyMoviesList,
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

router.post("/remove", async (req, res, next) => {
    let movie = { ...req.body };
    let filmList;
    try {
        filmList = await removeFromMyMoviesList(
            "./myMoviesListData.json",
            movie
        );
    } catch (error) {}
    res.json(filmList);
});

module.exports = router;
