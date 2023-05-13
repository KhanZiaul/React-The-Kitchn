import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../Firebase/firebase.config';

const auth = getAuth(app);

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [loginUser, setLoginUser] = useState('');
    const [progress, setProgress] = useState(true)

    function createUser(email, password) {
        setProgress(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function signinUser(email, password) {
        setProgress(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    function signInPopup(provier) {
        setProgress(true);
        return signInWithPopup(auth, provier)
    }

    function passwordReset(email) {
        return sendPasswordResetEmail(auth, email)
    }

    function logOut() {
        setProgress(true);
        return signOut(auth)
    }

    const authInfo = {
        loginUser,
        createUser,
        signinUser,
        logOut,
        progress,
        signInPopup,
        passwordReset
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setLoginUser(user)
            setProgress(false)
        });
        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;