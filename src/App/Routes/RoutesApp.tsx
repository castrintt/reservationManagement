/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Common, Client } from "./LazyRoutes";
// import ProtectedRoute from "./ProtectedRoute";
import Loading from "../Components/Loading/Loading";

const RoutesApp = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Common.Login />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
          {/* <Route
            path="/protected-ex"
            element={
              <ProtectedRoute>
                <LAZY_ROUTES.Ex />
              </ProtectedRoute>
            }
          /> */}
          {/* UNAUTHORIZE + NOTFOUND */}
          <Route path="unauthorize" element={<Common.Unauthorize />} />
          <Route path="not-found" element={<Common.NotFound />} />
        </Routes>
      </Suspense>
    </React.Fragment>
  );
};

export default RoutesApp;
