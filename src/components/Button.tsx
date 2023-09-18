import React from "react";
import clsx from "clsx";

type buttonProps = {
  children: React.ReactNode;
  className?: string;
  props?: any;
  onClick?: () => void;
};
const Button = ({
  children,
  className,
  props,
  onClick,
}: buttonProps): React.ReactElement => {
  return (
    <div
      className={clsx(
        "bg-blue-ribbon-400 text-white flex items-center shadow-md shadow-blue-ribbon-500/20 rounded-md justify-center pt-[0.4rem] pb-[0.4rem]",
        className
      )}
    >
      <button {...props} className="text-sm font-normal" onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
