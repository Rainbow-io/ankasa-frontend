// import internal modules
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// import external modules
import Input from '../../../components/base/Input';
import Button from '../../../components/base/Button';
import '../index.css';

const SignUp = () => {
  const [formSignUp, setFormSignUp] = useState({
    fullname: '',
    email: '',
    password: ''
  })

  const [formSignUpError, setFormSignUpError] = useState(false);
  const [passHidden, setPassHidden] = useState(true);
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false)

  const handleChange = (e) => {
    setFormSignUp({
      ...formSignUp,
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

  const validateSignUp = (values) => {
    const errors = {};
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!values.fullname) {
      errors.fullname = "Full name required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Email address invalid";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password at least 6 character";
    }
    return errors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultValidate = validateSignUp(formSignUp);
    setFormSignUpError(resultValidate);
    handleClick(resultValidate);
  }

  const handleClick = (resultValidate) => {
    if (Object.keys(resultValidate).length === 0) {
      setFormSignUpError(false)
      setLoading(true)
      console.log(formSignUp)
    }
  }

  const handleChecked = (e) => {
    setChecked(e.target.checked)
    if (checked === true) {
      setFormSignUpError(false)
    }
  }
  return (
    <div className="wrapper-form">
      <Link to={"/auth/login"} className="d-flex mascot text-decoration-none text-black">
        <img src={require("../../../assets/icons/plane-mascot-authpages.svg").default} alt="plane-mascot-authpages" />
        <div className="fw-bold fs-4 ms-2">Ankasa</div>
      </Link>
      <div className="fw-bold fs-4 login-banner">Register</div>
      <div className="mt-5 form-wrapper">
        <Input
          type="text"
          name="fullname"
          placeholder="Full Name"
          onChange={handleChange}
          value={formSignUp.fullname}
          className="py-3 px-3 row border-1 my-3 bg-transparent border-0 border-bottom w-100" />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={formSignUp.email}
          className="py-3 px-3 row border-1 my-3 bg-transparent border-0 border-bottom w-100" />
        {passHidden === true ? (
          <>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={formSignUp.password}
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
              value={formSignUp.password}
              className="py-3 px-3 row border-1 my-3 bg-transparent border-0 border-bottom w-100" />
            <img onClick={() => handleHiddenPass()} className="position-relative float-end icon-eyeslash" src={require("../../../assets/icons/eye-loginpage.svg").default} alt="icon-eyeslash-loginpage" />
          </>
        )}

      </div>
      <div className="text-center my-3 text-primary">{formSignUpError.fullname || formSignUpError.email || formSignUpError.password}</div>
      <Button isLoading={loading} disabled={checked ? false : true} onClick={handleSubmit} className="btn-login py-3 px-5 mt-3 mb-3 text-white w-100 fw-bold text-center">Sign Up</Button>
      <div className="d-flex">
        <Input type="checkbox" id="tos" value="true" onChange={e => handleChecked(e)} />
        <div className="ms-3">Accept terms and condition</div>
      </div>
      <hr className="mt-5" />
      <div className="d-flex flex-column">
        <div className="align-self-center">Already have an account?</div>
        <Link to={"/auth/login"} className="btn-login-signup py-3 px-5 mt-3 mb-3 text-primary w-100 fw-bold text-center text-decoration-none">Sign In</Link>
      </div>
    </div>
  )
}

export default SignUp