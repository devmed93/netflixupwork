import useAxios from "axios-hooks";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Banner.css";
const Spinner = require("react-spinkit");

function Banner() {
    const [movie, setMovie] = useState([]);
    const [{ data, loading, error }, refetch] = useAxios(
        "http://localhost:5000/movies/netflixoriginals/random"
    );

    useEffect(() => {
        async function fetchData() {
            if (!loading) {
                try {
                    setMovie(data);
                } catch (error) {
                    console.log(error);
                }
            }
        }
        fetchData();
    }, [loading, data]);

    const truncate = (str, n) => {
        return str?.length <= n ? str : str.substr(0, n) + "...";
    };

    return (
        <div>
            {loading ? (
                <div className='spinner-container'>
                    <Spinner
                        name='ball-clip-rotate'
                        color='white'
                        className='spinner'
                    />
                </div>
            ) : (
                <header
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
                            {movie?.title ||
                                movie?.name ||
                                movie?.original_name}
                        </h1>
                        <div className='banner-buttons'>
                            <button className='banner-button'>play</button>
                            <button className='banner-button'>
                                <Link to='/mylist' className = 'mylist-button'>
                                  
                                    my list
                                </Link>
                            </button>
                        </div>
                        <p className='banner-description'>
                            {truncate(`${movie?.overview}`, 150)}
                        </p>
                    </div>
                    <div className='banner-fadeBottom' />
                </header>
            )}
        </div>
    );
}

export default Banner;
