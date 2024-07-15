import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Slide } from "react-awesome-reveal";
import { Link as ScrollLink } from 'react-scroll';
import myImage from "../assets/pk1.jpg"

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section id="about" className="about pb-5">
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center">
            <h2 className="titlefont font-weight-bold">About</h2>
            <p>
              Hello, I'm Pankaj Kale, a passionate and experienced MERN Stack
              Web Developer with a focus on creating robust and user-friendly
              web applications. My journey in web development began during my
              College and web development classes at A2Z Infotech
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 text-center">
              <Slide>
                <LazyLoadImage
                  className="img-fluid rounded-lg"
                  alt=""
                  src={myImage}
                />
              </Slide>
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content">
              <Slide direction="right">
                <h3>MERN Stack Developer &amp; UI/UX Designer</h3>
                <p className="fst-italic">
                  As a MERN Stack Developer, I have honed my skills in both
                  front-end and back-end technologies.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-rounded-right"></i>{" "}
                        <strong>Birthday:</strong> 25 May 2002
                      </li>
                      <li>
                        <i className="bi bi-rounded-right"></i>{" "}
                        <strong>Website:</strong> <Link to="https://www.pankajkale.tech" target="_blank">https://www.pankajkale.tech</Link>
                      </li>
                      <li>
                        <i className="bi bi-rounded-right"></i>{" "}
                        <strong>Phone:</strong> +91 9021373247
                      </li>
                      <li>
                        <i className="bi bi-rounded-right"></i>{" "}
                        <strong>City:</strong> Pune, Maharashtra, India
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
                        <strong>Email:</strong> pankajkale5152@gmail.com
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
                  exceptional results. As a<strong> MERN Stack Developer</strong>,
                  I am deeply passionate about building cutting-edge applications
                  that blend innovation and user satisfaction. I am excited to
                  bring my skills and enthusiasm to a team that values creativity,
                  teamwork, and a dedication to excellence.
                </p>
                <div className="header-social-links">
                  <a className="github" href="https://github.com/pankaj5252" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <NavLink
                    to="https://www.linkedin.com/in/pankaj-kale-pk5151"
                    className="linkedin"
                  >
                    <i className="fa fa-linkedin"></i>
                  </NavLink>
                </div>
                <div className="text-center">
                  <ScrollLink
                    to="resume"
                    smooth={true}
                    duration={400}
                    className="relative btn-about py-2 px-8 text-base font-bold nded-full overflow-hidden bg-red text-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-600 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
                  >
                    Resume
                  </ScrollLink>
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </section>
      <hr></hr>
    </>
  );
};

export default About;
