import React, { useEffect, useState } from "react";
import "./Banner.css";
import axiosInstance from "../axios";
// import requests from "../requests";

import { useDispatch, useSelector } from "react-redux";
import { registerMovie, selectMovie } from "../features/movieSlice";
import useAxios from "axios-hooks";

function Banner() {
    const [movie, setMovie] = useState([]);
    const [{ data, loading, error }, refetch] = useAxios(
        "http://localhost:5000/movies/netflixOriginals"
    );
    const movieFromStore = useSelector(selectMovie);
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchData() {
            if (!loading) {
                try {
                    let randomMovieIndex;
                    randomMovieIndex = Math.floor(
                        Math.random() * ((await data?.length) - 1)
                    );
                    console.log(`movierandom index is ${randomMovieIndex}`);
                    let randomMovie = data[randomMovieIndex];
                    setMovie(randomMovie);
                    console.log("random movie", randomMovie);

                    // return req;
                } catch (error) {
                    console.log(error);
                }
            }
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
    }, [loading]);

    // console.log(movie);

    const truncate = (str, n) => {
        return str?.length <= n ? str : str.substr(0, n) + "...";
    };

    return (
        <div>
            {/* <header
                className='banner'
                style={{
                    backgroundSize: "cover",
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
            </header> */}
        </div>
    );
}

export default Banner;
