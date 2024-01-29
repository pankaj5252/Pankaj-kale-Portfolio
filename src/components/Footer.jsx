import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container text-center">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Pankaj</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="header-social-links">
          <NavLink className="twitter">
            <i className="fa fa-twitter"></i>
          </NavLink>
          <NavLink
            to="https://instagram.com/pankaj_kale_96k?igshid=MzNlNGNkZWQ4Mg== "
            className="instagram"
          >
            <i className="fa-brands fa-instagram"></i>
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
    </>
  );
};

export default Footer;
