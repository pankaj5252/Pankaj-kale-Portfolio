import React from "react";
import { NavLink } from "react-router-dom";
// import { Card } from "react-bootstrap";

const About = () => {
  return (
    <>
      <section id="about" className="about p-3">
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center">
            <h2 className="titlefont font-weight-bold">About</h2>
            <p>
              Hello, I'm Pankaj Kale, a passionate and experienced Full Stack
              Web Developer with a focus on creating robust and user-friendly
              web applications. My journey in web development began during my
              College and web development classes at A2Z Infotech
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 text-center animated-element">
              {/* <Card.Img
                variant="top"
                height={400}
                src={"../../public/assets/pk1.jpg"}
              /> */}
              <img className="img-fluid" src="/assets/pk1.jpg" alt="" />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content animated-element1">
              <h3>Full Stack Developer &amp; UI/UX Designer</h3>
              <p className="fst-italic">
                As a Full Stack Developer, I have honed my skills in both
                front-end and back-end technologies.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-rounded-right"></i>{" "}
                      <strong>Birthday:</strong> 25 May 20020
                    </li>
                    <li>
                      <i className="bi bi-rounded-right"></i>{" "}
                      <strong>Website:</strong> www.pankajkale.com
                    </li>
                    <li>
                      <i className="bi bi-rounded-right"></i>{" "}
                      <strong>Phone:</strong> +91 9021373247
                    </li>
                    <li>
                      <i className="bi bi-rounded-right"></i>{" "}
                      <strong>City:</strong> Ahmednagar, Maharashtra, India
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-rounded-right"></i>{" "}
                      <strong>Age:</strong> 21
                    </li>
                    <li>
                      <i className="bi bi-rounded-right"></i>{" "}
                      <strong>Degree:</strong> Bachelor's
                    </li>
                    <li>
                      <i className="bi bi-rounded-right"></i>{" "}
                      <strong>Email:</strong> pbkale25@gmail.com
                    </li>
                    <li>
                      <i className="bi bi-rounded-right"></i>{" "}
                      <strong>Freelance:</strong> Available
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                As a team player, I thrive in collaborative environments where
                diverse skills come together to solve complex challenges. I
                enjoy working closely with cross-functional teams, including
                designers, product managers, and fellow developers, to deliver
                exceptional results. As a<strong> Full Stack Developer</strong>,
                I am deeply passionate about building cutting-edge applications
                that blend innovation and user satisfaction. I am excited to
                bring my skills and enthusiasm to a team that values creativity,
                teamwork, and a dedication to excellence.
              </p>
              <div className="text-center">
                <NavLink to="/resume" className="btn-about">
                  Resume
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr></hr>
    </>
  );
};

export default About;
