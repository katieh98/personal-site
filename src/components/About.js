import React from 'react'
import travel from "./images/cayman.JPG"
import Figure from 'react-bootstrap/Figure'
import Gallery from "react-photo-gallery";

import { WindupChildren, Pause, Pace } from "windups";

const photos = [
    {
      src: "./images/boba.JPG",
      width: 4,
      height: 3
    },
    {
      src: "./images/cascades.JPG",
      width: 1,
      height: 1
    }
];

class About extends React.Component {
  render() {
    return (<div className="container"><br/><br/>
            <h3><StringyWindup/></h3>]
            <h3><Titles/></h3>
            <p>
              I'm a Software Engineer in the Northern Virginia/DC area. I completed my undergraduate degree in Computer Science at <a href="https://vt.edu/">Virginia Tech</a>.
               <br /><br />
               My inbox is always open! Feel free to contact me whether it's to just say hi or ask questions.
            </p>
            <Gallery photos={photos}/>;
          </div>);
  }
}

const StringyWindup = () => {
  return (
    <WindupChildren >
    <Pace ms = {50}>
      {"Hello Visitor!"}
      < Pause ms={100} />
      </Pace>
    </WindupChildren>);
};

}

export default About
