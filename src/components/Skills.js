import React from 'react'
import { IconContext } from 'react-icons';
import { FaJsSquare, FaHtml5, FaCss3Alt, FaReact, FaNodeJs} from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi"

const Skills = () => {
  return (
    <div>
      <h2>Skills</h2>
  
      <br />
      <p>
        <IconContext.Provider value={{className: "skills-icons", size: "7em", color: "#f15a2b"}}>
          <FaHtml5 />
          </IconContext.Provider>
        <br />
          <IconContext.Provider value={{className: "skills-icons", size: "7em", color: "#1775bb"}}>
          <FaCss3Alt />
          </IconContext.Provider>
          <br />
          <IconContext.Provider value={{className: "skills-icons", size: "7em", color: "#fcb040"}}>
          <FaJsSquare />
          </IconContext.Provider>
          <br />
          <IconContext.Provider value={{className: "skills-icons", size: "7em", color: "#61dbfb"}}>
          <FaReact />
          </IconContext.Provider>
          <br />
          <IconContext.Provider value={{className: "skills-icons", size: "7em", color: "#529f41"}}>
          <FaNodeJs />
        </IconContext.Provider>
        <br />
        <IconContext.Provider value={{className: "skills-icons", size: "7em", color: "#529f41"}}>
        <BiLogoMongodb/>
        </IconContext.Provider>
        

      </p>


    </div>
  )
}

export default Skills