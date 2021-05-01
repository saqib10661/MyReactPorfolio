import React from "react";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SocialButtons() {
  return (
    <div class="social-container">
      <a href="https://github.com/saqib10661" className="Github social">
        <FontAwesomeIcon icon={faGithub} size="3x" color="black" />
      </a>
      <a href="https://github.com/saqib10661" className="Github social">
        <FontAwesomeIcon icon={faGithub} size="3x" color="black" />
      </a>
      <a href="https://github.com/saqib10661" className="Github social">
        <FontAwesomeIcon icon={faGithub} size="3x" color="black" />
      </a>
    </div>
  );
}

export default SocialButtons;
