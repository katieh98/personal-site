import React from 'react'
import email from "./images/email.png"
import git from "./images/git.png"
import link from "./images/linkedin.png"

class Socials extends React.Component {
  render() {
    return (
      <div className="text-center">
        <a href="mailto:kate.harold@pm.me">
          <img src={email} width="30" height="30" hspace="5" vspace="5" alt="email" />
        </a>

        <a href="https://github.com/katieh98" target="_blank">
          <img src={git} width="30" height="30" hspace="5" alt="git" />
        </a>

        <a href="https://www.linkedin.com/in/kate-harold/" target="_blank">
          <img src={link} width="30" height="30" hspace="5" vspace="5" alt="link" />
        </a>
        </div>
    );
  }
}

export default Socials
