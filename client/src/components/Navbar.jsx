import React from "react";
import style from "../css/Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Traincape_logo-removebg-preview.png";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className={style.container}>
      <div className={style.navbar}>
        <div className={style.logo} onClick={() => navigate("/")}>
          <img src={logo} alt="Traincape Technology" />
        </div>
        <div className={style.navlinks}>
          <Link className={style.links} to="/about-us">
            About Us
          </Link>
          <Link className={style.links} to="/our-services">
            Our Services
          </Link>
          <Link className={style.links} to="#">
            Our Customers
          </Link>
          <Link className={style.links} to="#">
            Courses
          </Link>
          <Link className={style.links} to="/contact-us">
            Contact Us
          </Link>
        </div>
        <div >
          <button className={style.btn}>Pay Now</button>
          <button className={style.loginbtn}>
            <Link to={"/signup"} className={style.Link}>
              Login / Signup
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
