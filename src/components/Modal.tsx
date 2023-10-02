import React from "react";
import ReactDOM from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

const BackDrop = (props: any) => {
  return (
    <AnimatePresence>
      {props.show && (
        <motion.div
          initial={{ scaleX: 0, scaleY: 0.005 }}
          animate={{ scaleX: 1, scaleY: 1 }}
          transition={{ scaleX: { delay: 0 }, scaleY: { delay: 0.5 } }}
          exit={{
            scaleY: 0.005,
            scaleX: 0,
            transition: {
              delay: 0.3,
              scaleX: { delay: 0.5 },
              scaleY: { delay: 0 },
            },
          }}
          className="fixed top-0 left-0 w-full h-screen z-20 bg-opacity-50 bg-black"
          onClick={props.onClose}
        ></motion.div>
      )}
    </AnimatePresence>
  );
};
const ModalOverlay = (props: any): React.ReactElement => {
  return (
    <AnimatePresence>
      {props.show && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.7, duration: 0.2 }}
          exit={{
            scale: 0,
            opacity: 0,
            transition: {
              delay: 0,
            },
          }}
          className="fixed top-[20%] left-[30%] transform translate-x-1/2 translate-y-1/2 bg-white z-30 h-[50%] w-[40%]"
        >
          <div className="">{props.children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
const portalElement: Element | DocumentFragment | null =
  document.getElementById("overlays");

type modalProp = {
  children: React.ReactNode;
  show?: boolean;
  onClose?: () => void;
};
const Modal = ({ children, onClose, show }: modalProp): React.ReactElement => {
  console.log(portalElement);
  if (!portalElement) {
    return <></>;
  }
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop onClose={onClose} show={show}></BackDrop>,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay show={show}>{children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
