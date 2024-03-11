import { createPortal } from "react-dom";
import { useEffect } from "react";

const Modal = ({ isOpen, onCancel, data, title }) => {
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

  console.log("modal");

  return createPortal(
    <div
      className={`${
        isOpen ? "" : "hidden"
      } fixed top-0 right-0 left-0 bottom-0  w-[100vw] z-20`}
    >
      <div
        className="absolute bg-blue-300 opacity-40 top-0 w-full h-screen z-10"
        onClick={onCancel}
      ></div>
      <div className="absolute top-0 right-0 bottom-0 left-0 max-w-[500px] max-h-max  m-auto z-30  p-4">
        <header className="bg-gray-500 rounded-t-2xl p-2 text-center text-white font-medium ">
          {title}
        </header>
        <section className="flex items-center justify-center bg-white p-4 ">
          {data}
        </section>
        <footer className="bg-gray-500 rounded-b-2xl p-2 text-center text-white font-medium  shadow-lg shadow-gray-300"></footer>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
