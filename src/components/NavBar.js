import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import pdf from "../docs/Kate_Harold_Resume.pdf"

class NavBar extends React.Component {
  render() {
    return(
      <div className="container">
      <div className="center-navbar">
        <Navbar>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Brand href="/About">About</Navbar.Brand>
          <Navbar.Brand href="https://www.linkedin.com/in/kate-harold/" target="_blank">LinkedIn</Navbar.Brand>
          <Navbar.Brand href="mailto:kate.harold@pm.me">Contact</Navbar.Brand>
          <Navbar.Brand href="https://github.com/katieh98" target="_blank">GitHub</Navbar.Brand>
          <Navbar.Brand href={pdf} target="_blank">Resume</Navbar.Brand>
          </Navbar>
          </div>
      </div>
        )
      }
}

export default NavBar
