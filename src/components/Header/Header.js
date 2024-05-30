import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'

import background from './images/background.png'

import './Header.css'


class Header extends Component {

  componentDidMount() {
    let imageList = [background]
    imageList.forEach((image) => {
      new Image().src = image
    });
  }

  render(){
    return(
      <ScrollableAnchor id="home">
        <header id="homeInner">
          <h3>Hello, My name is</h3>
          <h1>Sam Burchfield</h1>
          <p>I am a full stack web developer and I want to help you build sites that are out of this world!</p>
        </header>
      </ScrollableAnchor>
    )
  }

}


export default Header
