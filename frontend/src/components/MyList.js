import React, { useEffect, useState } from "react";
import {
    addMovieToMyList,
    selectmyMovieList,
} from "../features/myMovieListSlice";
import "./MyList.scss";
import Nav from "./Nav";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { useHistory } from "react-router-dom";

function MyList() {
    const emptyListMessage = "Add movies to your list from the homescreen";
    const movieList = useSelector(selectmyMovieList);
    const [myList, setMyList] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/w300";

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        const fetchMyMoviesList = async () => {
            const { data } = await axios.get(
                "http://localhost:5000/movies/list"
            );
            await setMyList(data);
        };
        fetchMyMoviesList();
    }, []);

    return (
        <div className='myList'>
            <Nav />
            {/* <i className='far fa-plus-square fa-lg'></i> */}
            {myList.length === 0 ? (
                <h1 className='emptyListMessage'>{emptyListMessage}</h1>
            ) : (
                <div className='myList-posters'>
                    {myList.map(
                        (movie) =>
                            (movie.poster_path || movie.backdrop_path) && (
                                <React.Fragment key={movie.id}>
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
                                    {/* <i
                                        //   ref={movieRef}
                                        className='far fa-plus-square fa-lg'
                                        onClick={() => {
                                            axios.post(
                                                "http://localhost:5000/movies",
                                                movie
                                            );
                                        }}></i> */}
                                </React.Fragment>
                            )
                    )}
                </div>
            )}
        </div>
    );
}

export default MyList;
