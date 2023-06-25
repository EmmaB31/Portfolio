import React from 'react'
import { IconContext } from 'react-icons';
import { FaGithub, FaLinkedin} from "react-icons/fa";


const Contact = () => {
  return (
    <div className="Contact">
      <h4>Contact</h4>
<IconContext.Provider value={{className: "react-icons", size: "3em"}}>
      <a href="https://github.com/EmmaB31" target="_blank" rel="noreferrer"><FaGithub /></a>
      <a href="https://www.linkedin.com/in/emma-bosworth-39786815b/"target="_blank" rel="noreferrer"><FaLinkedin /></a>
  </IconContext.Provider>
    </div>
  )
}

export default Contact