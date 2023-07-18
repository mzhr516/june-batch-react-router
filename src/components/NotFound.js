import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const NotFound = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  }, []);
  return (
    <>
      {/* <Navigate to="/" /> */}
      <h1>404 not found</h1>
    </>
  );
};
