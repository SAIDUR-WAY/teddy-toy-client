import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { toast } from "react-hot-toast";
const googleProvider = new GoogleAuthProvider()

export const authContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {
     const [user, setUser] = useState()
     const [loading, setLoading] = useState(true)
     // console.log(user)

     //firebase createUser function
     const createUser = (email, password)=>{
          setLoading(true)
          return createUserWithEmailAndPassword(auth, email, password)
     }

     //firebase login function
     const loginIn = (email, password)=>{
          setLoading(true)
          return signInWithEmailAndPassword(auth, email, password)
     }

     //google sign in
     const googleSignIn = ()=>{
         return signInWithPopup(auth, googleProvider)
     }

     //update profile
     const profileUpdate = (currentUser, name, photoUrl)=>{
          setLoading(true)
          updateProfile(currentUser,{
               displayName: name,
               photoURL: photoUrl
           })
           .catch(error=> error.message)
     }

     
     
     //user observer in firebase
     useEffect(()=>{
          const unsubcribe = onAuthStateChanged(auth, caurrentUser=>{
               setUser(caurrentUser)
               setLoading(false)
          })
          return unsubcribe;
     }, [])
     
     //sign Out
     const logOut = ()=>{
          signOut(auth)
          .then(()=>{
               toast.success('SignOut Success')
          })
          .catch(error=> console.log(error.message))
     }


     const authInfo = {
          user,
          loading,
          createUser,
          loginIn,
          profileUpdate,
          logOut,
          googleSignIn,
     }
     return (
          <authContext.Provider value={authInfo}>
               {children}
          </authContext.Provider>
     );
};

export default AuthProvider;