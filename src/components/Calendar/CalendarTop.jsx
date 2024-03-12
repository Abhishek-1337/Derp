import ChevronLeft from "../../shared/icons/ChevronLeft";
import ChevronRight from "../../shared/icons/ChevronRight";

const CalendarTop = ({ date, setDate }) => {
  const prevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };
  return (
    <div className="flex items-center justify-center mb-4">
      <button onClick={prevMonth}>
        <ChevronLeft additionalStyles="text-white" />
      </button>
      <h2 className="text-lg min-w-[180px] text-center font-medium">
        {date.toLocaleString("default", { month: "long", year: "numeric" })}
      </h2>

      <button onClick={nextMonth}>
        <ChevronRight additionalStyles="text-white" />
      </button>
    </div>
  );
};

export default CalendarTop;
