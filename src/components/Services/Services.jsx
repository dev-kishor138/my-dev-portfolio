import React, { useState } from "react";
import "./Services.css";

const Services = () => {
  const [modal, setModal] = useState(0);

  const toggleModal = (index) => {
    setModal(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section-title">Services</h2>
      <span className="section-subtitle">What I Offer</span>

      <div className="services-container container grid">
        <div className="services-content">
          <div>
            <i className="uil uil-edit services-icon"></i>
            <h3 className="services title">
              Web <br /> Designer
            </h3>
          </div>

          <span className="services-button" onClick={() => toggleModal(3)}>
            View More
            <i className="uil uil-arrow-right services-button-icon"></i>
          </span>

          <div
            className={
              modal === 3 ? "services-modal active-modal" : "services-modal"
            }
          >
            <div className="services-modal-content">
              <i
                onClick={() => toggleModal(0)}
                className="uil uil-times services-modal-close"
              ></i>

              <h3 className="services-modal-title">Web Designer</h3>
              <p className="services-modal-description">
                I use creative programming skills to design, build and improve
                websites.
              </p>

              <ul className="services-modal-services grid">
                <li className="services-modal-services-item">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Conceptualizing creative ideas with clients.
                  </p>
                </li>

                <li className="services-modal-services-item">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Establishing design guidelines, standards, and best
                    practices.
                  </p>
                </li>

                <li className="services-modal-services-item">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Working with different content management systems.
                  </p>
                </li>

                <li className="services-modal-services-item">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Designing sample pages including colors and fonts.
                  </p>
                </li>

                <li className="services-modal-services-item">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Testing and improving the design of the website.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services-content">
          <div>
            <i className="uil uil-web-grid services-icon"></i>
            <h3 className="services title">
              Frontend <br /> Developer
            </h3>
          </div>

          <span className="services-button" onClick={() => toggleModal(1)}>
            View More
            <i className="uil uil-arrow-right services-button-icon"></i>
          </span>

          <div
            className={
              modal === 1 ? "services-modal active-modal" : "services-modal"
            }
          >
            <div className="services-modal-content">
              <i
                onClick={() => toggleModal(0)}
                className="uil uil-times services-modal-close"
              ></i>

              <h3 className="services-modal-title">Frontend Developer</h3>
              <p className="services-modal-description">
                As a frontend Developer I Design Creative Website With Css and
                Tailwind. That look so minimalist.
              </p>

              <ul className="services-modal-services grid">
                <li className="services-modal-services-item">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Develop features to enhance the users’ experience
                  </p>
                </li>

                <li className="services-modal-services-item">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Striking a balance between functional and aesthetic design.
                  </p>
                </li>

                <li className="services-modal-services-item">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Make sure the web design is responsive for more device.
                  </p>
                </li>

                <li className="services-modal-services-item">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Build reusable code for future use
                  </p>
                </li>

                <li className="services-modal-services-item">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Keep the brand consist throughout the whole design
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services-content">
          <div>
            <i className="uil uil-arrow services-icon"></i>
            <h3 className="services title">
              Backend <br /> Developer
            </h3>
          </div>

          <span className="services-button" onClick={() => toggleModal(2)}>
            View More
            <i className="uil uil-arrow-right services-button-icon"></i>
          </span>

          <div
            className={
              modal === 2 ? "services-modal active-modal" : "services-modal"
            }
          >
            <div className="services-modal-content">
              <i
                onClick={() => toggleModal(0)}
                className="uil uil-times services-modal-close"
              ></i>

              <h3 className="services-modal-title">Backend Developer</h3>
              <p className="services-modal-description">
                Back-end development refers to designing, altering, and fixing
                the software part of a website.
              </p>

              <ul className="services-modal-services grid">
                <li className="services-modal-services-item">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Putting in place server-side frameworks for client-facing
                    functionality
                  </p>
                </li>

                <li className="services-modal-services-item">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Modifying security settings to stop hacker attempts
                  </p>
                </li>

                <li className="services-modal-services-item">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Offering assistance with web server technology
                  </p>
                </li>

                <li className="services-modal-services-item">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Application programming interface and server-side component
                    integration (API)
                  </p>
                </li>

                <li className="services-modal-services-item">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Resolving potential Website problems
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
