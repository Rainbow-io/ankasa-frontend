// import internal modules
import React from 'react'
import { Outlet } from 'react-router-dom'

// import external modules
import './index.css'

const Auth = () => {
  return (
    <div className="min-vh-100 d-flex bg-white">
      <div className="bg-auth-left w-50">
        <img className="text-center auth-cover-app" src={require("../../assets/icons/plane-banner-authpages.svg").default} alt="plane-banner-authpages" />
      </div>
      <div className="w-50">
        <Outlet />
      </div>
    </div>
  )
}

export default Auth