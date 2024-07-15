import React, { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Slide } from "react-awesome-reveal";
import myImage from "../assets/pk1.jpg";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section id="about" className="about p-5">
        <div className="container mx-auto" data-aos="fade-up">
          <div className="text-center">
            <h2 className="titlefont p-3">About</h2>
            <p className="font-semibold pb-5">
              Hello, I'm Pankaj Kale, a passionate and experienced MERN Stack
              Web Developer with a focus on creating robust and user-friendly
              web applications. <br /> My journey in web development began during my
              College and web development classes at A2Z Infotech.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/3 text-center">
              <Slide>
                <LazyLoadImage
                  className="img-fluid rounded-lg"
                  alt=""
                  src={myImage}
                />
              </Slide>
            </div>
            <div className="lg:w-2/3 pt-4 lg:pt-0 lg:pl-8 content">
              <Slide direction="right">
                <h3 className="font-bold text-xl p-2">MERN Stack Developer &amp; UI/UX Designer</h3>
                <p className="italic">
                  As a MERN Stack Developer, I have honed my skills in both
                  front-end and back-end technologies.
                </p>
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 p-2">
                    <ul>
                      <li>
                        <i className="bi bi-rounded-right"></i>{" "}
                        <strong>Birthday:</strong> 25 May 2002
                      </li>
                      <li>
                        <i className="bi bi-rounded-right"></i>{" "}
                        <strong>Website:</strong> <a href="https://www.pankajkale.tech" target="_blank" rel="noopener noreferrer">https://www.pankajkale.tech</a>
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
                  <div className="md:w-1/2 p-2">
                    <ul>
                      <li>
                        <i className="bi bi-rounded-right"></i>{" "}
                        <strong>Age:</strong> 22
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
                <p className="p-3">
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
                <div className="flex justify-center space-x-4 mt-4">
                  <a className="github" href="https://github.com/pankaj5252" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github text-4xl"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/pankaj-kale-pk5151"
                    className="linkedin" target="_blank" rel="noopener noreferrer"
                  >
                    <i className="fa fa-linkedin text-4xl"></i>
                  </a>
                </div>
                <div className="text-center mt-4">
                  <a
                    href="#resume"
                    className="relative btn-about py-2 px-8 text-base font-bold rounded-full overflow-hidden bg-red-500 text-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-600 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
                  >
                    Resume
                  </a>
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
