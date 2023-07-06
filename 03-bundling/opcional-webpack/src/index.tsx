import React from "react";
import { createRoot } from "react-dom/client";
import logo from "./images/bee.png";
import classes from "./styles.scss";

const root = createRoot(document.getElementById("root") as HTMLElement);

console.log("Env Variable", process.env.TEST_VARIABLE);

root.render(
  <div className={classes.container}>
    <h1>Hola Mundo </h1>
    <div>
      <img src={logo} />
    </div>
  </div>
);
