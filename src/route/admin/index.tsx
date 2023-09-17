import React from "react";
import { Outlet } from "react-router-dom";
import LayoutAdmin from "../../components/layout/layout-admin";

function HomeAdmin() {
  return (
    <LayoutAdmin>
      <div className="h-full">
        <Outlet></Outlet>
      </div>
    </LayoutAdmin>
  );
}

export default HomeAdmin;
