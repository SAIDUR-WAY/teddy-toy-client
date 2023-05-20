import React, { useContext } from 'react';
import { authContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';


const PrivateRoute = ({children}) =>{

     const {user, loading} = useContext(authContext);
     const location = useLocation()


     if(loading){
        return  <div>Please Loading............</div>

     }
     if(user){
          return children
     }

     return <Navigate to='/login' replace= {true} state={{from: location}}></Navigate>
}
export default PrivateRoute;