import React from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const BookingModal = ({ date, treatment }) => {
  const [user,loading] = useAuthState(auth);
  const { _id, name, slots } = treatment;
  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    console.log(_id, slot, name, email, phone);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Booking For: <span className="text-secondary">{name}</span>
          </h3>
          <form onSubmit={handleBooking}>
            <input
              type="text"
              value={format(date, "PP")}
              disabled
              className="input input-bordered w-full max-w-xs my-2"
            />
            <select name="slot" className="select select-bordered w-full max-w-xs">
              {slots.map((slot,index) => (
                <option key={index}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              value={user?.displayName || ""}
              placeholder="Your Name"
              disabled
              className="input input-bordered w-full max-w-xs my-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={user?.email || ""}
              disabled
              className="input input-bordered w-full max-w-xs my-2"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs my-2"
            />
            <input
              type="submit"
              value="SUBMIT"
              className="input input-bordered w-full max-w-xs my-1 bg-accent text-white cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
