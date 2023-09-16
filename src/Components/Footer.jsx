import React from "react";
import Facebook from "../assets/facebook-f.svg";
import Instagram from "../assets/instagram.svg";
import X from "../assets/x-twitter.svg";
import Youtube from "../assets/youtube.svg";
import LinkedIn from "../assets/linkedin-in.svg";

const Footer = () => {
  return (
    <footer>
      <div></div>
      <div>
        <h2>Odontologica</h2>
        <p>Copyright © 2023 Joaquin Braicovich</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            padding: "10px",
          }}
        >
          <a href="https://www.facebook.com/" target="blank">
            <img src={Facebook} alt="" />
          </a>
          <a href="https://www.instagram.com/" target="blank">
            <img src={Instagram} alt="" />
          </a>
          <a href="https://twitter.com/" target="blank">
            <img src={X} alt="" />
          </a>
          <a href="https://www.youtube.com/" target="blank">
            <img src={Youtube} alt="" />
          </a>
          <a href="https://ar.linkedin.com/" target="blank">
            <img src={LinkedIn} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
