import React from "react";
import axelos from "./AxelosSinglePage.module.css";
import { useNavigate } from "react-router-dom";
import Axelos from "../../assets/axelos-2.webp";

const AxelosSinglePage = () => {
  const navigate = useNavigate();
  return (
    <div className={axelos.container}>
      <div className={axelos.HeadingContainer}>
        <div className={axelos.Heading}>
          <h1>
            Axelos certifications are globally recognized and respected in the
            IT industry. They offer a range of certifications, including IT
            service management, project management, and cyber resilience. The
            certifications are designed to validate the skills and knowledge of
            professionals in these areas, with levels ranging from Foundation to
            Practitioner. The certifications are valid for a lifetime or three
            years, depending on the level, and require recertification to
            maintain. Axelos also offers digital badges and a subscription
            service, MyAxelos, to support ongoing professional development and
            career advancement.
          </h1>
        </div>
        <div className={axelos.ImgContainer}>
          <img src={Axelos} alt="Axelos-Single-Page-Image" />
        </div>
      </div>
      <div className={axelos.courseContainer}>
        <div className={axelos.certificateText}>
          <h1>Axelos Certification</h1>
          <p>
            We offer a range of certifications covering IT Service Management,
            Project, Programme and Portfolio Management, Risk Management and
            more
          </p>
        </div>
        <div className={axelos.certificateContainer}>
          <div className={axelos.certificateDiv}>
            <h1>Lean Six Sigma Yellow Belt</h1>

            <div className={axelos.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1x8D5x7y4xScCSepeqfi9uCDlMMe5-TM2/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={axelos.certificateDiv}>
            <h1>Lean Six Sigma Green Belt</h1>

            <div className={axelos.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1GnPpI3NyaZlNafLqUG1CU6__Hhy6w3-E/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={axelos.certificateDiv}>
            <h1>
              Information Technology Infrastructure Library Foundation recap xi
            </h1>

            <div className={axelos.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1eBkML_FSPpMi2-7IzHrZ7X6GtPoEaPaj/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={axelos.certificateDiv}>
            <h1>Information Technology Infrastructure Library 4 Foundation</h1>

            <div className={axelos.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1YRbQ5Y99CAaPXcoMEdQcFbm04tS15sNx/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={axelos.certificateDiv}>
            <h1>
              Information Technology Infrastructure Library (ITIL) 4 Foundation
              Certification Training
            </h1>

            <div className={axelos.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1bcTi69Z1bQQ5oNPTOYbs33hLFNpup-st/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={axelos.certificateDiv}>
            <h1>ITIL 4 Foundation Certification Training</h1>

            <div className={axelos.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1vc42IXCfGqiwijhQ7J_ugVFgyDSev3oc/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={axelos.certificateDiv}>
            <h1>ITIL 4 Foundation Certification Training</h1>

            <div className={axelos.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1KTH1oEZTOe6VClMmSWZhCvgdnbV4X_Zd/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={axelos.certificateDiv}>
            <h1>ITIL 4 Foundation Certification Training</h1>
            <div className={axelos.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1KYG9tzGCixTeTsnYNFngTKz32QN5DZYG/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={axelos.certificateDiv}>
            <h1>ITIL 4 Foundation Certification Training</h1>
            <div className={axelos.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1QMTIXC0n993DpMT9tJzFLFrMBys13snJ/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={axelos.certificateDiv}>
            <h1>Information Technology agile Foundation and Practitioner</h1>
            <div className={axelos.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1W8667Fgp5R8ld4EgABFiv-202TTQBUk6/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={axelos.certificateDiv}>
            <h1>Information Technology agile Foundation and Practitioner</h1>
            <div className={axelos.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1F_lnnJ4k8I6r9lqULHX_vBs6vWEA4zkv/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={axelos.certificateDiv}>
            <h1>Information Technology agile Foundation and Practitioner</h1>
            <div className={axelos.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1_7nlGXnBOl3dauTrohy6NiNd02DinDz2/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={axelos.certificateDiv}>
            <h1>ITIL® 4 Strategist: Direct, Plan, and Improve</h1>
            <div className={axelos.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1ZhaGlz5pI38BSj1HdOzcs_lhtW2NvCga/view",
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

export default AxelosSinglePage;
