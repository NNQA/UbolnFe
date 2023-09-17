import { Outlet } from "react-router-dom";
import LayoutAdmin from "../../components/layout/layout-admin";

function HomeAdmin() {
  return (
    <LayoutAdmin>
      <div className="h-full w-[84%]">
        <Outlet></Outlet>
      </div>
    </LayoutAdmin>
  );
}

export default HomeAdmin;
