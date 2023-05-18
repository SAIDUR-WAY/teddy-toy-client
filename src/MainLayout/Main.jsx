
import Navbar from '../shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import { Toaster } from 'react-hot-toast';

const Main = () => {
     return (
          <div>
               <Navbar></Navbar>
               <Outlet></Outlet>
               <Footer></Footer>
               <Toaster></Toaster>
          </div>
     );
};

export default Main;