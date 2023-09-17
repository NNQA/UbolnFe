import React from "react";
import { data } from "../../lib/data/dataSlidebar";
import Icon from "../Icon";

const Slidebar = (): React.ReactElement => {
  return (
    <div
      className="w-[16%] flex flex-col h-screen gap-12 py-[5rem] border-r-[2px] 
    rounded-r-lg border-solid border-opacity-60 bg-ebony-clay-500 text-white
    "
    >
      <div className="flex flex-col gap-8 w-full">
        <div className="w-full flex justify-end">
          <p className="flex gap-5 items-start cursor-pointer w-[80%] tetxt-white  py-2 px-2 ">
            UBULON BUSINESS
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-8 w-full">
        {data.map(({ ...fakedata }, idx) => (
          <div key={idx} className="w-full flex justify-end">
            <div
              className="flex  gap-5  items-start cursor-pointer w-[80%] hover:bg-yellow-cfg-300 hover:text-fiord-cfg-400
            tetxt-white  py-2 px-2 rounded-l-full hover:font-bold font-medium"
            >
              <div className="">
                <Icon iconName={fakedata.iconName} className=""></Icon>
              </div>
              <div className="mt-[0.2px]">
                <p className="text-[1.2rem]">{fakedata.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slidebar;
