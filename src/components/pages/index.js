import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import HeroSection from "../heroSection";
import InfoSection from "../InfoSection";
import { homeObjOne } from "../InfoSection/Data";
import { homeObjTwo } from "../InfoSection/Data";
import { homeObjThree } from "../InfoSection/Data";
import { homeObjFour } from "../InfoSection/Data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  const toggle = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
    </>
  );
};

export default Home;
