import React from "react";
import Nav from "../Nav";
import "./ProfileScreen.css";
import { login, logout, selectUser } from "../features/userSlice.js";
import { useSelector } from "react-redux";
import { signOut } from "@firebase/auth";
import auth from "../firebase";

const ProfileScreen = () => {
    const user = useSelector(selectUser);
    return (
        <div className='profileScreen'>
            <Nav />
            <h1 className='edit-profile'>Edit Profile</h1>
            <div className='pfScreen-container'>
                <img
                    src='https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png'
                    alt='profile avatar'
                    className='profileScreen-avatar'
                />
                <div className='profileScreen-body'>
                    <h4 className='userEmail'>{user.email}</h4>
                    <h3 className='current-plan'>
                        Plans (Current plan : premium)
                    </h3>
                    <h4 className='renewal-date'>Renewal date : 04/03/2021</h4>

                    <div className='plan'>
                        <h3 className='plan-description'>
                            Netflix Standard{" "}
                            <span className='quality'>1080p</span>
                        </h3>
                        <button className='plan-button'>Subscribe</button>
                    </div>
                    <div className='plan'>
                        <h3 className='plan-description'>
                            Netflix Basic <span className='quality'>480p</span>
                        </h3>
                        <button className='plan-button'>Subscribe</button>
                    </div>
                    <div className='plan'>
                        <h3 className='current plan-description'>
                            Netflix Premium
                            <span className=' quality'> 4K+HDR</span>
                        </h3>
                        <button className='current-package'>
                            Current Package
                        </button>
                    </div>
                    <button
                        className='signOut'
                        onClick={() =>
                            signOut(auth).then(() => alert("Sign Out sucess"))
                        }>
                        Sign out
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfileScreen;
