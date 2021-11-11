import React from "react";
import Banner from "../components/Banner";
import Nav from "../components/Nav";
import Row from "../components/Row";
import "./HomeScreen.css";

function HomeScreen() {
    return (
        <div className='homeScreen'>
            <Nav />

            <Banner />

            {/* Row */}
            <Row
                title='Netflix Originals'
                fetchUrl={"netflixoriginals"}
                isLargeRow={true}
            />
            <Row title='Trending Now' fetchUrl={"trending"} />
            <Row
                title='Recommended'
                fetchUrl={"recommended"}
                isLargeRow={true}
            />
            <Row title='Top Rated' fetchUrl={"toprated"} />
            <Row title='Action Movies' fetchUrl={"action"} />
            <Row title='Comedy Movies' fetchUrl={"comedy"} />
            <Row title='Horror movies' fetchUrl={"horror"} />
            <Row title='Romance Movies' fetchUrl={"romance"} />
            <Row title='Documentary Movies' fetchUrl={"documentary"} />
        </div>
    );
}

export default HomeScreen;
