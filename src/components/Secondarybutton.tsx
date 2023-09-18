import React from "react";
import clsx from "clsx";
type buttonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};
const Secondarybutton = ({
  children,
  className,
  onClick,
}: buttonProps): React.ReactElement => {
  return (
    <button
      className={clsx(
        "w-fit border-[2px] border-fiord-cfg-100 border-solid rounded-md",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Secondarybutton;
