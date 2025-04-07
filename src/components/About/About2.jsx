import React from "react";
import "./about.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
// @ts-ignore
import image from "../../images/personal-image.jpg";

const About2 = () => {
  const socialData = [
    {
      id: 1,
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/hisham-mohamed-56a953275/",
    },
    {
      id: 2,
      icon: <FaGithub />,
      url: "https://github.com/Hisham-M0hamed",
    },
    {
      id: 3,
      icon: <FaInstagram />,
      url: "https://www.instagram.com/hisham_mohamed_dev/",
    },
  ];
  return (
    <div>
      <div className="info-me">
        <img src={image} />
        <h2>Hisham Mohamed</h2>
        <p>Software Developer</p>
        <div>
          {socialData.map((data) => (
            <a
              style={{ margin: "8px" }}
              key={data.id}
              href={data.url}
              target="_blank"
            >
              {data.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About2;
