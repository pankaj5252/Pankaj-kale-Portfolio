import React from "react";
import { useEffect } from "react";
import Projects from "../projects";
import { Slide, Zoom } from "react-awesome-reveal";
import { Link as ScrollLink } from 'react-scroll';
import { Link } from "react-router-dom";


const Resume = () => {
  console.log(Projects)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div id="top"></div>
      <section id="resume" className="resume p-2 pt-5">
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center">
            <Zoom>
              <h2 className="titlefont">Resume</h2>
              <p>
                Highly skilled and motivated professional with a demonstrated
                track record of success in software development. As a software
                developer, I bring 1 year of experience and specialized expertise
                in designing. I am a proactive problem solver with a keen eye for
                <br />
                detail, fully committed to delivering top-notch results and
                contributing to the growth of the organization.
              </p>
            </Zoom>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <Slide >
                <h3 className="resume-title">Sumary</h3>
                <div className="resume-item pb-0">
                  <h4>Pankaj Bapusaheb Kale</h4>
                  <p>
                    <em>
                      As a MERN Stack Developer, I aim to bring my creative
                      problem-solving abilities, attention to detail, and
                      experience in delivering outstanding visual experiences to
                      the development process.
                    </em>
                  </p>
                  <ul>
                    <li>Kautha Newasa Ahmedngar 414606</li>
                    <li>9021373247</li>
                    <li>pankajkale5152@gmail.com</li>
                  </ul>
                </div>
              </Slide>
              <Slide>
                <h3 className="resume-title">Education</h3>
                <div className="resume-item">
                  <h4>Master of Computer Applications (MCA)</h4>
                  <h5>2023 - 2025</h5>
                  <p>
                    <em>Savitribai phule pune university</em>
                  </p>
                  <p>Siddhant Institute of Computer Application,Pune</p>
                  <p>Appearing</p>
                </div>
              </Slide>
              <Slide>
                <div className="resume-item">
                  <h4>Bachelor of Computer Applications (BCA - Sci)</h4>
                  <h5>2021 - 2023</h5>
                  <p>
                    <em>Savitribai phule pune university</em>
                  </p>
                  <p>New arts commerce and science college,Ahmednagar</p>
                  <p>CGPA :- 7.21</p>
                </div>
              </Slide>
              <Slide>
                <div className="resume-item">
                  <h4>Higher Secondary Certificate (HSC)</h4>
                  <h5>2019 - 2020</h5>
                  <p>
                    <em>
                      Maharashtra State Board of Secondary & Higher Secondary
                    </em>
                  </p>
                  <p>New arts commerce and science college , Ahmednagar</p>
                  <p>55%</p>
                </div>
              </Slide>
            </div>
            <div className="col-lg-6">
              <Slide direction="right">
                <h3 className="resume-title">Professional Experience</h3>
                <div className="resume-item">
                  <h4>‘Trainee Frontend Developer‘</h4>
                  <h5>08 Aug 2023 - 08 Feb 2024</h5>
                  <p>
                    <em>A2Z INFOTECH PVT.LTD Ahmednagar</em>
                  </p>
                  <ul>
                    <li>
                      Lead in the design, development, and implementation of the
                      graphic, layout, and production communication materials
                    </li>
                    <li>
                      Delegate tasks to the 7 members of the design team and
                      provide counsel on all aspects of the project.
                    </li>
                  </ul>
                </div>
              </Slide>
              <Slide direction="right">
                <h3 className="resume-title">Project's</h3>
                {
                  Projects.map((project, index) => (
                    <div key={index} className="resume-item">
                      <h4>{project.Name}</h4>
                      <p className="p-0 m-0">
                        <b>Technologies</b> -{project.Technologies}
                      </p>
                      <p className="p-0 m-0">
                        <b>Live</b> :-{" "}
                        <ScrollLink to={project.Name} smooth={true}
                          duration={400} className=" text-decoration-none fw-bold cursor-pointer">Click Here to See</ScrollLink>
                      </p>
                      <p>
                        <b>Description</b> :- {project.Description}
                      </p>
                    </div>
                  ))
                }
              </Slide>
            </div>
          </div>
          <div className="d-flex flex-column align-items-center mt-4">
            <a
              href="../assets/resume.pdf"
              className="h-10 px-6 font-semibold rounded-md bg-black text-white d-flex align-items-center justify-center text-decoration-none"
              download
            >
              Download Resume
            </a>
          </div>

        </div>
      </section>
      <hr />
    </>
  );
};

export default Resume;
