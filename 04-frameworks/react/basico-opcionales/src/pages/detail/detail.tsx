import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";

export const DetailPage: React.FC = () => {
  const { id } = useParams();
  const location = useLocation();

  return (
    <>
      <h2>Hello from Detail page</h2>
      <h3>User Id: {id}</h3>
      <Link to={`/${location.state.previousPath}`}>Back to list page</Link>
    </>
  );
};
