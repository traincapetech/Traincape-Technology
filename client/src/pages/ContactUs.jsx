import React, { useEffect, useState } from "react";
import style from "../css/ContactUs.module.css";
import { HiDevicePhoneMobile } from "react-icons/hi2";
import { GrLocation } from "react-icons/gr";
import { RiTeamLine } from "react-icons/ri";
import banner from "../assets/Contact-us.jpg";
import { IoMailOutline } from "react-icons/io5";
import emailjs from "@emailjs/browser";
const ContactUs = () => {
  const [payoload, setPayoload] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phoneNumber: "",
  });

  const handleSubmit = (e) => {
    // Your EmailJS serviceIdD and templateId and Public Key
    const serviceId = "service_hnvyuqi";
    const templateId = "template_05ne2xd";
    const publicId = "twoxce8jrCeAuV38b";

    // Create a new object that contains dynamic template params
    const [name, email, subject, message, phoneNumber] =
      Object.values(payoload);
    const templateParams = {
      from_name: name,
      from_email: email,
      from_subject: subject,
      to_name: "Parichay singh Rana",
      message: `Name - ${name}\nEmail - ${email}\nWhatsapp-Number - ${phoneNumber}\nService Required - ${subject}\nMessage - ${message}`,
    };
    e.preventDefault();

    //send the Email using EmailJS

    emailjs.send(serviceId, templateId, templateParams, publicId).then(
      (res) => {
        alert("Email sent successfully!", res);
      },
      (err) => {
        console.log(err);
      }
    );
    setPayoload({
      name: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setPayoload({ ...payoload, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={style.container}>
      <div className={style.banner}>
        <img src={banner} alt="IMG" />
        <h1>Contact Us</h1>
      </div>
      <div className={style.OfficeAdress}>
        <div className={style.OfficeDetails}>
          <h1>Delhi Office Address</h1>
          <p>
            Khandolia Plaza, 118\C, Dabri - Palam Rd, Vaishali Colony, Dashrath
            Puri, New Delhi, Delhi, 110045
          </p>
          <div className={style.addressdiv}>
            <div className={style.iconDiv}>
              <HiDevicePhoneMobile className={style.icon} />
              <IoMailOutline className={style.icon} />
            </div>
            <div className={style.textdiv}>
              <h2>Phone Number & Email</h2>
              <p>+91 6280281505</p>
              <p>sales@traincapetech.info</p>
            </div>
          </div>
          <div className={style.underlinediv}></div>
          <div className={style.addressdiv}>
            <div className={style.iconDiv}>
              <GrLocation className={style.icon} />
            </div>
            <div className={style.textdiv}>
              <h2>Our Office Address</h2>
              <p>118/C, Dabri - Palam Rd, Vaishali colony, Dashrath Puri,</p>
            </div>
          </div>
          <div className={style.underlinediv}></div>
          <div className={style.addressdiv}>
            <div className={style.iconDiv}>
              <RiTeamLine className={style.icon} />
            </div>
            <div className={style.textdiv}>
              <h2>Office Work Time</h2>
              <p>Mon - Sat : 11am - 7pm</p>
            </div>
          </div>
        </div>
        <div className={style.officeMail}>
          <h1>Leave A Message</h1>
          <p>We're Ready To Help You</p>
          <div className={style.NameAndEmail}>
            <br />
            <input
              type="text"
              name="name"
              value={payoload.name}
              className={style.inputbox}
              placeholder="Your Name"
              required
              onChange={handleChange}
            />
            <br />
            <input
              type="email"
              name="email"
              value={payoload.email}
              className={style.inputbox}
              placeholder="Your Email"
              required
              onChange={handleChange}
            />
            <br />
          </div>
          <input
            type="number"
            name="phoneNumber"
            value={payoload.phoneNumber}
            className={style.inputbox}
            placeholder="Whatsapp Number"
            required
            onChange={handleChange}
          />
          <select
            name="subject"
            id={style.select}
            required
            onChange={handleChange}
          >
            <option value="select course">Select Course</option>
            <option value="Cloud Computing">Cloud Computing</option>
            <option value="Cyber Security">Cyber Security</option>
            <option value="Project Management">Project Management</option>
          </select>
          <br />
          <br />
          <textarea
            name="message"
            className={style.textarea}
            cols="30"
            rows="10"
            placeholder="Your Message"
            onChange={handleChange}
          ></textarea>
          <button className={style.contactBtn} onClick={handleSubmit}>
            Send Message
          </button>
        </div>
      </div>
      <div className={style.contactMap}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.744145964281!2d77.07744151353839!3d28.607451408196102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05ecdc6529c1%3A0x7419fbbcac72b568!2sTraincape%20technology%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1717065345903!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
