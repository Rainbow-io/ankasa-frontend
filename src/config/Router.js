// import internal modules
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import external modules
import Auth from '../pages/Auth/';
import Login from '../pages/Auth/Login'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router