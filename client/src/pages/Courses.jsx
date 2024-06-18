import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import courses from "../css/Courses.module.css";
import microsoft from "../assets/microsoft.jpg";
import Vmware from "../assets/VMware.webp";
import cisco from "../assets/cisco.jpg";
import aws from "../assets/AWS.avif";
import oracle from "../assets/oracle-servicio-cloud-en.png";
import EcCouncil from "../assets/EC-Council-feature.jpg";
import axelos from "../assets/Axelos.PNG";
import isaca from "../assets/ISACA.webp";
import pmi from "../assets/PMI.jpg";
import comptia from "../assets/Comptia.webp";
import pecb from "../assets/pecb.png";
import iiba from "../assets/iiba.jpeg";
import istqb from "../assets/istb.png";
import scrumStudy from "../assets/scrumstudy.jpg";
import suse from "../assets/suse.jpg";
import theopenGroup from "../assets/TheopenGroup.jpeg";
import apmg from "../assets/Apmg.png";
import csa from "../assets/CSA.png";
import officeTraining from "../assets/Offsec training.jpg";

const Courses = () => {
  const navigate = useNavigate();
  // const btnText = "COMING SOON";
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleAlert = () => {
    alert(
      "Thank you for visiting! We're sorry, but at this time we are unable to add the selected course. However, please be assured that we will add it as soon as possible. We appreciate your understanding and look forward to serving you in the future."
    );
  };

  return (
    <div className={courses.cloudContainer}>
      <div className={courses.cloudBanner}>
        <h1>Courses</h1>
        <div className={courses.underline}></div>
      </div>
      <div className={courses.bannerDown}>
        <h1>Explore Our Courses</h1>
      </div>
      <div className={courses.courses}>
        <div className={courses.course}>
          <div className={courses.CourseImg}>
            <img src={microsoft} alt="MicroSoft" />
          </div>
          <div className={courses.CourseText}>
            <h1>Microsoft</h1>
            <button
              className={courses.courseBtn}
              onClick={() => navigate("/Microsoft-single-page")}
            >
              Know More
            </button>
          </div>
        </div>
        <div className={courses.course}>
          <div className={courses.CourseImg}>
            <img src={aws} alt="AWS" />
          </div>
          <div className={courses.CourseText}>
            <h1>AWS</h1>
            <button
              className={courses.courseBtn}
              onClick={() => navigate("/AWS-single-page")}
            >
              Know More
            </button>
          </div>
        </div>

        <div className={courses.course}>
          <div className={courses.CourseImg}>
            <img src={cisco} alt="Cisco" />
          </div>
          <div className={courses.CourseText}>
            <h1>CISCO</h1>
            <button
              className={courses.courseBtn}
              onClick={() => navigate("/Cisco-single-page")}
            >
              Know More
            </button>
          </div>
        </div>
        <div className={courses.course}>
          <div className={courses.CourseImg}>
            <img src={oracle} alt="oracle" />
          </div>
          <div className={courses.CourseText}>
            <h1>Oracle</h1>
            <button
              className={courses.courseBtn}
              onClick={() => navigate("/Oracle-single-page")}
            >
              Know More
            </button>
          </div>
        </div>
        <div className={courses.course}>
          <div className={courses.CourseImg}>
            <img src={EcCouncil} alt="EcConcil" />
          </div>
          <div className={courses.CourseText}>
            <h1>EC-Council</h1>
            <button
              className={courses.courseBtn}
              onClick={() => navigate("/EcCouncil-single-page")}
            >
              Know More
            </button>
          </div>
        </div>
        <div className={courses.course}>
          <div className={courses.CourseImg}>
            <img src={axelos} alt="Axelos" />
          </div>
          <div className={courses.CourseText}>
            <h1>AXELOS</h1>
            <button
              className={courses.courseBtn}
              onClick={() => navigate("/Axelos-single-page")}
            >
              Know More
            </button>
          </div>
        </div>
        <div className={courses.course}>
          <div className={courses.CourseImg}>
            <img src={isaca} alt="ISACA" />
          </div>
          <div className={courses.CourseText}>
            <h1>ISACA</h1>
            <button
              className={courses.courseBtn}
              onClick={() => navigate("/ISACA-single-page")}
            >
              Know More
            </button>
          </div>
        </div>
        <div className={courses.course}>
          <div className={courses.CourseImg}>
            <img src={pmi} alt="PMI-Image" />
          </div>
          <div className={courses.CourseText}>
            <h1>PMI</h1>
            <button
              className={courses.courseBtn}
              onClick={() => navigate("/PMI-single-page")}
            >
              Know More
            </button>
          </div>
        </div>
        <div className={courses.course}>
          <div className={courses.CourseImg}>
            <img src={comptia} alt="COMPTIA" />
          </div>
          <div className={courses.CourseText}>
            <h1>CompTIA</h1>
            <button
              className={courses.courseBtn}
              onClick={() => navigate("/CompTIA-single-page")}
            >
              Know More
            </button>
          </div>
        </div>
        <div className={courses.course}>
          <div className={courses.CourseImg}>
            <img src={pecb} alt="PECB" />
          </div>
          <div className={courses.CourseText}>
            <h1>PECB</h1>
            <button className={courses.courseBtn} onClick={handleAlert}>
              Know More
            </button>
          </div>
        </div>
        <div className={courses.course}>
          <div className={courses.CourseImg}>
            <img src={istqb} alt="ISTQB" />
          </div>
          <div className={courses.CourseText}>
            <h1>ISTQB</h1>
            <button className={courses.courseBtn} onClick={handleAlert}>
              Know More
            </button>
          </div>
        </div>
        <div className={courses.course}>
          <div className={courses.CourseImg}>
            <img src={iiba} alt="IIBA" />
          </div>
          <div className={courses.CourseText}>
            <h1>IIBA</h1>
            <button
              className={courses.courseBtn}
              onClick={() => navigate("/IIBA-single-page")}
            >
              Know More
            </button>
          </div>
        </div>
        <div className={courses.course}>
          <div className={courses.CourseImg}>
            <img src={scrumStudy} alt="ScrumStudy" />
          </div>
          <div className={courses.CourseText}>
            <h1>SCRUMstudy</h1>
            <button
              className={courses.courseBtn}
              onClick={() => navigate("/ScrumStudy-single-page")}
            >
              Know More
            </button>
          </div>
        </div>
        <div className={courses.course}>
          <div className={courses.CourseImg}>
            <img src={suse} alt="SUse" />
          </div>
          <div className={courses.CourseText}>
            <h1>SUSE</h1>
            <button className={courses.courseBtn} onClick={handleAlert}>
              Know More
            </button>
          </div>
        </div>
        <div className={courses.course}>
          <div className={courses.CourseImg}>
            <img src={theopenGroup} alt="TheOpenGroup" />
          </div>
          <div className={courses.CourseText}>
            <h1>The Open Group</h1>
            <button
              className={courses.courseBtn}
              onClick={() => navigate("/TheOpenGroup-single-page")}
            >
              Know More
            </button>
          </div>
        </div>
        <div className={courses.course}>
          <div className={courses.CourseImg}>
            <img src={apmg} alt="APMG" />
          </div>
          <div className={courses.CourseText}>
            <h1>APMG</h1>
            <button className={courses.courseBtn} onClick={handleAlert}>
              Know More
            </button>
          </div>
        </div>
        <div className={courses.course}>
          <div className={courses.CourseImg}>
            <img src={csa} alt="CSA" />
          </div>
          <div className={courses.CourseText}>
            <h1>Cloud Security Alliance</h1>
            <button className={courses.courseBtn} onClick={handleAlert}>
              Know More
            </button>
          </div>
        </div>
        <div className={courses.course}>
          <div className={courses.CourseImg}>
            <img src={officeTraining} alt="OfficeTraining" />
          </div>
          <div className={courses.CourseText}>
            <h1>OffSec Training</h1>
            <button className={courses.courseBtn} onClick={handleAlert}>
              Know More
            </button>
          </div>
        </div>
        <div className={courses.course}>
          <div className={courses.CourseImg}>
            <img src={Vmware} alt="VMware" />
          </div>
          <div className={courses.CourseText}>
            <h1>Vmware</h1>
            <button className={courses.courseBtn} onClick={handleAlert}>
              Know More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
