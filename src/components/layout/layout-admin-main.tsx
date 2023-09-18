import React from "react";
import { motion } from "framer-motion";
type quoteInter = {
  children: React.ReactNode;
  title?: string;
};
const LayoutMain = ({ children, title }: quoteInter): React.ReactElement => {
  const words = title ? Array.from(title) : [];

  const container = {
    hidden: {
      opacity: 0,
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.0004 * i,
      },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "string",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "string",
        damping: 12,
        stiffness: 100,
      },
    },
  };
  return (
    <div className="w-full flex flex-col px-[5rem] py-[4rem] gap-12 relative">
      <motion.h1
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex overflow-hidden text-fiord-cfg-400"
      >
        {words?.map((item, idx) => (
          <motion.p variants={child} key={idx}>
            {item === " " ? "\u00A0" : item}
          </motion.p>
        ))}
      </motion.h1>
      <div>{children}</div>
    </div>
  );
};

export default LayoutMain;
