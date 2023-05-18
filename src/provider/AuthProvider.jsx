import { createContext, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const authContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {
     // const [user, setUser] = useState()
     const [loading, setLoading] = useState(true)
     const user = {
          name: 'saidur',
          email: 'saiduronway@gmail.com'
     }
     //firebase createUser function
     const createUser = (email, password)=>{
          return createUserWithEmailAndPassword(auth, email, password)
     }

     //firebase login function
     const loginIn = (email, password)=>{
          return signInWithEmailAndPassword(auth, email, password)
     }


     const authInfo = {
          user,
          loading,
          createUser,
          loginIn,
     }
     return (
          <authContext.Provider value={authInfo}>
               {children}
          </authContext.Provider>
     );
};

export default AuthProvider;