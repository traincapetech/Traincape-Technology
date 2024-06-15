import React from "react";
import { useNavigate } from "react-router-dom";
import MicrosoftSingle from "./MicrosoftSinglePage.module.css";
import microsoftImg from "../../assets/Microsoft-Emblem.jpg";

const MicrosoftSinglePage = () => {
  const navigate = useNavigate();
  return (
    <div className={MicrosoftSingle.container}>
      <div className={MicrosoftSingle.HeadingContainer}>
        <div className={MicrosoftSingle.Heading}>
          <h1>
            Microsoft offers a wide range of certifications to validate your
            expertise in various technical roles and skills, designed to help
            you stand out in the job market, demonstrate your proficiency to
            employers, and advance your career. Some key benefits include
            targeted validation for real-world scenarios, verified expertise for
            in-demand job roles, increased confidence, and better ability to
            innovate. To get started, you can sign into Microsoft Learn, explore
            the available credentials, gain technical skills through
            personalized learning experiences, use practice assessments to
            prepare for certification exams, and demonstrate your expertise by
            earning a Microsoft Certification or Microsoft Applied Skills
            credential. By earning a Microsoft certification, you can showcase
            your proficiency, boost your confidence, and enhance your ability to
            innovate, ultimately making you more valuable to your current and
            future employers.
          </h1>
        </div>
        <div className={MicrosoftSingle.ImgContainer}>
          <img src={microsoftImg} alt="Microsoft-Image" />
        </div>
      </div>
      <div className={MicrosoftSingle.courseContainer}>
        <div className={MicrosoftSingle.certificateText}>
          <h1>Microsoft Certification</h1>
          <p>
            Microsoft Learn is a platform that provides a wide range of
            certifications to validate your expertise in various technical roles
            and skills.
          </p>
        </div>
        <div className={MicrosoftSingle.certificateContainer}>
          <div className={MicrosoftSingle.certificateDiv}>
            <h1>AZ-104T00-A: Microsoft Azure Administrator</h1>

            <div className={MicrosoftSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1NjTnedKtieqUmKXeu28CJv3KFN1a4xu6/view?usp=drive_link",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>
          <div className={MicrosoftSingle.certificateDiv}>
            <h1>AZ-204: Developing Solutions for Microsoft Azure</h1>

            <div className={MicrosoftSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1wpwslowA_Cfb3ZQW8wUDfsiLa5gXX3R6/view?usp=drive_link",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={MicrosoftSingle.certificateDiv}>
            <h1>AZ-104T00-A: Microsoft Azure Administrator</h1>

            <div className={MicrosoftSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1hqLrHRutoSb5Cwugs0nEKKCS56D1KpJZ/view?usp=drive_link",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={MicrosoftSingle.certificateDiv}>
            <h1>AZ-304T00-A: Microsoft Azure Architect Design</h1>

            <div className={MicrosoftSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/18YlqS8uQMPxrZ7r_BgRYJHv_G4oooQIH/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={MicrosoftSingle.certificateDiv}>
            <h1>
              AZ-400T00: Designing and Implementing Microsoft DevOps solutions
            </h1>

            <div className={MicrosoftSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1JRwuW_Zss2IZAdZTFfY5ibZsTwRvvKbd/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={MicrosoftSingle.certificateDiv}>
            <h1>AZ-500T00: Microsoft Azure Security Technologies</h1>

            <div className={MicrosoftSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1ehQTwAAh7HDNrwv0VfEZp5-i0j7cXvoM/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={MicrosoftSingle.certificateDiv}>
            <h1>AZ-900T00: Microsoft Azure Fundamentals</h1>

            <div className={MicrosoftSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1hxKYXpgjleXo86XtWLWpSIu1_Nk5Y_zF/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={MicrosoftSingle.certificateDiv}>
            <h1>DA-100: Analyzing Data with Microsoft Power BI</h1>
            <div className={MicrosoftSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1JZBbIfma-KzAKHevVYOPBE5mn6rxNeD8/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={MicrosoftSingle.certificateDiv}>
            <h1>
              DP-200: Implementing an Azure Data Solution – Skills Measured
            </h1>
            <div className={MicrosoftSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1AsoWbzJOzOg3tjiMtjlK8LoAUqnQ0ehp/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={MicrosoftSingle.certificateDiv}>
            <h1>
              DP-300 : Administering Relational Database on Microsoft Azure
            </h1>
            <div className={MicrosoftSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1ZedOMBk96MuExSNixIO78s5f8lc_Dhsf/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={MicrosoftSingle.certificateDiv}>
            <h1>DP-900T00 Microsoft Azure Data Fundamentals</h1>
            <div className={MicrosoftSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1ZzE7xx6L9z7io9nyN2c1uSi4QqSMiXl7/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={MicrosoftSingle.certificateDiv}>
            <h1>
              MB-220: Microsoft Dynamics 365 Customer Insights (Journeys)
              Functional Consultant
            </h1>
            <div className={MicrosoftSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1ufAfVs_rBdjhAkepW1DE3DR1y79Zdk5a/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={MicrosoftSingle.certificateDiv}>
            <h1>
              MB-230: Microsoft Dynamics 365 Customer Service Functional
              Consultant
            </h1>
            <div className={MicrosoftSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1kTFChXO_1wjz1tMgB5pR-0fpqkiEnMl3/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={MicrosoftSingle.certificateDiv}>
            <h1>
              MB-300 : Microsoft Dynamics 365: Core Finance and Operations
            </h1>
            <div className={MicrosoftSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/16aIzJ2tbOaQqbhJ-il45NWk792CYBHxc/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={MicrosoftSingle.certificateDiv}>
            <h1>TOC MB-310: Microsoft Dynamics 365 Finance</h1>
            <div className={MicrosoftSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1yUOZVml2T2vkMpyhnGmeTacHVbKgtYxz/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={MicrosoftSingle.certificateDiv}>
            <h1>MB-910T00: Microsoft Dynamics 365 Fundamentals (CRM)</h1>
            <div className={MicrosoftSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1J0TczlXLqEk_ScER_WCBm-W6Or0JLGZp/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={MicrosoftSingle.certificateDiv}>
            <h1>MD-100T00 : Windows 10 </h1>
            <div className={MicrosoftSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1AyxT37VK1Igirgv7Hbw2bQA-wmgu0vwY/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={MicrosoftSingle.certificateDiv}>
            <h1>MD-101 : Managing Modern Desktops</h1>
            <div className={MicrosoftSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1rvfWLT1NIYuqMKIkSYw36LvNdaMjo_GO/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={MicrosoftSingle.certificateDiv}>
            <h1>MS-100T00-A: Microsoft 365 Identity and Services</h1>
            <div className={MicrosoftSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1Ue0M7sq7qQXhi5BL7e1lhqr_B-o8bvJD/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={MicrosoftSingle.certificateDiv}>
            <h1>MS-101: Microsoft 365 Mobility and Security</h1>
            <div className={MicrosoftSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1pCVt2gnYJsDulPcG35G9YQ6v2_P_bNoi/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={MicrosoftSingle.certificateDiv}>
            <h1>MS-500T00-A: Microsoft 365 Security Administration</h1>
            <div className={MicrosoftSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1mk_ABa9vV63F7QuDHfG8oZeck9jfuBOc/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={MicrosoftSingle.certificateDiv}>
            <h1>MS-700T00-A: Managing Microsoft Teams</h1>
            <div className={MicrosoftSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1XrcZc5_T2C0NEJGSrhO_Ui-b-B-MaqkR/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={MicrosoftSingle.certificateDiv}>
            <h1>MS-900T01-A: Microsoft 365 Fundamentals</h1>
            <div className={MicrosoftSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/19yOqEsyXcPe_DwzbCnCw9ot71r6fPXHW/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={MicrosoftSingle.certificateDiv}>
            <h1>PL-400 Microsoft Power Platform Solution Developer</h1>
            <div className={MicrosoftSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/123TYuo__n1UPkg_zc6XSecqwy-YubM04/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={MicrosoftSingle.certificateDiv}>
            <h1>PL-900T00: Microsoft Power Platform Fundamentals</h1>
            <div className={MicrosoftSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1YmGnLgVTjQ-GqKuL8a_qRQbymWXw1xv_/view",
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

export default MicrosoftSinglePage;
