import React from "react";
import { useNavigate } from "react-router-dom";

export const AboutUsPage = () => {
  const navigate = useNavigate();

  const click = () => {
    navigate(-1);
  };
  
  return (
    <div>
      AboutUsPage
      <br />
      <button onClick={click}>back to previous path</button>
    </div>
  );
};
