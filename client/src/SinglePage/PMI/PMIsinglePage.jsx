import { useNavigate } from "react-router-dom";
import React,{ useEffect} from "react";
import pmiSingle from "./PMIsinglePage.module.css";
import pmi from "../../assets/pmi-6.svg";

const PMIsinglePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  return (
    <div className={pmiSingle.container}>
      <div className={pmiSingle.HeadingContainer}>
        <div className={pmiSingle.Heading}>
          <h1>
            PMI (Project Management Institute) certifications are professional
            credentials offered by the Project Management Institute (PMI), a
            global organization known for setting standards in project
            management. These certifications validate an individual's ability to
            perform in project management roles and are recognized across
            various industries worldwide. They demonstrate a professional’s
            skills, experience, and knowledge in managing projects efficiently.
          </h1>
        </div>
        <div className={pmiSingle.ImgContainer}>
          <img src={pmi} alt="PMI-Image" />
        </div>
      </div>
      <div className={pmiSingle.courseContainer}>
        <div className={pmiSingle.certificateText}>
          <h1>PMI Certification</h1>
          <p>Making project management indispensable for business results.</p>
        </div>
        <div className={pmiSingle.certificateContainer}>
          <div className={pmiSingle.certificateDiv}>
            <h1>Process Modeling Using BPMN</h1>

            <div className={pmiSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1DKu1hNQN_7PDa0xqKp7mgNwgMHCMhsTu/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={pmiSingle.certificateDiv}>
            <h1>Project Management for Software Development</h1>

            <div className={pmiSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1vjLHq-3y9t4HFUEVUgbANWKO41qM_VLP/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={pmiSingle.certificateDiv}>
            <h1>PMI standard of Program Management</h1>

            <div className={pmiSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1mOMWzVO0I614ykpimiSZpaFP6W6FQN3M/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={pmiSingle.certificateDiv}>
            <h1>Project Management Professional (PMP)</h1>

            <div className={pmiSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1guPXPJ-POZsFnKQHCKSzkItUqQWJ78TU/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={pmiSingle.certificateDiv}>
            <h1>Certified Project Management Professional</h1>

            <div className={pmiSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1y8mDmLqBTros7nQWosJsr7wp2DaGcQVI/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={pmiSingle.certificateDiv}>
            <h1>Professional in Business Analysis</h1>

            <div className={pmiSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/14A9uQW4WazgdMBl-0BdenU6FiM_sAnJV/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={pmiSingle.certificateDiv}>
            <h1>Project Management Institute - Agile Certified Practitioner</h1>

            <div className={pmiSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1zt7Z6yokVea125Z3XYxWyophjCym4za8/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={pmiSingle.certificateDiv}>
            <h1>Project Budgeting and Cost Management</h1>
            <div className={pmiSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1AW5hUlfX-uVtWJXvEck070YPGwvUOupC/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={pmiSingle.certificateDiv}>
            <h1>Project Management Institute - Risk Management Professional</h1>
            <div className={pmiSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/195oVKZCeeijzxXhIC2jT1-TQofTtRubc/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={pmiSingle.certificateDiv}>
            <h1>
              Project Management Institute - (Agile Certified Professionals)
            </h1>
            <div className={pmiSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1yM_mDR_74WwDL_eBnkjzaYRgdh-PHTNS/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={pmiSingle.certificateDiv}>
            <h1>Portfolio Management Professional (PfMP)</h1>
            <div className={pmiSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1oF2X7sfAwwnips4coFGgwP5ao13e-fP2/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={pmiSingle.certificateDiv}>
            <h1>Project Management Institute - Scheduling Professional</h1>
            <div className={pmiSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1mkfRWbSwI8FEpS9n1Hw0W8XUMwAjpm99/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={pmiSingle.certificateDiv}>
            <h1>
              Project Management Institute - Professional in Business Analysis
            </h1>
            <div className={pmiSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1TsD_MCx600FrxZtoMbeTtmYuhyGp_Idj/view",
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

export default PMIsinglePage;
