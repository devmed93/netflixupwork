import React from "react";
import Nav from "../Nav";
import "./HomeScreen.css";
import Banner from "../Banner";
import requests from "../requests";
import Row from "../Row";
function HomeScreen() {
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
