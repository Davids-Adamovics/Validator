/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from '../Header'
import { useNavigate } from 'react-router-dom';
import Validation from './SignUpValidation';
import axios from "axios";

const SignUp = () => {
    const navigateTo = useNavigate();

    const [values, setvalues] = useState({
        name: '',
        email: '',
        password: ''
      })
      const navigate = useNavigate();
      const [errors, setErrors] = useState({})
      const handleInput =(event) => {
        setvalues(prev => ({...prev, [event.target.name]: [event.target.value]}))
      }
      const handleSubmit =(event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.name === "" && errors.email === "" && errors.password === ""){
          console.log("working");
          axios.post("http://localhost:8081/signup", values)
          .then(res => {
            navigate('/Login');
          })
          .catch(err => console.log(err))
        }
      }



    return (
      <>
      <Header />
      <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
        <div className="bg-white p-3 rounded w-25">
            <h1>Sign up</h1>
          <form action="" onSubmit={handleSubmit}>
  
          <div className="mb-3">
              <label htmlFor="name">Name</label>
              <input type="name" placeholder="Enter Name" name='name'
              onChange={handleInput} className="form-control rounded-0"/>
              {errors.name && <span className="text-danger"> {errors.name}</span>}
            </div>
            <div className="mb-3">
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="Enter Email" name='email'
              onChange={handleInput} className="form-control rounded-0"/>
              {errors.email && <span className="text-danger"> {errors.email}</span>}
            </div>
            <div className="mb-3">
              <label htmlFor="password">Password</label>
              <input type="password" placeholder="Enter Password" name='password'
              onChange={handleInput} className="form-control rounded-0"/>
              {errors.password && <span className="text-danger"> {errors.password}</span>}
            </div>
  
            <button type='submit' className="btn btn-success w-100">Sign up</button>
            <p>You are agree to out terms and policies</p>
            <button className="btn btn-default border w-100" onClick={ () => {navigateTo('/Login')}}>Already have an account? Log in</button>
          </form>
        </div>
      </div>
      </>
    );
  };

export default SignUp