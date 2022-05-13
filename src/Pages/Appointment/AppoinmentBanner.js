import { format } from "date-fns";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppoinmentBanner = ({ children, date, setDate }) => {
  return (
    <div class="hero min-h-screen ">
      <div class="hero-content flex-col lg:flex-row-reverse justify-between">
        <img
          src={children}
          class="max-w-sm rounded-lg shadow-2xl"
          alt="dentistChair"
        />
        <div className="mr-10 rounded-lg shadow-2xl">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
      </div>
    </div>
  );
};

export default AppoinmentBanner;
