
import "./About.css";
import AboutImage from '../../assets/about.png'
import Info from "./Info";
import AboutMe from "./AboutMe";
import SectionHeader from "../global/SectionHeader";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import MyCV from "../../assets/cv/Kishor_Mahmud_CV.pdf";

const About = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const link = document.createElement('a');
      link.href = MyCV;
      link.download = 'Kishor_Mahmud_CV.pdf'; 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link); 
    }, 2000);
  };
  return (
    <section className="about section" id="about">
      <SectionHeader title="Abbout Me" subTitle="My Introduction" />

      <div className="about-container container grid">
        <img src={AboutImage} alt="" className="about-img" />
        <div className="about-data">
          <AboutMe />
          <Info></Info>
          <p className="about-description"></p>
          <button
            className={`button button-flex ${isLoading ? 'loading' : ''}`}
            onClick={handleButtonClick}
            disabled={isLoading}
          >
            {isLoading ? 'Progressing' : 'Download Resume'}
            <Icon
              icon={isLoading ? 'eos-icons:loading' : 'material-symbols:download'}
              className={`button-icon ${isLoading ? 'spinner-icon' : 'animate-icon'}`}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
