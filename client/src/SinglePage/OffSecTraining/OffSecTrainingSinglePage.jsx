import React, { useEffect } from "react";
import offsectraining from "./OffSecTrainingSinglePage.module.css";
import { useNavigate } from "react-router-dom";
import offsec from "../../assets/OffSec_Logo-2.jpg";

const OffSecTrainingSinglePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={offsectraining.container}>
      <div className={offsectraining.HeadingContainer}>
        <div className={offsectraining.Heading}>
          <h1>
            Offsec Training offers several globally recognized, knowledge-based
            professional certifications for cybersecurity professionals,
            including the Certified Ethical Hacker (CEH), Certified Information
            Systems Security Professional (CISSP), Certified Information
            Security Manager (CISM), and Certified Information Systems Auditor
            (CISA). These certifications validate the skills and experience
            required for various cybersecurity roles, with different levels of
            certification available for the CEH. The certification process
            involves earning milestone badges, completing a certification
            application, and attending a peer review board evaluation, without a
            formal examination requirement. Offsec Training also provides
            Accredited Certification Programs (ACPs) that allow organizations to
            certify their own cybersecurity professionals using the same
            standards and criteria. These certifications are designed to be a
            globally recognized, credible, and portable validation of a
            cybersecurity professional's knowledge, skills, and expertise,
            making them widely respected in the industry.
          </h1>
        </div>
        <div className={offsectraining.ImgContainer}>
          <img src={offsec} alt="OffSec-Training-Image" />
        </div>
      </div>
      <div className={offsectraining.courseContainer}>
        <div className={offsectraining.certificateText}>
          <h1>OffSec Training Certification</h1>
          <p>The Path to a Secure Future.</p>
        </div>
        <div className={offsectraining.certificateContainer}>
          <div className={offsectraining.certificateDiv}>
            <h1>PEN-200 (PWK) Syllabus</h1>

            <div className={offsectraining.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1oHpVBKsc3sSZlMIHv9adLHZxn2Q54HIA/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={offsectraining.certificateDiv}>
            <h1>Standard Occupational Classification (SOC) 200 </h1>

            <div className={offsectraining.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1LB9yApkZQ_qH1XYbyVpopDsp5pRoM2q6/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={offsectraining.certificateDiv}>
            <h1>Web Attacks with Kali Linux OSWA Syllabus</h1>

            <div className={offsectraining.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/13VefuGhApJal2REXmUUrue0J_YTzTozG/view",
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

export default OffSecTrainingSinglePage;
