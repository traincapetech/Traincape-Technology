import React, { useEffect } from "react";
import istqb from "./ISTQBsinglePage.module.css";
import { useNavigate } from "react-router-dom";
import istqbIMG from "../../assets/istb.png";

const ISTQBsinglePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  return (
    <div className={istqb.container}>
      <div className={istqb.HeadingContainer}>
        <div className={istqb.Heading}>
          <h1>
            ISTQB offers a range of certifications to validate your expertise in
            software testing, designed to help you stand out in the job market,
            demonstrate your proficiency to employers, and advance your career.
            These certifications provide targeted validation for real-world
            scenarios, verify your expertise in in-demand job roles, increase
            your confidence, and enhance your ability to innovate. To get
            started, you can choose from foundation level certifications,
            advanced level certifications, and specialized certifications, and
            prepare for certification exams using training and materials that
            complement your hands-on software testing experience.
          </h1>
        </div>
        <div className={istqb.ImgContainer}>
          <img src={istqbIMG} alt="AWS-Image" />
        </div>
      </div>
      <div className={istqb.courseContainer}>
        <div className={istqb.certificateText}>
          <h1>ISTQB Certification</h1>
          <p>Empowering Software Testing Professionals Worldwide</p>
        </div>
        <div className={istqb.certificateContainer}>
          <div className={istqb.certificateDiv}>
            <h1>
              ISTQB Foundation Level Syllabus: Acceptance Testing for Software
            </h1>

            <div className={istqb.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1zPw9NyOzKdbzQvCYycH6crVavGNG1FBx/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={istqb.certificateDiv}>
            <h1>Foundation Level Syllabus – Performance Testing</h1>

            <div className={istqb.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1fwaoCNHgHnB--zL93NrIuqlfqR3f8uqQ/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={istqb.certificateDiv}>
            <h1>Foundation Level Syllabus – Usability Testing</h1>

            <div className={istqb.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/193N-Z5Cf_oLeJKYH4134flBdkfiQi5GA/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={istqb.certificateDiv}>
            <h1>International Software Testing Qualifications Board</h1>

            <div className={istqb.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1DJRzbMf94XW1f_uEXs9G1hi_SC7750WX/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={istqb.certificateDiv}>
            <h1>ISTQB Foundation Certified Mobile App Tester</h1>

            <div className={istqb.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1SLk0Z1KiplTLAhVSzJvBa-akqyYh-6oS/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={istqb.certificateDiv}>
            <h1>Mobile Application Testing Foundation Level</h1>

            <div className={istqb.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1qwtgDJ00tDOaY908WFzFM9NoPW3UzeVH/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={istqb.certificateDiv}>
            <h1>ISTQB Foundation Level Syllabus: Software Testing</h1>

            <div className={istqb.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1lhZvOOgEDdvcDC9P6_3cN_uEPVdmWnO3/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={istqb.certificateDiv}>
            <h1>ISTQB Certified Tester Foundation Level (CTFL) Syllabus</h1>
            <div className={istqb.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/11KAh0DkmPAwbXVpeFZuB_qiTeA6m4bj5/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={istqb.certificateDiv}>
            <h1>Advanced Level Test Automation Engineer</h1>
            <div className={istqb.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1lekj92xfaaqEMWWDhwi9TOcvv8nBpqcS/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={istqb.certificateDiv}>
            <h1>
              Certified Tester Advanced Level Technical Test Analyst (CTAL-TTA)
              Syllabus
            </h1>
            <div className={istqb.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1o1MxY9A6ohPTfGATmKRE7pHf37M3ADpD/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={istqb.certificateDiv}>
            <h1>
              Certified Tester Advanced Level Syllabus Agile Technical Tester
              (ATT)
            </h1>
            <div className={istqb.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1ReNbNTYtHTFO3_SJRXxRt2YrxPrl0lFN/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={istqb.certificateDiv}>
            <h1>
              ISTQB - Certified Tester Expert Level Syllabus Test Management
            </h1>
            <div className={istqb.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/13ksZEy-ztY4XtCehLaqdFCYLSTbxHAZR/view",
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

export default ISTQBsinglePage;
