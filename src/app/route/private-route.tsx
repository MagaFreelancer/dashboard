import React, { type JSX } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute: React.FC = (): JSX.Element => {
    const auth = true;
    return auth ? <Outlet /> : <Navigate to="/login" />;
};
