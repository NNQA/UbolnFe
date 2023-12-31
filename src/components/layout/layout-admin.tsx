import React from "react";
import Slidebar from "../admin/Slidebar";

type LayoutProps = {
  children: React.ReactNode;
};
const LayoutAdmin = ({ children }: LayoutProps): React.ReactElement => {
  return (
    <>
      <div className="min-h-screen flex w-full">
        <Slidebar></Slidebar>
        {children}
      </div>
    </>
  );
};

export default LayoutAdmin;
