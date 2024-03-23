import Image from "next/image";

export default function Home() {
  return (
    <>
      <section id="profile">
        <div className="section__pic-container">
          <Image
            src="/profile-circle.png"
            alt="Marlon Niño profile picture"
            width="400"
            height="400"
          />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Marlon Niño</h1>
          <p className="section__text__p2">Software Developer</p>
          <div className="btn-container">
            <button
              className="btn btn-color-2"
              onClick="window.open('/marlon_nino_cv.pdf')"
            >
              Download CV
            </button>
            <button
              className="btn btn-color-1"
              onclick="location.href='./#contact'"
            >
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <Image
              src="/linkedin.png"
              alt="My LinkedIn profile"
              className="icon"
              onclick="location.href='https://www.linkedin.com/in/marlon-nino/'"
              width="32"
              height="32"
            />
            <Image
              src="/github.png"
              alt="My Github profile"
              className="icon"
              onclick="location.href='https://github.com/mvnino'"
              width="32"
              height="32"
            />
          </div>
        </div>
      </section>

      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <Image
              src="/marlon_side.jpeg"
              alt="Profile picture"
              className="about-pic"
              width="375"
              height="375"
            />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <Image
                  src="/experience.png"
                  alt="Experience icon"
                  className="icon"
                  width="32"
                  height="32"
                />
                <h3>Experience</h3>
                <p>
                  4+ years <br />
                  Software Development
                </p>
              </div>
              <div className="details-container">
                <Image
                  src="/education.png"
                  alt="Education icon"
                  className="icon"
                  width="32"
                  height="32"
                />
                <h3>Education</h3>
                <p>Bachelor's Degree in Information Technology (PUP)</p>
              </div>
            </div>
            <div className="text-container">
              <p>
                Software Developer with nearly 5 years of experience in creating
                and implementing resourceful software solutions. Proficient in
                all phases of the software development lifecycle, from concept
                to delivery. Adept at collaborating with cross-functional teams
                to drive project success. Skilled in multiple programming
                languages and technologies, and committed to staying up-to-date
                with industry trends. Demonstrated track record of delivering
                high-quality, scalable, and maintainable software.
              </p>
            </div>
          </div>
        </div>
        <Image
          src="/arrow.png"
          alt="Arrow icon"
          className="icon arrow"
          onClick="location.href='./#experience'"
          width="32"
          height="32"
        />
      </section>

      <section id="experience">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Experience</h1>
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
        <Image
          src="/arrow.png"
          alt="Arrow icon"
          className="icon arrow"
          onclick="location.href='./#projects'"
          width="32"
          height="32"
        />
      </section>

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
      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <Image
              src="/email.png"
              alt="Email icon"
              className="icon contact-icon email-icon"
              width="40"
              height="40"
            />
            <p>
              <a href="mailto:ninomarlonvilla@gmail.com">
                ninomarlonvilla@gmail.com
              </a>
            </p>
          </div>
          <div className="contact-info-container">
            <Image
              src="/linkedin.png"
              alt="LinkedIn icon"
              className="icon contact-icon"
              width="40"
              height="40"
            />
            <p>
              <a href="https://www.linkedin.com/in/marlon-nino">LinkedIn</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
