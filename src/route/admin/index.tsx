import { Outlet, useLocation, useNavigate } from "react-router-dom";
import LayoutAdmin from "../../components/layout/layout-admin";
import { useEffect } from "react";

function HomeAdmin() {
  let location = useLocation();
  const nagigate = useNavigate();
  useEffect(() => {
    if (location.pathname === "/admin") {
      nagigate("/admin/Dashboard");
    }
  }, [location]);

  return (
    <LayoutAdmin>
      <div className="h-full w-[84%]">
        <Outlet></Outlet>
      </div>
    </LayoutAdmin>
  );
}

export default HomeAdmin;
