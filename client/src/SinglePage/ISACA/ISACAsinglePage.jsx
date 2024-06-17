import React from "react";
import isacasingle from "./ISACAsinglePage.module.css";
import { useNavigate } from "react-router-dom";
import isaca from "../../assets/ISACA-2.webp";

const ISACAsinglePage = () => {
  const navigate = useNavigate();
  return (
    <div className={isacasingle.container}>
      <div className={isacasingle.HeadingContainer}>
        <div className={isacasingle.Heading}>
          <h1>
            ISACA is a professional association that offers various
            certifications for IT professionals, focusing on IT governance,
            auditing, security, risk management, and governance. The
            certifications include CISA (Certified Information Systems Auditor),
            CISM (Certified Information Security Manager), CRISC (Certified in
            Risk and Information Systems Control), CDPSE (Certified Data Privacy
            Solutions Engineer), CGEIT (Certified in the Governance of
            Enterprise IT), and CSX-P (Cybersecurity Practitioner
            Certification). These certifications are recognized globally and are
            considered essential for advancing digital trust and demonstrating
            expertise in IT governance and security.
          </h1>
        </div>
        <div className={isacasingle.ImgContainer}>
          <img src={isaca} alt="ISACA-Image" />
        </div>
      </div>
      <div className={isacasingle.courseContainer}>
        <div className={isacasingle.certificateText}>
          <h1>ISACA Certification</h1>
          <p>Building Trust Through Information Systems Assurance</p>
        </div>
        <div className={isacasingle.certificateContainer}>
          <div className={isacasingle.certificateDiv}>
            <h1>COBIT5 Foundation BOOT Camp</h1>

            <div className={isacasingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/13sW0uIJ5YA1kN0h9TMr3samC2fdU_XkC/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={isacasingle.certificateDiv}>
            <h1>Certified Information Systems Auditor (CISA) Training</h1>

            <div className={isacasingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1XIGlmgz9SRwoCBHn7ePZNB3Tmp2mHOq3/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={isacasingle.certificateDiv}>
            <h1>Certified Data Privacy Solutions Engineer</h1>

            <div className={isacasingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1OZdIL2tJLEdUqj1Cf8926xsA4w4LizZQ/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={isacasingle.certificateDiv}>
            <h1>Cloud Fundamentals Certificate</h1>

            <div className={isacasingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1SO6pXnNfoe9VT3DwO3Nakf7UcjEWad4n/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={isacasingle.certificateDiv}>
            <h1>Control Objectives for Information and Related Technology</h1>

            <div className={isacasingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1bkZvqqVtIyAahFt2EsdGbyJKhVZAL0u2/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={isacasingle.certificateDiv}>
            <h1>Certified in Risk and Information Systems Control</h1>

            <div className={isacasingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1GpNBE2rNgAmLN7Jf3EctWjW9zWstvbBA/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={isacasingle.certificateDiv}>
            <h1>IT Audit Fundamental Certificate</h1>

            <div className={isacasingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1H_gCIKollHZXwNjjmXaHBWXEjOBd7zqC/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={isacasingle.certificateDiv}>
            <h1>Certificate of Cloud Auditing Knowledge (CCAK)</h1>
            <div className={isacasingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1yvH2LDcXPxcX8rMQp5_HfH1HbHgWh63G/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={isacasingle.certificateDiv}>
            <h1>Control Objectives for Information and Related Technology</h1>
            <div className={isacasingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1aCWhj6tWdbfgICp6SX_cpSIpCkEGTM5H/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={isacasingle.certificateDiv}>
            <h1>Cybersecurity Audit and Compliance</h1>
            <div className={isacasingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1Y0YT-_uueLI5dgE68S5YbZG1tUaM0UvN/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={isacasingle.certificateDiv}>
            <h1>Certified Information Security Manager® (CISM®)</h1>
            <div className={isacasingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1khVYdg_iFUTS2bW27E-Qpd_h3DWXKgew/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={isacasingle.certificateDiv}>
            <h1>COBIT 2019 Foundation</h1>
            <div className={isacasingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1UlZKN1f6Na3XbaxWoVjUZmMZ15wap8st/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={isacasingle.certificateDiv}>
            <h1>ISACA® IT Risk Fundamentals</h1>
            <div className={isacasingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1gG8Kqff5I8Na0zsSF-zzXmZaeIo_I1xV/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={isacasingle.certificateDiv}>
            <h1>ISACA - Cybersecurity Governance, Risk, and Compliance</h1>
            <div className={isacasingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1cpHMcXKxdr4g1265VAQ_VswYVE-ebV8e/view",
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

export default ISACAsinglePage;
