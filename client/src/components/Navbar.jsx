import React, { useState, useEffect } from "react";
import nav from "../css/Navbar.module.css";
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
    <nav className={nav.container}>
      <div className={nav.navbar}>
        <div className={nav.logo} onClick={() => navigate("/")}>
          <img src={logo} alt="Traincape Technology" />
        </div>
        <div className={nav.hamburgerSymbol} onClick={toggleMenu}>
          {isMenuOpen ? <ImCross /> : <GiHamburgerMenu />}
        </div>
        <div className={`${nav.navlinks}`}>
          <Link className={nav.links} to="/about-us" onClick={handleLinkClick}>
            About
          </Link>
          <Link
            className={nav.links}
            to="/our-services"
            onClick={handleLinkClick}
          >
            Services
          </Link>
          {/* <Link className={nav.links} to="#" onClick={handleLinkClick}>
            Our Customers
          </Link> */}
          <Link
            className={nav.links}
            to="Courses-details"
            onClick={handleLinkClick}
          >
            Courses / Sources
          </Link>

          <Link
            className={nav.links}
            to="/contact-us"
            onClick={handleLinkClick}
          >
            Contact
          </Link>
        </div>

        <div
          className={`${nav.hamburgerSection} ${
            isMenuOpen ? nav.showHamburgerSection : ""
          }`}
        >
          <div className={nav.hamburgerOverlay} onClick={toggleMenu}></div>
          <div
            className={`${nav.hamburgerMenu} ${
              isMenuOpen ? nav.showHamburgerMenu : ""
            }`}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "10px 10px 0 0",
                marginBottom: "20px",
              }}
            >
              <ImCross
                onClick={toggleMenu}
                style={{
                  color: "black",
                  width: "20px",
                  height: "20px",
                  alignItems: "right",
                  mb: "10px",
                }}
              />
            </div>
            <div className={nav.hamburgerLinksActive}>
              <Link className={nav.links} to="/about-us" onClick={toggleMenu}>
                About
              </Link>
              <Link
                className={nav.links}
                to="/our-services"
                onClick={toggleMenu}
              >
                Services
              </Link>
              {/* <Link
              className={nav.links}
              to="/about-us"
              onClick={handleLinkClick}
              >
              Our Customers
              </Link> */}
              <Link className={nav.links} to="/contact-us" onClick={toggleMenu}>
                Contact
              </Link>
              <Link
                className={nav.links}
                to="/Courses-details"
                onClick={toggleMenu}
              >
                Courses
              </Link>
              <Link to="/Career-details" className={nav.links}>
                Career
              </Link>
              <Link to="/Our-Blogs" className={nav.links}>
                Blogs
              </Link>
              <Link to="/frequently-asked-questions" className={nav.links}>
                FAQ
              </Link>
              <div className={nav.hamburgerMenuButtons}>
                <div
                  className={nav.dropdownLinkSection}
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                >
                  <Link
                    className={nav.links}
                    onClick={() => setShowDropdown(!showDropdown)}
                  >
                    Pay Now
                  </Link>
                  <div
                    className={`${nav.dropdownSection} ${
                      showDropdown ? nav.showDropdownSection : ""
                    }`}
                  >
                    <Link
                      className={nav.links}
                      to="https://paypal.me/ParichayP?country.x=IN&locale.x=en_GB"
                    >
                      Pay Pal
                    </Link>
                    <Link className={nav.links} to="#">
                      Credit / Debit Card
                    </Link>
                    <Link
                      className={nav.links}
                      onClick={() => alert(alertMessage)}
                    >
                      Bank Transfer
                    </Link>
                  </div>
                </div>
                {/* <Link className={nav.links} onClick={() => navigate("/signup")}>
                  Login
                </Link> */}
              </div>
            </div>
          </div>
        </div>

        <div className={nav.buttons}>
          <div
            className={nav.dropdownLinkSection}
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <button className={nav.btn}>
              Pay Now
            </button>
            <div
              className={`${nav.dropdownSection} ${
                showDropdown ? nav.showDropdownSection : ""
              }`}
            >
              <Link
                className={nav.links}
                to="https://paypal.me/ParichayP?country.x=IN&locale.x=en_GB"
              >
                Pay Pal
              </Link>
              <Link className={nav.links} to="#">
                Credit / Debit Card
              </Link>
              <Link className={nav.links} onClick={() => alert(alertMessage)}>
                Bank Transfer
              </Link>
            </div>
          </div>

          {/* <button className={nav.loginbtn} onClick={() => navigate("/signup")}>
            Login
          </button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
