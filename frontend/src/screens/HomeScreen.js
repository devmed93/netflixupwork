import React from "react";
import { useDispatch } from "react-redux";
import Banner from "../components/Banner";
import Nav from "../components/Nav";
import Row from "../components/Row";
import requests from "../requests";
import "./HomeScreen.css";

function HomeScreen() {
    const dispatch = useDispatch();

   

    return (
        <div className='homeScreen'>
            <Nav />

            <Banner />

            {/* Row */}
            <Row
                title='Netflix Originals'
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow={true}
            />
            <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
            <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
            <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
            <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
            <Row title='Horror movies' fetchUrl={requests.fetchHorrorMovies} />
            <Row
                title='Romance Movies'
                fetchUrl={requests.fetchRomanceMovies}
            />
            <Row
                title='Documentary Movies'
                fetchUrl={requests.fetchDocumentariesMovies}
            />
        </div>
    );
}

export default HomeScreen;
