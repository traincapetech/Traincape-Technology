import React, { useEffect } from "react";
import style from "../css/AboutUS.module.css";
import banner from "../assets/about-us-Bg.jpg";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import { SiEsotericsoftware } from "react-icons/si";
import { MdCall } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import childimg from "../assets/disccuss.jpg";
import memberImg from "../assets/workingboy.jpg";
import RokeySir from "../assets/RokeySir.jpeg";
import Consult from "../assets/smallImg.jpeg";
import { useNavigate } from "react-router-dom";
import jasveer from "../assets/jasveergill.png";
import traincapeInfo from "../assets/Traincape-info.jpg";

const AboutUS = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handlePdf = () => {
    const pdfUrl =
      "https://drive.google.com/uc?export=download&id=1NdZDoLk-q9saDgfrWzNQ9mLIgUZHGKg8";
    window.open(pdfUrl);
  };
  return (
    <div className={style.container}>
      <div className={style.banner}>
        {/* <img src={banner} alt="Default image" /> */}
        <h1>About Us</h1>
      </div>
      <div className={style.PdfDiv}>
        <img src={traincapeInfo} alt="PDF IMAGE" />
        <div className={style.pdftext}>
          <div className={style.textpdf}>
            <h1>
              Traincape Technology Pvt Ltd was founded in 2021 by Parichay Singh
              Rana with a vision to revolutionize the way businesses approach
              technology. With years of experience in the industry, we
              recognized the need for a company that could provide tailored,
              reliable, and cutting-edge tech solutions. Our mission is to
              empower businesses by leveraging the latest technologies and
              innovations to drive growth, efficiency, and innovation. Our team
              of experts has extensive experience in developing and implementing
              custom software solutions, mobile apps, and web applications that
              meet the unique needs of our clients. We pride ourselves on our
              ability to understand our clients' business goals and develop
              solutions that align with their objectives.
            </h1>
            <button className={style.pdfDownloadBtn} onClick={handlePdf}>
              Download Our Presentation
            </button>
          </div>
        </div>
      </div>
      <div className={style.parent}>
        <div className={style.child1}>
          <h4>Get Best IT Solutiion 2022</h4>
          <h1>Inspiring Tech Needs For Bussiness</h1>
          <p>
            Traincape Technology was founded in 2021 by Parichay Singh Rana with
            a vision to revolutionize the way businesses approach technology.
            With years of experience in the industry, we recognized the need for
            a company that could provide tailored, reliable, and cutting-edge
            tech solutions.
          </p>
          <div className={style.childdiv}>
            <div className={style.call}>
              <div className={style.icondiv}>
                <MdCall className={style.icon} />
              </div>
              <div>
                <h2>Call To Ask Any Query</h2>
                <h1>+91 6280281505</h1>
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
              <img
                src="https://lh3.googleusercontent.com/a/ACg8ocI9VN6rcL2ZiH4q_UjppPI_CwuPobfiO3NOzKzXTVx0GDydug=w75-h75-p-rp-mo-br100"
                alt="IMage"
              />
              <p>
                These guys are awesome 🤩. Whatever you wanna do just tell them.
                They offer comprehensive training programs for all level I.T
                programs.
              </p>
            </div>
            <h1>DA BRO's</h1>
            <h2>IT Customer</h2>
          </div>
          <div className={style.Reviewdiv1}>
            <div className={style.ReviewPerson}>
              <img src={jasveer} alt="IMage" />
              <p>
                I did my azure training and certification from Traincape
                technology is just smooth experience. Going work on more goals
                in near future. Thanks Parichay and team.
              </p>
            </div>
            <h1>Jasvir Gill</h1>
            <h2>Azure Training</h2>
          </div>
        </div>
      </div>

      <div className={style.consult}>
        <img
          src={Consult}
          className={style.img}
          alt="Consult Image"
          style={{ backgroundSize: "cover" }}
        />
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
