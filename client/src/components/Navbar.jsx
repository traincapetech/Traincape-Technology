import React, { useState, useEffect } from "react";
import style from "../css/Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Traincape_logo-removebg-preview.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      setMenuOpen(false);
    }
  };

  return (
    <nav className={style.container}>
      <div className={style.navbar}>
        <div className={style.logo} onClick={() => navigate("/")}>
          <img src={logo} alt="Traincape Technology" />
        </div>
        <div className={`${style.navlinks} ${isMenuOpen ? style.show : ""}`}>
          <Link
            className={style.links}
            to="/about-us"
            onClick={handleLinkClick}
          >
            About Us
          </Link>
          <Link
            className={style.links}
            to="/our-services"
            onClick={handleLinkClick}
          >
            Our Services
          </Link>
          <Link className={style.links} to="#" onClick={handleLinkClick}>
            Our Customers
          </Link>
          <Link className={style.links} to="#" onClick={handleLinkClick}>
            Courses
          </Link>
          <Link
            className={style.links}
            to="/contact-us"
            onClick={handleLinkClick}
          >
            Contact Us
          </Link>
        </div>

        <div className={style.menuIcon} onClick={toggleMenu}>
          <div className={`${style.bar} ${isMenuOpen ? style.open : ""}`}></div>
          <div className={`${style.bar} ${isMenuOpen ? style.open : ""}`}></div>
          <div className={`${style.bar} ${isMenuOpen ? style.open : ""}`}></div>
        </div>
        <div className={style.buttons}>
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
