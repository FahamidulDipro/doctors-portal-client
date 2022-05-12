import React from "react";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import Service from "./Service";
const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Floride Treatment",
      description: "This is Floride Treatment",
      img: fluoride,
    },
    {
      _id: 2,
      name: "Cavity Filling",
      description: "This is Floride Treatment",
      img: cavity,
    },
    {
      _id: 3,
      name: "Floride Treatment",
      description: "This is Floride Treatment",
      img: whitening,
    },
  ];
  return (
    <div className="flex justify-center my-5">
      <div className="text-center my-28 ">
        <h1 className="text-primary text-xl font-bold">Our Services</h1>
        <p className="text-3xl ">Services we provide</p>
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-10 my-28">
          {services.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
