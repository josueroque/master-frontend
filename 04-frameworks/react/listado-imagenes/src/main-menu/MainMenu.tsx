/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

export default function MainMenu() {
  return (
    <Box
      sx={{
        marginTop: "10px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        typography: "body1",
        "& > :not(style) ~ :not(style)": {
          ml: 2,
        },
      }}
      className="layout-header"
      onClick={preventDefault}
    >
      <Link to="/cars">Cars</Link>
      <Link to="/motorcycles">Motorcycles</Link>
    </Box>
  );
}
