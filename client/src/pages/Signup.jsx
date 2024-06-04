import React, { useEffect, useState } from "react";
import style from "../css/Signup.module.css";
import { FaCircleUser } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
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
    <div className={style.wrapperSignup}>
      <div className={style.formBoxLogin}>
        <form onSubmit={handleSubmit} className={style.singupForm}>
          <h1>Signup</h1>
          <div className={style.inputBox}>
            <input
              type="text"
              placeholder="Username"
              name="fullname"
              required
              onChange={handleChange}
            />
            <FaCircleUser className={style.icon} />
          </div>
          <div className={style.inputBox}>
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              onChange={handleChange}
            />
            <MdEmail className={style.icon} />
          </div>
          <div className={style.inputBox}>
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
              onChange={handleChange}
            />
            <RiLockPasswordFill className={style.icon} />
          </div>
          <div className={style.RememberPassword}>
            <lable>
              <input type="checkbox" required />
              <span style={{ position: "relative", top: "-6px" }}>
                I agree to terms & conditions{" "}
              </span>
            </lable>
          </div>
          <button type="submit">Register</button>

          <div className={style.registerLink}>
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
