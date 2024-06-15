import React, { useEffect, useState } from "react";
import loginpage from "../css/Login.module.css";
import { FaCircleUser } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4001/user/login", payload).then((res) => {
      // console.log(res);

      localStorage.setItem("email", res.data.user.email);
      localStorage.setItem("fullname", res.data.user.fullname);

      navigate("/");
    });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={loginpage.wrapper}>
      <div className={loginpage.formBoxLogin}>
        <form onSubmit={handleSubmit} className={loginpage.LoginForm}>
          <h1>Login</h1>
          <div className={loginpage.inputBox}>
            <input
              type="text"
              placeholder="Username"
              name="email"
              required
              onChange={handleChange}
            />
            <FaCircleUser className={loginpage.icon} />
          </div>
          <div className={loginpage.inputBox}>
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
              onChange={handleChange}
            />
            <FaRegEyeSlash className={loginpage.icon} />
          </div>
          <div className={loginpage.RememberPassword}>
            <div>
              <input type="checkbox" required />
              <span className={loginpage.spanbox}>Remember password</span>
            </div>
            <div className={loginpage.RememberPasswordText}>
              <a href="#">Forget Password</a>
            </div>
          </div>
          <button type="submit">Login</button>

          <div className={loginpage.registerLink}>
            <p>
              Don't have an account? <a href="/signup">Register here..</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
