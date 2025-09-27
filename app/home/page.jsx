import Banner from "@/component/home/banner/banner";
import Impact from "@/component/home/Impact";
import Offer from "@/component/home/Offer";
import Process from "@/component/home/process";
import Showcase from "@/component/home/Showcase";
import React from "react";

const Home = () => {
  return (
    <div>
      <Banner />
      <Process />
      <Showcase />
      <Impact />
      <Offer />
    </div>
  );
};

export default Home;
