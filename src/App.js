import React, { Component } from 'react';
import ReactLoading from 'react-loading';

import './animate.css';
import './App.css';

import Backdrop from './components/Backdrop/Backdrop';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Projects from './components/Projects/Projects';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Skills from './components/Skills/Skills';
import Snake from './components/Snake/Snake';
import Toolbar from './components/Toolbar/Toolbar';


function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 1000));
}

class App extends Component {


  constructor(props){
   super(props)
   this.state = {
     sideDrawerOpen: false,
     lightboxIsOpen: false,
     done: false,
       }
    }

    componentDidMount() {
      demoAsyncCall().then(() => this.setState({ done: true }));
    }


  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })
  }

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render(){
    let backdrop

    if(this.state.sideDrawerOpen){
      backdrop = <Backdrop click={this.drawerToggleClickHandler}/>
    }

    if(!this.state.done){
      return <ReactLoading type={"bubbles"} color={"#000"} heigth={50} width={150} className={"loader"} />
    }

    return (
      <div className="App">
        <Toolbar drawerClickHandler = {this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen} drawerClickHandler = {this.drawerToggleClickHandler}/>
        {backdrop}
        <Header />
        <div className="container">
          <Profile />
        </div>
        <div className="container-fluid">
          <Projects />
        </div>
        <div className="container">
          <Experience />
          <Snake />
          <Skills />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;
