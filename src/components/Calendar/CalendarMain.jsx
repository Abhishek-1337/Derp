const CalendarMain = ({ date }) => {
  const generateDays = () => {
    const days = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

    const daysArray = [];
    for (let i = 0; i < firstDay; i++) {
      daysArray.push(null);
    }

    for (let i = 1; i <= days; i++) {
      daysArray.push(i);
    }
    return daysArray;
  };
  return (
    <div>
      <div className="grid grid-cols-7 text-center font-medium text-lg bg-gray-300">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((item) => {
          return (
            <div key={item} className="border-2">
              {item}
            </div>
          );
        })}
        {generateDays().map((day, index) => {
          return (
            <div
              key={index}
              className={`${
                day == null ? "bg-red-300" : ""
              } bg-blue-300 border-2 p-4`}
            >
              {day !== null && day}
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-7 font-medium text-lg text-center"></div>
    </div>
  );
};

export default CalendarMain;
