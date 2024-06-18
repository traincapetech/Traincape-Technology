import React, { useEffect } from "react";
import cloudsecurity from "./CloudSecuritySingePage.module.css";
import cloud from "../../assets/CSA.png";
import { useNavigate } from "react-router-dom";

const CloudSecurityAllianceSinglePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={cloudsecurity.container}>
      <div className={cloudsecurity.HeadingContainer}>
        <div className={cloudsecurity.Heading}>
          <h1>
            CSA offers several globally recognized, knowledge-based professional
            certifications for cloud security professionals, including the
            Certified Cloud Security Professional (CCSP), Certified Cloud
            Security Administrator (CCSA), and Certified Cloud Security Engineer
            (CCSE). These certifications validate the skills and experience
            required for various cloud security roles, with different levels of
            certification available. The certification process involves earning
            milestone badges, completing a certification application, and
            attending a peer review board evaluation, without a formal
            examination requirement. CSA also provides Accredited Certification
            Programs (ACPs) that allow organizations to certify their own cloud
            security professionals using the same standards and criteria. These
            certifications are designed to be a globally recognized, credible,
            and portable validation of a cloud security professional's
            knowledge, skills, and expertise, making them widely respected in
            the industry.
          </h1>
        </div>
        <div className={cloudsecurity.ImgContainer}>
          <img src={cloud} alt="Cloud-security-alliance-Image" />
        </div>
      </div>
      <div className={cloudsecurity.courseContainer}>
        <div className={cloudsecurity.certificateText}>
          <h1>Cloud Security Alliance Certification</h1>
          <p>Your safety, our priority!</p>
        </div>
        <div className={cloudsecurity.certificateContainer}>
          <div className={cloudsecurity.certificateDiv}>
            <h1>Advanced Cloud Security Practitioner</h1>

            <div className={cloudsecurity.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1zX0ENhfYejSmwm5qthkax62laMg-r-PJ/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={cloudsecurity.certificateDiv}>
            <h1>CERTIFICATE OF CLOUD SECURITY KNOWLEDGE PLUS TOC </h1>

            <div className={cloudsecurity.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1qIHWVLlqkljHJubTURx_4BEP77btLKMS/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={cloudsecurity.certificateDiv}>
            <h1>Certificate of Cloud Security Knowledge (CCSK)</h1>

            <div className={cloudsecurity.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1F2PC9qsg1-2dBNYIJUF2mYxgE9Wpwxjt/view",
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

export default CloudSecurityAllianceSinglePage;
