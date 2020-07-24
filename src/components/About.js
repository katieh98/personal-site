import React from 'react'
import travel from "./images/cayman.JPG"
import Figure from 'react-bootstrap/Figure'

import { WindupChildren, Pause, Pace } from "windups";

class About extends React.Component {
  render() {
    return (<div className="container"><br/><br/>
            <h3><StringyWindup/></h3>
            <p>
              I'm an undergraduate student at Virginia Tech pursuing my degree in Computer Science.
              Currently, I live in Northern Virginia and am searching for full time employment after
              I graduate in December 2020. I have experience with software development through
               my internships and personal projects but am always looking to learn more. My
                interests include watching movies, cooking, traveling (even though I haven't gone many
               places), and playing games with friends.
               <br /><br />
               My inbox is always open! Feel free to contact me whether it's to just say hi or ask questions.
               <br />Please feel free to make suggestions for the site since this is my first time using ReactJS!
            </p>

            <Figure>
              <Figure.Image
                width={300}
                height={300}
                alt="Travel pic"
                src={travel}
                />
            <Figure.Caption>
              My last travel destination: Grand Cayman Islands
              </Figure.Caption>
              </Figure>
          </div>);
  }
}

const StringyWindup = () => {
  return (
    <WindupChildren >
      {"Hello Visitor! "}
      < Pause ms={100} />
      <Pace ms={50}>
        {"My name is Kate Harold"}
      </Pace>
    </WindupChildren>
  );
};

export default About
