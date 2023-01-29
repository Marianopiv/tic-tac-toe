import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import ProtectedRoutes from "../components/ProtectedRoutes";
import Register from "../components/Register";
import Provider from "../context/Provider";
import Home from "../home/Home";

const Rutas = () => {
  return (
    <>
      <BrowserRouter>
        <Provider>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoutes>
                  <Home />
                </ProtectedRoutes>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  );
};

export default Rutas;
