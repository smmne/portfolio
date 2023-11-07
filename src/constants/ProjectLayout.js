import React from "react";

const ProjectLayout = ({ project }) => {
  return (
    <>
      {project.map((item) => (
        <section>
          <header>
            <h3>{item.title}</h3>
            <p>
              {item.description}
              <span style={{ display: "block", color: "#fff" }}>
                {item.stack}
              </span>
            </p>
          </header>
          <div className="content">
            <div className="gallery">
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  className="landscape"
                  rel="noreferrer"
                >
                  <img src={item.image} alt="" />
                </a>
              ) : (
                <span className="noImg"></span>
              )}
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default ProjectLayout;
