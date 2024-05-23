import React from "react";
import style from "../css/AboutUS.module.css";
import banner from "../assets/About1.jpg";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import { SiEsotericsoftware } from "react-icons/si";
import { MdCall } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import childimg from "../assets/discussionArea.jpg";
import memberImg from "../assets/workingboy.jpg";
import RokeySir from "../assets/RokeySir.jpeg";
import Consult from "../assets/smallImg.jpeg";
import { useNavigate } from "react-router-dom";

const AboutUS = () => {
  const navigate = useNavigate();
  return (
    <div className={style.container}>
      <div className={style.banner}>
        <img src={banner} alt="Default image" />
        <h1>About Us</h1>
      </div>
      <div className={style.bannerdown}>
        <div className={style.info}>
          <div className={style.infodiv}>
            <div>
              <SiAmazonsimpleemailservice className={style.img} />
            </div>
            <h2>01</h2>
          </div>
          <h1>Cloud Services</h1>
          <p>
            Cardinate premier technology without sustainabile leadership
            work.....
          </p>
          <button className={style.btn}>Read More...</button>
        </div>
        <div className={style.info}>
          <div className={style.infodiv}>
            <div>
              <SiEsotericsoftware className={style.img} />
            </div>
            <h2>02</h2>
          </div>
          <h1>Software Services</h1>
          <p>
            Cardinate premier technology without sustainabile leadership
            work.....
          </p>
          <button className={style.btn}>Read More...</button>
        </div>
        <div className={style.info}>
          <div className={style.infodiv}>
            <div>
              <GrServices className={style.img} />
            </div>
            <h2>03</h2>
          </div>
          <h1>Machine Learning</h1>
          <p>
            Cardinate premier technology without sustainabile leadership
            work.....
          </p>
          <button className={style.btn}>Read More...</button>
        </div>
      </div>

      <div className={style.parent}>
        <div className={style.child1}>
          <h4>Get Best IT Solutiion 2022</h4>
          <h1>Inspiring Tech Needs For Bussiness</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
            animi necessitatibus, officiis unde hic eligendi corrupti. Facere
            maxime voluptatem iusto?
          </p>
          <div className={style.childdiv}>
            <div className={style.call}>
              <div className={style.icondiv}>
                <MdCall className={style.icon} />
              </div>
              <div>
                <h2>Call To Ask Any Query</h2>
                <h1>+91 1234567890</h1>
              </div>
            </div>
            <div className={style.border}></div>
            <div className={style.founder}>
              <p>Founder & CEO</p>
              <h3>Parichay Singh Rana</h3>
            </div>
          </div>
        </div>
        <div className={style.child2}>
          <img src={childimg} alt="Child Image" />
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

      <div className={style.Review}>
        <div className={style.ReviewDiv}>
          <div className={style.Quote}>
            <p>OUR BEST REVIEWS</p>
            <h1>Inspiring Tech Needs For Business</h1>
          </div>
          <div className={style.vdobtn}>
            <button className={style.btn1}>WATCH VIDEO</button>
          </div>
        </div>
        <div className={style.ReviewPersonDiv}>
          <div className={style.Reviewdiv1}>
            <div className={style.ReviewPerson}>
              <img src={memberImg} alt="IMage" />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptates, tenetur. Consectetur laudantium voluptates aut ad
                quidem ab eius amet rem.
              </p>
            </div>
            <h1>Lorem ipsum</h1>
            <h2>IT Customer</h2>
          </div>
          <div className={style.Reviewdiv1}>
            <div className={style.ReviewPerson}>
              <img src={memberImg} alt="IMage" />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptates, tenetur. Consectetur laudantium voluptates aut ad
                quidem ab eius amet rem.
              </p>
            </div>
            <h1>Lorem ipsum</h1>
            <h2>IT Customer</h2>
          </div>
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
  );
};

export default AboutUS;
