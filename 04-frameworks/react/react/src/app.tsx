import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./login";
import { ListPage } from "./pages/list/list";
import { DetailPage } from "./pages/detail/detail";
import { ListContextProvider } from "./context/list-context";

export const App = () => {
  return (
    <Router>
      <ListContextProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </ListContextProvider>
    </Router>
  );
};
