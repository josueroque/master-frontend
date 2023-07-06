import React from "react";
import logo from "./images/bee.png";

export const HelloWorldComponent: React.FC = () => {
  return (
    <div className="container">
      <h1>Hola Mundo </h1>
      <div>
        <img src={logo} />
      </div>
    </div>
  );
};
