import React from "react";
import style from "../css/Signup.module.css";
import { FaCircleUser } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const Signup = () => {
  return (
    <div className={style.wrapperSignup}>
      <div className={style.formBoxLogin}>
        <form action="" className={style.singupForm}>
          <h1>Signup</h1>
          <div className={style.inputBox}>
            <input type="text" placeholder="Username" required />
            <FaCircleUser className={style.icon} />
          </div>
          <div className={style.inputBox}>
            <input type="email" placeholder="Email" required />
            <MdEmail className={style.icon} />
          </div>
          <div className={style.inputBox}>
            <input type="password" placeholder="Password" required />
            <RiLockPasswordFill className={style.icon} />
          </div>
          <div className={style.RememberPassword}>
            <lable>
              <input type="checkbox" />
              <span style={{ fontSize: "16px", fontWeight: "bold" }}>
                I agree to terms & conditions{" "}
              </span>
            </lable>
          </div>
          <button type="submit">Register</button>

          <div className={style.registerLink}>
            <p>
              Already have an account? <a href="/login">Login here..</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
