import React from "react";
import "./InfoCard.css";
const InfoCard = ({ img, cardTitle }) => {
  return (
    <div class="card lg:card-side bg-base-100 shadow-xl text-left text-white font-bold bg-gradient-to-r from-secondary to-primary w-3/4		  cursor-pointer infocard">
      <figure className="p-5">
        <img src={img} alt="Album" />
      </figure>
      <div class="card-body text-white">
        <h2 class="card-title">{cardTitle}</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
};

export default InfoCard;
