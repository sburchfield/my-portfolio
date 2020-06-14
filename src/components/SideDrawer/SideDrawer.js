import React from 'react';

import './SideDrawer.css'

const sideDrawer = props => {

  let drawerClasses = ['sideDrawer'];

  if(props.show){
    drawerClasses = 'sideDrawer open';
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li><a href="#top" onClick={props.drawerClickHandler}>Home</a></li>
        <li><a href="#profile" onClick={props.drawerClickHandler}>Profile</a></li>
        <li><a href="#projects" onClick={props.drawerClickHandler}>Projects</a></li>
        <li><a href="#experiences" onClick={props.drawerClickHandler}>Experiences</a></li>
        <li><a href="#abilities" onClick={props.drawerClickHandler}>Abilities</a></li>
      </ul>
    </nav>
  )
};

export default sideDrawer
