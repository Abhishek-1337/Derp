import { createPortal } from "react-dom";
import { useEffect } from "react";

const Modal = ({ isOpen, onCancel }) => {
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
      } absolute top-0 right-0 left-0 bottom-0 h-screen w-[100vw] z-50`}
    >
      <div className="absolute bg-blue-300 opacity-40 top-0 w-full h-screen"></div>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[50vw] min-h-[80vh] bg-white m-auto rounded-lg"></div>
      {/* <div
        className="bg-white w-screen absolute top-0 left-0 z-40 h-screen opacity-50"
        onClick={onCancel}
      ></div>
      <div className="h-screen w-screen z-49 m-4 absolute z-50 top-0 right-0 bottom-0">
        <div className="max-w-[60vw] h-[80vh] bg-white m-auto rounded-xl shadow-lg shadow-gray-500">
          Hello
        </div>
      </div> */}
      hello
    </div>,
    document.body
  );
};

export default Modal;
