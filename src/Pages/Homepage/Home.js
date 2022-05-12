import React from "react";
import Footer from "../Shared/Footer";
import Banner from "./Banner";

import Info from "./Info";
import MakeAppoinment from "./MakeAppoinment";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <div className="px-12">
        <Banner></Banner>
        <Info></Info>
        <Services></Services>
        <MakeAppoinment></MakeAppoinment>
        <Testimonials></Testimonials>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
