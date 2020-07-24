import React from 'react'

class Footer extends React.Component {
  render() {
    return (<footer className="footer">
              <div className="text-center">
                <a href="mailto:kate.harold@pm.me">
                  <img src={email} width="30" height="30" hspace="5" vspace="5" alt="email" />
                </a>

                <a href="https://www.linkedin.com/in/kate-harold/" target="_blank">
                  <img src={link} width="30" height="30" hspace="5" vspace="5" alt="link" />
                </a>

                <a href="https://github.com/katieh98" target="_blank">
                  <img src={git} width="30" height="30" hspace="5" vspace="5" alt="git" />
                </a>
                </div>
    Copyright © 2020 Kate Harold || Built by Kate Harold
        </footer>);
  }
}

export default Footer
