import React,{ useEffect} from "react";
import { useNavigate } from "react-router-dom";
import scrumStudy from "./ScrumStudySinglePage.module.css";
import scrumstudy from "../../assets/scrumstudy-1.svg";

const ScrumStudySinglePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  return (
    <div className={scrumStudy.container}>
      <div className={scrumStudy.HeadingContainer}>
        <div className={scrumStudy.Heading}>
          <h1>
            SCRUMstudy is the global accreditation body for Scrum and Agile
            certifications. It offers various certifications, including the
            Scrum Product Owner Certified, which is awarded to participants who
            complete the "Extending Scrum to Operations and DevOps" white paper.
            SCRUMstudy works through its global partner network of over 1500
            Authorized Training Providers to deliver trainings and
            certifications. These certifications help professionals improve
            project delivery processes, leading to increased ROI and a practical
            approach to product development
          </h1>
        </div>
        <div className={scrumStudy.ImgContainer}>
          <img src={scrumstudy} alt="AWS-Image" />
        </div>
      </div>
      <div className={scrumStudy.courseContainer}>
        <div className={scrumStudy.certificateText}>
          <h1>SCRUMStudy Certification</h1>
          <p>Empowering Agile Excellence with SCRUMstudy Certifications</p>
        </div>
        <div className={scrumStudy.certificateContainer}>
          <div className={scrumStudy.certificateDiv}>
            <h1>SCRUMStudy Agile Master Certified (SAMCTM)</h1>

            <div className={scrumStudy.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1MNsWTgEpgpDwoFTs_9KziuWYZPpeExUN/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>
          <div className={scrumStudy.certificateDiv}>
            <h1>Scrum Developer Certified (SDCTM)</h1>

            <div className={scrumStudy.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1ukPpb9YJddaoD_7-jOY07Vygzh-9Pgnb/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={scrumStudy.certificateDiv}>
            <h1>The Scrum Body of Knowledge (SBOK)</h1>

            <div className={scrumStudy.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1OCEOqcH3v694oHS2Ug1nuCqK23Xjgz4v/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={scrumStudy.certificateDiv}>
            <h1>Scrum Body of Knowledge (SBOK)-2</h1>

            <div className={scrumStudy.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1mT8anOoFYiTtxPBPN9E-cGv-Di8ghGnw/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={scrumStudy.certificateDiv}>
            <h1>Scrum Body of Knowledge (SBOK)-3</h1>

            <div className={scrumStudy.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1-dXarjGfWKhPAhLE7Sip1sogDkMTgaCW/view",
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

export default ScrumStudySinglePage;
