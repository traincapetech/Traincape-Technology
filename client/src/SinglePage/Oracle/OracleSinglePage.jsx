import React,{ useEffect} from "react";
import oracleSingle from "./OracleSinglePage.module.css";
import oracle from "../../assets/oracle-2.svg";
import { useNavigate } from "react-router-dom";

const OracleSinglePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  return (
    <div className={oracleSingle.container}>
      <div className={oracleSingle.HeadingContainer}>
        <div className={oracleSingle.Heading}>
          <h1>
            Oracle Corporation is an American multinational computer technology
            company headquartered in Austin, Texas, United States. It is the
            third-largest software company in the world by revenue and market
            capitalization. Oracle sells database software, particularly the
            Oracle Database, and offers cloud computing services. The company's
            core application software includes enterprise resource planning
            (ERP), human capital management (HCM), customer relationship
            management (CRM), enterprise performance management (EPM), customer
            experience commerce (CX), and supply chain management (SCM)
            software.
          </h1>
        </div>
        <div className={oracleSingle.ImgContainer}>
          <img src={oracle} alt="Oracle-Image" />
        </div>
      </div>
      <div className={oracleSingle.courseContainer}>
        <div className={oracleSingle.certificateText}>
          <h1>Oracle Certification</h1>
          <p>Integrated Cloud Applications & Platform Services.</p>
        </div>
        <div className={oracleSingle.certificateContainer}>
          <div className={oracleSingle.certificateDiv}>
            <h1>Oracle SOA Suite 12c</h1>

            <div className={oracleSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1tfGoa62OO89bvALcKAFFeo6SRM4_sNm7/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={oracleSingle.certificateDiv}>
            <h1>Oracle Database 19c: Administration workshop</h1>

            <div className={oracleSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1tg_M-BSt61LBGPdX52ZxAQEGB35ErwaQ/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={oracleSingle.certificateDiv}>
            <h1>Java SE 8 Fundamentals Ed 1</h1>

            <div className={oracleSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1HEq78eWEjMQTM19e5U0nqcjDxp4W5B3y/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={oracleSingle.certificateDiv}>
            <h1>
              Oracle Database 19c: Monitoring and Maintaining a Secure
              Environment
            </h1>

            <div className={oracleSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1jLcSWPClUbgxqPiemArZPR5qDvEoF_DB/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={oracleSingle.certificateDiv}>
            <h1>JavaScript and HTML5: Develop Web Applications</h1>

            <div className={oracleSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1hf98ID7_tKJLJ-1-H-G3-1bmgbHJvzqG/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={oracleSingle.certificateDiv}>
            <h1>
              Oracle Service Bus 12c: System Admin, Design & Integrate Accel Ed
              1
            </h1>

            <div className={oracleSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/16-03uYFvJsnYhkqxnul6ZbmNgB0pgWOn/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={oracleSingle.certificateDiv}>
            <h1>R12.x Oracle HRMS Work Structure Fundamentals</h1>

            <div className={oracleSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1rctC5Jz2gPwCjG2yWTA5LHMwSb1vMUxU/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={oracleSingle.certificateDiv}>
            <h1>
              Oracle Exadata Database Machine: Implementation and Administration
            </h1>
            <div className={oracleSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1T95GBqywY4V-yNQU7tcWsxZDDQ1dBAKX/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={oracleSingle.certificateDiv}>
            <h1>
              Oracle Primavera P6 EPPM (Enterprise Project Portfolio Management)
            </h1>
            <div className={oracleSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1DyYBXp5Acnz5VPk_-MQAJRqbhaVT1k-T/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={oracleSingle.certificateDiv}>
            <h1>Oracle WebLogic Server 14c: Administration I</h1>
            <div className={oracleSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1ObZhYfXuD22Ff3-EIdqqYjRgjDnhftWZ/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={oracleSingle.certificateDiv}>
            <h1>Oracle Cloud Infrastructure Foundations</h1>
            <div className={oracleSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1nO9aQkcLfAJ15e69NXo7QyxkG3WjCtB_/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={oracleSingle.certificateDiv}>
            <h1>Oracle Cloud Infrastructure Architect Associate Workshop</h1>
            <div className={oracleSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1-AmR8UCW6mddRldqXbUk7EOH9S2zY2GV/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={oracleSingle.certificateDiv}>
            <h1>Oracle Database 19c: RAC Administration Workshop</h1>
            <div className={oracleSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1d1N5fpwiysHL6sJ37QGW5xFBBG6Rav3w/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={oracleSingle.certificateDiv}>
            <h1>Oracle Database 19c: SQL Tuning Workshop</h1>
            <div className={oracleSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1bnugbGiYBHVwMi5_qHevIvpOtNUK-jC-/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={oracleSingle.certificateDiv}>
            <h1>R12.2.9 Oracle Inventory Management Fundamentals</h1>
            <div className={oracleSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/11IcDsST0Lgmw-uMj5eZg9Di__sUUXClu/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={oracleSingle.certificateDiv}>
            <h1>R12.2.9 Oracle Implement Configurator</h1>
            <div className={oracleSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1JyjvCEjI_4LjgEtq2iXg4cdguESUZSZb/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={oracleSingle.certificateDiv}>
            <h1>Oracle Database 19c: SQL Workshop</h1>
            <div className={oracleSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1SicXIaQlSzpNVL2uutlEqzSmAPFR3yZM/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={oracleSingle.certificateDiv}>
            <h1>Oracle Golden Gate 19c: Fundamentals</h1>
            <div className={oracleSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/19Kg5Hr6DTbyYQ4zJyHdhF25Us8Q_m6Mk/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={oracleSingle.certificateDiv}>
            <h1>PeopleSoft Benefits Administration Rel 9.2 Ed 2</h1>
            <div className={oracleSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1DefZFyeuFxYYx8N1onojVZX5R-GSFmdL/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={oracleSingle.certificateDiv}>
            <h1>PeopleSoft Base Benefits - U.S. Rel 9.2 Ed 2</h1>
            <div className={oracleSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1YsVp396XpO2DK5lMIEdfvOo-dReLgGgN/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={oracleSingle.certificateDiv}>
            <h1>R12.x Oracle HRMS Advanced Benefits Fundamentals Ed 1</h1>
            <div className={oracleSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1aQZYgj_6cQL9OXRP2KmePoNtRsIzKYtX/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={oracleSingle.certificateDiv}>
            <h1>Oracle Database 19c: Data Guard Administration Workshop</h1>
            <div className={oracleSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1bYX7cTDhkR3FQQG_U0JbQEPHny0X6ySh/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={oracleSingle.certificateDiv}>
            <h1>Oracle Database 19c: Advanced PL/SQL</h1>
            <div className={oracleSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/13iBQ5-h_VtoXKrZIi8_vDiWvrHPCTl3g/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={oracleSingle.certificateDiv}>
            <h1>Oracle Database 19c: ASM Administration Workshop</h1>
            <div className={oracleSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/19xuyCWwFKyAQReTCe9Zlszn1T-thbs_H/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={oracleSingle.certificateDiv}>
            <h1>Oracle Database 19c: Performance Management and Tuning</h1>
            <div className={oracleSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1mIRChTI7Or1IJ2brG1nrMFteiS8Vg0BD/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={oracleSingle.certificateDiv}>
            <h1>Oracle Linux System Administration I Ed 1</h1>
            <div className={oracleSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/16coKBwu31BxLtqSubkpv4_if6q9FLcnk/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={oracleSingle.certificateDiv}>
            <h1>Oracle BI 12c: Build Repositories</h1>
            <div className={oracleSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/12szDy0U2T8M6j3x3GvpVoDPyhIsZCGZy/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={oracleSingle.certificateDiv}>
            <h1>
              R12.x Extend Oracle Applications: Building OA Framework
              Applications
            </h1>
            <div className={oracleSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1CPGcsy_A-KEM6nwGCy6Pizfu1KwpPb8_/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={oracleSingle.certificateDiv}>
            <h1>Oracle Primavera P6 Enterprise Portfolio Management</h1>
            <div className={oracleSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1U-v3Ln7cibCxFNBBhSEPbviUmvCoBwoE/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={oracleSingle.certificateDiv}>
            <h1>Oracle Application Development Framework (ADF) Essentials</h1>
            <div className={oracleSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1YpZIR8K7Nje8psHrbgSzqn9R7C7-IqRW/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={oracleSingle.certificateDiv}>
            <h1>R12.x Oracle Procurement Contracts Fundamentals"</h1>
            <div className={oracleSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1WJ7Z5V-bemNQXgMxgakMC6577yII5x4n/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={oracleSingle.certificateDiv}>
            <h1>R12.2.9 Oracle General Ledger Management Fundamentals</h1>
            <div className={oracleSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1Fvo51u0iAOSloA7O3ldjNrZV-RUFARp1/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={oracleSingle.certificateDiv}>
            <h1>Oracle Linux 8: System Administration I</h1>
            <div className={oracleSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1fi_-GGR6p56G33v-lfKAvOmuGUzuMTKX/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={oracleSingle.certificateDiv}>
            <h1>Oracle Database 19c: PL/SQL Workshop</h1>
            <div className={oracleSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1JpQOJRw8NvYbPJ6yW8lTFiRFwuVxi22U/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={oracleSingle.certificateDiv}>
            <h1>Primavera P6 Professional Advanced Rel 19</h1>
            <div className={oracleSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1Z0RBnk_BzPZ7mLhJPcbHLlkzsRP8muXM/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={oracleSingle.certificateDiv}>
            <h1>Oracle Service Bus 12c: Design & Integrate Services</h1>
            <div className={oracleSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1VRgRWKcuZcPTc0njR19GMWWjnumSA-rl/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={oracleSingle.certificateDiv}>
            <h1>JD Edwards EnterpriseOne Report Writing Rel 9.2 Ed 1</h1>
            <div className={oracleSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1Ka1ikdrkMhk92x2SPHtEee7ByGw2EP3F/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={oracleSingle.certificateDiv}>
            <h1>R12.2.9 Install/Patch/Maintain Oracle E-Business Suite</h1>
            <div className={oracleSingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1mHcjeMLXHfmIDnT4rYnkHsvNJmzTqa8x/view",
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

export default OracleSinglePage;
