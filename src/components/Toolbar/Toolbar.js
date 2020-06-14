import React from 'react';
import { FaFacebook, FaTwitterSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'

import './Toolbar.css';

const toolbar = props => (
  <section className="toolbar">
    <nav className="toolbar_nav" id="toolbar_nav">
    <div>
      <DrawerToggleButton click={props.drawerClickHandler} />
    </div>
    <div className="toolbar_nav_items">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#profile">Profile</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experiences">Experiences</a></li>
        <li><a href="#abilities">Abilities</a></li>
      </ul>
    </div>
    <div className="spacer" />
    <div className="socialIcons">
    <ul>
      <a href="https://github.com/sburchfield" target="_blank" rel="noopener noreferrer" title="Github Account"><li><FaGithub /></li></a>
      <a href="https://www.facebook.com/sam.burchfield.5" target="_blank" rel="noopener noreferrer" title="facebook account"><li><FaFacebook /></li></a>
      <a href="https://www.linkedin.com/in/sam-burchfield-13572913a" target="_blank" rel="noopener noreferrer" title="Linkedin Account"><li><FaLinkedin /></li></a>
      <a href="https://twitter.com/SamBurchWeb" target="_blank" rel="noopener noreferrer" title="twitter account"><li><FaTwitterSquare /></li></a>
    </ul>
    </div>
    </nav>
  </section>
);


export default toolbar
