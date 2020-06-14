import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors, removeHash } from 'react-scrollable-anchor'

import './Skills.css'

configureAnchors({offset: -60})
removeHash()

const skills = props => (
  <ScrollableAnchor id="abilities">
      	<div className="row" id="abilitiesInner">
      		<div className="col-sm" id="tools">
      			<h4 id="skillsLabel">Tools</h4>
      				<p id="left1">HTML5</p>
      				<p id="left2">CSS3</p>
              <p id="left3">Bootstrap</p>
              <p id="left4">Material Design</p>
              <p id="left5">JavaScript</p>
              <p id="left6">JQuery</p>
              <p id="left7">React</p>
              <p id="left8">Vue</p>
              <p id="left9">Node JS</p>
              <p id="left10">GoLang</p>
      				<p id="left11">PHP</p>
      		  </div>
      		 <div className="col-sm" id="software">
      			<h4 id="toolsLabel">Software</h4>
              <p id="right1">Mac OS</p>
              <p id="right2">Windows OS</p>
              <p id="right3">Linux</p>
              <p id="right4">Git</p>
      				<p id="right5">Adobe CC</p>
      				<p id="right6">Microsoft Office</p>
      				<p id="right7">Postgres</p>
      				<p id="right8">MySql</p>
      				<p id="right9">Filezilla</p>
              <p id="right10">CPanel</p>
      				<p id="right11">Google Drive</p>
            </div>
      		</div>
  </ScrollableAnchor>
);


export default skills
