// import internal modules
import React, { Fragment } from 'react';

// import external modules
import Navbar from '../../components/module/Navbar';
import Footer from '../../components/module/Footer'
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
      <Footer />
    </Fragment>
  )
}

export default Main