import React from "react";
import style from "../css/ContactUs.module.css";
import { HiDevicePhoneMobile } from "react-icons/hi2";
import { HiOutlineLightBulb } from "react-icons/hi";
import { RiTeamLine } from "react-icons/ri";
import banner from "../assets/Contact-us.jpg";

const ContactUs = () => {
  return (
    <div className={style.container}>
      <div className={style.banner}>
        <img src={banner} alt="IMG" />
        <h1>Contact Us</h1>
      </div>
      <div className={style.information}>
        <div className={style.info}>
          <h1>We're here to help you </h1>
          <p>
            Please select the right contact information based on your enquiry.
            Alternatively, you can leave us a message on our contact form and
            we'll get back to you.
          </p>
          <div className={style.connect}>
            <div>
              <HiDevicePhoneMobile className={style.icon} />
            </div>
            <div>
              <h1>Call Us</h1>
              <p>+91 1234567890</p>
            </div>
          </div>
          <div className={style.connect}>
            <div>
              <RiTeamLine className={style.icon} />
            </div>
            <div>
              <h1>Our Family</h1>
              <p>team@abcgmail.com</p>
            </div>
          </div>
          <div className={style.connect}>
            <div>
              <HiOutlineLightBulb className={style.icon} />
            </div>
            <div>
              <h1>New Query</h1>
              <p>enquiry@abcgmail.com</p>
            </div>
          </div>
        </div>
        <div className={style.formBox}>
          <form action="#">
            <label>
              First Name<span style={{ color: "red" }}>*</span>
            </label>
            <br />
            <input type="text" required placeholder="First Name" />
            <br />

            <label>
              Last Name<span style={{ color: "red" }}>*</span>
            </label>
            <br />

            <input type="text" required placeholder="Last Name" />
            <br />

            <label>
              Courses<span style={{ color: "red" }}>*</span>
            </label>
            <br />

            <select required className={style.select}>
              <option value="">Select Course</option>
              <option value="">Cyber Secruity</option>
              <option value="">Management</option>
              <option value="">Cloud Computing</option>
              <option value="">Accounting</option>
              <option value="">Other</option>
            </select>
            <br />

            <label>
              Email<span style={{ color: "red" }}>*</span>
            </label>
            <br />

            <input type="email" required placeholder="Email" />
            <br />

            <label>
              Whastapp Number<span style={{ color: "red" }}>*</span>
            </label>
            <br />

            <input type="number" required placeholder="Whatsapp Number" />

            <br />
            <label>
              Message<span style={{ color: "red" }}>*</span>
            </label>
            <br />
            <input
              className={style.msg}
              type="text"
              required
              placeholder="Message"
            />
            <button id={style.btn}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
