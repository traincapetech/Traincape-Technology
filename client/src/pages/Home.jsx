import React, { useEffect } from "react";
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
import lady from "../assets/Lady-Conversation.svg";
import QuestionCard from "../components/QuestionCard";
import connectingImg from "../assets/connecting people.svg";

const questionsAndAnswers = [
  {
    id: 1,
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces.",
  },
  {
    id: 2,

    question: "What is a component in React?",
    answer:
      "A component in React is a reusable piece of code that represents a part of the user interface.",
  },
  {
    id: 3,
    question: "What is JSX?",
    answer:
      "JSX is a syntax extension for JavaScript that looks similar to XML or HTML and is used with React to describe what the UI should look like.JSX is a syntax extension for JavaScript that looks similar to XML or HTML and is used with React to describe what the UI should look like.JSX is a syntax extension for JavaScript that looks similar to XML or HTML and is used with React to describe what the UI should look like.",
  },
];

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
          <button onClick={() => navigate("/about-us")}>ABOUT US</button>
        </div>
      </div>
      <div className={style.bannerImageDown}>
        <div className={style.servicediv}>
          <div className={style.imagediv}>
            <img src={develop} alt="Development Services" />
          </div>
          <h1>Cloud Computing</h1>
          <p>
            Cloud computing is a model for delivering computing services over
            the internet, allowing users to access and utilize resources such as
            servers, storage, databases, networking, software, analytics, and
            intelligence on-demand.
          </p>
          <button
            className={style.readbtn}
            onClick={() => navigate("/Courses-details")}
          >
            Read More
          </button>
        </div>
        <div className={style.servicediv}>
          <div className={style.imagediv}>
            <img src={market} alt="Marketing Services" />
          </div>
          <h1>Cyber Security</h1>
          <p>
            Cybersecurity is the practice of protecting systems, networks, and
            data from digital attacks. It involves measures to prevent, detect,
            and respond to threats such as malware, hacking, and data breaches.
          </p>
          <button
            className={style.readbtn}
            onClick={() => navigate("/Courses-details")}
          >
            Read More
          </button>
        </div>
        <div className={style.servicediv}>
          <div className={style.imagediv}>
            <img src={consult} alt="Consulting Services" />
          </div>
          <h1>Project Management</h1>
          <p>
            Project management is the process of leading the work of a team to
            achieve all project goals within the given constraints. It involves
            planning, executing, tracking, and completing projects with the help
            of a project team.
          </p>
          <button
            className={style.readbtn}
            onClick={() => navigate("/Courses-details")}
          >
            Read More
          </button>
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
              <h4>Call Us: +(91) 6280281505</h4>
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
              <h2>Cloud Services</h2>
              <p>
                Cloud services provide computing resources over the internet,
                allowing users to access and use them on-demand without
                maintaining the underlying infrastructure. These services offer
                benefits such as cost optimization, scalability, accessibility,
                reliability, and innovation. The main types are IaaS, PaaS, and
                SaaS.
              </p>
              <button className={style.btn}>Read More </button>
            </div>
            <div className={style.service}>
              <img src={UI} alt="UI development" />
              <h2>UI Development</h2>
              <p>
                UI development involves designing and developing visual and
                interactive components for websites and applications. Key skills
                include HTML, CSS, JavaScript, responsive design, and
                accessibility. UI developers bridge the presentation and backend
                layers, creating intuitive interfaces. The job outlook is
                positive, with competitive salaries.
              </p>
              <button className={style.btn}>Read More </button>
            </div>
            <div className={style.service}>
              <img src={Digital} alt="Digital Marketing" />
              <h2>Digital Marketing</h2>
              <p>
                Digital marketing uses online strategies and channels to promote
                products and services, connecting businesses with customers.
                Techniques include SEO, PPC, social media, content marketing,
                and leveraging offline media. It offers benefits like
                cost-effectiveness, wider reach, measurability, adaptability,
                and improved engagement.
              </p>
              <button className={style.btn}>Read More </button>
            </div>
            <div className={style.service}>
              <img src={Web} alt="Web Development" />
              <h2>Web Development</h2>
              <p>
                Web development involves creating and maintaining websites and
                web applications. It includes frontend development (user
                interface), backend development (server-side logic), and
                full-stack development (both). Common languages are HTML, CSS,
                JavaScript. The process includes analysis, planning, design,
                content creation, testing, and maintenance. It is essential for
                establishing an online presence effectively.
              </p>
              <button className={style.btn}>Read More </button>
            </div>
            <div className={style.service}>
              <img src={Software} alt="Software services" />
              <h2>Software Services</h2>
              <p>
                Software services include custom software development, web
                development, mobile app development, cloud computing, quality
                assurance, software maintenance, and consulting. These services
                help businesses achieve their goals by providing tailored
                solutions, ensuring quality, and offering ongoing support.
              </p>
              <button className={style.btn}>Read More </button>
            </div>
            <div className={style.service}>
              <img
                src={softwareDevelopment}
                alt="Software Development Learnings"
              />
              <h2>Software Development</h2>
              <p>
                Software development is the process of designing, creating,
                testing, and maintaining computer programs and applications. It
                involves identifying needs, analyzing requirements, designing,
                developing, testing, deploying, and maintaining software. This
                field is essential for creating custom applications that
                automate processes and improve efficiency.
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
      <div className={style.help}>
        <div className={style.ladyIMG}>
          <img src={lady} alt="Image of lady conversation" />
        </div>
        <div className={style.helpText}>
          <div className={style.helpTextDiv}>
            <p>TALK ABOUT SOMETHING</p>
            <h1>HOW CAN WE HELP YOU?</h1>
            {questionsAndAnswers.map((item) => {
              return (
                <div key={item.id}>
                  <QuestionCard {...item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={style.connecting}>
        <div className={style.ConnectingText}>
          <h2>THE GREAT COMPANY SKILL</h2>
          <h1>CONNECTING PEOPLE AND BUILD TECHNOLOGY</h1>
          <p>
            Energistically evisculate an expanded array of meta-services after
            cross-media strategic theme areas. Interactively simplify
            interactive customer service before fully tested relationship
            parallel task high standards...
          </p>
          <div className={style.lineDiv}>
            <div className={style.line}>
              <h3>BUSINESS SECURITY</h3>
              <h4>65%</h4>
            </div>
            <div className={style.divline}>
              <div className={style.sweetline}></div>
            </div>
          </div>
          <div className={style.lineDiv}>
            <div className={style.line}>
              <h3>BUSINESS SECURITY</h3>
              <h4>65%</h4>
            </div>
            <div className={style.divline}>
              <div className={style.sweetline}></div>
            </div>
          </div>
          <div className={style.lineDiv}>
            <div className={style.line}>
              <h3>BUSINESS SECURITY</h3>
              <h4>65%</h4>
            </div>
            <div className={style.divline}>
              <div className={style.sweetline}></div>
            </div>
          </div>
        </div>
        <div className={style.connectingImg}>
          <img src={connectingImg} alt="Connecting Image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
