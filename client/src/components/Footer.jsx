import React from "react";
import { IoMdTime } from "react-icons/io";
import { IoArrowRedoOutline } from "react-icons/io5";
import style from "../css/Footer.module.css";
import { Link } from "react-router-dom";
import logo from "../assets/Traincape_logo-removebg-preview.png";

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.footer}>
        <div className={style.logo}>
          <img src={logo} alt="logo" />
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          </h3>
        </div>
        <div className={style.solutions}>
          <h1>IT Solutions</h1>
          <div>
            <Link className={style.links}>
              <IoArrowRedoOutline />
              IT Management
            </Link>
            <Link className={style.links}>
              <IoArrowRedoOutline />
              SEO Optimizations
            </Link>
            <Link className={style.links}>
              <IoArrowRedoOutline />
              Web Developement
            </Link>
            <Link className={style.links}>
              <IoArrowRedoOutline />
              Cyber Security
            </Link>
            <Link className={style.links}>
              <IoArrowRedoOutline /> Data Security
            </Link>
          </div>
        </div>
        <div className={style.QuickLinks}>
          <h1>Quick Links</h1>
          <div>
            <Link className={style.links} to="/About-us">
              {" "}
              <IoArrowRedoOutline />
              About Us
            </Link>
            <Link className={style.links} to="/Services">
              {" "}
              <IoArrowRedoOutline />
              Our Services
            </Link>
            <Link className={style.links}>
              {" "}
              <IoArrowRedoOutline />
              Contact Us
            </Link>
            <Link className={style.links}>
              {" "}
              <IoArrowRedoOutline />
              Blog
            </Link>
            <Link className={style.links} to="frequently-asked-questions">
              {" "}
              <IoArrowRedoOutline />
              FAQ
            </Link>
            <Link className={style.links}>
              <IoArrowRedoOutline />
              Our Team
            </Link>
          </div>
        </div>
        <div className={style.contact}>
          <h1>Contact Us</h1>

          <div>
            <h3>Lorem ipsum dolor sit amet.</h3>
            <h1>Opening Time</h1>
            <div className={style.opening}>
              <IoMdTime />
              <p style={{ marginLeft: "10px", color: "white" }}>
                Mon-Sat 11:00 AM - 7.00PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
