import React from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
  const [user, loading] = useAuthState(auth);
  const { _id, name, slots } = treatment;

  const formattedDate = format(date, "PP");
  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    console.log(_id, slot, name, email, phone);

    //Data for posting to the collection
    const booking = {
      treatmentId: treatment._id,
      treatment: treatment.name,
      date: formattedDate,
      slot: slot,
      patientName: user.displayName,
      email: user.email,
      phone: event.target.phone.value,
    };

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          toast("Appoinment is set in", { formattedDate }, "at ", { slot });
        } else {
          toast.error("Appoinment already exists!");
        }
        refetch();
        setTreatment(null);
        console.log(result);
      });
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
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot, index) => (
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
