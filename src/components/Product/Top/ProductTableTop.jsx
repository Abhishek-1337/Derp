import { useState } from "react";
import ChevronDown from "../../../shared/components/ChevronDown";

const ProductTableTop = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedOption, setSelectedOption] = useState(null);
  const options = [5, 10, 15, 20];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <div className=" flex items-center justify-between">
      <div className="flex items-center gap-2 text-xs">
        {/*dropdown and span*/}
        <div className="w-[55px] p-1">
          <button
            className="rounded border-2 border-myblue text-center p-1 flex justify-between gap-1 items-center shadow-md shadow-myblue"
            onClick={toggleMenu}
          >
            {selectedOption ? selectedOption : 10}
            <ChevronDown />
          </button>
          {isOpen && (
            <div className="rounded border-2 text-center absolute bg-white w-[55px]">
              {options.map((option, index) => (
                <div
                  key={index}
                  className="hover:bg-myblue hover:text-white rounded"
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
        <span>entries per page </span>
      </div>
      <div>
        <input
          className="border-2 w-[150px] text-xs p-1 outline-none focus:border-myblue shadow-md"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default ProductTableTop;
