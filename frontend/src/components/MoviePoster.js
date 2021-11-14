import axios from "axios";
import useAxios from "axios-hooks";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./MoviePoster.scss";

function MoviePoster({ movie, isLargeRow = false }) {
    const base_url = "https://image.tmdb.org/t/p/w200";
    const history = useHistory();
    const [isMovieAdded, setIsMovieAdded] = useState(false);
    // const [{ data, loading, error }, refetch] = useAxios(
    //     "http://localhost:5000/movies/list"
    // );
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("http://localhost:5000/movies/list").then((response) => {
            console.log(response.data);
            setData(response.data);
            setLoading(false);
        });
    }, []);

    /* ===================== */

    useEffect(() => {
        const fetchMyMoviesList = async () => {
            /* ======== */
            if (!loading) {
                try {
                    data.find(
                        (movieFromMyList) => movieFromMyList?.id === movie?.id
                    )
                        ? setIsMovieAdded(true)
                        : setIsMovieAdded(false);
                } catch (error) {
                    console.log(error);
                }
            }

            /* ========== */
        };
        fetchMyMoviesList();
    }, [data, loading, movie?.id]);

    /* ================= */

    return (
        <div className={`poster-container ${isLargeRow && "row-posterLarge"}`}>
            <img
                //   className={`row-poster ${
                //       isLargeRow && "row-posterLarge"
                //   }`}
                src={`${base_url}${
                    (isLargeRow ? movie.poster_path : movie.backdrop_path) ||
                    movie?.poster_path
                }`}
                alt={movie.name}
                onClick={() => history.push(`/movie/${movie.id}`)}
            />
            {!isMovieAdded ? (
                <>
                    <i
                        // ref={movieRef}
                        className='far fa-plus-square fa-5x'
                        onClick={() => {
                            setIsMovieAdded(true);
                            axios.post(
                                "http://localhost:5000/movies/list/add",
                                movie
                            );
                        }}></i>
                    <div className='tooltip'>Add to my list</div>
                </>
            ) : (
                <>
                    <i
                        className='far fa-check-circle fa-2x'
                        onClick={() => {
                            setIsMovieAdded(false);
                            axios.post(
                                " http://localhost:5000/movies/list/remove",
                                movie
                            );
                        }}></i>
                    <div className='tooltip'>Remove from my list</div>
                </>
            )}
        </div>
    );
}

export default MoviePoster;
