import useAxios from "axios-hooks";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";
import { selectUser } from "../features/userSlice.js";
import "./MovieScreen.css";

function MovieScreen() {
    const { id } = useParams();
    // console.log(`movie id is ${id}`);
    const [movie, setMovie] = useState();
    const [actors, setActors] = useState([]);
    const [directors, setDirectors] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/w400";

    const [
        { data: movieData, loading: movieDataLoading, error: movieDataError },
        refetch,
    ] = useAxios(`http://localhost:5000/movies?id=${id}`);

    const [
        { data: creditsData, loading: creditsDataLoading, error: creditsDataError },
        creditsRefetch,
    ] = useAxios(`http://localhost:5000/movies?id=${id}&credits=true`);

    const user = useSelector(selectUser);

    const getMovieDuration = (minutes) => {
        const hours = Math.floor(minutes / 60);
        const restOfMinutes = minutes % 60;
        return `${hours}h ${restOfMinutes}min`;
    };

    /* ============ */
    useEffect(() => {
        async function fetchMovieDetails() {
            if (!movieDataLoading) {
                try {
                    setMovie(movieData);
                } catch (error) {
                    console.log(error);
                }
            }
        }
        fetchMovieDetails();

        async function fetchMovieCredits() {
            if (!creditsDataLoading) {
                try {
                    let AllDirectors = getDirectors(creditsData.crew);
                    let principalDirectors = getFirstNthObjects(
                        AllDirectors,
                        2
                    );
                    setDirectors([...principalDirectors]);

                    let fetchedActors = [];
                    for (let i = 0; i < 3; i++) {
                        fetchedActors.push(creditsData?.cast[i]);
                    }
                    setActors([...fetchedActors]);
                } catch (error) {
                    console.log(error);
                }
            }
        }
        fetchMovieCredits();
    }, [movieDataLoading, movieData, creditsData, creditsDataLoading]);

    /* ========== */


    const truncate = (str, n) => {
        return str?.length <= n ? str : str.substr(0, n) + "...";
    };

    const removeLastComma = (strArr) => {
        const str = strArr?.join("  ");
        return str?.substring(0, str?.length - 1);
    };
    const getFirstNthObjects = (arr, n) => {
        let counter = 0;
        let newArr = [];
        while (counter < arr?.length && counter < n) {
            newArr.push(arr[counter++]);
        }
        return newArr;
    };
    const getDirectors = (crew) => {
        return crew.filter(
            (crewMember) => crewMember.department === "Directing"
        );
    };

    return (
        <>
            <div className='movieScreen'>
                <Nav />
                <div className='movie-container'>
                    <img
                        src={`${base_url}${
                            movie?.poster_path
                                ? movie?.poster_path
                                : movie?.backdrop_path
                        }`}
                        alt='Movie poster'
                        className='movie-poster'
                    />

                    <div className='movie-details'>
                        <div className='movie-header'>
                            <div className='movie-infos'>
                                <h1 className='movie-title'>{movie?.title}</h1>
                                <div className='movie-release'>
                                    {/* piece of to be fixed */}
                                    <div className='movie-release-year'>
                                        {new Date(movie?.release_date)
                                            .getFullYear()
                                            .toString()}
                                    </div>
                                    {/* piece of to be fixed */}
                                    <div className='movie-duration'>
                                        {getMovieDuration(movie?.runtime)}
                                    </div>
                                    <div className='movie-age'>16+</div>
                                </div>
                            </div>

                            <div className='movie-rating'>
                                <span className='rating'>
                                    {movie?.vote_average?.toFixed(1)}
                                </span>
                                <i className='fas fa-star'></i>
                            </div>
                        </div>
                        <div className='movie-info'>
                            <h3 className='overview'>Overview</h3>
                            <p className='movie-short-resume'>
                                {truncate(`${movie?.overview}`, 250)}
                            </p>
                            <div className='movie-casting'>
                                <span className='genre gray'>Genre</span>
                                <span className='genres'>
                                    {removeLastComma(
                                        movie?.genres?.map(
                                            (genre) => `${genre?.name},`
                                        )
                                    )}
                                </span>
                                <span className='staring gray'>Staring</span>
                                <span className='actors'>
                                    {removeLastComma(
                                        actors?.map(
                                            (actor) => `${actor?.name},`
                                        )
                                    )}
                                </span>
                                <span className='createdBy gray'>
                                    Created by
                                </span>
                                <span className='directors'>
                                    {removeLastComma(
                                        directors?.map(
                                            (director) => `${director?.name},`
                                        )
                                    )}
                                </span>
                            </div>

                            <h3 className='screenshots-title'>Screenshots</h3>

                            <div className='screenshots'>
                                {getFirstNthObjects(
                                    movie?.images?.backdrops,
                                    3
                                ).map((backdrop, index) => {
                                    return (
                                        <div
                                            className='img-container'
                                            key={index + ""}>
                                            <img
                                                src={`${base_url}${backdrop?.file_path}`}
                                                alt='screenshot1'
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MovieScreen;
