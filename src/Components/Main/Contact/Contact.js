import React from "react";
import instagramLogo from "./instagram.png";
import githubLogo from "./github-logo.png";
import linkedInLogo from "./linkedin.png";

import "./Contacts.css";

const contact = () => {
  return (
    <div className="contact">
      <h2>Contact Details</h2>
      <h3>Email: shreyas.balachandran@outlook.com</h3>
      <ul>
        <li>
          <a
            href="https://www.instagram.com/shreyas_13/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src={instagramLogo}
              height="75px"
              width="75px"
              alt="instagram"
            />
          </a>
          <br />
          Instagram
        </li>
        <li>
          <a
            href="https://github.com/shreyas1307"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={githubLogo} height="75px" width="75px" alt="Github" />
          </a>
          <br />
          GitHub
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/shreyas-balachandran-8130b7123/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={linkedInLogo} height="75px" width="75px" alt="LinkedIn" />
          </a>
          <br />
          LinkedIn
        </li>
      </ul>

      {
        // Possibly a form Implementation?
      }
    </div>
  );
};

export default contact;
