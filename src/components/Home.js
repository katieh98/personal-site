import React from 'react'
import Badge from 'react-bootstrap/Badge'
import pin from "./images/pin.png"
import comp from "./images/company.png"
import cal from "./images/calendar.png"
import { WindupChildren, Pause, Pace } from "windups";

class Home extends React.Component {
  render() {
    return (<div className="container">
    <br /><br /><br />
          <h1><Hello/></h1>
<br />
<br />
<h4>Technical Skills</h4>
<h5><Badge className="skill">Java</Badge>
    <Badge className="skill">Python</Badge>
    <Badge className="skill">C</Badge>
    <Badge className="skill">JavaScript</Badge>
    <Badge className="skill">CSS</Badge>
    <Badge className="skill">SQL</Badge>
    <Badge className="skill">HTML</Badge>
    <Badge className="skill">ReactJS</Badge>
    <Badge className="skill">Linux CLI</Badge>
    <Badge className="skill">GitHub</Badge> <br />
</h5>
<br />

    {/*}  <br /> <br />
      <h4>Education</h4>
        <p><strong>B.S. Computer Science</strong><br/>
        Virgina Tech, Blacksburg, VA<br/>
        August 2017 - December 2020<br/>
        GPA: 3.48/4.00</p>
      <h4>Technical Skills</h4>
      <h5><Badge className="skill">Java</Badge>
          <Badge className="skill">Python</Badge>
          <Badge className="skill">HTML</Badge>
          <Badge className="skill">JavaScript</Badge>
          <Badge className="skill">CSS</Badge>
          <Badge className="skill">SQL</Badge>
          <Badge className="skill">ReactJS</Badge>
          <Badge className="skill">JSON</Badge>
          <Badge className="skill">Linux CLI</Badge>
          <Badge className="skill">GitHub</Badge> <br />
    </h5>
      <h4>Work Experience</h4>
        <p><strong>Technical Intern</strong> <br />
          <h6><Badge pill className="company">
                <img src={comp} width="15" height="15" hspace="5" alt="company" />
                  BAESystems
              </Badge>
              <Badge pill className="location"><img src={pin} width="15" height="15" alt="pin" /> Washington, DC (Remote)
                </Badge>
                <Badge pill className="calendar"><img src={cal} width="15" height="15" alt="pin" /> June 2020 - August 2020
                  </Badge>
              </h6>
            Obtained a secret security clearance for this position. Updated a mail and records tracking
             web application from Struts 1 to Struts 2. Wrote Java action classes for database access as
            well as the scripts to connect the action classes to the front end. Gained experience in HTML, JavaScript, Java,
             and jQuery.
        </p>
        <p><strong>Software Development Intern</strong> <br />
          <h6><Badge pill className="company">
              <img src={comp} width="15" height="15" hspace="5" alt="company" />
                Freddie Mac</Badge>
              <Badge pill className="location"><img src={pin} width="12" height="12" alt="pin" /> McLean, VA
                </Badge>
              <Badge pill className="calendar"><img src={cal} width="15" height="15" alt="pin" /> May 2019 - August 2019
                </Badge>
            </h6>
            Analyzed and documented legacy programs to support loan evaluation and validation.
            Gained experience with RapidSQL, Spring Boot, and Java.
        </p>
        <div> < br/>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
       <br /> */}
    </div>
    );
  }
}

const Hello = () => {
  return (
    <WindupChildren >
    <Pace ms = {70}>
      {"Today, "}
      </Pace>
    < Pause ms={150} />
      <Pace ms = {50}>
      {"I am a Software Engineer."}
      </Pace>
    </WindupChildren>);
};

export default Home
