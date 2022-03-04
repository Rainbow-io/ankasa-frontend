// import internal modules
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import external modules
import Auth from '../pages/Auth/';
import Login from '../pages/Auth/Login'
import FindTicket from '../pages/FindTicket';
import FlightDetail from '../pages/FlightDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="find-ticket" element={<FindTicket/>} />
        <Route path="flight-detail" element={<FlightDetail/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router