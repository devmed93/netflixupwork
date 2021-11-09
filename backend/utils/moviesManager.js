const jsonfile = require("jsonfile");
const { requests, axiosInstance } = require("./requests");

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

const getMoviesByGenre = async (genre) => {
    let movies;
    try {
        movies = await axiosInstance
            .get(genre)
            .then((response) => response.data.results);
    } catch (error) {
        console.log(error);
    }
    return movies;
};

module.exports = {
    getMyMoviesList,
    addToMyMoviesList,
    removeFromMyMoviesList,
    getMoviesByGenre,
};
