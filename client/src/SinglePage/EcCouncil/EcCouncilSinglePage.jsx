import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Eccouncil from "../../assets/ec-council-2.png";
import EcCouncilSinle from "./EcCouncilSinglePage.module.css";

const EcCouncilSinglePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  return (
    <div className={EcCouncilSinle.container}>
      <div className={EcCouncilSinle.HeadingContainer}>
        <div className={EcCouncilSinle.Heading}>
          <h1>
            The EC-Council certification is a comprehensive cybersecurity
            certification program that covers various aspects of cybersecurity,
            including ethical hacking, penetration testing, digital forensics,
            and incident handling. It provides professionals with the skills and
            knowledge needed to protect organizations from cyber threats and
            attacks and can help advance their careers in cybersecurity. The
            certification is globally recognized and is considered a benchmark
            for cybersecurity professionals, with benefits including career
            advancement, comprehensive training, industry recognition, and
            continuous learning.
          </h1>
        </div>
        <div className={EcCouncilSinle.ImgContainer}>
          <img src={Eccouncil} alt="Ec-Council-Image" />
        </div>
      </div>
      <div className={EcCouncilSinle.courseContainer}>
        <div className={EcCouncilSinle.certificateText}>
          <h1>Ec-Council Certification</h1>
          <p>Empowering Your Future with Cybersecurity Education.</p>
        </div>
        <div className={EcCouncilSinle.certificateContainer}>
          <div className={EcCouncilSinle.certificateDiv}>
            <h1>Electronics and Communication Engineering Services</h1>

            <div className={EcCouncilSinle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1Yl-KuN5GCT2AQQrRqgoT8CTppFj1Fk9C/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={EcCouncilSinle.certificateDiv}>
            <h1>EC-Council Center of Advanced Security Training (CAST)</h1>

            <div className={EcCouncilSinle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1JZa8Rv4m8e638OcugMG3mEw8PHXFsnxv/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={EcCouncilSinle.certificateDiv}>
            <h1>Certified DevSecOps Engineer (E|CDE)</h1>

            <div className={EcCouncilSinle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1oTuuwS98HgRiiIQ7iE5mK_PYaPzb0Tlr/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={EcCouncilSinle.certificateDiv}>
            <h1>Network Defense Essentials</h1>

            <div className={EcCouncilSinle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1VgHCOs6SlpcIxXfViw3MSXBivtCmkceI/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={EcCouncilSinle.certificateDiv}>
            <h1>Ethical Hacking Essentials</h1>

            <div className={EcCouncilSinle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1-8Xx7yop1rrwORLR2L4Pvd2jmMBxhDKZ/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={EcCouncilSinle.certificateDiv}>
            <h1>Digital Forensics Essentials</h1>

            <div className={EcCouncilSinle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1or4Spd1ka3-jGvor0tCK1X205fqZYiO4/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={EcCouncilSinle.certificateDiv}>
            <h1>CERTIFIED DIGITAL MARKETER</h1>

            <div className={EcCouncilSinle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1E2Kxvw5-OApBbhqitwMh86oOITG6FJkB/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={EcCouncilSinle.certificateDiv}>
            <h1>Blockchain Business Leader Certification B|BLC</h1>
            <div className={EcCouncilSinle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1KeJPnpo9Au7VE277K0caYorW2IZlNW4H/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={EcCouncilSinle.certificateDiv}>
            <h1>Blockchain Developer Course B|DC</h1>
            <div className={EcCouncilSinle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1DiMvogxDhRuoeJCnPBIMUF1hSnGuwyzZ/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={EcCouncilSinle.certificateDiv}>
            <h1>Blockchaim Fintech Course B|FC</h1>
            <div className={EcCouncilSinle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1a2muyKWJEkYJAtfRIarEtR8-M3ThLkdp/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={EcCouncilSinle.certificateDiv}>
            <h1>Ethical Hacking and Penetration Testing Essentials</h1>
            <div className={EcCouncilSinle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1iM47gjNYdozXelaJWQSp5hG_IOfhLPM_/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={EcCouncilSinle.certificateDiv}>
            <h1>Ethical Hacking Core Skills (EHCS)</h1>
            <div className={EcCouncilSinle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/11k4qQaA2u4NuNFU9I5dlrLxrEaeqn7Yo/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={EcCouncilSinle.certificateDiv}>
            <h1>CERTIFIED CYBERSECURITY TECHNICIAN (C|CT)</h1>
            <div className={EcCouncilSinle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1HD6LAtR2n7e8mz2u2UfyDbpzexCIrB18/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={EcCouncilSinle.certificateDiv}>
            <h1>CERTIFIED PENETRATION TESTING PROFESSIONAL</h1>
            <div className={EcCouncilSinle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1PWcoAZEuZczPzFaR4XkSckNpEVKk4AyW/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={EcCouncilSinle.certificateDiv}>
            <h1>Certified Cloud Security Engineer (C|CSE) Course</h1>
            <div className={EcCouncilSinle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1n7q748Fp2qAeVcZ5PjwS6174t9gfL2s8/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={EcCouncilSinle.certificateDiv}>
            <h1>ICS/SCADA Cybersecurity – EC-Council</h1>
            <div className={EcCouncilSinle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1UbPrmkiqpR97kHdOTDGwESKfB2qHUJDy/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={EcCouncilSinle.certificateDiv}>
            <h1>
              Computer Hacking Forensic Investigator (CHFI) v10 Certification
              Training
            </h1>
            <div className={EcCouncilSinle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1tHmGFsWM1D_IfIm_-tASJ2XDE-ym1rRM/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={EcCouncilSinle.certificateDiv}>
            <h1>Introduction to Data Security and Information Assurance</h1>
            <div className={EcCouncilSinle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1S4qZC-jI8RHtrn2owc7oNA1YnfcsuB5P/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={EcCouncilSinle.certificateDiv}>
            <h1>Web Application Hacking and Security (WAHS)</h1>
            <div className={EcCouncilSinle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1enzpxdYOHVjtCf-hjY1pQALusV4pwJSS/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={EcCouncilSinle.certificateDiv}>
            <h1>Security Information and Event Management</h1>
            <div className={EcCouncilSinle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/12EoyKdiZ1feKXSBLhDAuqxxHgLpFCoCl/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={EcCouncilSinle.certificateDiv}>
            <h1>Certified Blockchain Professional</h1>
            <div className={EcCouncilSinle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1ZV93SJSL-MbD02Es-d8mjx_rWM2y3iW-/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={EcCouncilSinle.certificateDiv}>
            <h1>Certified Chief Information Security Officer</h1>
            <div className={EcCouncilSinle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1xwD-NB1GuTfiRRQsKNIQjRbuqoe2vf0Y/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={EcCouncilSinle.certificateDiv}>
            <h1>Certified Security Associate</h1>
            <div className={EcCouncilSinle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1VxJsHrZAAb01OaO7W6YaB3bJD2AM8cFM/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={EcCouncilSinle.certificateDiv}>
            <h1>Certified Threat Intelligence Analyst</h1>
            <div className={EcCouncilSinle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1nLCm5Yk03map8v9XsIwl2pHp5P36TcBz/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={EcCouncilSinle.certificateDiv}>
            <h1>Certified advanced Penetration Tester</h1>
            <div className={EcCouncilSinle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/16xMqli3xCk0ZDd3qMYbFWasH4OPpkN8P/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={EcCouncilSinle.certificateDiv}>
            <h1>EC-Council Certified Security Specialist</h1>
            <div className={EcCouncilSinle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1d9alnW2M9xzQB4x_1NTpIrVjI8yd05SI/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={EcCouncilSinle.certificateDiv}>
            <h1>Ec-Council Certified Incident Handler</h1>
            <div className={EcCouncilSinle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1BmT0vXoGblHncIOmSd4iH-pVJhOrVhG1/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={EcCouncilSinle.certificateDiv}>
            <h1>Certified Application Security Engineer (.NET | JAVA)</h1>
            <div className={EcCouncilSinle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1Ikm3oPBJH0ZnIACoxj43VerhmuOcM_tC/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={EcCouncilSinle.certificateDiv}>
            <h1>Certified Application Security Engineer</h1>
            <div className={EcCouncilSinle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1h7gl0uZevYbQDd1lnIu1TmEJnCLmmxzP/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={EcCouncilSinle.certificateDiv}>
            <h1>Securing Enterprises Against Cyber Disasters</h1>
            <div className={EcCouncilSinle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1rvzSY5KWW8P_1LmNgKA9DiLWWlF7zu7n/view",
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

export default EcCouncilSinglePage;
