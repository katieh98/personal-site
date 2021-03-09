import React from 'react'
import travel from "./images/cayman.JPG"
import Figure from 'react-bootstrap/Figure'

import { WindupChildren, Pause, Pace } from "windups";

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

const var list = {'foodie!', 'movie lover!', 'adoptee!', 'anime watcher!', 'runner!', 'Software Engineer!'}

const StringyWindup = () => {
  return (
    <WindupChildren >
      {"Hello Visitor! \n"}
      < Pause ms={100} />
      <Pace ms={50}>
        {"I am a..."}
      </Pace>

    </WindupChildren>
  );
};

const Titles = () => {
  return (
    <WindupChildren>
      {'foodie!'}
      < Pause ms = {100} />
      useRewind();
      {'movie lover!'}
      < Pause ms = {100} />
      useRewind();
      {'anime lover!'}
      < Pause ms = {100} />
      useRewind();
      {'runner!'}
      < Pause ms = {100} />
      useRewind();
      {'Software Engineer!'}
    </WindupChildren>
  )
}

export default About
