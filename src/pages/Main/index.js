// import internal modules
import React, { Fragment } from 'react';
import {Navigate} from 'react-router-dom';

// import external modules
import Navbar from '../../components/module/Navbar';
import Footer from '../../components/module/Footer'
import { Outlet } from 'react-router-dom';

const Main = () => {
  const auth = localStorage.getItem('token');
  if (!auth) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/auth/login" />;
  }
  return (
    <Fragment>
      <Navbar />
      <Outlet />
      <Footer />
    </Fragment>
  )
}

export default Main