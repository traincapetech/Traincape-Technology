import React, { useEffect } from "react";
import apmgcss from "./APMGsinglePage.module.css";
import { useNavigate } from "react-router-dom";
import apmg from "../../assets/Apmg.png";

const APMGsinglePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  return (
    <div className={apmgcss.container}>
      <div className={apmgcss.HeadingContainer}>
        <div className={apmgcss.Heading}>
          <h1>
            APMG offers a range of certifications to validate your expertise in
            various professional roles and skills, designed to help you stand
            out in the job market, demonstrate your proficiency to employers,
            and advance your career. These certifications provide targeted
            validation for real-world scenarios, verify your expertise in
            in-demand job roles, increase your confidence, and enhance your
            ability to innovate. To get started, you can choose from a diverse
            portfolio of certification schemes including internationally
            renowned solutions for Project, Business and Information &
            Technology (IT) Management, Cyber Security and Public-private
            partnerships.
          </h1>
        </div>
        <div className={apmgcss.ImgContainer}>
          <img src={apmg} alt="APMG-Image" />
        </div>
      </div>
      <div className={apmgcss.courseContainer}>
        <div className={apmgcss.certificateText}>
          <h1>APMG Certification</h1>
          <p>
            Committed to ensuring excellent standards and collaborating closely
            with Government and industry leaders - we provide an ensemble of the
            best available certifications and business solutions.
          </p>
        </div>
        <div className={apmgcss.certificateContainer}>
          <div className={apmgcss.certificateDiv}>
            <h1>
              APMG Project Planning And ControlTM (PPC) Foundation and
              Practitioner Training
            </h1>

            <div className={apmgcss.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1TAEShJUP-5lfa4f_Ao6SQYNZpXMdVfnO/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>
          <div className={apmgcss.certificateDiv}>
            <h1>Enterprise Big Data Professional (EBDP) Training</h1>

            <div className={apmgcss.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1kweHxURC_FJJew3pJzm63vPhmgMJV9we/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={apmgcss.certificateDiv}>
            <h1>Enterprise Big Data Analyst (EBDA) Training</h1>

            <div className={apmgcss.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1ndOHL4NoO_AUogmEpye_wTYth7wYjJfN/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={apmgcss.certificateDiv}>
            <h1>Agile Project Management Foundation (AgilePM)</h1>

            <div className={apmgcss.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/17B2AeAwfBNvc3l_4a_xKxIf-dr7jcIvw/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={apmgcss.certificateDiv}>
            <h1>Agile Project Management Foundation (AgilePM)</h1>

            <div className={apmgcss.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1tY4ctQEWaHJaOdFXsZWvUqZBE6qijEkm/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={apmgcss.certificateDiv}>
            <h1>Agile Project Management Foundation (AgilePM)</h1>

            <div className={apmgcss.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1WYa2QowOzsTpCRf7jOlq-sC4YZ3IKdqW/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={apmgcss.certificateDiv}>
            <h1>
              Project Management for Development Professionals (PMD Pro)
              Training
            </h1>

            <div className={apmgcss.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1CWe7Le8HBeFrZQUU75k3vgy6OoG8vxHH/view",
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

export default APMGsinglePage;
