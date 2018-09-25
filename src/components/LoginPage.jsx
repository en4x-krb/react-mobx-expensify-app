import React from 'react';
import {firebase, googleAuthProvider} from '../firebase/firebase';

const LoginPage = (props) => (
    <React.Fragment>
        <button onClick={() => {
            firebase.auth().signInWithPopup(googleAuthProvider);
        }}>Login Page</button>
    </React.Fragment>    
);

export default LoginPage;