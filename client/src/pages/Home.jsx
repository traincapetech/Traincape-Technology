import React from "react";
import style from "../css/Home.module.css";
import image from "../assets/Azure System.jpeg";
import BannerImage from "../assets/hero-1-2.jpg.svg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={style.container}>
      <div className={style.banner}>
        <div className={style.bannerImg}>
          <img src={BannerImage} alt="Banner Image" />
        </div>
        <div className={style.bannerText}>
          <h1>TOP IT </h1>
          <h1>SUPPORT & MANAGEMENT</h1>
          <p>
            Professionally repurpose intuitive total linkage after timely
            mindshare. Credibly coordinate reliable collaboration and
            idea-sharing after turnkey catalysts for change.
          </p>
          <button>ABOUT US</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
