/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

export default function MainMenu() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        typography: "body1",
        "& > :not(style) ~ :not(style)": {
          ml: 2,
        },
      }}
      onClick={preventDefault}
    >
      <Link to="/list">{"Github Organizations"}</Link>
      <Link to="/rick-morty">{"Rick & Morty"}</Link>
      <Link to="/">{"Sign Out"}</Link>
    </Box>
  );
}
