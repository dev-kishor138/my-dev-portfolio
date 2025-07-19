const Project = ({ data }) => {
  const { image, title, link } = data;
  return (
    <div className="project-card">
      <div className="project-img">
        <img src={image} alt="" />
      </div>

      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <a
          href={link}
          target="_blank"
          rel="noreferrer noopener"
          className="project-button"
        >
          Demo <i className="bx bx-right-arrow-alt project-button-icon"></i>
        </a>
      </div>
    </div>
  );
};

export default Project;
