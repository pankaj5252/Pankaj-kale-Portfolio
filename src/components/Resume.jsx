import React, { useEffect } from "react";
import Projects from "../projects";
import { Slide, Zoom } from "react-awesome-reveal";
import Resume1 from "../assets/resume.pdf";

const Resume = () => {
  console.log(Projects)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div id="top"></div>
      <section id="resume" className="resume p-2 pt-3">
        <div className="container mx-auto" data-aos="fade-up">
          <div className="text-center">
            <Zoom>
              <h2 className="titlefont">Resume</h2>
              <p className="font-semibold">
                Highly skilled and motivated professional with a demonstrated
                track record of success in software development. As a software
                developer,  I bring 1 year of experience and specialized expertise
                in designing. <br /> I am a proactive problem solver with a keen eye for
                detail, fully committed to delivering top-notch results and
                contributing to the growth of the organization.
              </p>
            </Zoom>
          </div>

          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2">
              <Slide>
                <h3 className="resume-title">Summary</h3>
                <div className="resume-item m-5 pb-0">
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
                    <li>Kautha Newasa Ahmednagar 414606</li>
                    <li>9021373247</li>
                    <li>pankajkale5152@gmail.com</li>
                  </ul>
                </div>
              </Slide>
              <Slide>
                <h3 className="resume-title">Education</h3>
                <div className="resume-item m-5">
                  <h4>Master of Computer Applications (MCA)</h4>
                  <h5>2023 - 2025</h5>
                  <p>
                    <em>Savitribai Phule Pune University</em>
                  </p>
                  <p>Siddhant Institute of Computer Application, Pune</p>
                  <p>Appearing</p>
                </div>
              </Slide>
              <Slide>
                <div className="resume-item m-5">
                  <h4>Bachelor of Computer Applications (BCA - Sci)</h4>
                  <h5>2021 - 2023</h5>
                  <p>
                    <em>Savitribai Phule Pune University</em>
                  </p>
                  <p>New Arts Commerce and Science College, Ahmednagar</p>
                  <p>CGPA: 7.21</p>
                </div>
              </Slide>
              <Slide>
                <div className="resume-item m-5">
                  <h4>Higher Secondary Certificate (HSC)</h4>
                  <h5>2019 - 2020</h5>
                  <p>
                    <em>Maharashtra State Board of Secondary & Higher Secondary Education</em>
                  </p>
                  <p>New Arts Commerce and Science College, Ahmednagar</p>
                  <p>55%</p>
                </div>
              </Slide>
            </div>
            <div className="lg:w-1/2">
              <Slide direction="right">
                <h3 className="resume-title">Professional Experience</h3>
                <div className="resume-item m-5">
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
                <h3 className="resume-title">Projects</h3>
                {
                  Projects.slice(0, 3).map((project, index) => (
                    <div key={index} className="resume-item mb-5">
                      <h4>{project.Name}</h4>
                      <p className="p-0 m-0">
                        <b>Technologies</b> - {project.Technologies}
                      </p>
                      <p className="p-0 m-0">
                        <b>Live</b> -{" "}
                        <a href={project.Link} target="_blank" rel="noopener noreferrer" className="font-bold text-blue-600 cursor-pointer">Click Here to See</a>
                      </p>
                      <p>
                        <b>Description</b> - {project.Description}
                      </p>
                    </div>
                  ))
                }

              </Slide>
            </div>
          </div>
          <div className="flex flex-col items-center mt-4">
            <a
              href={Resume1}
              className="relative btn-about py-2 px-8 text-base font-bold rounded-full overflow-hidden bg-red-500 text-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-600 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
              download
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
