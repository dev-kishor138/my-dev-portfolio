import { useState } from "react";
import "./Qualification.css";
import SectionHeader from "../global/SectionHeader";

const Qualification = () => {
  const [active, setActive] = useState(1);

  const activeToggle = (index) => {
    setActive(index);
  };

  const qualificationsData = [
    {
      id: 1,
      type: "Education",
      title: "BSC",
      subtitle: "Northern University Bangladesh",
      calendar: "2023 - Present",
    },
    {
      id: 2,
      type: "Education",
      title: "Diploma In Engineering",
      subtitle: "Rangpur Polytechnic Institute",
      calendar: "2018 - 2022",
    },
    {
      id: 3,
      type: "Education",
      title: "Secondary School Certificate (SSC)",
      subtitle: "Rangpur Technical School and College",
      calendar: "2016 - 2018",
    },
    {
      id: 4,
      type: "Experience",
      title: "Full Stack Developer",
      subtitle: "Eclipse Intellitech LTD",
      calendar: "Aug 2023 - Present",
    },
    {
      id: 5,
      type: "Experience",
      title: "Web Developer",
      subtitle: "E-Learning and Earning LTD",
      calendar: "Oct 2022 - Mar 2023",
    },
  ];

  return (
    <section className="qualification section" id="qualification">
      <SectionHeader
        title="Qualification"
        subTitle="What I have Done In my Life"
      />

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
            Experiences
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
            {qualificationsData
              .filter((item) => item.type === "Education")
              .map((item) => (
                <div key={item.id} className="qualification-data">
                  {item.id % 2 === 0 ? (
                    <>
                      <div></div>

                      <div>
                        <span className="qualification-rounder"></span>
                        <span className="qualification-line"></span>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                  <div>
                    <h3 className="qualification-title">{item.title}</h3>
                    <span className="qualification-subtitle">
                      {item.subtitle}
                    </span>
                    <div className="qualification-calendar">
                      <i className="uil uil-calendar-alt"></i> {item.calendar}
                    </div>
                  </div>

                  {item.id % 2 !== 0 ? (
                    <div>
                      <span className="qualification-rounder"></span>
                      <span className="qualification-line"></span>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              ))}
          </div>

          <div
            className={
              active === 2
                ? "qualification-content qualification-content-active"
                : "qualification-content"
            }
          >
            {qualificationsData
              .filter((item) => item.type === "Experience")
              .map((item) => (
                <div key={item.id} className="qualification-data">
                  {item.id % 2 === 0 ? (
                    <>
                      <div></div>

                      <div>
                        <span className="qualification-rounder"></span>
                        <span className="qualification-line"></span>
                      </div>
                    </>
                  ) : (
                    ""
                  )}

                  <div>
                    <h3 className="qualification-title">{item.title}</h3>
                    <span className="qualification-subtitle">
                      {item.subtitle}
                    </span>
                    <div className="qualification-calendar">
                      <i className="uil uil-calendar-alt"></i> {item.calendar}
                    </div>
                  </div>

                  {item.id % 2 !== 0 ? (
                    <div>
                      <span className="qualification-rounder"></span>
                      <span className="qualification-line"></span>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
