import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [searchData, setSearchData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const carSearch = (props) => {
        setSearchData(props)
    }
    
    const signUp = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    } 

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    } 

    const logOut = () => {
        return signOut(auth);
    }

    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const handleGitHubSignIn = () => {
        return signInWithPopup(auth, gitHubProvider)
    }

        // Profile updated!

        const updateUser = (name, photo) => {
            updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photo,
                
            }).then((result) => {
                console.log(result.user)
            }).catch((error) => {
        
            });
        }
    

    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            console.log(currentUser)
        })
        return () => subscribe();
    },[])
    
    const userInfo = {
        user,
        loading,
        signIn,
        signUp,
        logOut,
        handleGoogleSignIn,
        handleGitHubSignIn,
        updateUser,
        carSearch,
        searchData,

    }
    
    return (
        <AuthContext.Provider value={userInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


// https://i.ibb.co/tcQkJkw/boy-1.jpg
// Khalidmahmud1@gmail.com

// https://i.ibb.co/wBsmGqB/Lboy1.jpg