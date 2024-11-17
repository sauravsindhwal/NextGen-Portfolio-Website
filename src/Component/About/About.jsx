import React from "react";
import "./About.css";
import theme_pattern from "../../assets/nav_underline.png";
import profile_img from "../../assets/keyframe-logo.webp";

const About = () => {
  return (
    <section class="section-space">
    <div className="container">
    <div id='about' className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-ptag">
            <p>
              I am an experienced Frontend Developer with over a decade of
              professional expertise in the field. Throughout my career, I have
              had the privilege of collaborating with prestigious organizations,
              contributing to their success and growth.
            </p>
            <p>
              My passion for frontend development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project.
            </p>
          </div>
          <div className="about-skills">
            <div className="skill">
              <p>HTML</p>
              <hr style={{ width: "20%" }} />
            </div>
            <div className="skill">
              <p>CSS</p>
              <hr style={{ width: "30%" }} />
            </div>
            <div className="skill">
              <p>JavaScript</p>
              <hr style={{ width: "40%" }} />
            </div>
            <div className="skill">
              <p>React Js</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="achievements">
          <h1>5+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="achievements">
          <h1>100+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="achievements">
          <h1>30+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
    </div>
    </section>
  );
};

export default About;
