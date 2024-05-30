import React, { useState, useEffect } from "react";
import style from "../css/Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/New-Logo-removebg-preview.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

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
        <div className={style.hamburgerSymbol} onClick={toggleMenu}>
          {isMenuOpen ? <ImCross /> : <GiHamburgerMenu />}
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
          <div
            className={style.dropdownLinkSection}
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <Link className={style.links} to="#" onClick={handleLinkClick}>
              Courses / Sources
            </Link>
            <div
              className={`${style.dropdownSection} ${
                showDropdown ? style.showDropdownSection : ""
              }`}
            >
              <Link to="#">Cyber security</Link>
              <Link to="#">Project Management</Link>
              <Link to="#">Cloud Computing</Link>
            </div>
          </div>
          <Link
            className={style.links}
            to="/contact-us"
            onClick={handleLinkClick}
          >
            Contact Us
          </Link>
        </div>

        <div
          className={`${style.hamburgerSection} ${
            isMenuOpen ? style.showHamburgerSection : ""
          }`}
        >
          <div className={style.hamburgerOverlay} onClick={toggleMenu}></div>
          <div
            className={`${style.hamburgerMenu} ${
              isMenuOpen ? style.showHamburgerMenu : ""
            }`}
          >
            <Link
              className={style.links}
              to="/about-us"
              onClick={handleLinkClick}
            >
              About Us
            </Link>
            <div className={style.hamburgerMenuButtons}>
              <button
                className={style.btn}
                onClick={() => navigate("/payment")}
              >
                Pay Now
              </button>
              <button
                className={style.loginbtn}
                onClick={() => navigate("/signup")}
              >
                Login / Signup
              </button>
            </div>
          </div>
        </div>

        <div className={style.buttons}>
          <button
            className={style.btn}
            onClick={() =>
              (window.location.href =
                "https://paypal.me/ParichayP?country.x=IN&locale.x=en_GB")
            }
          >
            Pay Now
          </button>
          <button
            className={style.loginbtn}
            onClick={() => navigate("/signup")}
          >
            Login / Signup
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
