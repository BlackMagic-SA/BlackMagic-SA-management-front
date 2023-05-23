import React from "react";
import LoginForm from "./LoginForm";

const LoginContainer = ({ setIsLogined }) => {
  return (
    <div>
      <LoginForm setIsLogined={setIsLogined} />
    </div>
  );
};

export default LoginContainer;
