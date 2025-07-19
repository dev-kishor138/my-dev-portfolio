import { Icon } from "@iconify/react/dist/iconify.js";
import { TypeAnimation } from "react-type-animation";


const Data = () => {
  return (
    <div className="home-data">
      <h1 className="home-title">
        Kishor
      </h1>
      <h3 className="home-subtitle">
        <TypeAnimation
          sequence={[
            "Software Developer", // Text to display
            2000, // Wait 2 seconds
            "Full-Stack Developer",
            2000,
          ]}
          wrapper="span"
          speed={50} // Typing speed (lower value = faster)
          style={{ display: "inline-block" }}
          repeat={Infinity} // Loop the animation
        />
      </h3>
      <p className="home-description">
       Greetings, I am a Professional Software Developer. I specialize in crafting
        elegant, minimalist websites that deliver robust functionality and seamless user experiences.
      </p>

      <a href="#contact" className="button button-flex">
        Say Hello <Icon icon="guidance:send" width="24" height="24" />
      </a>
    </div>
  );
};

export default Data;
