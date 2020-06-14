import React, { useState } from 'react';

import './Pic.css'


function Pic (props){

  const [image, setImage] = useState(props.img)
  const [imgPadding, setPadding] = useState('25em')

  let visitLink

  if(props.link){
    visitLink = <a href={props.link} target="_blank" rel="noopener noreferrer">Visit</a>
  }

  const mouseEnterHandler = () => {
    setImage(props.bwImg)
    setPadding('2.5em')
  }

  const mouseLeaveHandler = () => {
    setImage(props.img)
    setPadding('25em')
  }

  return(
    <div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className="galleryImage" style={{backgroundImage: `url(${image})`}}>
      <div className="infoBackground" style={{paddingTop: imgPadding}}>
        <h3 className="bold">{props.title}</h3>
        <p className="paragraph">{props.description}</p>
        {visitLink}
      </div>
    </div>
  )
}

export default Pic
