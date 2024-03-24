import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <section id="projects">
      <p className="section__text__p1">List Of My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container color-container">
            <div className="article-container">
              <Image
                src="/ss-project-1.png"
                alt="Project 1"
                className="project-img"
                width="133"
                height="239"
              />
            </div>
            <h2 className="experience-sub-title project-title">Hotel</h2>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <Image
                src="/ss-project-2.png"
                alt="Project 2"
                className="project-img"
                width="133"
                height="239"
              />
            </div>
            <h2 className="experience-sub-title project-title">Real Estate</h2>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <Image
                src="/ss-project-3.png"
                alt="Project 3"
                className="project-img"
                width="133"
                height="239"
              />
            </div>
            <h2 className="experience-sub-title project-title">AU Ecommerce</h2>
          </div>
        </div>
      </div>
      <Image
        src="/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick="location.href='./#contact'"
        width="32"
        height="32"
      />
    </section>
  );
};

export default Projects;
