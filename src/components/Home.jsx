import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <section id="hero" className="d-flex align-items-center">
              <div
                className="container d-flex flex-column align-items-center zoom-in animated-element-home"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <h1 className="name">Hey! I'm Pankaj Kale</h1>
                <h2>I'm a Full Stack Developer</h2>
                <NavLink to="/about" className="btn-about">
                  About Me
                </NavLink>
              </div>
            </section>
          </div>
          <div className="col-md-6 p-0 text-center">
            <img src="assets/boy1.png" className="boyImg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
