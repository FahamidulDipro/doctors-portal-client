import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import Review from "./Review";
const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Harry",
      review: "Great review",
      img: people1,
    },
    {
      _id: 2,
      name: "Winson Harry",
      review: "Great review",
      img: people2,
    },
    {
      _id: 3,
      name: "Winson Harry",
      review: "Great review",
      img: people3,
    },
  ];
  return (
    <section className="my-28 ">
      <div className="flex justify-between">
        <div className="text-left ">
          <h2 className="text-xl text-primary font-bold">Testimonials</h2>
          <h2 className="text-3xl ">What Our Patients Says</h2>
        </div>
        <div>
          <img src={quote} alt="quote" className="lg:w-48 sm:w-24" />
        </div>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-1 grid-gap-8 mt-15">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
