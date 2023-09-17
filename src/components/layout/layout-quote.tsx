import React from "react";

type quoteInter = {
  children: React.ReactNode;
};
const LayoutQuote = ({ children }: quoteInter): React.ReactElement => {
  return (
    <div className="w-full flex justify-center items-center">{children}</div>
  );
};

export default LayoutQuote;
