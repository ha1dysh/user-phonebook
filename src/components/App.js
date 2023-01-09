import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import authOperations from "../redux/authApi";
import { isFetchingCurrentUser } from "../redux/authSlice";

import Contacts from "../pages/Contacts";
import Register from "../pages/Register";
import Login from "../pages/Login";

import Layout from "./Layout/Layout";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

export default function App() {
  const isFetching = useSelector(isFetchingCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser(localStorage.getItem("token")));
  }, [dispatch]);

  return (
    !isFetching && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />

          <Route
            path="register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
        </Route>
      </Routes>
    )
  );
}
