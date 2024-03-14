import { useState } from "react";
import AppLayout from "../../shared/ui/AppLayout";
import MainBodyLayout from "../../shared/ui/MainBodyLayout";
import CalendarTop from "./CalendarTop";
import CalendarMain from "./CalendarMain";

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  return (
    <AppLayout>
      <MainBodyLayout>
        <div className="w-full bg-white rounded-lg p-3 pb-1">
          <CalendarTop date={date} setDate={setDate} />
          <CalendarMain date={date} />
        </div>
      </MainBodyLayout>
    </AppLayout>
  );
};

export default Calendar;
