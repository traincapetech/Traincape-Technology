import React, { useEffect, useState } from "react";
import signuppage from "../css/Signup.module.css";
import { FaCircleUser } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [payload, setPayload] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(payload);
    axios.post("http://localhost:4001/user/signup", payload).then((res) => {
      console.log(res.data);

      navigate("/login");
    });
    setPayload({ fullname: "", email: "", password: "" });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={signuppage.wrapperSignup}>
      <div className={signuppage.formBoxLogin}>
        <form onSubmit={handleSubmit} className={signuppage.singupForm}>
          <h1>Signup</h1>
          <div className={signuppage.inputBox}>
            <input
              type="text"
              placeholder="Username"
              name="fullname"
              required
              onChange={handleChange}
            />
            <FaCircleUser className={signuppage.icon} />
          </div>
          <div className={signuppage.inputBox}>
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              onChange={handleChange}
            />
            <MdEmail className={signuppage.icon} />
          </div>
          <div className={signuppage.inputBox}>
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
              onChange={handleChange}
            />
            <FaRegEyeSlash className={signuppage.icon} />
          </div>
          <div className={signuppage.RememberPassword}>
            <lable>
              <input type="checkbox" required />
              <span style={{ position: "relative", top: "-6px" }}>
                I agree to terms & conditions{" "}
              </span>
            </lable>
          </div>
          <button type="submit">Register</button>

          <div className={signuppage.registerLink}>
            <p>
              Already have an account? <a href="/login">Login here</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
