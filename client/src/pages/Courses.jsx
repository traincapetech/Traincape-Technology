import React, { useEffect } from "react";
import style from "../css/Courses.module.css";
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={style.cloudContainer}>
      <div className={style.cloudBanner}>
        <h1>Courses</h1>
        <div className={style.underline}></div>
      </div>
      <div className={style.bannerDown}>
        <h1>Explore Our Courses</h1>
      </div>
      <div className={style.courses}>
        <div className={style.course}>
          <div className={style.CourseImg}>
            <img src={microsoft} alt="MicroSoft" />
          </div>
          <div className={style.CourseText}>
            <h1>Microsoft</h1>
            <button className={style.courseBtn}>Know More</button>
          </div>
        </div>
        <div className={style.course}>
          <div className={style.CourseImg}>
            <img src={aws} alt="MicroSoft" />
          </div>
          <div className={style.CourseText}>
            <h1>AWS</h1>
            <button className={style.courseBtn}>Know More</button>
          </div>
        </div>
        <div className={style.course}>
          <div className={style.CourseImg}>
            <img src={Vmware} alt="MicroSoft" />
          </div>
          <div className={style.CourseText}>
            <h1>Vmware</h1>
            <button className={style.courseBtn}>Know More</button>
          </div>
        </div>
        <div className={style.course}>
          <div className={style.CourseImg}>
            <img src={cisco} alt="MicroSoft" />
          </div>
          <div className={style.CourseText}>
            <h1>CISCO</h1>
            <button className={style.courseBtn}>Know More</button>
          </div>
        </div>
        <div className={style.course}>
          <div className={style.CourseImg}>
            <img src={oracle} alt="MicroSoft" />
          </div>
          <div className={style.CourseText}>
            <h1>Oracle</h1>
            <button className={style.courseBtn}>Know More</button>
          </div>
        </div>
        <div className={style.course}>
          <div className={style.CourseImg}>
            <img src={EcCouncil} alt="MicroSoft" />
          </div>
          <div className={style.CourseText}>
            <h1>EC-Council</h1>
            <button className={style.courseBtn}>Know More</button>
          </div>
        </div>
        <div className={style.course}>
          <div className={style.CourseImg}>
            <img src={axelos} alt="MicroSoft" />
          </div>
          <div className={style.CourseText}>
            <h1>AXELOS</h1>
            <button className={style.courseBtn}>Know More</button>
          </div>
        </div>
        <div className={style.course}>
          <div className={style.CourseImg}>
            <img src={isaca} alt="MicroSoft" />
          </div>
          <div className={style.CourseText}>
            <h1>ISACA</h1>
            <button className={style.courseBtn}>Know More</button>
          </div>
        </div>
        <div className={style.course}>
          <div className={style.CourseImg}>
            <img src={pmi} alt="MicroSoft" />
          </div>
          <div className={style.CourseText}>
            <h1>PMI</h1>
            <button className={style.courseBtn}>Know More</button>
          </div>
        </div>
        <div className={style.course}>
          <div className={style.CourseImg}>
            <img src={comptia} alt="MicroSoft" />
          </div>
          <div className={style.CourseText}>
            <h1>CompTIA</h1>
            <button className={style.courseBtn}>Know More</button>
          </div>
        </div>
        <div className={style.course}>
          <div className={style.CourseImg}>
            <img src={pecb} alt="MicroSoft" />
          </div>
          <div className={style.CourseText}>
            <h1>PECB</h1>
            <button className={style.courseBtn}>Know More</button>
          </div>
        </div>
        <div className={style.course}>
          <div className={style.CourseImg}>
            <img src={istqb} alt="MicroSoft" />
          </div>
          <div className={style.CourseText}>
            <h1>ISTQB</h1>
            <button className={style.courseBtn}>Know More</button>
          </div>
        </div>
        <div className={style.course}>
          <div className={style.CourseImg}>
            <img src={iiba} alt="MicroSoft" />
          </div>
          <div className={style.CourseText}>
            <h1>IIBA</h1>
            <button className={style.courseBtn}>Know More</button>
          </div>
        </div>
        <div className={style.course}>
          <div className={style.CourseImg}>
            <img src={scrumStudy} alt="MicroSoft" />
          </div>
          <div className={style.CourseText}>
            <h1>SCRUMstudy</h1>
            <button className={style.courseBtn}>Know More</button>
          </div>
        </div>
        <div className={style.course}>
          <div className={style.CourseImg}>
            <img src={suse} alt="MicroSoft" />
          </div>
          <div className={style.CourseText}>
            <h1>SUSE</h1>
            <button className={style.courseBtn}>Know More</button>
          </div>
        </div>
        <div className={style.course}>
          <div className={style.CourseImg}>
            <img src={theopenGroup} alt="MicroSoft" />
          </div>
          <div className={style.CourseText}>
            <h1>The Open Group</h1>
            <button className={style.courseBtn}>Know More</button>
          </div>
        </div><div className={style.course}>
          <div className={style.CourseImg}>
            <img src={apmg} alt="MicroSoft" />
          </div>
          <div className={style.CourseText}>
            <h1>APMG</h1>
            <button className={style.courseBtn}>Know More</button>
          </div>
        </div><div className={style.course}>
          <div className={style.CourseImg}>
            <img src={csa} alt="MicroSoft" />
          </div>
          <div className={style.CourseText}>
            <h1>Cloud Security Alliance</h1>
            <button className={style.courseBtn}>Know More</button>
          </div>
        </div><div className={style.course}>
          <div className={style.CourseImg}>
            <img src={officeTraining} alt="MicroSoft" />
          </div>
          <div className={style.CourseText}>
            <h1>OffSec Training</h1>
            <button className={style.courseBtn}>Know More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
