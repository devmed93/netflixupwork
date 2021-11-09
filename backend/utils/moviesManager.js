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

const removeFromMyMoviesList = async (file, movie) => {
    let moviesList;
    let filteredMoviesList;
    try {
        moviesList = await getMyMoviesList("./myMoviesListData.json");
        movieToRemoveIndex = moviesList.findIndex(
            (movieFromMyList) => movieFromMyList.id === movie.id
        );
        moviesList.splice(movieToRemoveIndex, 1);
        await jsonfile.writeFile("./myMoviesListData.json", moviesList);
        return moviesList;
    } catch (error) {
        console.log(error);
    }
};

module.exports = { getMyMoviesList, addToMyMoviesList, removeFromMyMoviesList };
