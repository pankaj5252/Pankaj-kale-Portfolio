// Home.js
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Slide, Zoom } from "react-awesome-reveal";
import About from "./About";
import Resume from "./Resume";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = (props) => {
  return (
    <>
      {/* Home Page */}
      <div className="pt-5 pb-4 container-fluid">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <span className="Star1">&#9733;</span>
            <section id="hero" className="flex items-center">
              <div className="container flex flex-col items-center">
                <Slide>
                  <h1 className="name">Hey! I'm Pankaj Kale</h1>
                  <h2 className="text-lg font-semibold">MERN Stack Developer</h2>
                  <a
                    href="#about"
                    className="relative btn-about py-2 px-8 text-base font-bold rounded-full overflow-hidden bg-red-500 text-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-600 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
                  >
                    About Me
                  </a>
                </Slide>
              </div>
            </section>
          </div>
          <div className="md:w-1/2 p-0 text-center">
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

      {/* About */}
      <About />

      {/* Resume */}
      <Resume />

      {/* Projects */}
      <Projects />

      {/* Services */}
      <Services />

      {/* Contact */}
      <Contact />

    </>
  );
};

export default Home;
