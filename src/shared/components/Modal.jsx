import { createPortal } from "react-dom";
import { useEffect } from "react";

const Modal = ({ isOpen, onCancel, data }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isOpen]);

  return createPortal(
    <div
      className={`${
        isOpen ? "" : "hidden"
      } absolute top-0 right-0 left-0 bottom-0 h-screen w-[100vw] z-20`}
    >
      <div
        className="absolute bg-blue-300 opacity-40 top-0 w-full h-screen z-10"
        onClick={onCancel}
      ></div>
      <div className="absolute top-0 right-0 bottom-0 left-0 max-w-[500px] max-h-max bg-white m-auto z-30 p-4 rounded-xl pt-6 pb-6">
        <div className="flex items-center justify-center">{data}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
