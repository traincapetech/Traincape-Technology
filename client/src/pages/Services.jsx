import React from "react";
import style from "../css/Services.module.css";
import banner from "../assets/servicesBanner.svg";
import cloud from "../assets/Cloud-services.svg";
import UI from "../assets/UI-development.svg";
import Digital from "../assets/Digital marketing.svg";
import Web from "../assets/Web development.svg";
import Software from "../assets/software-services.svg";
import softwareDevelopment from "../assets/Software-development-Learnings.svg";
import Consult from "../assets/smallImg.jpeg";
import { useNavigate } from "react-router-dom";
import project from "../assets/Project Planning.svg";
import arrow from "../assets/Process arrow.svg";
import Request from "../assets/Meeting-request.svg";
import Building from "../assets/Start Building.svg";

const Services = () => {
  const navigate = useNavigate();
  return (
    <div className={style.container}>
      <div className={style.banner}>
        <img src={banner} alt="Banner" />
      </div>
      <div className={style.services}>
        <div className={style.subSerices}>
          <div className={style.service}>
            <img src={cloud} alt="Cloud services" />
            <h1>Cloud Services</h1>
            <p>
              Deliver plug commerce with dynamic is expertise. leading edge
              products with business models
            </p>
            <button className={style.btn}>Read More </button>
          </div>
          <div className={style.service}>
            <img src={UI} alt="UI development" />
            <h1>UI Development</h1>
            <p>
              Deliver plug commerce with dynamic is expertise. leading edge
              products with business models
            </p>
            <button className={style.btn}>Read More </button>
          </div>
          <div className={style.service}>
            <img src={Digital} alt="Digital Marketing" />
            <h1>Digital Marketing</h1>
            <p>
              Deliver plug commerce with dynamic is expertise. leading edge
              products with business models
            </p>
            <button className={style.btn}>Read More </button>
          </div>
          <div className={style.service}>
            <img src={Web} alt="Web Development" />
            <h1>Web Development</h1>
            <p>
              Deliver plug commerce with dynamic is expertise. leading edge
              products with business models
            </p>
            <button className={style.btn}>Read More </button>
          </div>
          <div className={style.service}>
            <img src={Software} alt="Software services" />
            <h1>Software Services</h1>
            <p>
              Deliver plug commerce with dynamic is expertise. leading edge
              products with business models
            </p>
            <button className={style.btn}>Read More </button>
          </div>
          <div className={style.service}>
            <img
              src={softwareDevelopment}
              alt="Software Development Learnings"
            />
            <h1>Software Development</h1>
            <p>
              Deliver plug commerce with dynamic is expertise. leading edge
              products with business models
            </p>
            <button className={style.btn}>Read More </button>
          </div>
        </div>

        <div className={style.consult}>
          <img src={Consult} className={style.img} alt="Consult Image" />
          <div className={style.consultdiv}>
            <div className={style.consultText}>
              <p>We are here to answer your questions 24/7</p>
              <h1>Need A Consultation?</h1>
            </div>
            <div className={style.consultbtn}>
              <button
                className={style.btn2}
                onClick={() => navigate("/contact-us")}
              >
                GET A CONSULTATION
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={style.specializationContainer}>
        <div className={style.specializationDiv}>
          <h3>WHAT WE DO FOR YOU</h3>
          <h2>Our Specialization</h2>
          <div className={style.specialization}>
            <div>
              <img src={project} alt="" />
              <h1>Project Planning</h1>
              <p>
                Internal or "organic" sources without turnkey growth strategies.
                Seamlessly promote client-centered
              </p>
            </div>

            <div>
              <img src={arrow} className={style.arrow} alt="" />
            </div>

            <div>
              <img src={Request} alt="" />
              <h1>Project Planning</h1>
              <p>
                Internal or "organic" sources without turnkey growth strategies.
                Seamlessly promote client-centered
              </p>
            </div>
            <div>
              <img src={arrow} className={style.arrow} alt="" />
            </div>

            <div>
              <img src={Building} alt="" />
              <h1>Project Planning</h1>
              <p>
                Internal or "organic" sources without turnkey growth strategies.
                Seamlessly promote client-centered
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
