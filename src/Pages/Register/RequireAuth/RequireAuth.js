import React from "react";
import { Button, Spinner } from "react-bootstrap";
import { useAuthState, useSendEmailVerification } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
  const location = useLocation();

  if (loading) {
    return (
      <div className=" mt-5 d-flex justify-content-center align-items-center">
        <>
          <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            <span className="visually-hidden">Loading...</span>
          </Button>{" "} &nbsp; 
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
        </>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }

  // if(!user.emailVerified){
  //   return <div>
  //     <h3 className='text-danger'>Your email is not verified!</h3>
  //     <h5 className='text-warning'>Please verify your email address</h5>
  //     <button 
  //       className='btn btn-primary' 
  //       onClick={async ()=>{
  //         await sendEmailVerification();
  //       }}>
  //     </button>
  //   </div>
  // }

  return children;
};

export default RequireAuth;
