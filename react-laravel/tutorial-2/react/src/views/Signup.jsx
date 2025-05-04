import React, { useRef } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client";
import { useStateContext } from "../context/ContextProvider";
import { useState } from "react";

export default function Signup() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  const { setUser, setToken } = useStateContext();

  const [errors, setErrors] = useState(null);

  const onSubmit = (ev) => {
    ev.preventDefault();

    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    };

    console.log(payload);

    axiosClient
      .post("/signup", payload)
      .then(({ data }) => {
        // console.log("Backend response:", data);
        setUser(data.user);
        setToken(data.token);
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setErrors(response.data.errors);
        }
      });
  };

  return (
    <div className="login-signup-form animated fadeInDown">
      <div className="form">
        <form onSubmit={onSubmit}>
          <h1 className="title">Signup for Free!</h1>
          {errors && (
            <div className="alert">
              {Object.keys(errors).map((key) => (
                <p key={key}>{errors[key][0]}</p>
              ))}
            </div>
          )}
          <input
            ref={nameRef}
            type="text"
            name=""
            placeholder="Fullname"
            id=""
          />
          <input
            ref={emailRef}
            type="text"
            name=""
            placeholder="Email Address"
            id=""
          />
          <input
            ref={passwordRef}
            type="password"
            name=""
            placeholder="Password"
            id=""
          />
          <input
            ref={passwordConfirmationRef}
            type="password"
            name=""
            placeholder="Password Confirmation"
            id=""
          />
          <button className="btn btn-block">Signup</button>
          <p className="message">
            Already Registered? <Link to="/login">Sign In!</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
