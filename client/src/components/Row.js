import axios from "axios";
import useAxios from "axios-hooks";
import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import Spinner from "react-spinkit";
import axiosInstance from "../axios";
import MoviePoster from "./MoviePoster";
import "./Row.css";



function Row({ title, fetchUrl, isLargeRow = false }) {
    const [movies, setMovies] = useState([]);
    const [{ data, loading, error }, refetch] = useAxios(
        `http://localhost:5000/movies/${fetchUrl}`
    );

    useEffect(() => {
        async function fetchMoviesList() {
            if (!loading) {
                try {
                    setMovies(data);
                    // console.log(data);
                } catch (error) {
                    console.log(error);
                }
            }
        }

        fetchMoviesList();
    }, [loading, data]);

    // console.log(movies);
    return (
        <div className='row'>
            <h2 className='row-title'>{title}</h2>
            <div className='row-posters'>
                {loading ? (
                <div className='row-spinner-container'>
                    <Spinner
                        name='ball-clip-rotate'
                        color='white'
                        className='spinner'
                    />
                </div>
                ) : 
                movies.map(
                    (movie) =>
                        (movie.poster_path || movie.backdrop_path) && (
                            <MoviePoster
                                movie={movie}
                                isLargeRow={isLargeRow}
                                key={movie.id}
                            />
                        )
                )}
            </div>
        </div>
    );
}

export default Row;
