import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'

import './Contact.css'


const contact = props => (
  <ScrollableAnchor id="contact">
  <div id="contactInner">
    <h2>Contact</h2>
      <h4>Have any questions or want to work together?</h4>
      <form className="contactForm">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea className="form-control" id="message" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-primary mb-2">Submit</button>
      </form>
      </div>
  </ScrollableAnchor>
);


export default contact
