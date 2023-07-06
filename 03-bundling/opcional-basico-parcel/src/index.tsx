import React from "react";
import { createRoot } from "react-dom/client";
import { HelloWorldComponent } from "./hello-world-component";

const root = createRoot(document.getElementById("root"));

root.render(
  <>
    <HelloWorldComponent />
  </>
);
