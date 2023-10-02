import React from "react";
import LayoutCart from "../layout-cart";
import Secondarybutton from "../Secondarybutton";
import Input from "../Input";

const Cartquote = (props: any) => {
  return (
    <LayoutCart className="p-[1rem] flex flex-col gap-5">
      <div className="w-full flex justify-between items-center h-fit">
        <h2 className="text-fiord-cfg-400">Add quote</h2>
        <Secondarybutton
          className="px-[0.3rem] rounded-full text-xs mb-1 font-bold text-fiord-cfg-400"
          onClick={props.onClick}
        >
          X
        </Secondarybutton>
      </div>
      <div className="w-full">
        <div className="w-full flex gap-12">
          <Input
            label="Quote name"
            input={{
              id: "quote",
              type: "text",
              name: "quote",
              placeholder: "Enter name quote",
            }}
          ></Input>
          <Input
            label="Branch"
            input={{
              id: "branch",
              type: "text",
              name: "branch",
              placeholder: "Enter branch name",
            }}
          ></Input>
        </div>
      </div>
    </LayoutCart>
  );
};

export default Cartquote;
