import React, { useEffect } from "react";
import career from "./Career.module.css";
import banner from "../../assets/CareerBannerIMG.svg";
import { AiOutlineTeam } from "react-icons/ai";
import { SiFsecure } from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import { GiUpgrade } from "react-icons/gi";

const Career = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={career.container}>
      <div className={career.banner}>
        <div className={career.bannerIMG}>
          <img src={banner} alt="Banner IMG" className={career.bannerimg} />
        </div>
        <div className={career.bannerText}>
          <h1>JOIN US</h1>
          <p>
            Learning opportunities are essential for upgrading skills and
            advancing careers. They include training courses, self-training, and
            attending professional events to stay relevant and enhance
            employability.
          </p>
          <button className={career.joinBtn}>Join Us</button>
        </div>
      </div>
      <div className={career.benefits}>
        <div className={career.banefitText}>
          <h3>BENEFITS</h3>
          <h1>Why You Should Join Our Awesome Team</h1>
          <p>
            This article defines learning opportunities as situations in which
            it is possible for you to do something that you want to do. It also
            provides examples of how learning opportunities can be used in
            different contexts.
          </p>
        </div>
        <div className={career.banefit}>
          <div>
            <i>
              <AiOutlineTeam className={career.icon} />
            </i>
            <h1>Team Work</h1>
            <p>
              Teamwork is key to success. Quotes like "Alone we can do so
              little; together we can do so much" and "Teamwork makes the dream
              work" emphasize the power of collaboration and unity.
            </p>
          </div>
          <div>
            <i>
              <SiFsecure className={career.icon} />
            </i>
            <h1>Secured Feature</h1>
            <p>
              Secured features protect software and data from unauthorized
              access and security threats. They include system secure feature
              keys, secure software development, and security mechanisms like
              authentication and audits.
            </p>
          </div>
          <div>
            <i>
              <GiSkills className={career.icon} />
            </i>
            <h1>Learning Oportunity</h1>
            <p>
              Learning opportunities refer to the types of work or tasks that
              students face to achieve knowledge and enhance learning value.
              These opportunities can include classroom, online, blended,
              self-guided, coaching, mentoring, and other educational
              experiences.
            </p>
          </div>
          <div>
            <i>
              <GiUpgrade className={career.icon} />
            </i>
            <h1>Upgrate Skilss</h1>
            <p>
              Learning opportunities are essential for upgrading skills and
              advancing careers. They include training courses, self-training,
              and attending professional events to stay relevant and enhance
              employability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
