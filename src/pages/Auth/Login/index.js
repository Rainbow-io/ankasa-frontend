// import internal modules
import React, { useState } from 'react';

// import external modules
import Input from '../../../components/base/Input';
import Button from '../../../components/base/Button';
import '../index.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formLogin, setFormLogin] = useState({
    email: '',
    password: ''
  })

  const [formLoginError, setFormLoginError] = useState(false);
  const [passHidden, setPassHidden] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormLogin({
      ...formLogin,
      [e.target.name]: e.target.value
    })
  }

  const handleHiddenPass = () => {
    if (passHidden === true) {
      setPassHidden(false)
    } else {
      setPassHidden(true)
    }
  }

  const validateLogin = (values) => {
    const errors = {};
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!values.email) {
      errors.email = "Email or Password Invalid";
    } else if (!regex.test(values.email)) {
      errors.email = "Email or Password Invalid";
    }
    if (!values.password) {
      errors.password = "Email or Password Invalid";
    } else if (values.password.length < 6) {
      errors.password = "Email or Password Invalid";
    }
    return errors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultValidate = validateLogin(formLogin);
    setFormLoginError(resultValidate);
    handleClick(resultValidate);
  }

  const handleClick = (resultValidate) => {
    if (Object.keys(resultValidate).length === 0) {
      setFormLoginError(false)
      setLoading(true)
    }
  }
  return (
    <div className="wrapper-form">
      <Link to={"/auth/login"} className="d-flex mascot text-decoration-none text-black">
        <img src={require("../../../assets/icons/plane-mascot-authpages.svg").default} alt="plane-mascot-authpages" />
        <div className="fw-bold fs-4 ms-2">Ankasa</div>
      </Link>
      <div className="fw-bold fs-4 login-banner">Login</div>
      <div className="mt-5 form-wrapper">
        <Input
          type="email"
          name="email"
          placeholder="Username or Email"
          onChange={handleChange}
          value={formLogin.email}
          className="py-3 px-3 row border-1 my-3 bg-transparent border-0 border-bottom w-100" />
        {passHidden === true ? (
          <>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={formLogin.password}
              className="py-3 px-3 row border-1 my-3 bg-transparent border-0 border-bottom w-100" />
            <img onClick={() => handleHiddenPass()} className="position-relative float-end icon-eyeslash" src={require("../../../assets/icons/eye-slash-loginpage.svg").default} alt="icon-eyeslash-loginpage" />
          </>

        ) : (
          <>
            <Input
              type="text"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={formLogin.password}
              className="py-3 px-3 row border-1 my-3 bg-transparent border-0 border-bottom w-100" />
            <img onClick={() => handleHiddenPass()} className="position-relative float-end icon-eyeslash" src={require("../../../assets/icons/eye-loginpage.svg").default} alt="icon-eyeslash-loginpage" />
          </>
        )}

      </div>
      <div className="text-center">
      <div className="text-center my-3 text-primary">{formLoginError.email || formLoginError.password}</div>
        <Button isLoading={loading} onClick={handleSubmit} className="btn-login py-3 px-5 mt-3 mb-3 text-white w-100 fw-bold text-center">Sign In</Button>
        <div>Did you forgot your password?</div>
        <Link to={"/auth/forgot-password"} className="mb-5">Tap here for reset</Link>
        <hr className="mt-5" />
        <div className="d-flex flex-column">
        <div className="align-self-center">Don't have an account?</div>
        <Link to={"/auth/sign-up"} className="btn-login-signup py-3 px-5 mt-3 mb-3 text-primary w-100 fw-bold text-center text-decoration-none">Sign Up</Link>
      </div>
        {/* <div className="d-flex justify-content-center mt-3">
          <div className="me-3 googlefb-button">
            <img src={require("../../../assets/icons/google-loginpage.svg").default} alt="google-loginpage" />
          </div>
          <div className="ms-3 googlefb-button">
            <img src={require("../../../assets/icons/facebook-loginpage.svg").default} alt="google-loginpage" />
          </div>
        </div> */}
      </div>
      {/* continues */}
    </div>
  )
}

export default Login