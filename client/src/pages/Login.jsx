import React, { useEffect, useState } from "react";
import style from "../css/Login.module.css";
import { FaCircleUser } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
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
    <div className={style.wrapper}>
      <div className={style.formBoxLogin}>
        <form onSubmit={handleSubmit} className={style.LoginForm}>
          <h1>Login</h1>
          <div className={style.inputBox}>
            <input
              type="text"
              placeholder="Username"
              name="email"
              required
              onChange={handleChange}
            />
            <FaCircleUser className={style.icon} />
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
            <div>
              <input type="checkbox" required />
              <span className={style.spanbox}>Remember password</span>
            </div>
            <div className={style.RememberPasswordText}>
              <a href="#">Forget Password</a>
            </div>
          </div>
          <button type="submit">Login</button>

          <div className={style.registerLink}>
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
