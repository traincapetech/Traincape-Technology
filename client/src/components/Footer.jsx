import React from "react";
import style from "../css/Footer.module.css";
import { Link, useNavigate } from "react-router-dom";
import { FaMapLocationDot } from "react-icons/fa6";
import { LuTimerReset } from "react-icons/lu";
import { TbPhoneCall } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className={style.FooterContainer}>
      <div className={style.Details}>
        <div className={style.detailsDiv}>
          <div className={style.address}>
            <div className={style.iconDiv}>
              <FaMapLocationDot className={style.icon} />
            </div>
            <div>
              <h1>OFFICE ADDRESS</h1>
              <p>
                Khandolia Plaza, 118\C, Dabri - Palam Rd, Vaishali Colony,
                Dashrath Puri, New Delhi, Delhi, 110045
              </p>
            </div>
          </div>
          {/* <div className={style.address}>
            <div className={style.iconDiv}>
              <LuTimerReset className={style.icon} />
            </div>
             <div>
              <h1>WORKING HOURS</h1>
              <p>Mon - Sat : 11am - 7pm</p>
            </div> 
          </div>{" "} */}
          <div className={style.address}>
            <div className={style.iconDiv}>
              <TbPhoneCall className={style.icon} />
            </div>
            <div>
              <h1>CONTACT - US</h1>
              <p>sales@traincaapetech.info</p>
              <p>+91 6280281505</p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.middleSection}>
        <div className={style.middle}>
          <div className={style.footerdiv}>
            <h1>ABOUT US</h1>
            <p>
              Traincape Technology's specific methodologies for measuring and
              prioritizing customer satisfaction. <br />
              <br />
              However, many companies use various methods to gauge and
              prioritize customer satisfaction.
            </p>
            <div className={style.social}>
              <div
                className={style.SocailDiv}
                onClick={() =>
                  (window.location.href =
                    "https://www.facebook.com/profile.php?id=100083755432171")
                }
              >
                <FaFacebookF className={style.Socialicon} />
              </div>
              <div className={style.SocailDiv}>
                <FaInstagram className={style.Socialicon} />
              </div>
              <div
                className={style.SocailDiv}
                onClick={() => {
                  window.location.href =
                    "https://in.linkedin.com/company/traincape-technology";
                }}
              >
                <FaLinkedinIn className={style.Socialicon} />
              </div>
            </div>
          </div>
          <div className={style.footerdiv}>
            <h1>Links</h1>
            <Link
              to="/frequently-asked-questions"
              className={style.linksfooter}
            >
              FAQ
            </Link>
            <Link to="/terms-and-conditions" className={style.linksfooter}>
              Terms & Conditions
            </Link>
            <Link className={style.linksfooter}>Policy</Link>
            <Link className={style.linksfooter}>Career</Link>
          </div>
          <div className={style.footerdiv}>
            <h1>Explore</h1>
            <Link className={style.linksfooter} to={"/about-us"}>What we do</Link>
            <Link className={style.linksfooter}>Blogs</Link>
            <Link className={style.linksfooter}>Latest Posts</Link>
            <Link to="/contact-us" className={style.linksfooter}>
              Contact Us
            </Link>
          </div>
          <div className={style.footerdiv}>
            <h1>Office Map</h1>
            <div className={style.gMap}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.744145964281!2d77.07744151353839!3d28.607451408196102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05ecdc6529c1%3A0x7419fbbcac72b568!2sTraincape%20technology%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1717065345903!5m2!1sen!2sin"
                width="600"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className={style.copyRight}>
        <h1>Copyright © 2021 Traincape Technology. All Rights Reserved.</h1>
      </div>
    </div>
  );
};

export default Footer;
