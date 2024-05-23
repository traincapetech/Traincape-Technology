import React from "react";
import style from "../css/Home.module.css";
import BannerImage from "../assets/hero-1-2.jpg.svg";
import develop from "../assets/Development-Service.svg";
import market from "../assets/Marketing-services.svg";
import consult from "../assets/Consulting-service.svg";
import { useNavigate } from "react-router-dom";
import hero from "../assets/Heroimg.svg";
import call from "../assets/Call-small.svg";
import heroDown from "../assets/HeroDownBG.png";
import Services from "./Services";
import cloud from "../assets/Cloud-services.svg";
import UI from "../assets/UI-development.svg";
import Digital from "../assets/Digital marketing.svg";
import Web from "../assets/Web development.svg";
import Software from "../assets/software-services.svg";
import softwareDevelopment from "../assets/Software-development-Learnings.svg";
import Consult from "../assets/smallImg.jpeg";
import memberImg from "../assets/workingboy.jpg";
import RokeySir from "../assets/RokeySir.jpeg";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={style.container}>
      <div className={style.banner}>
        <div className={style.bannerImg}>
          <img src={BannerImage} alt="Banner" />
        </div>
        <div className={style.bannerText}>
          <h1>TOP IT</h1>
          <h1>SUPPORT & MANAGEMENT</h1>
          <p>
            Professionally repurpose intuitive total linkage after timely
            mindshare. Credibly coordinate reliable collaboration and
            idea-sharing after turnkey catalysts for change.
          </p>
          <button onClick={() => navigate("/about")}>ABOUT US</button>
        </div>
      </div>
      <div className={style.bannerImageDown}>
        <div className={style.servicediv}>
          <div className={style.imagediv}>
            <img src={develop} alt="Development Services" />
          </div>
          <h1>Development Services</h1>
          <p>
            Completely implement via highly efficient process improvements.
            Engage high value before progressive data.
          </p>
          <button className={style.readbtn}>Read More</button>
        </div>
        <div className={style.servicediv}>
          <div className={style.imagediv}>
            <img src={market} alt="Marketing Services" />
          </div>
          <h1>Marketing Services</h1>
          <p>
            Completely implement via highly efficient process improvements.
            Engage high value before progressive data.
          </p>
          <button className={style.readbtn}>Read More</button>
        </div>
        <div className={style.servicediv}>
          <div className={style.imagediv}>
            <img src={consult} alt="Consulting Services" />
          </div>
          <h1>Consulting Services</h1>
          <p>
            Completely implement via highly efficient process improvements.
            Engage high value before progressive data.
          </p>
          <button className={style.readbtn}>Read More</button>
        </div>
      </div>
      <div className={style.hero}>
        <div className={style.heroImg}>
          <img src={hero} alt="Hero Image" />
        </div>
        <div className={style.heroText}>
          <h3>GET BEST IT SOLUTIONS 2022</h3>
          <h1>TRUST OUR BEST IT SOLUTIONS FOR YOUR BUSINESS</h1>
          <p>
            Compellingly mesh cross-platform portals through functional human
            capital world-class architectures for orthogonal initiatives.
            Assertively benchmark visionary quality vectors after covalent
            e-tailers. Intrinsicly enhance 24/7 users and supply process
          </p>
          <div className={style.call}>
            <img src={call} alt="Calling Image" />
            <div>
              <p>24 HOURS SERVICE AVAILABLE</p>
              <h4>Call Us: +(91) 123 456 789</h4>
            </div>
          </div>
          <button
            className={style.herobtn}
            onClick={() => navigate("/about-us")}
          >
            ABOUT US
          </button>
        </div>
      </div>
      <div className={style.heroDown}>
        <p>OUR LATEST SERVICES</p>
        <h1>
          WHAT KIND OF SERVICES <br /> WE ARE OFFERING
        </h1>
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
                <p
                  style={{
                    fontSize: "15px",
                    fontFamily: "poppins",
                    color: "rgb(223, 210, 210)",
                    fontWeight: "lighter",
                    textAlign: "center",
                  }}
                >
                  We are here to answer your questions 24/7
                </p>
                <h1
                  style={{
                    fontSize: "40px",
                    fontFamily: "poppins",
                    color: "rgb(223, 210, 210)",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Need A Consultation?
                </h1>
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
      </div>
      <div className={style.ExpertContainer}>
        <div className={style.ExpertTeam}>
          <div className={style.ExpertText}>
            <p> GREAT TEAM MEMBERS</p>
            <h1>We Have Expert Team</h1>
          </div>
          <div className={style.ExpertMembers}>
            <div className={style.member}>
              <img src={memberImg} alt="Member Images" />
              <h1>Parichay Singh Rana</h1>
              <p>CEO</p>
            </div>
            <div className={style.member}>
              <img src={RokeySir} alt="Member Images" />
              <h1>Shivam Singh</h1>
              <p>Manager</p>
            </div>
            <div className={style.member}>
              <img src={memberImg} alt="Member Images" />
              <h1>Parichay Singh Rana</h1>
              <p>CEO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
