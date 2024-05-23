import React from "react";
import style from "../css/Login.module.css";
import { FaCircleUser } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";

const Login = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.formBoxLogin}>
        <form action="">
          <h1>Login</h1>
          <div className={style.inputBox}>
            <input type="text" placeholder="Username" required />
            <FaCircleUser className={style.icon} />
          </div>
          <div className={style.inputBox}>
            <input type="password" placeholder="Password" required />
            <RiLockPasswordFill className={style.icon} />
          </div>
          <div className={style.RememberPassword}>
            <div>
              <input type="checkbox" />
              <span>Remember password</span>
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
