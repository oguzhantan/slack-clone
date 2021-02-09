import React from 'react'
import slackLogo from "./slacklogo.jpeg";
import "./Login.css"
import { Button } from "@material-ui/core";
import { auth, provider } from './firebase';
import { useStateValue } from "./stateProvider";
import { actionTypes } from "./reducer";

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = (e) => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result);
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch((error) => {
                alert(error.message);
            });  
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src={slackLogo} alt="" />
                <h1>Sign in to App</h1>
                <p>clone.slack.com</p>
                <Button onClick={signIn}>Sign In with Google</Button>
            </div>
        </div>
    )
}

export default Login
