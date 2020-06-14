import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'

import Pic from '../Pic/Pic'

import joe from './images/joe.png'
import joe_bw from './images/joe_bw.png'
import alphabet from './images/alphabetGame.png'
import alphabet_bw from './images/alphabetGame_bw.png'
import bbq from './images/bbqsoap.png'
import bbq_bw from './images/bbqsoap_bw.png'
import cabbage from './images/cabbageHead.png'
import cabbage_bw from './images/cabbageHead_bw.png'
import pyaa from './images/pyaa.png'
import pyaa_bw from './images/pyaa_bw.png'
import river from './images/riversGame.png'
import river_bw from './images/riversGame_bw.png'

import './Projects.css'

var pyaaDes = "I was the lead developer on this project. I handled both the design and logic to this dynamic site."
var cabbageDes = 'This was a design project for my final semester in school. The objective for the class was to build a working marketing site for a local coffeeshop named "Cabbagehead Cafe"'
var riverDes = "This is an ongoing project of mine. It is a custom name game I built for my nephew. It gives him puzzles that he can relate to with people he knows."
var joeDes = "This was a fun math problem I found online. The solution can be found by removing the first 1 or 0 in a binary string and appending it to the end."
var bbqDes = "This site was a project for my Sophmore year in School. The task was to design a responsive website for a local business."
var alphabetDes = "Another ongoing project of mine. It is a custom alphabet game I built for my nephew."


configureAnchors({offset: -60})

class Projects extends Component {

  componentDidMount() {
    let imageList = [joe_bw, alphabet_bw, bbq_bw, cabbage_bw, pyaa_bw, river_bw]
    imageList.forEach((image) => {
      new Image().src = image
    });
  }

render() {

return(
  <ScrollableAnchor id="projects">
  <div id="projectsInner">
    <div className="row projectsWrapper justify-content-around">
      <div className="col-lg">
        <Pic
        title={"BBQ Soap"}
        description={bbqDes}
        img={bbq}
        bwImg={bbq_bw} />
      </div>
      <div className="col-lg">
        <Pic
        title={"PYA Analytics"}
        description={pyaaDes}
        img={pyaa}
        bwImg={pyaa_bw} />
      </div>
      <div className="col-lg">
        <Pic
        title={"Cabbage Head Cafe"}
        description={cabbageDes}
        img={cabbage}
        bwImg={cabbage_bw} />
      </div>
    </div>
    <div className="row projectsWrapper justify-content-around">
      <div className="col-lg">
      <Pic
      title={"River's Game"}
      description={riverDes}
      img={river}
      bwImg={river_bw}
      link={"https://sburchfield.github.io/RiversGame/"} />
      </div>
      <div className="col-lg">
        <Pic
        title={"Josephus Problem"}
        description={joeDes}
        img={joe}
        bwImg={joe_bw}
        link={"https://sburchfield.github.io/josephus_problem/"} />
      </div>
      <div className="col-lg">
        <Pic
        title={"Alphabet Game"}
        description={alphabetDes}
        img={alphabet}
        bwImg={alphabet_bw}
        link={"https://sburchfield.github.io/AlphabetGame/"} />
      </div>
    </div>
  </div>
  </ScrollableAnchor>
)
}
};

export default Projects
