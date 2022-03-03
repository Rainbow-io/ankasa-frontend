// import internal modules
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import external modules
import Auth from '../pages/Auth/';
import Login from '../pages/Auth/Login';

import Main from '../pages/Main';
import BookingDetail from '../pages/Main/BookingDetail'
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
        </Route>

        <Route path="/main" element={<Main />}>
          <Route path="booking-detail" element={<BookingDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router