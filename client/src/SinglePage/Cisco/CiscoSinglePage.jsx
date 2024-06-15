import React from "react";
import { useNavigate } from "react-router-dom";
import ciscosingle from "./CiscoSinglePage.module.css";
import cisco from "../../assets/Cisco single page.png";

const CiscoSinglePage = () => {
  const navigate = useNavigate();
  return (
    <div className={ciscosingle.container}>
      <div className={ciscosingle.HeadingContainer}>
        <div className={ciscosingle.Heading}>
          <h1>
            Cisco certifications are a set of credentials offered by Cisco
            Systems to validate an individual's expertise in various areas of
            networking and information technology. The certifications range from
            Associate (CCNA) to Professional (CCNP) and Expert (CCIE) levels,
            covering topics such as basic networking, wireless LANs, routing and
            switching, and security. To earn a Cisco certification, candidates
            must pass one or more exams, which can include both written and
            hands-on lab components, administered by Pearson VUE test centers.
            Cisco certifications are highly regarded in the IT industry and can
            lead to career advancement and higher salaries for professionals
            with Cisco networking skills.
          </h1>
        </div>
        <div className={ciscosingle.ImgContainer}>
          <img src={cisco} alt="Cisco-Image" />
        </div>
      </div>
      <div className={ciscosingle.courseContainer}>
        <div className={ciscosingle.certificateText}>
          <h1>Cisco Certification</h1>
          <p>
            Cisco certifications are a set of credentials offered by Cisco
            Systems to validate an individual's expertise in various areas of
            networking and information technology.
          </p>
        </div>
        <div className={ciscosingle.certificateContainer}>
          <div className={ciscosingle.certificateDiv}>
            <h1>Implementing and Administering Cisco Solutions (CCNA) v2.0</h1>

            <div className={ciscosingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1FYAVpMbbitOOsuv862EOnbVpYMd6QnrE/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>
          <div className={ciscosingle.certificateDiv}>
            <h1>
              Implementing and Operating Cisco Enterprise Network Core
              Technologies (ENCOR)
            </h1>

            <div className={ciscosingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1P8iPSxqs_5L-zBmvcEp87mGCAf5MnRIl/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={ciscosingle.certificateDiv}>
            <h1>Cisco SD-WAN Operation and Deployment (SDWFND) v2.0</h1>

            <div className={ciscosingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1bz3vnlvDb_gxIxgaXSgZ-L-hRjWKt-a_/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={ciscosingle.certificateDiv}>
            <h1>
              Implementing and Configuring Cisco Identity Services Engine (SISE)
              v4.0
            </h1>

            <div className={ciscosingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1utkqeLJNFKLpzhJuFrxOyxQYXeEBDQjy/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={ciscosingle.certificateDiv}>
            <h1>
              Securing Networks with Cisco Firepower Next Generation Firewall
              (SSNGFW) v1.0
            </h1>

            <div className={ciscosingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1NPWqzeOAZkBgn8dUvSzuOke__iVGyloE/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={ciscosingle.certificateDiv}>
            <h1>
              Troubleshooting Cisco Data Center Infrastructure (DCIT) v7.0
            </h1>

            <div className={ciscosingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1vrx_9JE7myc3DswjkNSH17YP7yWW0vj3/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={ciscosingle.certificateDiv}>
            <h1>
              Introduction to 802.1X Operations for Cisco Security Professionals
              (802.1X) v2.0
            </h1>

            <div className={ciscosingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1I3Kyrxn9EgNE2mwaItV7_hIxi3e3Pqj9/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={ciscosingle.certificateDiv}>
            <h1>
              Implementing and Operating Cisco Security Core Technologies v1.0
              (350-701)
            </h1>
            <div className={ciscosingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1qVdsztHBO7HUUY-1bakMOyxI3KIz25EW/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={ciscosingle.certificateDiv}>
            <h1>NSO Advanced for Python Programmers (NSO300)</h1>
            <div className={ciscosingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1W-jCEQain8_6nXCLqO3nLld8aTE0dG98/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={ciscosingle.certificateDiv}>
            <h1>
              Implementing and Troubleshooting Networks Using Cisco ThousandEyes
              (ENTEIT) v1.0
            </h1>
            <div className={ciscosingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1AsSppcMsR74MurLAApn4kjkdU4yjPVfK/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={ciscosingle.certificateDiv}>
            <h1>Configuring Cisco Unified Computing System (DCCUCS) v1.0</h1>
            <div className={ciscosingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1nr9taZB2NCiRX4N9-s0xuqRRBHTjECaR/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={ciscosingle.certificateDiv}>
            <h1>
              Cisco Application Centric Infrastructure Operations and
              Troubleshooting (DCACIO) v5.2
            </h1>
            <div className={ciscosingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/11kD5UfmHEcvHjKMq44UwFzkocVBjH_FI/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={ciscosingle.certificateDiv}>
            <h1>
              Implementing and Operating Cisco Data Center Core Technologies
              (DCCOR) v1.1
            </h1>
            <div className={ciscosingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1rm8htA1jMjDgr_QHO2Wp8F3UyDz2AjFM/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={ciscosingle.certificateDiv}>
            <h1>Implementing Cisco Contact Center Enterprise (CCEI) v1.0</h1>
            <div className={ciscosingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1hd3nBXtEzgHiu5mZmMBxF443fnWtLEnw/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={ciscosingle.certificateDiv}>
            <h1>Understanding Cisco Collaboration Foundations (CLFNDU) v1.1</h1>
            <div className={ciscosingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1o-DvSGWN6UFStVdFflNksfhTT88C4lkT/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={ciscosingle.certificateDiv}>
            <h1>
              Troubleshooting Cisco Application Centric Infrastructure (DCACIT)
              v5.2
            </h1>
            <div className={ciscosingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/172zEruNf2z7SDdlJO7FYeQa0I9k2_s4i/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={ciscosingle.certificateDiv}>
            <h1>
              Implementing Cisco Advanced Call Control and Mobility Services
              (CLACCM) v1.0
            </h1>
            <div className={ciscosingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1ax3rjIH3lPDc-54i6V2MgcT3c0GW7Zx_/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={ciscosingle.certificateDiv}>
            <h1>
              Implementing Cisco Application Centric Infrastructure-Advanced
              (DCACIA) v1.1
            </h1>
            <div className={ciscosingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1xhT8DewzIUJ1ef-6zw7146beccJTh_Ax/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={ciscosingle.certificateDiv}>
            <h1>
              Cisco Aggregation Services Router 9000 Series Essentials (ASR9KE)
              v6.1
            </h1>
            <div className={ciscosingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1VVPmg55UAp5Z_d9ZxLjziS4cLDcnhCtm/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={ciscosingle.certificateDiv}>
            <h1>Understanding Cisco Data Center Foundations (DCFNDU) v1.1</h1>
            <div className={ciscosingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1z6n6uc0gLZWL5xNmTTem7v-op48gOg-O/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={ciscosingle.certificateDiv}>
            <h1>Understanding Cisco Wireless Foundations (WLFNDU)</h1>
            <div className={ciscosingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1wUtPDLgqpB6q2UkiFVDE9Slc5UQTsYxm/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={ciscosingle.certificateDiv}>
            <h1>
              Implementing DevOps Solutions and Practices Using Cisco Platforms
              (DEVOPS) v1.0
            </h1>
            <div className={ciscosingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1rUQCHN2jSjTqikFs96aPy4Yt67rC8Vlf/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={ciscosingle.certificateDiv}>
            <h1>Programming for Network Engineers (PRNE) v2.0</h1>
            <div className={ciscosingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1LOhNXhrNgqZEnnVrR7SVGsg5oQZD2oBA/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={ciscosingle.certificateDiv}>
            <h1>
              Implementing and Operating Cisco Service Provider Network Core
              Technologies (SPCOR) v1.0
            </h1>
            <div className={ciscosingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1NJs4gWxjO1pa6G3pwT2nG4Y0S7xhUqY4/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={ciscosingle.certificateDiv}>
            <h1>Implementing Cisco SD-WAN Solutions (ENSDWI)</h1>
            <div className={ciscosingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1p45on0SPJDoDThtLgQZ5WpFujRUEulF4/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={ciscosingle.certificateDiv}>
            <h1>Designing Cisco Enterprise Networks (ENSLD)</h1>
            <div className={ciscosingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1HaR_JtOYwdJXFo86G2TCKzr5V4EkvdME/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={ciscosingle.certificateDiv}>
            <h1>Introducing Automation for Cisco Solutions (CSAU) v1.1</h1>
            <div className={ciscosingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1amjtnbAkAc9habDB8Hiww2Em2BcIHONC/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={ciscosingle.certificateDiv}>
            <h1>
              Implementing Cisco Catalyst 9000 Series Switches (ENC9K) v4.0
            </h1>
            <div className={ciscosingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1Y8RPAkfRijT3HHwuMDKPU-yh_8ltsiZI/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={ciscosingle.certificateDiv}>
            <h1>
              Developing Applications and Automating Workflows using Cisco Core
              Platforms (DEVASC)
            </h1>
            <div className={ciscosingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1k5df68YPqnJAgDX2vCXBiaB2LPs-Pglk/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={ciscosingle.certificateDiv}>
            <h1>Implementing Cisco Enterprise Wireless Networks 2.0</h1>
            <div className={ciscosingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1AJa2G03duafJl-HURkDtT8uLNqy0TwxO/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={ciscosingle.certificateDiv}>
            <h1>Designing Cisco Enterprise Wireless Networks (ENWLSD) 2.0</h1>
            <div className={ciscosingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1gjnymXlbV0uXUu3C3WG84P_gXevGdAgX/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={ciscosingle.certificateDiv}>
            <h1>
              Understanding Cisco Cybersecurity Operations Fundamentals v1.0
              (200-201)
            </h1>
            <div className={ciscosingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1151lnPSRdgfApmI3IB902RckQl5KVWr8/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={ciscosingle.certificateDiv}>
            <h1>Engineering Cisco Meraki Solutions Part 2 (ECMS2) v2.0</h1>
            <div className={ciscosingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1KU3UoAOLeU4TTRAhem0LHqgjV8hjglK7/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={ciscosingle.certificateDiv}>
            <h1>Transforming to a Cisco Intent-Based Network (IBNTRN) v1.1</h1>
            <div className={ciscosingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1OS9Egj4QGXJ9Tywpu6XTYrkLQZzoFPMG/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={ciscosingle.certificateDiv}>
            <h1>Implementing and Administering Cisco Solutions (CCNA) v2.0</h1>
            <div className={ciscosingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1eFVHXcQRNZXCti82r_8o1LGANJnovgAe/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={ciscosingle.certificateDiv}>
            <h1>
              Implementing the Cisco NCS540 Series Routers (NCS540HWE) v1.0
            </h1>
            <div className={ciscosingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1Hw_a6xIatL0TcewL2RPlUGp6bug6dtu_/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={ciscosingle.certificateDiv}>
            <h1>
              Designing and Implementing Secure Cloud Access for Users and
              Endpoints v1.0 (300-740)
            </h1>
            <div className={ciscosingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1-yKvMzzod2Sjw0c5I91kYRIM5XgJyiN2/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={ciscosingle.certificateDiv}>
            <h1>
              Fundamentals of Cisco Firewall Threat Defense and Intrusion
              Prevention
            </h1>
            <div className={ciscosingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1ZY-kC9lDLT12OVjCzLa4zObQ0Y_Sc8jS/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={ciscosingle.certificateDiv}>
            <h1>
              Securing the Web with Cisco Web Security Appliance (SWSA) v3.0
            </h1>
            <div className={ciscosingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1RZqtdR_IjlbXdM3ua-iJ2wUm_gbDzROV/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={ciscosingle.certificateDiv}>
            <h1>
              Implementing Cisco Application Centric Infrastructure (DCACI) v1.1
            </h1>
            <div className={ciscosingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1xfRBCRExjidZsLHFlwk8ds6Zqj5kqXah/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={ciscosingle.certificateDiv}>
            <h1>
              Leveraging Cisco Intent-Based Networking DNA Assurance (DNAAS)
              v2.1
            </h1>
            <div className={ciscosingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1mtWy25lZQzfeej7QQ58Z-r9xxy1I1ukH/view",
                    "_blank"
                  )
                }
              >
                Course Details
              </button>
            </div>
          </div>

          <div className={ciscosingle.certificateDiv}>
            <h1>Engineering Cisco Meraki Solutions Part 1 (ECMS1) v2.1</h1>
            <div className={ciscosingle.certificateBtn}>
              <button onClick={() => navigate("/contact-us")}>
                Get Course
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/16PyEqi-z9OHUmmPiJzn1E6-Ldjj28-0C/view",
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

export default CiscoSinglePage;
