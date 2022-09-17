import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FaGoogle, FaFacebookSquare, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const SocialSignUp = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    if(user){
        navigate('/home')
    }

    let errorMassage;
    if (error) {

        errorMassage =  <div>
            <p className="text-danger">Error: {error.message}</p>
          </div>
      }

  return (
    <div className="text-center">
        {errorMassage}
      <h3>or</h3>
      <div className="d-flex align-items-center justify-content-evenly">
        <div style={{height:'3px'}} className="bg-secondary border w-25"></div>
        <span>Sign Up with</span>
        <div style={{height:'3px'}} className="bg-secondary border w-25"></div>
      </div>

      <div className="mt-3 d-flex align-items-center justify-content-evenly">
        <button onClick={()=> signInWithGoogle()} className="btn btn-info fs-5 my-2 px-5">
            <FaGoogle size='1.5em' color="blue"></FaGoogle> Google
        </button>
        <button className="btn btn-info fs-5 my-2 px-5">
            <FaFacebookSquare size='1.5em' color="blue"></FaFacebookSquare> Facebook
        </button>
        <button className="btn btn-info fs-5 my-2 px-5">
            <FaGithub size='1.5em'></FaGithub> GitHub
        </button>
      </div>
      
    </div>
  );
};

export default SocialSignUp;
