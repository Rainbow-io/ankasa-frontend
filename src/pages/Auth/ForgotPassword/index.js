// import internal modules
import React, { useState } from 'react';

// import external modules
import Input from '../../../components/base/Input';
import Button from '../../../components/base/Button';
import '../index.css';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [formForgotPass, setFormForgotPass] = useState({
    email: '',
    password: ''
  })

  const [formForgotPassError, setFormForgotPassError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormForgotPass({
      ...formForgotPass,
      [e.target.name]: e.target.value
    })
  }


  const validateForgotPass = (values) => {
    const errors = {};
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!values.email) {
      errors.email = "Email or Password Invalid";
    } else if (!regex.test(values.email)) {
      errors.email = "Email or Password Invalid";
    }
    return errors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultValidate = validateForgotPass(formForgotPass);
    setFormForgotPass(resultValidate);
    handleClick(resultValidate);
  }

  const handleClick = (resultValidate) => {
    if (Object.keys(resultValidate).length === 0) {
      setFormForgotPassError(false)
      setLoading(true)
    }
  }
  return (
    <div className="wrapper-form">
      <Link to={"/auth/login"} className="d-flex mascot text-decoration-none text-black">
        <img src={require("../../../assets/icons/plane-mascot-authpages.svg").default} alt="plane-mascot-authpages" />
        <div className="fw-bold fs-4 ms-2">Ankasa</div>
      </Link>
      <div className="fw-bold fs-4 login-banner">Forgot Password</div>
      <div className="mt-5 form-wrapper">
        <Input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={formForgotPass.email}
          className="py-3 px-3 row border-1 my-3 bg-transparent border-0 border-bottom w-100" />
      </div>
      <div className="text-center">
        <div className="text-center my-3 text-primary">{formForgotPassError.email}</div>
        <Button isLoading={loading} onClick={handleSubmit} className="btn-login py-3 px-5 mt-3 mb-3 text-white w-100 fw-bold text-center">Send</Button>
        <div>You'll get message soon on your email</div>
      </div>
      {/* continues */}
    </div>
  )
}

export default ForgotPassword