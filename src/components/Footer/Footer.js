import React from 'react';
import { FaFacebook, FaTwitterSquare, FaLinkedin, FaGithub, } from "react-icons/fa";

import './Footer.css'

const footer = props => (
  <footer id="footer">
    <h5>Sam Burchfield</h5>
    <p>I want to help you build high quality responisive websites for the future! <br />I hope to hear from you soon regarding your next project!</p>
    <div id="bottominfo">
      <ul>
        <li><a href="https://github.com/sburchfield" target="_blank" rel="noopener noreferrer" title="Github Account"><FaGithub /></a></li>
        <li><a href="https://www.facebook.com/sam.burchfield.5" target="_blank" rel="noopener noreferrer" title="facebook account"><FaFacebook /></a></li>
        <li><a href="https://www.linkedin.com/in/sam-burchfield-13572913a/" target="_blank" rel="noopener noreferrer" title="Linkedin Account"><FaLinkedin /></a></li>
        <li><a href="https://twitter.com/SamBurchWeb" target="_blank" rel="noopener noreferrer" title="twitter account"><FaTwitterSquare /></a></li>
      </ul>
    </div>
    <ul className="nav justify-content-center" id="footerNav">
      <li className="nav-item">
        <a className="nav-link" href="#home">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#profile">Profile</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#projects">Projects</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#experiences">Experiences</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#abilities">Abilities</a>
      </li>
    </ul>
    <p>Knoxville, TN</p>
    <p>E-mail: saburchfield@gmail.com</p>
    <p className="copy">© Sam Burchfield. All Rights Reserved</p>
</footer>
);


export default footer
