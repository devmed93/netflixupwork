import React, { useEffect, useRef } from "react";
import "./SignUpScreen.css";
import auth from "../firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import userSlice from "../features/userSlice";

// import auth from "../firebase";

const SignUpScreen = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        )
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                alert(user.email);
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        )
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                alert(user.email);
                // ...
            })
            .catch((error) => {
                alert(error.message);
            });
    };


    return (
        <div className='signupScreen'>
            <form>
                <h1>Sign In</h1>
                <input
                    ref={emailRef}
                    className='signin'
                    type='email'
                    placeholder='Email'
                />
                <input
                    ref={passwordRef}
                    className='signin'
                    type='password'
                    placeholder='Password'
                />
                <button onClick={signIn} className='signin' type='submit'>
                    Sign In
                </button>
            </form>
            <h4>
                <span className='signup-new'>New to Netflix ? </span>
                <span onClick={register} className='signup-link'>
                    Sign up now.
                </span>
            </h4>
        </div>
    );
};

export default SignUpScreen;
