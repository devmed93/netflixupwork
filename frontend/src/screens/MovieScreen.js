import React from "react";
import Nav from "../components/Nav";
import "./MovieScreen.css";

function MovieScreen() {
    return (
        <>
            <div className='movieScreen'>
                <Nav />
                <div className='movie-container'>
                    <img
                        className='movie-poster'
                        src='https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg'
                        alt='movie poster'
                    />
                    <div className='movie-details'>
                        <div className='movie-header'>
                            <div className='movie-infos'>
                                <h1 className='movie-title'>Movie title</h1>
                                <div className='movie-release'>
                                    <div className='movie-release-year'>
                                        2018
                                    </div>
                                    <div className='movie-duration'>
                                        2h 23min
                                    </div>
                                    <div className='movie-age'>16+</div>
                                </div>
                            </div>
                            <div className='movie-rating'>
                                <span className='rating'>9.0</span>
                                <i class='fas fa-star'></i>
                            </div>
                        </div>
                        <div className='movie-info'>
                            <h3 className='overview'>Overview</h3>
                            <p className='movie-short-resume'>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ullam voluptatum consequuntur
                                omnis quas enim aliquam iste libero, doloremque
                                aspernatur. Consequatur quas illo inventore
                                ratione magnam vero odio fugiat repudiandae
                                minima.
                            </p>
                            <div className='movie-casting'>
                                <span className='staring gray'>Staring</span>
                                <span className='actors'>
                                    actor1, actor2, actor3
                                </span>
                                <span className='createdBy gray'>
                                    Created by
                                </span>
                                <span className='directors'>
                                    director1, director2
                                </span>
                                <span className='genre gray'>Genre</span>
                                <span className='genres'>genre1, genre2</span>
                            </div>

                            <h3 className='screenshots-title'>Screenshots</h3>
                            <div className='screenshots'>
                                <div className='img-container'>
                                    <img
                                    src='https://image.cnbcfm.com/api/v1/image/106963364-1634750959796-Dune_Cropped.jpg?v=1634751027&w=929&h=523'
                                    alt='screenshot1'
                                />
                                </div>
                                <div className='img-container'>
                                    <img
                                        src='https://www.cnet.com/a/img/AMidEPWIPe6oQLGfTAGDiWO5ibo=/0x0:1053x592/1200x675/2021/08/05/17b8a91b-110a-45e7-8927-09a3df00897d/dune-zendaya.jpg'
                                        alt='screenshot2'
                                    />
                                </div>
                                <div className='img-container'>
                                    <img
                                        src='https://img.jakpost.net/c/2021/08/29/2021_08_29_116978_1630232097._large.jpg'
                                        alt='https://img.jakpost.net/c/2021/08/29/2021_08_29_116978_1630232097._large.jpg3'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MovieScreen;
