import React from "react";
import { format } from "date-fns";
const BookingModal = ({ date, treatment }) => {
  const { name, slots } = treatment;
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-lg font-bold">
            Booking For: <span className="text-secondary">{name}</span>
          </h3>
          <form>
            <input
              type="text"
              value={format(date, "PP")}
              disabled
              class="input input-bordered w-full max-w-xs my-1"
            />
            <select class="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Who shot first?
              </option>
              {slots.map((slot) => (
                <option>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs my-1"
            />
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs my-1"
            />
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs my-1"
            />
            <input
              type="submit"
              value="SUBMIT"
              class="input input-bordered w-full max-w-xs my-1 bg-secondary text-white cursor-pointer"
            />
          </form>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
