// import internal modules
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// import external modules
import Page404 from '../pages/404';

import Auth from '../pages/Auth/';
import Login from '../pages/Auth/Login';
import SignUp from '../pages/Auth/SignUp';
import ForgotPassword from '../pages/Auth/ForgotPassword';

import Main from '../pages/Main';
import MyBooking from '../pages/Main/MyBooking';
import Profile from '../pages/Main/Profile';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route index element={<Navigate to="/auth/login" />} />
        </Route>

        <Route path="/main" element={<Main />}>
          <Route path="my-booking" element={<MyBooking />} />
          <Route path="profile" element={<Profile />} />
        </Route>


        <Route path="/*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router