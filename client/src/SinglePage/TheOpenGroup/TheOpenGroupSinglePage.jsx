import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Theopengroup from "../../assets/The Open Group - 2.png";
import theOpenGroup from "./TheOpengroupSinglePage.module.css";

const TheOpenGroupSinglePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  return (
    <div className={theOpenGroup.container}>
      <div className={theOpenGroup.HeadingContainer}>
        <div className={theOpenGroup.Heading}>
          <h1>
            The Open Group offers several globally recognized, knowledge-based
            professional certifications for IT professionals, including the Open
            Certified Architect (Open CA), Open Certified Data Scientist (Open
            CDS), Open Certified Technical Specialist (Open CTS), and Open
            Certified Trusted Technology Practitioner (Open CTTP). These
            certifications validate the skills and experience required for
            various IT roles, with different levels of certification available
            for the Open CA. The certification process involves earning
            milestone badges, completing a certification application, and
            attending a peer review board evaluation, without a formal
            examination requirement. The Open Group also provides Accredited
            Certification Programs (ACPs) that allow organizations to certify
            their own architects and specialists using the same standards and
            criteria. These certifications are designed to be a globally
            recognized, credible, and portable validation of an IT
            professional's knowledge, skills, and expertise, making them widely
            respected in the industry.
          </h1>
        </div>
        <div className={theOpenGroup.ImgContainer}>
          <img src={Theopengroup} alt="The-Open-Group-Image" />
        </div>
      </div>
      <div className={theOpenGroup.courseContainer}>
        <div className={theOpenGroup.certificateText}>
          <h1>The Open Group Certification</h1>
          <p>Build with Integrity Buy with Confidence</p>
        </div>
        <div className={theOpenGroup.certificateContainer}>
          <div className={theOpenGroup.certificateDiv}>
            <h1>TOGAF 10 (Practitioner)</h1>

            <div className={theOpenGroup.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1hlkylue_zg8Pm9JDV0AKWF5DWrp3dowe/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={theOpenGroup.certificateDiv}>
            <h1>TOGAF 10 Level 1 and Level 2. </h1>

            <div className={theOpenGroup.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1ejtUXtTjCOcjCSpZ62NuawXF3Ll4pABU/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={theOpenGroup.certificateDiv}>
            <h1>TOGAF 10 (Foundation)</h1>

            <div className={theOpenGroup.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1yMpng5gg9i5VANxGLcq0t-HeVKCZ7sLc/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={theOpenGroup.certificateDiv}>
            <h1>TOGAF Level1+2</h1>

            <div className={theOpenGroup.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1lRqJNESM6HUAgjtDTiI1sBMq9BkxFsfT/view",
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

export default TheOpenGroupSinglePage;
