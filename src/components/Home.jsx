import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Slide, Zoom } from "react-awesome-reveal";
import About from "./About";
import Resume from "./Resume"
import Services from "./Services"
import { Link as ScrollLink } from 'react-scroll';
import Projects from "./Projects";
import Contact from "./Contact";


const Home = (props) => {
  return (
    <>
      {/* Home Page  */}
      <div className="container-fluid pt-5 pb-4">
        <div className="row">
          <div className="col-md-6">
            <span className="Star1">&#9733;</span>
            <section id="hero" className="d-flex align-items-center">
              <div className="container d-flex flex-column align-items-center">
                <Slide>
                  <h1 className="name">Hey! I'm Pankaj Kale</h1>
                  <h2>MERN Stack Developer</h2>
                  <ScrollLink
                    to="about"
                    smooth={true}
                    duration={400}
                    className="relative btn-about py-2 px-8 text-base font-bold nded-full overflow-hidden bg-red text-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-600 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
                  >
                    About Me
                  </ScrollLink>
                </Slide>
              </div>
            </section>
          </div>
          <div className="col-md-6 p-0 text-center">
            <span className="Star">&#9733;</span>
            <span className="Star2">&#9733;</span>
            <span className="Star3">&#9733;</span>
            <Zoom>
              <LazyLoadImage
                className="boyImg"
                alt=""
                src={props.data}
              />
            </Zoom>
          </div>
        </div>
      </div>

      {/* About  */}
      <About />

      {/* Resume */}
      <Resume/>

      {/* Projects  */}
      <Projects/>

      {/* Services  */}
      <Services/>

      {/* Contact */}
      <Contact/>
    </>
  );
};

export default Home;
