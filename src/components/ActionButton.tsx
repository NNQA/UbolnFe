import React from "react";
import clsx from "clsx";
type buttonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};
const ActionButton = ({
  children,
  className,
  onClick,
}: buttonProps): React.ReactElement => {
  return (
    <button
      className={clsx(
        "w-fit border-[1px] border-gray-600 border-solid rounded-md",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ActionButton;
