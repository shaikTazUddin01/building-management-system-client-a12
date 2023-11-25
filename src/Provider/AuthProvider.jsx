import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../FireBase/FireBase.config'


export const AuthContext = createContext(null)
// google provider
const provider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {

    const [user, setuser] = useState()
    const [loader, setLoader] = useState(true)
    // handle Sign In
    const handleSignIn = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // handle Sign Up
    const handleSignUp = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // handle Google Sign In
    const handleGoogleSignIn = () => {
        setLoader(true)
        return signInWithPopup(auth, provider)
    }
    //handle sign out
    const handleSignOut = () => {
        return signOut(auth);
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setuser(currentUser)
            setLoader(false)
            console.log(currentUser)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const AuthInFo = {
        handleSignIn,
        handleSignUp,
        handleGoogleSignIn,
        handleSignOut,
        user,
        loader

    }
    return <AuthContext.Provider value={AuthInFo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;