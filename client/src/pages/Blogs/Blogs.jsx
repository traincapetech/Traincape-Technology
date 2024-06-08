import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import blog from "./Blogs.module.css";
const Blogs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={blog.blogpage}>
      <div className={blog.blogheader}>
        <h1>Welcome to Our Blog</h1>
        <p>Explore our latest articles and insights on various topics.</p>
      </div>

      <div className={blog.blogcontent}>
        <div className={blog.blogpost}>
          {/* <img src="blog-image.jpg" alt="Blog Post" /> */}
          <h2>One of the best Course Ever in Digital Marketing</h2>
          <p>Tarun Aggrawal Advance Digital Marketing Paid Course</p>
          <Link
            className={blog.links}
            to="https://mega.nz/folder/f0cx0SaZ#0bw61jTmJrO35lQpSOHVFQ"
          >
            Course Link{" "}
          </Link>
        </div>
        <div className={blog.blogpost}>
          {/* <img src="blog-image.jpg" alt="Blog Post" /> */}
          <h2>WORDPRESS 2023</h2>
          <p>THE COMPLETE WORDPRESS WEBSITE COURSE</p>
          <Link
            className={blog.links}
            to="https://drive.google.com/drive/folders/1tnOqp3maCiEHUV8QrxKj-rzev2cD2993"
          >
            Course Link{" "}
          </Link>
        </div>
        <div className={blog.blogpost}>
          {/* <img src="blog-image.jpg" alt="Blog Post" /> */}
          <h2>Perplexity AI </h2>
          <p>web-browsing</p>
          <Link className={blog.links} to="https://www.perplexity.ai/">
            Link{" "}
          </Link>
        </div>
        <div className={blog.blogpost}>
          {/* <img src="blog-image.jpg" alt="Blog Post" /> */}
          <h2> Vitalentum </h2>
          <p>web-browsing</p>
          <Link className={blog.links} to="https://vitalentum.net/free-gpt">
            Link{" "}
          </Link>
        </div>
        <div className={blog.blogpost}>
          {/* <img src="blog-image.jpg" alt="Blog Post" /> */}
          <h2> OraChat </h2>
          <p>web-browsing</p>
          <Link
            className={blog.links}
            to="https://ora.ai/chatbot-master/openai-chatgpt-chatbot"
          >
            Link{" "}
          </Link>
        </div>
        <div className={blog.blogpost}>
          {/* <img src="blog-image.jpg" alt="Blog Post" /> */}
          <h2> Vicuna </h2>
          <p>web-browsing</p>
          <Link className={blog.links} to="https://chat.lmsys.org/">
            Link{" "}
          </Link>
        </div>
        <div className={blog.blogpost}>
          {/* <img src="blog-image.jpg" alt="Blog Post" /> */}
          <h2> GPTGO </h2>
          <p>web-browsing</p>
          <Link className={blog.links} to="https://gptgo.ai/">
            Link{" "}
          </Link>
        </div>
        <div className={blog.blogpost}>
          {/* <img src="blog-image.jpg" alt="Blog Post" /> */}
          <h2> AnonChatGPT </h2>
          <p>web-browsing</p>
          <Link className={blog.links} to="https://anonchatgpt.com/">
            Link{" "}
          </Link>
        </div>
        <div className={blog.blogpost}>
          {/* <img src="blog-image.jpg" alt="Blog Post" /> */}
          <h2> NoowAI </h2>
          <p>web-browsing</p>
          <Link className={blog.links} to="https://noowai.com/">
            Link{" "}
          </Link>
        </div>
        <div className={blog.blogpost}>
          {/* <img src="blog-image.jpg" alt="Blog Post" /> */}
          <h2> Teach Anything </h2>
          <p>web-browsing</p>
          <Link className={blog.links} to="https://www.teach-anything.com/">
            Link{" "}
          </Link>
        </div>
        <div className={blog.blogpost}>
          {/* <img src="blog-image.jpg" alt="Blog Post" /> */}
          <h2> Forefront AI </h2>
          <p>Website hacking course in HINDI </p>
          <Link
            className={blog.links}
            to="https://mega.nz/file/kqxkQKxB#7TjCd2-_YwZZjBx6Hm15VT_E99tF-8-LbWc_kpiOS2I"
          >
            Course Link{" "}
          </Link>
        </div>
        {/* Add more blog posts as needed */}
      </div>
    </div>
  );
};

export default Blogs;
