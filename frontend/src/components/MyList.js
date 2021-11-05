import React, { useEffect, useState } from "react";
import {
    addMovieToMyList,
    selectmyMovieList,
} from "../features/myMovieListSlice";
import "./MyList.scss";
import Nav from "./Nav";
import { useDispatch, useSelector } from "react-redux";

function MyList() {
    const emptyListMessage = "Add movies to your list from the homescreen";
    const movieList = useSelector(selectmyMovieList);
    const [myList, setMyList] = useState(movieList);
    const dispatch = useDispatch();

    useEffect(() => {
        try {
            dispatch(
                addMovieToMyList({
                    id: "1",
                    title: "The lord of the rings",
                })
            );
        } catch (error) {}
    }, []);

    return (
        <div className='myList'>
            <Nav />
            {/* <i className='far fa-plus-square fa-lg'></i> */}
            {!myList ? (
                <h1 className='emptyListMessage'>{emptyListMessage}</h1>
            ) : (
                myList.map((listItem, index) => (
                    <span key={index + ""}>
                        {listItem.title} {index + 1}
                    </span>
                ))
            )}
        </div>
    );
}

export default MyList;
