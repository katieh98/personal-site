import React from 'react'
import Gallery from "react-photo-gallery";
import { photos } from "./Photos"

import { WindupChildren, Pause, Pace } from "windups";

class About extends React.Component {
  render() {
    return (<div className="container"><br/><br/>
            <h3><StringyWindup/></h3>
            <p>
              I currently work at BAE Systems and have previously worked at Freddie Mac.
              I completed my undergraduate degree in Computer Science at <a href="https://vt.edu/">Virginia Tech</a>. When I'm not
              working I enjoy cooking, trying new foods, watching anime, and playing Sims 4! If you're intersted in my food adventures,
              feel free to check out my <a href="https://www.instagram.com/foodbykth/" target="_blank"> Instagram</a>.
               <br /><br />
               My inbox is always open! Feel free to contact me through <a href="https://www.linkedin.com/in/kate-harold/" target="_blank">LinkedIn </a>
               or <a href="mailto:kate.harold@pm.me">email</a> if you'd like to chat!
            </p>
            <h4>Here are some photos from my life!</h4>
            <Gallery photos={photos}/>
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

export default About