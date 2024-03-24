import React from "react";
import Image from "next/image";

const Experience = () => {
  return (
    <section id="experience">
      <p className="section__text__p1 text-white-f8">Explore My</p>
      <h1 className="title text-white-smoke">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              <article>
                <Image
                  src="/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                  width="32"
                  height="32"
                />
                <div>
                  <h4>Tailwind CSS</h4>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <Image
                  src="/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                  width="32"
                  height="32"
                />
                <div>
                  <h3>React JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <Image
                  src="/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                  width="32"
                  height="32"
                />
                <div>
                  <h3>JavaScript</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <Image
                  src="/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                  width="32"
                  height="32"
                />
                <div>
                  <h3>TypeScript</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <Image
                  src="/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                  width="32"
                  height="32"
                />
                <div>
                  <h3>Vue.js</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <Image
                  src="/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                  width="32"
                  height="32"
                />
                <div>
                  <h3>CMS</h3>
                  <p>Experienced</p>
                </div>
              </article>
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Backend Development</h2>
            <div className="article-container">
              <article>
                <Image
                  src="/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                  width="32"
                  height="32"
                />
                <div>
                  <h3>MySQL</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <Image
                  src="/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                  width="32"
                  height="32"
                />
                <div>
                  <h3>Node JS</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <Image
                  src="/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                  width="32"
                  height="32"
                />
                <div>
                  <h3>Express JS</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <Image
                  src="/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                  width="32"
                  height="32"
                />
                <div>
                  <h3>AdonisJS</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <Image
                  src="/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                  width="32"
                  height="32"
                />
                <div>
                  <h3>REST API</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <Image
                  src="/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                  width="32"
                  height="32"
                />
                <div>
                  <h3>Laravel</h3>
                  <p>Experienced</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
