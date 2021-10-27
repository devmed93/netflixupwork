import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen.js";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import auth from "./firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice.js";
import { useSelector } from "react-redux";
import ProfileScreen from "./screens/ProfileScreen.js";

function App() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
        const unscubscribe = onAuthStateChanged(auth, (userAuth) => {
            if (userAuth) {
                console.log(userAuth);
                dispatch(
                    login({
                        uid: userAuth.uid,
                        email: userAuth.email,
                    })
                );
            } else {
                console.log("user is signed out ");
                dispatch(logout());
            }
        });
        return unscubscribe;
    }, []);

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
