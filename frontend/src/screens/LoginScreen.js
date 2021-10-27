import React, { useState } from "react";
import "./LoginScreen.css";
import SignUpScreen from "./SignUpScreen";

function LoginScreen() {
    const [signIn, setSignIn] = useState(false);

    return (
        <div className='loginScreen'>
            <div className='loginScreen-background'>
                <img
                    className='loginScreen-logo'
                    src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
                    alt='loginScreen logo'
                />
                <button
                    onClick={() => setSignIn(true)}
                    className='loginScreen-button'>
                    Sign In
                </button>
                <div className='loginScreen-gradient' />
                <div className='loginScreen-body'>
                    {signIn ? (
                        <SignUpScreen />
                    ) : (
                        <>
                            <h1>Unlimited films, TV programmes and more.</h1>
                            <h2>Watch anywhere. Cancel any time.</h2>
                            <h3>
                                Ready to watch? Enter your email to create or
                                restart your membership.
                            </h3>
                            <form className='login-subscription'>
                                <input
                                    placeholder='Your Email'
                                    className='subscription-email'
                                />
                                <button
                                    onClick={() => setSignIn(true)}
                                    className='login-button'>
                                    GET STARTED
                                </button>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default LoginScreen;
