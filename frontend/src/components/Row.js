import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import axiosInstance from "../axios";
import MoviePoster from "./MoviePoster";
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow = false }) {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        async function fetchMoviesList() {
            const req = await axiosInstance.get(fetchUrl);
            setMovies(req.data.results);
            return req;
        }

        fetchMoviesList();
    }, [fetchUrl]);

   

    // console.log(movies);
    return (
        <div className='row'>
            <h2 className='row-title'>{title}</h2>
            <div className='row-posters'>
                {movies.map(
                    (movie) =>
                        !movie
                            ? "loading..."
                            : (movie.poster_path || movie.backdrop_path) && (
                                  <MoviePoster
                                      movie={movie}
                                      isLargeRow={isLargeRow}
                                      key={movie.id}
                                      
                                  />
                              )
                    /* ==================== */
                    // myMoviesList?.find(
                    //     (movieFromMyList) => movieFromMyList.id === movie?.id
                    // )?.id || "false"

                    /* ================= */
                )}
            </div>
            {/* {myMoviesList[0]?.id} */}
        </div>
    );
}

export default Row;
