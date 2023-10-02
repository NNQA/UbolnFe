import clsx from "clsx";
import React from "react";

type cartProps = {
  children: React.ReactNode;
  className?: string;
};
const LayoutCart = ({ children, className }: cartProps): React.ReactElement => {
  return (
    <>
      <div className={clsx("w-full h-full", className)}>{children}</div>
    </>
  );
};

export default LayoutCart;
