import Banner from "@/component/about/banner";
import VisionMission from "@/component/about/missionVision";
import Press from "@/component/about/press";
import Team from "@/component/about/team";
import Timeline from "@/component/about/timeline";
import React from "react";

const page = () => {
  return (
    <div>
      <Banner />
      <VisionMission />
      <Press />
      <Team />
      <Timeline />
    </div>
  );
};

export default page;
