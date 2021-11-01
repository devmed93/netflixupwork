import React, { useEffect, useRef } from "react";
import "./SignUpScreen.css";
import auth from "../firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
// import userSlice from "../features/userSlice";
import axios from "axios";
// import auth from "../firebase";

import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../features/userSlice.js";

const SignUpScreen = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

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
        const checkedUser = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };
        const testUser = {
            email: "noha@gmail.com",
            password: "noha123456",
        };
        axios
            .post("http://localhost:5000/users/login", checkedUser)
            .then((user) => user.data)
            .then((userAuth) => {
                dispatch(
                    login({
                        uid: userAuth.uid,
                        email: userAuth.email,
                    })
                );
            });

        /* signInWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        )
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log("the user that just signed in is :", user);
                alert(user.email);
                // ...
            .then((user) => user.data)
            })
            .catch((error) => {
                alert(error.message);
            });
 */
    };

    if (user) {
        console.log(`access user from SignupScreen ${user}`);
    }
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
