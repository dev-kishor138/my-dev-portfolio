import "./Projects.css";
import { projectsData } from "./ProjectsData";
import SectionHeader from "../global/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleDemoClick = (link) => {
    setIsAnimating(true);
    setTimeout(() => {
      window.open(link, "_blank", "noreferrer,noopener");
      setIsAnimating(false);
    }, 2000); // 2-second delay before redirect
  };

  return (
    <section className="projects container section" id="projects">
      <SectionHeader
        title="My Latest Projects"
        subTitle="Let`s Explore My Projects"
      />

      <Swiper
        className="testimonial-container"
        loop={true}
        autoplay={true}
        grabCursor={true}
        spaceBetween={24}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 48,
          },
        }}
      >
        {projectsData.map(
          ({ id, title, link, image, description, technology }) => {
            return (
              <SwiperSlide className="project-card" key={id}>
                <div className="project-img">
                  <img src={image} alt={title} />
                </div>

                <div className="project-content">
                  <h3 className="project-title">{title}</h3>
                  <div className="project-buttons">
                    <button
                      className="project-button"
                      onClick={() =>
                        openModal({
                          id,
                          title,
                          image,
                          description,
                          link,
                          technology,
                        })
                      }
                    >
                      Details{" "}
                      <i className="bx bx-right-arrow-alt project-button-icon"></i>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            );
          }
        )}
      </Swiper>

      {isModalOpen && selectedProject && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>
              <i className="bx bx-x"></i>
            </button>
            <div className="modal-body">
              <div className="modal-image">
                <img
                  src={selectedProject?.image}
                  alt={selectedProject?.title}
                />
              </div>
              <div className="modal-details">
                <h2>{selectedProject?.title}</h2>
                <div className="project-tec">
                  {selectedProject?.technology?.map((t, i) => (
                    <span key={i}>#{t}</span>
                  ))}
                </div>
                <p>{selectedProject?.description}</p>
                <button
                  className={`project-button preview-button ${
                    isAnimating ? "animating" : ""
                  }`}
                  onClick={() => handleDemoClick(selectedProject.link)}
                  disabled={isAnimating}
                >
                  <span className="button-text">
                    {isAnimating ? "Wait" : "Demo"}
                  </span>
                  <i className="bx bx-right-arrow-alt project-button-icon"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
