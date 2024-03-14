import Day from "./Day";

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
    <div className="overflow-auto h-[70vh]">
      <div className="w-[600px] md:w-[750px] lg:w-full border-2 grid grid-cols-7 text-center font-medium text-lg bg-gray-300">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((item) => {
          return (
            <div
              key={item}
              className="border-2 h-[70px] w-full text-sm leading-10"
            >
              {item}
            </div>
          );
        })}
        {generateDays().map((day, index) => {
          return <Day day={day} key={index} date={date} />;
        })}
      </div>
    </div>
  );
};

export default CalendarMain;
