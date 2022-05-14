import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;

  return (
    <div className="card w-3/4 bg-base-100 shadow-xl container mx-auto mt-10">
      <div className="card-body ">
        <h2 className="card-title  text-secondary justify-center">{name}</h2>
        <p>
          {slots.length > 1 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">Try another day</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-center ">
          <label
            htmlhtmlFor="booking-modal"
            className="btn bg-gradient-to-r from-secondary to-primary border-0 text-white btn modal-button"
            disabled={slots.length === 0}
            onClick={() => {
              setTreatment(service);
            }}
          >
            Book Appoinment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
