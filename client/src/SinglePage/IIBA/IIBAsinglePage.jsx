import React from "react";
import Iiba from "./IIBAsinglePage.module.css";
import { useNavigate } from "react-router-dom";
import iiba from "../../assets/iiba-1-svg.svg";

const IIBAsinglePage = () => {
  const navigate = useNavigate();
  return (
    <div className={Iiba.container}>
      <div className={Iiba.HeadingContainer}>
        <div className={Iiba.Heading}>
          <h1>
            IIBA (International Institute of Business Analysis) offers a range
            of certifications for business analysts, designed to validate their
            skills and knowledge in various aspects of the profession. These
            certifications cater to different levels of experience and specific
            areas, providing a clear path for career growth. To get IIBA
            certified, you can select from entry-level ECBA, mid-level CCBA, and
            expert-level CBAP certifications, as well as specialized
            certifications like IIBA-AAC, IIBA-CBDA, and IIBA-CPOA.
          </h1>
        </div>
        <div className={Iiba.ImgContainer}>
          <img src={iiba} alt="IIBA-Image" />
        </div>
      </div>
      <div className={Iiba.courseContainer}>
        <div className={Iiba.certificateText}>
          <h1>IIBA Certification</h1>
          <p>
            Unlock Your Business Analysis Potential with IIBA Certifications
          </p>
        </div>
        <div className={Iiba.certificateContainer}>
          <div className={Iiba.certificateDiv}>
            <h1>ifed Business Analysis Professionals (CBAP)</h1>

            <div className={Iiba.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1vwVcGkErhBec4wITT9_ci71hQrzY4did/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>
          <div className={Iiba.certificateDiv}>
            <h1>ECBATM Certificate Program Overview</h1>

            <div className={Iiba.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/16qTFFbsh9Wcq7uW3L3vuPHQX2TPjFNNW/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={Iiba.certificateDiv}>
            <h1>The Business Analysis Core Concept Model (BABOK)</h1>

            <div className={Iiba.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1iaNuK1dT_RfiUVJ4HDr5Nee91f9hS_HB/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={Iiba.certificateDiv}>
            <h1>Certificate in Product Ownership Analysis (IIBA®-CPOA))</h1>

            <div className={Iiba.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1MVEn_eoT9Fjn9r8IZoEIehLK-863hSAJ/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IIBAsinglePage;
