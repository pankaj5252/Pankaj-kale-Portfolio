import React from "react";
import { Zoom } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Zoom>
        <hr />
        <div className="container text-center">
          <div className="header-social-links">
            <a className="github" href="https://github.com/pankaj5252" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
            <NavLink className="twitter">
              <i className="fa fa-twitter"></i>
            </NavLink>
            <NavLink
              to="https://www.linkedin.com/in/pankaj-kale-pk5151"
              className="linkedin"
            >
              <i className="fa fa-linkedin"></i>
            </NavLink>
          </div>
          <div className="credits p-2 pb-3x">
            Designed by <span href="">Pankaj Kale</span>
          </div>
        </div>
      </Zoom>
    </>
  );
};

export default Footer;
