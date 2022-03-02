// import internal modules
import React from 'react';

// import external modules
import './login.css'

const Login = () => {
  return (
    <div className="wrapper-login">
      <div className="d-flex mascot">
        <img src={require("../../../assets/icons/plane-mascot-authpages.svg").default} alt="plane-mascot-authpages" />
        <div className="fw-bold fs-4 ms-2">Ankasa</div>
      </div>
      {/* continues */}
    </div>
  )
}

export default Login