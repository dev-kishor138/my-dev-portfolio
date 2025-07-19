import { useState } from "react";
import "./Services.css";
import SectionHeader from "../global/SectionHeader";

const Services = () => {
  const [modal, setModal] = useState(0);

  const toggleModal = (index) => {
    setModal(index);
  };

  const servicesData = [
    {
      id: 1,
      title: "Frontend Development",
      icon: "uil uil-web-grid",
      description:
        "I design and develop creative, responsive, and minimalist websites using modern frontend technologies.",
      points: [
        "Develop features to enhance the users’ experience",
        "Strike a balance between functional and aesthetic design",
        "Ensure responsive web design for multiple devices",
        "Build reusable code for future use",
        "Maintain brand consistency throughout the design",
      ],
    },
    {
      id: 2,
      title: "Backend Development",
      icon: "uil uil-arrow",
      description:
        "I create robust and secure server-side solutions to power dynamic web applications.",
      points: [
        "Implement server-side frameworks for client-facing functionality",
        "Enhance security settings to prevent unauthorized access",
        "Provide support for web server technologies",
        "Integrate APIs and server-side components",
        "Resolve potential website performance issues",
      ],
    },
    {
      id: 3,
      title: "Full-Stack Solution",
      icon: "uil uil-server-network",
      description:
        "I provide end-to-end solutions, combining frontend and backend expertise to deliver scalable and efficient web applications.",
      points: [
        "Develop seamless full stack applications with integrated frontend and backend",
        "Optimize application performance across client and server sides",
        "Implement secure and scalable APIs for data communication",
        "Ensure cross-platform compatibility and responsive design",
        "Provide ongoing maintenance and updates for complete solutions",
      ],
    },
  ];
  return (
    <section className="services section" id="services">
      <SectionHeader title="Services" subTitle="What I Offer" />

      <div className="services-container container grid">
        {servicesData.map((service) => (
          <div key={service.id} className="animated-Service-card">
            <div className="services-content">
              <div>
                <i className={`${service.icon} services-icon`}></i>
                <h3 className="services-title">
                  {service.title.split(" ").map((word, index) => (
                    <span key={index}>
                      {word}
                      <br />
                    </span>
                  ))}
                </h3>
              </div>

              <span
                className="services-button"
                onClick={() => toggleModal(service.id)}
              >
                View More
                <i className="uil uil-arrow-right services-button-icon"></i>
              </span>
            </div>
          </div>
        ))}
      </div>

      {modal > 0 && (
        <div
          className={
            modal > 0 ? "services-modal active-modal" : "services-modal"
          }
        >
          <div className="services-modal-content">
            <i
              onClick={() => toggleModal(0)}
              className="uil uil-times services-modal-close"
            ></i>

            <h3 className="services-modal-title">
              {servicesData.find((s) => s.id === modal)?.title}
            </h3>
            <p className="services-modal-description">
              {servicesData.find((s) => s.id === modal)?.description}
            </p>

            <ul className="services-modal-services grid">
              {servicesData
                .find((s) => s.id === modal)
                ?.points.map((point, index) => (
                  <li key={index} className="services-modal-services-item">
                    <i className="uil uil-check-circle services-modal-icon"></i>
                    <p className="services-modal-info">{point}</p>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
