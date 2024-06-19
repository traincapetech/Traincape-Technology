import React, { useEffect } from "react";
import suse from "./SUSEsinglePage.module.css";
import { useNavigate } from "react-router-dom";
import suseIMG from "../../assets/suse.jpg";

const SUSESinglePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className={suse.container}>
      <div className={suse.HeadingContainer}>
        <div className={suse.Heading}>
          <h1>
            SUSE offers several globally recognized, knowledge-based
            professional certifications for Linux and open-source technology
            professionals, including the SUSE Certified Administrator (SCA),
            SUSE Certified Engineer (SCE), and SUSE Certified Architect (SCA).
            These certifications validate the skills and experience required for
            various Linux and open-source roles, with different levels of
            certification available.
          </h1>
        </div>
        <div className={suse.ImgContainer}>
          <img src={suseIMG} alt="SUSE-Image" />
        </div>
      </div>
      <div className={suse.courseContainer}>
        <div className={suse.certificateText}>
          <h1>SUSE Training Certification</h1>
          <p>You've learned it. Now prove it!</p>
        </div>
        <div className={suse.certificateContainer}>
          <div className={suse.certificateDiv}>
            <h1>
              SLE301v15 SUSE Linux Enterprise Server 15 Advanced Administration
            </h1>

            <div className={suse.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1MN-KWvhbIsKB7E0_v1kPY8KYgVzyd98U/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={suse.certificateDiv}>
            <h1>SMGR201v4 SUSE Manager 4 Basic Operations</h1>

            <div className={suse.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1U5w_TsfzYGzvMJU_LuA3s49qwBQ4U-eY/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={suse.certificateDiv}>
            <h1>SMGR211v4 SUSE Manager Deployment and Initial Configuration</h1>

            <div className={suse.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/17Iu8gHcJCgCeOHZ6ri0kOtAo6lTFZxtW/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={suse.certificateDiv}>
            <h1>SLE211v15 SUSE Linux Enterprise Server 15 Deployment</h1>

            <div className={suse.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1szACzWL1dJMj0K_KeHp2gseX37uSwFTK/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={suse.certificateDiv}>
            <h1>SLE201v15 SUSE Linux Enterprise Server 15 Administration</h1>

            <div className={suse.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1kW5j8X8GLSg1ceScz2wcYObejOGiQOQt/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={suse.certificateDiv}>
            <h1>KUB201v1.2 Kubernetes Administration</h1>

            <div className={suse.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1j1wSo81ZSLFM4aMzk7R5RsDJoo4khqzP/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={suse.certificateDiv}>
            <h1>LHN201v1.5 Longhorn Deployment and Operations</h1>

            <div className={suse.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1NjUiLzETjhVimZC9qMmVTYAsthhu-MY3/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={suse.certificateDiv}>
            <h1>RAN201v2.8 Rancher Manager 2.8 for Rancher Prime Operations</h1>

            <div className={suse.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1dI2H7iZUIj0eIUR8OVPGPGxvcJY69S_I/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={suse.certificateDiv}>
            <h1>
              HAE321v15 SUSE Linux Enterprise 15 High Availability Operations
            </h1>

            <div className={suse.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/18E83luymzzMkvlAXKNlaaT9EZ4Ch96Ax/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={suse.certificateDiv}>
            <h1>NEU211v5 SUSE NeuVector 5 Deployment</h1>

            <div className={suse.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1sSn6D5J2Kzt1EOxf8erpZcWNCndPRlYZ/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={suse.certificateDiv}>
            <h1>KUB211v1.24 Rancher Kubernetes Engine 2 Deploymentt</h1>

            <div className={suse.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/13q0mKzrfmwGB88wm8R2D833KFvtNouXs/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={suse.certificateDiv}>
            <h1>RAN211v2.7 Rancher Prime Manager 2.7 Deployment</h1>

            <div className={suse.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1cRr29lb3d82QjxhtPLseO6eJz7zRu5ue/view",
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

export default SUSESinglePage;
