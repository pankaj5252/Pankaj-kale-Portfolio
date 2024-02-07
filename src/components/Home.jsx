import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <span className="Star1">&#9733;</span>
            <section id="hero" className="d-flex align-items-center">
              <div
                className="container d-flex flex-column align-items-center zoom-in animated-element-home"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <h1 className="name">Hey! I'm Pankaj Kale</h1>
                <h2>I'm a Full Stack Developer</h2>
                <Link to="/about" className="relative btn-about py-2 px-8 text-base font-bold nded-full overflow-hidden bg-red text-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-600 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
                  About Me
                </Link>
              </div>
            </section>
          </div>
          <div className="col-md-6 p-0 text-center">
            <span className="Star">&#9733;</span>
            <span className="Star2">&#9733;</span>
            <span className="Star3">&#9733;</span>
            <img src="assets/boy1.png" className="boyImg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
