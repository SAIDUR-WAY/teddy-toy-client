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
import PrivateRoute from "./PrivateRoute";
import UpdateToy from "../pages/MyToys/UpdateToy";
import Blog from "../pages/Blog/Blog";

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
          element: <PrivateRoute><AddToys></AddToys></PrivateRoute>
        },
        {
          path: '/alltoys',
          element: <AllToys></AllToys>,
          loader: () => fetch('https://teddy-toy-server-saidur-way.vercel.app/products')
        },
        {
          path: '/products/mytoys',
          element: <PrivateRoute><Mytoys></Mytoys></PrivateRoute>
        },
        {
          path: '/viewDetails/:id',
          element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
          loader: ({params})=> fetch(`https://teddy-toy-server-saidur-way.vercel.app/products/${params.id}`)
        },
        {
          path: '/updatetoy/:id',
          element: <UpdateToy></UpdateToy>,
          loader: ({params}) => fetch(`https://teddy-toy-server-saidur-way.vercel.app/products/${params.id}`)
        },
        {
          path: '/blog',
          element: <Blog></Blog>
          
        }
       ]
     },
   ]);