import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'

import './Experience.css'


import school from './images/school.jpg'
import frontend from './images/frontend.jpg'
import backend from './images/backend.jpg'

configureAnchors({offset: -60})

const experience = props => (
  <ScrollableAnchor id="experiences">
    <div id="experiencesInner">
      <div className="row justify-content-center" id="experiencesInner">
        <div className="col-lg">
          <div className="card">
            <img className="card-img-top" src={school} alt="school" />
            <div className="card-body">
              <h5 className="card-title">Education</h5>
              <p className="card-text">Associates of Applied Science in Media Technologies, Web Technology</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Responsive Web Design</li>
              <li className="list-group-item">Web Design Tools</li>
              <li className="list-group-item">Web Page Authoring</li>
            </ul>
          </div>
        </div>
        <div className="col-lg">
          <div className="card">
            <img className="card-img-top" src={frontend} alt="Front-end Developer" />
            <div className="card-body">
              <h5 className="card-title">Front-end Developer</h5>
              <p className="card-text">Have worked with numerous frontend frameworks and design tools</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">UI/UX Design</li>
              <li className="list-group-item">CSS Frameworks</li>
              <li className="list-group-item">Javascript Frameworks</li>
            </ul>
          </div>
        </div>
        <div className="col-lg">
          <div className="card">
            <img className="card-img-top" src={backend} alt="Backend-end Developer" />
            <div className="card-body">
              <h5 className="card-title">Back-end Developer</h5>
              <p className="card-text">Comfortable with backend technologies, concepts, and software</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Restful API's</li>
              <li className="list-group-item">Relational Database Design</li>
              <li className="list-group-item">Web Server Technologies</li>
            </ul>
          </div>
        </div>
      </div>
  </div>
  </ScrollableAnchor>
);


export default experience
