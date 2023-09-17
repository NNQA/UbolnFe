import React from "react";

type quoteInter = {
  children: React.ReactNode;
  title?: string;
};
const LayoutMain = ({ children, title }: quoteInter): React.ReactElement => {
  return (
    <div className="w-full flex flex-col p-[5rem] gap-12">
      <h1 className="">{title}</h1>
      {children}
    </div>
  );
};

export default LayoutMain;
