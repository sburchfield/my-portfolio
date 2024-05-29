import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'

import './Profile.css'

configureAnchors({offset: -60})

const profile = props => (
  <ScrollableAnchor id="profile">
			<div className="row" id="profileInner">
				<div id="about" className="col-lg animated slideInLeft">
						<h4 id="aboutMe">About Me</h4>
						<p id="bio">Web Developer specialized in full stack development. Experienced with all stages of development, including design and logic, for dynamic web projects. Well educated and highly knowledgeable in numerous Web Development Languages including HTML5, CSS3, JavaScript, GoLang, and PHP.</p>
				</div>

				<div className="col-lg">
					<div className="animated zoomIn" id="profilepic"></div>
				</div>

    		<div id="details" className="col-lg animated slideInRight">
    			<h4 id="demoLabel">Demographics</h4>
    			<h5 id="nameLabel">Name:</h5>
    			<p id="myName">Sam Burchfield</p>
    			<h5 id="location">Location:</h5>
    			<p id="knox">Knoxville, Tn</p>
    		</div>
			</div>
	</ScrollableAnchor>
);


export default profile
