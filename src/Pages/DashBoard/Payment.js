import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const Payment = () => {
  const { appoinmentId } = useParams();
  const url = `http://localhost:5000/booking/${appoinmentId}`;
  const { data: appoinment, isLoading } = useQuery(
    ["bookingInfo", appoinmentId],
    () =>
      fetch(url, {
        method: "GET",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div class="card w-96 bg-base-100 shadow-xl mt-10">
      <div class="card-body">
        <h1 className="text-3xl  font-bold text-left">
          Hello! {appoinment.patientName}
        </h1>
        <h2 class="card-title">
          Pay For <span className="text-secondary">{appoinment.treatment}</span>
        </h2>
        <p>
          We will see you{" "}
          <span className="text-orange-500 font-bold">{appoinment.date}</span>{" "}
          at{" "}
          <span className="text-orange-500 font-bold"> {appoinment.slot}</span>
        </p>
        <p>
          Please pay <span className="font-bold">${appoinment.price}</span>
        </p>
        <div class="card-actions justify-end">
          <button class="btn btn-secondary text-white">Pay Now</button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
