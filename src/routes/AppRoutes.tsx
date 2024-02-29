import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import { publicRoutes } from "./routes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {publicRoutes.map(({ path, element }) => (
          <Route path={path} element={element} />
        ))}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
