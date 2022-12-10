import React from "react";
import { BsFacebook, BsLinkedin, BsYoutube, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer
      data-theme="black"
      className="footer footer-center p-10 bg-primary text-white rounded font-bold"
    >
      <div>
        <p>Copyright © 2022 - All right reserved by SAKIB AHMAD</p>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a
            className="p-3 bg-white rounded-full"
            href="https://github.com/easakibahmad"
          >
            <span className="text-black text-2xl">
              <BsGithub></BsGithub>
            </span>
          </a>

          <a
            className="p-3 bg-white rounded-full"
            href="https://www.facebook.com/sakib.csedu25"
          >
            <span className="text-black text-2xl">
              <BsFacebook></BsFacebook>
            </span>
          </a>
          <a
            className="p-3 bg-white rounded-full"
            href="https://www.linkedin.com/in/ea-sakib-ahmad/"
          >
            <span className="text-black text-2xl">
              <BsLinkedin></BsLinkedin>
            </span>
          </a>
          <a
            className="p-3 bg-white rounded-full"
            href="https://www.youtube.com/channel/UCVoisNEtGwdXHUKGlFs4Aug"
          >
            <span className="text-black text-2xl">
              <BsYoutube></BsYoutube>
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
