import { useEffect, useState } from "react";

const TableTop = ({ selectedValue, handleChange, searchFilterOnData }) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      searchFilterOnData(value);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  const handleSearchOnChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className=" flex items-center justify-between">
      <div className="flex items-center gap-2 text-xs">
        {/*dropdown and span*/}
        <div className="p-1">
          <select
            className="border-2 rounded-lg p-1"
            value={selectedValue}
            onChange={handleChange}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
        <span className="text-[12px] md:text-[13px] font-thin">
          entries per page{" "}
        </span>
      </div>
      <div>
        <input
          className="border-[1.19px] w-[150px] text-[12px] md:text-[14px] rounded-lg p-1 outline-none focus:border-blue-700 shadow-sm  shadow-blue-700"
          placeholder="Search..."
          onChange={handleSearchOnChange}
          value={value}
        />
      </div>
    </div>
  );
};

export default TableTop;
