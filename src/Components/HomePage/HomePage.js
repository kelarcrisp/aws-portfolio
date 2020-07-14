import React, { useEffect, useState } from "react";
import classes from "./HomePage.module.css";
import WorkInfoCard from "./WorkInfoCard/WorkInfoCard";
import { ThemeContext } from "../../Shared/contexts/ThemeContext";
import SideProjects from "../SideProjects/SideProjects";
import ContactMeForm from "../ContactMe/ContactMeForm";
import LandingPageSvg from "../landingPageSvg/LandingPageSvg";
import About from "../About/About";
const HomePage = () => {
  const [showAbout, setShowAbout] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowAbout(true);
    }, 5000);
  }, []);

  const showWhat = showAbout ? <About /> : <LandingPageSvg />;
  return (
    <div>
      {showWhat}
      <WorkInfoCard />
      <SideProjects />
      <ContactMeForm />
    </div>
  );
};

export default HomePage;
