import axios from "axios";
import useAxios from "axios-hooks";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Spinner from "react-spinkit";
import "./MyList.scss";
import Nav from "./Nav";

function MyList() {
    const emptyListMessage = <Link to='/'>Add movies from the HomeScreen</Link>;
    const [myList, setMyList] = useState([]);
    // const [{ data, loading, error }, refetch] = useAxios(
    //     "http://localhost:5000/movies/list"
    // );
    const [loading, setLoading] = useState(true);
    const base_url = "https://image.tmdb.org/t/p/w300";
    const history = useHistory();

    console.count("mylist render");

    useEffect(() => {
        axios.get("http://localhost:5000/movies/list").then((response) => {
            setMyList(response.data);
            setLoading(false);
        });
    }, []);

    return (
        <div className='myList'>
            <Nav />
            {/* <i className='far fa-plus-square fa-lg'></i> */}

            {loading ? (
                <div className='spinner-container'>
                    <Spinner
                        name='ball-clip-rotate'
                        color='white'
                        className='spinner'
                    />
                </div>
            ) : myList?.length === 0 ? (
                <h1 className='emptyListMessage'>{emptyListMessage}</h1>
            ) : (
                <div className='myList-posters'>
                    {myList?.map(
                        (movie) =>
                            (movie?.poster_path || movie?.backdrop_path) && (
                                <div
                                    className='poster-container'
                                    key={movie.id}>
                                    <img
                                        className='myList-poster'
                                        src={`${base_url}${
                                            movie.poster_path ||
                                            movie.backdrop_path
                                        }`}
                                        alt={movie.name}
                                        onClick={() =>
                                            history.push(`/movie/${movie.id}`)
                                        }
                                    />
                                    <>
                                        <i
                                            className='fas fa-trash-alt'
                                            onClick={() => {
                                                // setIsMovieAdded(false);
                                                axios.post(
                                                    " http://localhost:5000/movies/list/remove",
                                                    movie
                                                );
                                                setMyList((prevList) =>
                                                    prevList.filter(
                                                        (currentMovie) =>
                                                            currentMovie.id !==
                                                            movie.id
                                                    )
                                                );
                                            }}></i>
                                        <div className='tooltip'>
                                            Remove from my list
                                        </div>
                                    </>
                                </div>
                            )
                    )}
                </div>
            )}
        </div>
    );
}

export default MyList;
