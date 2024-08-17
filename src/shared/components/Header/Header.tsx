import React from "react";
import { useLocation } from "react-router-dom";
import "./Header.scss";
import useRedirect from "../../../utils/hooks/useRedirect";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../utils/interface";
import { removeUser } from "../../../utils/appStore/slices/userSlice";

const Header: React.FC = () => {
  const redirect = useRedirect("/login");
  const redirectToHome = useRedirect("/");
  const location = useLocation();
  const dispatch = useDispatch();
  const userInfo = useSelector((store: RootState) => store.user);

  const handleSignOut = () => {
    dispatch(removeUser());
    redirectToHome();
  };

  return (
    <div className="header-container">
      <div className="logo" onClick={redirectToHome}>
        <img src="assets/logo.png" alt="netflix-logo" />
      </div>
      {location.pathname === "/" && (
        <div className="sign-in-btn">
          <button onClick={redirect}>Sign In</button>
        </div>
      )}
      {location.pathname === "/browse" && userInfo && (
        <div className="sign-in-btn">
          <div className="flex">
            <small>{userInfo.displayName}</small>
            <small>{userInfo.email}</small>
          </div>
          <button onClick={handleSignOut}>Sign out</button>
        </div>
      )}
    </div>
  );
};

export default Header;
