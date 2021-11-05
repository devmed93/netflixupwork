import React, { useEffect, useState } from "react";
import "./Banner.css";
import axiosInstance from "../axios";
import requests from "../requests";

import { useDispatch, useSelector } from "react-redux";
import { registerMovie, selectMovie } from "../features/movieSlice";

function Banner() {
    const [movie, setMovie] = useState([]);

    const movieFromStore = useSelector(selectMovie);
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchData() {
            const req = await axiosInstance.get(requests.fetchNetflixOriginals);
            let randomMovieIndex = Math.floor(
                Math.random() * (req.data.results.length - 1)
            );
            console.log(`movierandom index is ${randomMovieIndex}`);
            let randomMovie = req.data.results[randomMovieIndex];
            setMovie(randomMovie);
            console.log("random movie", randomMovie);
            // return req;
        }

        fetchData();

        // if (!movieFromStore) {
        //     fetchData().then(() => {
        //         try {
        //             dispatch(registerMovie({ ...movie }));
        //         } catch (error) {
        //             alert(`unable dispatch registerMovie action to the store`);
        //         }
        //     });
        // } else {
        //     setMovie({ ...movieFromStore });
        // }
    }, []);

    // console.log(movie);

    const truncate = (str, n) => {
        return str?.length <= n ? str : str.substr(0, n) + "...";
    };

    return (
        <div>
            <header
                className='banner'
                style={{
                    backgroundSize: "cover",
                    /* backgroundImage: `url(
                        "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                    )`, */
                    backgroundImage:
                        movie?.backdrop_path &&
                        `url(
                        "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                    )`,

                    backgroundPosition: "center",
                }}>
                <div className='banner-content'>
                    <h1 className='banner-title'>
                        {movie?.title || movie?.name || movie?.original_name}
                    </h1>
                    <div className='banner-buttons'>
                        <button className='banner-button'>play</button>
                        <button className='banner-button'>my list</button>
                    </div>
                    <p className='banner-description'>
                        {truncate(`${movie?.overview}`, 150)}
                    </p>
                </div>
                <div className='banner-fadeBottom' />
            </header>
        </div>
    );
}

export default Banner;
