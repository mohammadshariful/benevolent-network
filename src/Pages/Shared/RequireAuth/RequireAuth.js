import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import VerifyEmail from "../../VerifyEmail/VerifyEmail";
const RequireAuth = ({ children }) => {
  const user = "shriful";
  let location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (user === "shriful") {
    return <VerifyEmail />;
  }
  return children;
};

export default RequireAuth;
