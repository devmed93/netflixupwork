const jsonfile = require("jsonfile");

const getMyMoviesList = async (file) => {
    let movies;
    try {
        movies = await jsonfile.readFile(file);
    } catch (error) {
        console.log(error);
    }
    return movies;
};

const addToMyMoviesList = async (file, movie) => {
    let moviesList;
    try {
        moviesList = await getMyMoviesList(file);
        moviesList.push(movie);
        await jsonfile.writeFile(file, moviesList);
        return moviesList;
    } catch (error) {
        console.log(error);
    }
};

module.exports = { getMyMoviesList, addToMyMoviesList };
