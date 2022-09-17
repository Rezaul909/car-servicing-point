import React from "react";
import { FaGoogle, FaFacebookSquare, FaGithub } from "react-icons/fa";

const SocialSignUp = () => {
  return (
    <div className="text-center">
      <h3>or</h3>
      <div className="d-flex align-items-center justify-content-evenly">
        <div style={{height:'3px'}} className="bg-secondary border w-25"></div>
        <span>Sign Up with</span>
        <div style={{height:'3px'}} className="bg-secondary border w-25"></div>
      </div>

      <div className="mt-3 d-flex align-items-center justify-content-evenly">
        <button className="btn btn-info fs-5 my-2 px-5">
            <FaGoogle size='1.5em' color="green"></FaGoogle> Google
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
