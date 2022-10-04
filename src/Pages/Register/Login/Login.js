import React, { useRef } from "react";
import './Login.css';
import { Button, Form, Spinner } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialSignUp from "../SocialSignUp/SocialSignUp";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DynamicTitle from "../../Shared/DynamicTitle/DynamicTitle";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading] =useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);

    console.log(email, password);
  };

  const navigateToRegister = (e) => {
    navigate("/signUp");
  };

  const resetPassword = async () =>{
    const email = emailRef.current.value;
    if(email){
      await sendPasswordResetEmail(email);
      toast('Sent email');
    }
    else{
      toast('Please, enter a email');
    }
  }

  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div className="login-container">
      <DynamicTitle title='Login'></DynamicTitle>
      <h1 className="text-primary text-center mt-5">Login </h1>
      <div className="form-container">
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Button
            className="w-75 d-block mx-auto"
            variant="primary"
            type="submit"
          >
            Login
          </Button>
          <br />
          {loading && (
            <div className="text-center">
              <Button variant="primary" disabled>
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                Loading...
              </Button>
            </div>
          )}
          <p className="mt-4">
            New to Car Doctor?{" "}
            <button
              className="text-primary border-0 bg-white"
              onClick={navigateToRegister}
            >
              please register
            </button>{" "}
          </p>
          
        </Form>
        <p className="mt-4">
            Forget Password?
            <button
              className="text-primary border-0 bg-white"
              onClick={resetPassword}
            >
              Reset Password
            </button>
          </p>
      </div>
      <SocialSignUp></SocialSignUp>
      <ToastContainer />
    </div>
  );
};

export default Login;
