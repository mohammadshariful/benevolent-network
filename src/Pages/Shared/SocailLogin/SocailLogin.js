import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import googleImg from "../../../Assets/social-icon/icons8-google-30.png";
import auth from "../../../Firebase/Firebase.init";
import Loading from "../Loading/Loading";
import "./SocailLogin.css";
const SocailLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate]);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      {error && <p className="error">{error.message}</p>}
      <p
        onClick={() => signInWithGoogle()}
        className="d-flex justify-content-center align-items-center social-login social-login"
      >
        <img src={googleImg} alt="" />
        <span>Continue with Google</span>
      </p>
    </>
  );
};

export default SocailLogin;
