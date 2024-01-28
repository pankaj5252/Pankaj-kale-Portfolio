import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section id="hero" className="d-flex align-items-center">
        <div
          className="container d-flex flex-column align-items-center animated-element"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <h1 className="name">Pankaj Kale</h1>
          <h2>I'm a Full Stack Web Developer</h2>
          <NavLink to="/about" className="btn-about">
            About Me
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default Home;
