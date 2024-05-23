import React from "react";
import style from "../css/Home.module.css";
import BannerImage from "../assets/hero-1-2.jpg.svg";
import develop from "../assets/Development-Service.svg";
import market from "../assets/Marketing-services.svg";
import consult from "../assets/Consulting-service.svg";
import { useNavigate } from "react-router-dom";
import hero from "../assets/Heroimg.svg";
import call from "../assets/Call-small.svg";

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
              <p>
                24 HOURS SERVICE AVAILABLE
              </p>
              <h4>Call Us: +(91) 123 456 789</h4>
            </div>
          </div>
          <button onClick={() => navigate("/about-us")}>ABOUT US</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
