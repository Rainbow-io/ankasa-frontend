// import internal modules
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// import external modules
import Page404 from '../pages/404';

import Auth from '../pages/Auth/';
import Login from '../pages/Auth/Login';
import SignUp from '../pages/Auth/SignUp';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route index element={<Navigate to="/auth/login" />} />
        </Route>

        <Route path="/*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router