import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Nav.css";

function Nav() {
    const history = useHistory();
    const [show, handleShow] = useState(false);
    const navbarTransition = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };
    // navbar show/hide on scroll effect
    useEffect(() => {
        window.addEventListener("scroll", navbarTransition);
        return () => {
            window.removeEventListener("scroll", navbarTransition);
        };
    }, []);

    return (
        <div className={`nav ${show && "nav-black"}`}>
            {/* <h1>this is the nav</h1> */}
            <div className='nav-content'>
                <img
                    className='nav-logo'
                    src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
                    alt='netflix logo'
                    onClick={() => history.push("/")}
                />

                <img
                    className='nav-avatar'
                    src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                    alt='user avatar'
                    onClick={() => {
                        history.push("/profile");
                    }}
                />
            </div>
        </div>
    );
}

export default Nav;
