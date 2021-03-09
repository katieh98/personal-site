import React from 'react'
import travel from "./images/cayman.JPG"
import Figure from 'react-bootstrap/Figure'

import { WindupChildren, Pause, Pace } from "windups";

class About extends React.Component {
  render() {
    return (<div className="container"><br/><br/>
            <h3><StringyWindup/></h3>
            <p>
            I'm a Software Engineer in the Northern Virginia/Washington DC area.
            I completed my undergraduate degree in Computer Science at <a href="https://vt.edu/">Virginia Tech</a>.
             <br /><br />
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
      {"Hello Visitor!"}
      < Pause ms={100} />
    </WindupChildren>
  );
};

export default About
