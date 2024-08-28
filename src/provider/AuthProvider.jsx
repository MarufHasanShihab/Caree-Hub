import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from './../firebase/firebase.config';


export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState({})
    // google login
    const googleSignUp = ()=>{
        return signInWithPopup(auth, googleProvider)
    }

    // create user with email and password
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in user with email and password
    const signInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout
    const logoutUser = ()=>{
        return signOut(auth)
    }

    // on auth state change
    useEffect(()=>{
        const unSubcribe = onAuthStateChanged(auth, currentUser=>{
            if(currentUser){
                setUser(currentUser)
            }
        })
        return()=>{
            unSubcribe()
        }
    },[])

    // auth info
    const authInfo = {
        googleSignUp,
        createUser,
        signInUser,
        user,
        setUser,
        logoutUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}
export default AuthProvider;