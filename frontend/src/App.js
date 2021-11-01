import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { selectUser } from "./features/userSlice.js";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen.js";
import MovieScreen from "./screens/MovieScreen.js";
import ProfileScreen from "./screens/ProfileScreen.js";

function App() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    // const user = { uid: 1, email: "mohammed@gmail.com" };
    if (user) {
        console.log(`access user from App ${user}`);
    } 
    // useEffect(() => {
    //     const unscubscribe = onAuthStateChanged(auth, (userAuth) => {
    //         if (userAuth) {
    //             console.log(userAuth);
    //             dispatch(
    //                 login({
    //                     uid: userAuth.uid,
    //                     email: userAuth.email,
    //                 })
    //             );
    //         } else {
    //             console.log("user is signed out ");
    //             dispatch(logout());
    //         }
    //     });
    //     return unscubscribe;
    // }, []);

    useEffect(() => {}, []);

    return (
        <div className='App'>
            <Router>
                <Switch>
                    {!user ? (
                        <LoginScreen />
                    ) : (
                        <>
                            <Route path='/profile'>
                                <ProfileScreen />
                            </Route>
                            <Route exact path='/movie/:id'>
                                <MovieScreen />
                            </Route>
                            <Route exact path='/'>
                                <HomeScreen />
                            </Route>
                        </>
                    )}
                </Switch>
            </Router>
        </div>
    );
}

export default App;
