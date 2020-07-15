import React, { useEffect, useState, useRef } from "react";
import classes from "./HomePage.module.css";
import WorkInfoCard from "./WorkInfoCard/WorkInfoCard";
import { ThemeContext } from "../../Shared/contexts/ThemeContext";
import SideProjects from "../SideProjects/SideProjects";
import ContactMeForm from "../ContactMe/ContactMeForm";
import LandingPageSvg from "../landingPageSvg/LandingPageSvg";
import About from "../About/About";
const HomePage = () => {
  const homePageRef = useRef();

  return (
    <div>
      <About />
      {/* <WorkInfoCard /> */}
      <SideProjects />
      <ContactMeForm />
    </div>
  );
};

export default HomePage;
