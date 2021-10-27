import React, { useEffect, useState } from "react";
import axiosInstance from "./axios";
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow = false }) {
    const [movies, setMovies] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/w200";

    useEffect(() => {
        async function fetchMoviesList() {
            const req = await axiosInstance.get(fetchUrl);
            setMovies(req.data.results);
            return req;
        }

        fetchMoviesList();
    }, [fetchUrl]);

    console.log(movies);
    return (
        <div className='row'>
            <h2 className='row-title'>{title}</h2>
            <div className='row-posters'>
                {movies.map((movie) => (
					(movie.poster_path || movie.backdrop_path) && (<img
                            className={`row-poster ${
                                isLargeRow && "row-posterLarge"
                            }`}
                            key={movie.id}
                            src={`${base_url}${
                                isLargeRow
                                    ? movie.poster_path
                                    : movie.backdrop_path
                            }`}
                            alt={movie.name}
                        />)
                ))}
            </div>
        </div>
    );
}

export default Row;
