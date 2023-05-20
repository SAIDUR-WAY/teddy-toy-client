import {
     createBrowserRouter,
   } from "react-router-dom";
import Main from "../MainLayout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/LoginRegister/Login";
import Register from "../pages/LoginRegister/Register";
import ErrorPage from "../pages/ErrorPage";
import AddToys from "../pages/AddToys/AddToys";
import AllToys from "../pages/AllToys/AllToys";
import Mytoys from "../pages/MyToys/Mytoys";
import ViewDetails from "../pages/ViewDetails";

  export const router = createBrowserRouter([
     {
       path: "/",
       element: <Main></Main>,
       errorElement: <ErrorPage></ErrorPage>,
       children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/addtoys',
          element: <AddToys></AddToys>
        },
        {
          path: '/alltoys',
          element: <AllToys></AllToys>,
          loader: () => fetch('http://localhost:5000/products')
        },
        {
          path: '/products/mytoys',
          element: <Mytoys></Mytoys>
        },
        {
          path: '/viewDetails/:id',
          element: <ViewDetails></ViewDetails>,
          loader: ({params})=> fetch(`http://localhost:5000/products/${params.id}`)
        }
       ]
     },
   ]);