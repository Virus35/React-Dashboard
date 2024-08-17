import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../utils/interface";

interface PublicRouteProps {
  element: React.ReactElement;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ element }) => {
  const user = useSelector((state: RootState) => state.user);
  const location = useLocation();

  if (user) {
    // Redirect to browse if authenticated
    return <Navigate to="/browse" state={{ from: location }} replace />;
  }

  return element;
};

export default PublicRoute;
