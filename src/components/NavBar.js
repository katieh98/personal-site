import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import pdf from "../docs/Kate_Harold_Resume.pdf"

class NavBar extends React.Component {
  render() {
    return(
      <div className="center-navbar">
        <Navbar>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Brand href="/About">About</Navbar.Brand>
          <Navbar.Brand href={pdf} target="_blank">Resume</Navbar.Brand>
          </Navbar>
          </div>
        );
      }
}

export default NavBar