import React from "react";
import AWSsingle from "./AWSsinglePage.module.css";
import aws from "../../assets/Amazon_Web_Services_Logo.svg.png";
import { useNavigate } from "react-router-dom";

const AWSsinglePage = () => {
  const navigate = useNavigate();
  return (
    <div className={AWSsingle.container}>
      <div className={AWSsingle.HeadingContainer}>
        <div className={AWSsingle.Heading}>
          <h1>
            AWS offers a range of certifications to validate your expertise in
            various technical roles and skills, designed to help you stand out
            in the job market, demonstrate your proficiency to employers, and
            advance your career. These certifications provide targeted
            validation for real-world scenarios, verify your expertise in
            in-demand job roles, increase your confidence, and enhance your
            ability to innovate. To get started, you can choose from role-based
            certifications, specialty certifications, and digital badges, and
            prepare for certification exams using training and materials that
            complement your hands-on AWS experience.
          </h1>
        </div>
        <div className={AWSsingle.ImgContainer}>
          <img src={aws} alt="AWS-Image" />
        </div>
      </div>
      <div className={AWSsingle.courseContainer}>
        <div className={AWSsingle.certificateText}>
          <h1>AWS Certification</h1>
          <p>
            AWS offers a range of certifications to validate your expertise in
            various technical roles and skills, designed to help you stand out
            in the job market
          </p>
        </div>
        <div className={AWSsingle.certificateContainer}>
          <div className={AWSsingle.certificateDiv}>
            <h1>AWS Certified Cloud Practitioner (CLF-C01)</h1>

            <div className={AWSsingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1Q1ct1k8hXW8dBIxyZL_fZjES-In0h43a/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>
          <div className={AWSsingle.certificateDiv}>
            <h1>AWS Certified Data Analytics – Specialty (DAS-C01)</h1>

            <div className={AWSsingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1e5Rt2eb8TrPsLVq_vwRO9sh5rahafTkv/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={AWSsingle.certificateDiv}>
            <h1>AWS Certified DevOps Engineer - Professional (DOP-C01)</h1>

            <div className={AWSsingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1Baw_etXUAvRa-_zNVtQw-jtK-ppupIIw/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={AWSsingle.certificateDiv}>
            <h1>AWS Certified Developer–Associate (DVA-C01)</h1>

            <div className={AWSsingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/18AStlSi6_Y-Yb7TYKna7InR7lUXG0-0L/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={AWSsingle.certificateDiv}>
            <h1>AWS Certified Machine Learning - Specialty (MLS-C01)</h1>

            <div className={AWSsingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1bRWNTmZpVE0Kbz_cAGv7mBuPQTXB_fha/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={AWSsingle.certificateDiv}>
            <h1>AWS Certified Solutions Architect - Associate (SAA-C02)</h1>

            <div className={AWSsingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1eMe7Q3a0WVa7Z95FAqULlNhPtzwFH7k2/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={AWSsingle.certificateDiv}>
            <h1>AWS Certified Solutions Architect– Professional (SAP-C01)</h1>

            <div className={AWSsingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1SbrxIk_tc6PXGOpcEM4uPJhyFxjQocuO/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={AWSsingle.certificateDiv}>
            <h1>AWS Certified Security Specialty (SCS-C01)</h1>
            <div className={AWSsingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1IiE3FllKfrbv3iXQK0Bj8OZngTJOxeKG/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={AWSsingle.certificateDiv}>
            <h1>AWS Certified SysOps Administrator - Associate (SOA-C01)</h1>
            <div className={AWSsingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1pe_nC9Ti-Tsedz5nc3O20yaE_fYWdwXI/view",
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

export default AWSsinglePage;
