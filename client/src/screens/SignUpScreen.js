// import userSlice from "../features/userSlice";
import axios from "axios";
import React, { useRef } from "react";
// import auth from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { configStore } from "../app/store.js";
import { login, selectUser } from "../features/userSlice.js";
import "./SignUpScreen.css";

const SignUpScreen = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const register = (e) => {
        e.preventDefault();
        //register logic
    };

    const signIn = (e) => {
        e.preventDefault();
        const checkedUser = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };

        axios
            .post("http://localhost:5000/users/login", checkedUser)
            .then((user) => user.data)
            .then((userAuth) => {
                try {
                    dispatch(
                        login({
                            uid: userAuth.uid,
                            email: userAuth.email,
                        })
                    );
                } catch (error) {
                    alert("wrong credentials");
                }
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
