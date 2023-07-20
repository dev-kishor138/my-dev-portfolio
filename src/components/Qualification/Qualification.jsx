import React, { useState } from "react";
import "./Qualification.css";

const Qualification = () => {
  const [active, setActive] = useState(1);

  const activeToggle = (index) => {
    setActive(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section-title">Qualification</h2>
      <span className="section-subtitle">What I have Done In my Life</span>

      <div className="qualification-container container">
        <div className="qualification-tabs">
          <div
            className={
              active === 1
                ? "qualification-button qualification-active button-flex"
                : "qualification-button button-flex"
            }
            onClick={() => activeToggle(1)}
          >
            <i className="uil uil-graduation-cap qualification-icon"></i>{" "}
            Education
          </div>

          <div
            className={
              active === 2
                ? "qualification-button qualification-active button-flex"
                : "qualification-button button-flex"
            }
            onClick={() => activeToggle(2)}
          >
            <i className="uil uil-briefcase-alt qualification-icon"></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualification-section">
          <div
            className={
              active === 1
                ? "qualification-content qualification-content-active"
                : "qualification-content"
            }
          >
            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">Diploma In Engineering</h3>
                <span className="qualification-subtitle">
                  Rangpur Polytechnic Institute
                </span>
                <div className="qualification-calendar">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2023
                </div>
              </div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>

            <div className="qualification-data">
              <div></div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>

              <div>
                <h3 className="qualification-title">
                  Secondary School Certificate (SSC)
                </h3>
                <span className="qualification-subtitle">
                  Rangpur Technical School and College
                </span>
                <div className="qualification-calendar">
                  <i className="uil uil-calendar-alt"></i> 2016 - 2018
                </div>
              </div>
            </div>

            {/* <div className="qualification-data">
              <div>
                <h3 className="qualification-title">SSC</h3>
                <span className="qualification-subtitle">Deuty school</span>
                <div className="qualification-calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div> */}

            {/* <div className="qualification-data">
              <div></div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>

              <div>
                <h3 className="qualification-title">SSC</h3>
                <span className="qualification-subtitle">Deuty school</span>
                <div className="qualification-calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>
            </div> */}
          </div>

          <div
            className={
              active === 2
                ? "qualification-content qualification-content-active"
                : "qualification-content"
            }
          >
            <div className="qualification-data">
              <div></div>
              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
              <div>
                <h3 className="qualification-title">Jr. Web Developer</h3>
                <span className="qualification-subtitle">
                  E-Learning and Earning LTD
                </span>
                <div className="qualification-calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2023
                </div>
              </div>
            </div>

            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">Web Developer</h3>
                <span className="qualification-subtitle">Upcoming...</span>
                <div className="qualification-calendar">
                  <i className="uil uil-calendar-alt"></i> 2023 - Upcoming...
                </div>
              </div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>

            {/* <div className="qualification-data">
              <div></div>
              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>

              <div>
                <h3 className="qualification-title">SSC</h3>
                <span className="qualification-subtitle">Deuty school</span>
                <div className="qualification-calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>
            </div> */}

            {/* <div className="qualification-data">
              <div>
                <h3 className="qualification-title">SSC</h3>
                <span className="qualification-subtitle">Deuty school</span>
                <div className="qualification-calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
