import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null);

    const signIn = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    } 

    const signUp = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    } 

    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setLoading(false);
        })
        return () => subscribe();
    },[])
    
    const userInfo = {
        user,
        loading,
        signIn,
        signUp,

    }
    
    return (
        <AuthContext.Provider value={userInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;