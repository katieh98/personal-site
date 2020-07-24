import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import pdf from "../docs/Kate_Harold_Resume.pdf"

class NavBar extends React.Component {
  render() {
    return(
      <div className="container">
      <div className="center-navbar">
        <Navbar>
        <Nav className="bar">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/About">About</Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/kate-harold/" target="_blank">LinkedIn</Nav.Link>
          <Nav.Link href="mailto:kate.harold@pm.me">Contact</Nav.Link>
          <Nav.Link href="https://github.com/katieh98" target="_blank">GitHub</Nav.Link>
          <Nav.Link href={pdf} target="_blank">Resume</Nav.Link>
          </Nav>
          </Navbar>
          </div>
      </div>
        )
      }
}

export default NavBar
