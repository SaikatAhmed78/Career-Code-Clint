import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';

const MainLayout = () => {
    return (
        <div>
            <nav>
            <Navbar></Navbar>
            </nav>

          <main  className='w-11/12 mx-auto min-h-[calc(100vh-306px)]'>
          <Outlet></Outlet>
          </main>

          <footer>
            <Footer></Footer>
          </footer>

        </div>
    );
};

export default MainLayout;