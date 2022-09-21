import React, { useRef } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import SocialSignUp from "../SocialSignUp/SocialSignUp";
import { useState } from "react";

const SignUp = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const [agree, setAgree] = useState(false);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if(agree){
      createUserWithEmailAndPassword(email, password);
    }

    // console.log(name, email, password);
  };

  const navigateToLogin = (e) => {
    navigate("/login");
  };

  if (user) {
    navigate("/home");
  }

  return (
    <div className="login-container">
      <h1 className="text-primary text-center mt-5">Sign Up</h1>
      <div className="form-container">
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            ref={nameRef}
            type="name"
            placeholder="Enter name"
            required
          />
        </Form.Group>
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
        <Form.Group  controlId="formBasicCheckbox">
          <Form.Check onClick={()=> setAgree(!agree)} 
            className={`mb-3 ${agree ? 'text-success' : 'text-danger'}`}  
            type="checkbox" 
            label= " Accept Terms and Conditions" />
        </Form.Group>
        <Button disabled={!agree} className="w-75 d-block mx-auto" variant="primary" type="submit">
          Sign Up
        </Button>{" "}
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
          Already have an account?
          <button
            className="text-primary border-0 bg-white"
            onClick={navigateToLogin}
          >
            Login
          </button>
        </p>
        
      </Form>
      </div>
      <SocialSignUp></SocialSignUp>
    </div>
  );
};

export default SignUp;
