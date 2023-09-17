import React from "react";
import clsx from "clsx";

type buttonProps = {
  children: React.ReactNode;
  className?: string;
  props?: any;
};
const Button = ({
  children,
  className,
  props,
}: buttonProps): React.ReactElement => {
  console.log(props);
  return (
    <div
      className={clsx(
        "bg-blue-ribbon-400 text-white flex items-center shadow-md shadow-blue-ribbon-500/20 rounded-md justify-center pt-[0.4rem] pb-[0.4rem]",
        className
      )}
    >
      <button {...props} className="text-sm font-normal">
        {children}
      </button>
    </div>
  );
};

export default Button;
