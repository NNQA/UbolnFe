import React from "react";

const Button = (props: any) => {
  return (
    <div
      className="bg-blue-ribbon-400 text-white w-full flex items-center shadow-md shadow-blue-ribbon-500/20
    rounded-md justify-center pt-[0.4rem] pb-[0.4rem]"
    >
      <button {...props.value} className="text-sm font-normal">
        {props.text}
      </button>
    </div>
  );
};

export default Button;
