import React from 'react'
import MyImage from "./images/me.jpg"
import Image from 'react-bootstrap/Image'

class Header extends React.Component {
  render() {
    return (
      <header className = "text-center">
      <br/><br/>
       <Image src={MyImage} className="header-img" roundedCircle ></Image>
      <h1> Kate Harold </h1>
      <br/>
    </header>);
  }
}

export default Header
