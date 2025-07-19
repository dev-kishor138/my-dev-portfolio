import { Icon } from "@iconify/react/dist/iconify.js";


const Info = () => {
  return (
    <div className="about-info grid">
      <div className="about-box">
        <Icon icon="mdi:achievement-outline" className="about-icon" />
        <h3 className="about-title">3+ Years</h3>
        <span className="about-subtitle"> Experience</span>
      </div>

      <div className="about-box">
        <Icon icon="solar:code-bold" className="about-icon" />
        <h3 className="about-title">30+ Projects</h3>
        <span className="about-subtitle"> Completed</span>
      </div>

      <div className="about-box">
        <Icon icon="fluent:people-16-regular" className="about-icon" />
        <h3 className="about-title">70+ Happy</h3>
        <span className="about-subtitle">Customer</span>
      </div>
    </div>
  );
};

export default Info;
