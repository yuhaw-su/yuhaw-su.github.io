import React, { Component } from 'react';
import '../css/container.css';
import NavBar from './NavBar';
import Header from './Header';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import FunStuff from './FunStuff';
import Contact from './Contact';
import Footer from './Footer';


class Container extends Component {

  render() {
		return (
      <div className="container">
        <NavBar />
        <Header />
        <About />
        <Experience />
        <Projects />
        <FunStuff />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Container;
