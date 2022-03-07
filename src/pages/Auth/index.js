// import internal modules
import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

// import external modules
import './index.css'

const Auth = () => {
  const auth = localStorage.getItem('token')
  if (auth) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/main" />;
  }
  return (
    <div className="min-vh-100 d-lg-flex bg-white">
      <div className="bg-auth-left w-50 d-none d-lg-block">
        <img className="text-center auth-cover-app" src={require("../../assets/icons/plane-banner-authpages.svg").default} alt="plane-banner-authpages" />
      </div>
      <div className="w-100 d-sm-block d-lg-none">
        <Outlet />
      </div>
      <div className="w-50 d-none d-lg-block">
        <Outlet />
      </div>
    </div>
  )
}

export default Auth