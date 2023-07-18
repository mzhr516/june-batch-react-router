import React from "react";
import { useNavigate } from "react-router-dom";

export const ContactPage = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/about");
  };
  return (
    <div>
      ContactPage container
      <button onClick={onClick}>to about page</button>
    </div>
  );
};
