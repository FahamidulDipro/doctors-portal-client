import { format } from "date-fns";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppoinmentBanner = ({ children }) => {
  const [date, setDate] = useState(new Date());
  return (
    <div class="hero min-h-screen ">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src={children}
          class="max-w-sm rounded-lg shadow-2xl"
          alt="dentistChair"
        />
        <div>
          <DayPicker mode="single" selected={date} onSelect={setDate} />
          <p>You have selected {format(date, "PP")}</p>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentBanner;
