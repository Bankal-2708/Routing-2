import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./useAuth";

function RequiredAuth({ children }) {
  const auth = useAuth();
  if (!auth.user) {
    return (
      <div>
        <Navigate to="/login" />
      </div>
    );
  }
  return children;
}

export default RequiredAuth;
