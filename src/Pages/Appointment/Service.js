import React from "react";

const Service = ({ service }) => {
  const { name, slots } = service;
  return (
    <div class="card w-3/4 bg-base-100 shadow-xl container mx-auto ">
      <div class="card-body ">
        <h2 className="card-title  text-secondary text-center">{name}</h2>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
