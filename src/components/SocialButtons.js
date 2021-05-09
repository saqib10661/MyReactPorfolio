import React from "react";
import {
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SocialButtons() {
  return (
    <div class="social-container">
      <a href="https://github.com/saqib10661" className="Github social">
        <FontAwesomeIcon icon={faGithub} size="3x" color="white" />
      </a>
      <a href="https://linkedin.com/in/saqibmahmood" className="Linkedin social">
        <FontAwesomeIcon icon={faLinkedin} size="3x" color="blue" />
      </a>
    </div>
  );
}

export default SocialButtons;
