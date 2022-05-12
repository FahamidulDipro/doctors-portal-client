import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const MakeAppoinment = () => {
  return (
    <section
      className="flex justify-between items-center"
      style={{ background: `url(${appointment})` }}
    >
      <div className="flex-1">
        <img src={doctor} alt="doctor" className="mt-[-170px]" />
      </div>
      <div className="flex-1 text-white mt-10">
        <h3 className="text-xl text-primary text-left">Appointment</h3>
        <h1 className="text-3xl text-left">Make an appointment Today</h1>
        <p className="text-left	mt-10 w-3/4">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <div className="flex justify-start mt-5">
          <PrimaryButton>GET STARTED</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default MakeAppoinment;
