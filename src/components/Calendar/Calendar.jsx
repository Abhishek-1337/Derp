import { useState } from "./CalendarTop";
import AppLayout from "../../shared/ui/AppLayout";
import MainBodyLayout from "../../shared/ui/MainBodyLayout";
import CalendarTop from "./CalendarTop";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  return (
    <AppLayout>
      <MainBodyLayout>
        <CalendarTop
          currentDate={currentDate}
          setCurrentnDate={setCurrentDate}
        />
      </MainBodyLayout>
    </AppLayout>
  );
};

export default Calendar;
