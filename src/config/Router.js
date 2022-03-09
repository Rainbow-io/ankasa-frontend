// import internal modules
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// import external modules
import RootPage from '../pages';
import Page404 from '../pages/404';

import Auth from '../pages/Auth/';
import Login from '../pages/Auth/Login';
import SignUp from '../pages/Auth/SignUp';
import ForgotPassword from '../pages/Auth/ForgotPassword';

import Main from '../pages/Main';
import Explore from '../pages/Main/Explore';
import FindTicket from '../pages/Main/FindTicket';
import FlightDetail from '../pages/Main/FlightDetail';
import MyBooking from '../pages/Main/MyBooking';
import BookingDetail from '../pages/Main/BookingDetail';
import Payment from '../pages/Main/Payment';
import Profile from '../pages/Main/Profile';
import Chat from '../pages/Main/Chat';
import ChatRoom from '../pages/Main/Chat/ChatRoom';
import Notification from '../pages/Main/Notification';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<RootPage />} />
        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route index element={<Navigate to="/auth/login" />} />
        </Route>

        <Route path="/main" element={<Main />}>
          <Route path="explore" element={<Explore />} />
          <Route path="find-ticket" element={<FindTicket/>} />
          <Route path="flight-detail" element={<FlightDetail/>} />
          <Route path="my-booking" element={<MyBooking />} />
          <Route path="booking-detail" element={<BookingDetail />} />
          <Route path="payment" element={<Payment />} />
          <Route path="profile" element={<Profile />} />
          <Route path="chat" element={<Chat/>} />
          <Route path="chat/:id" element={<ChatRoom/>} />
          <Route path="notification" element={<Notification />} />
          <Route path="flight-detail/:id" element={<FlightDetail/>} />
          <Route path="chat" element={<Chat/>} />
          <Route path="chat/:id" element={<ChatRoom/>} />
          <Route index element={<Navigate to="/main/explore" />} />
        </Route>


        <Route path="/*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router