/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import { useNavigate } from 'react-router-dom';
import Validation from "../Validations/LoginValidation";
import axios from "axios";
import Header from "../Header/Header";

const LoginForm = ({ setLoggedIn }) => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));

    if (errors.email === "" && errors.password === "") {
      axios.post("http://localhost:8081/login", values)
        .then(res => {
          if (res.data === "Success") {
            setLoggedIn(true);
            navigate('/Main');
          } else {
            alert("No record existed");
          }
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <>
      <Header />
      <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
        <div className="bg-white p-3 rounded w-25">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="Enter Email" name="email"
                onChange={handleInput} className="form-control rounded-0" />
              {errors.email && <span className="text-danger">{errors.email}</span>}
            </div>
            <div className="mb-3">
              <label htmlFor="password">Password</label>
              <input type="password" placeholder="Enter Password" name="password"
                onChange={handleInput} className="form-control rounded-0" />
              {errors.password && <span className="text-danger">{errors.password}</span>}
            </div>
            <button type="submit" className="btn btn-success w-100">Login</button>
            <p>You agree to our terms and policies</p>
            <button className="btn btn-default border w-100" onClick={() => { navigate('/SignUp') }}>Create Account</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
