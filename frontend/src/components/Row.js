import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axiosInstance from "../axios";
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow = false }) {
    const [movies, setMovies] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/w200";
    const history = useHistory();

    useEffect(() => {
        async function fetchMoviesList() {
            const req = await axiosInstance.get(fetchUrl);
            setMovies(req.data.results);
            return req;
        }

        fetchMoviesList();
    }, [fetchUrl]);

    const addMovie = (e) => {
        // const movie = e.target.getAttribute("data-movie");

        console.log(e.target.dataset.movie.title);
    };

    // console.log(movies);
    return (
        <div className='row'>
            <h2 className='row-title'>{title}</h2>
            <div className='row-posters'>
                {movies.map((movie) =>
                    !movie
                        ? "loading..."
                        : (movie.poster_path || movie.backdrop_path) && (
                              <React.Fragment key={movie.id}>
                                  <img
                                      className={`row-poster ${
                                          isLargeRow && "row-posterLarge"
                                      }`}
                                      src={`${base_url}${
                                          (isLargeRow
                                              ? movie.poster_path
                                              : movie.backdrop_path) ||
                                          movie?.poster_path
                                      }`}
                                      alt={movie.name}
                                      onClick={() =>
                                          history.push(`/movie/${movie.id}`)
                                      }
                                  />
                                  <i
                                      className='far fa-plus-square fa-lg'
                                      onClick={() => {
                                          console.log(movie);
                                      }}></i>
                              </React.Fragment>
                          )
                )}
            </div>
        </div>
    );
}

export default Row;
