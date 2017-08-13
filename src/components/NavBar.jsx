import React, { Component } from 'react';
import '../css/navbar.css';

class NavBar extends Component {

  render() {
    var sections = [
      <li className="right"><a href="#about">About</a></li>,
      <li className="right"><a href="#experience">Experience</a></li>,
      <li className="right"><a href="#projects">Projects</a></li>,
      <li className="right"><a href="#interests">Interests</a></li>,
      <li className="right"><a href="#contact">Contact</a></li>
    ];
		return (
      <div className="navbar">
        <ul className="topnav">
          <li><a href="">Home</a></li>
          {window.innerWidth > 600 ? sections.reverse() : sections}
        </ul>
      </div>
    );
  }
}

export default NavBar;
