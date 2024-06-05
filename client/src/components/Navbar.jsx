import React, { useState, useEffect } from "react";
import style from "../css/Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/New-Logo-removebg-preview.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  // Define the account details
  const accountNumber = "732205000345";
  const bankName = "ICICI Bank";
  const branchName = "Palam Colony";
  const accountHolderName = "TRAINCAPE TECHNOLOGY (OPC) PRIVATE LIMITED";
  const ifscCode = "ICIC0007322";
  const Email = "sales@traincapetech.info";

  // Create the alert message
  const alertMessage = `Account Details :\nAccount Number: ${accountNumber}\nBank Name: ${bankName}\nBranch Name: ${branchName}\nAccount Holder Name: ${accountHolderName}\nIFSC Code: ${ifscCode}\nEMAIL : ${Email}\n`;

  // Use the alert function to display the message

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
        <div className={`${style.navlinks}`}>
          <Link
            className={style.links}
            to="/about-us"
            onClick={handleLinkClick}
          >
            About
          </Link>
          <Link
            className={style.links}
            to="/our-services"
            onClick={handleLinkClick}
          >
            Services
          </Link>
          {/* <Link className={style.links} to="#" onClick={handleLinkClick}>
            Our Customers
          </Link> */}
          <Link
            className={style.links}
            to="Courses-details"
            onClick={handleLinkClick}
          >
            Courses / Sources
          </Link>

          <Link
            className={style.links}
            to="/contact-us"
            onClick={handleLinkClick}
          >
            Contact
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
            <ImCross onClick={toggleMenu} />
            <Link
              className={style.links}
              to="/about-us"
              onClick={handleLinkClick}
            >
              About
            </Link>
            <Link
              className={style.links}
              to="/about-us"
              onClick={handleLinkClick}
            >
              Services
            </Link>
            {/* <Link
              className={style.links}
              to="/about-us"
              onClick={handleLinkClick}
            >
              Our Customers
            </Link> */}
            <Link
              className={style.links}
              to="/about-us"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
            <Link
              className={style.links}
              to="/Courses-details"
              onClick={handleLinkClick}
            >
              Courses / Sources
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
          <div
            className={style.dropdownLinkSection}
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <button
              className={style.btn}
              onClick={() =>
                (window.location.href =
                  "https://paypal.me/ParichayP?country.x=IN&locale.x=en_GB")
              }
            >
              Pay Now
            </button>
            <div
              className={`${style.dropdownSection} ${
                showDropdown ? style.showDropdownSection : ""
              }`}
            >
              <Link to="#">Pay Pal</Link>
              <Link to="#">Credit / Debit Card</Link>
              <Link onClick={() => alert(alertMessage)}>Bank Transfer</Link>
            </div>
          </div>

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
