import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
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
    </>
  );
};

export default Home;
