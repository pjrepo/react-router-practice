import React from "react";
import { Outlet } from "react-router-dom";
import StyledNavbar from "../components/StyledNavbar";

const SharedLayout = () => {
  return (
    <React.Fragment>
      <StyledNavbar />
      <Outlet />
    </React.Fragment>
  );
};

export default SharedLayout;
