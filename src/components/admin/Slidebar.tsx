import React from "react";
import { data } from "../../lib/data/dataSlidebar";
import Icon from "../Icon";
import { NavLink } from "react-router-dom";
import Svg from "../Svg";

const Slidebar = (): React.ReactElement => {
  return (
    <div
      className="w-[15%] flex flex-col h-screen gap-10 py-[0.5rem] border-r-[2px] 
        border-solid border-opacity-60 bg-ebony-clay-500 text-white "
    >
      <div id="progress-bar" className="bg-black"></div>
      <div className="flex flex-col gap-8 w-full">
        <div className="w-full flex justify-end">
          <div className="flex gap-5 items-start cursor-pointer w-[80%] tetxt-white py-2 px-2 ">
            <Svg></Svg>
            <p>UBULON BUSINESS</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 w-full">
        {data.map(({ ...fakedata }, idx) => (
          <div key={idx} className="w-full flex justify-end">
            <NavLink
              to={`/admin/${fakedata.link}`}
              className={({ isActive, isPending }) =>
                `${
                  isPending
                    ? ""
                    : isActive
                    ? "bg-yellow-cfg-200 text-fiord-cfg-400 font-bold"
                    : ""
                } flex  gap-5  items-start cursor-pointer w-[80%] hover:bg-yellow-cfg-200 hover:text-fiord-cfg-400
                 tetxt-white  py-2 px-2 rounded-l-full hover:font-bold font-medium`
              }
            >
              <div className="">
                <Icon
                  iconName={fakedata.iconName}
                  className="h-[1.4rem]"
                ></Icon>
              </div>
              <div className="">
                <p className="text-[1rem] pb-[0.2px]">{fakedata.name}</p>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slidebar;
