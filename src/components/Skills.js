import React from 'react'
import { IconContext } from 'react-icons';
import { FaJsSquare, FaHtml5, FaCss3Alt, FaReact, FaNodeJs} from "react-icons/fa";
import { BiLogoMongodb, BiLogoPostgresql } from "react-icons/bi"

const Skills = () => {
  return (
    <div>
      <h2 className='titles'>Skills</h2>
      
      <br />
      <div className='container-outer'>
      <div className="card">
        <div className='container-card'>
          <h3 className='card-titles'>Frontend</h3>
          <br />
          
          
          <IconContext.Provider value={{className: "skills-icons", size: "4em", color: "#f15a2b"}}>
          <FaHtml5 /> HTML
          </IconContext.Provider>
        <br />
          <IconContext.Provider value={{className: "skills-icons", size: "4em", color: "#1775bb"}}>
          <FaCss3Alt /> CSS
          </IconContext.Provider>
          <br />
          <IconContext.Provider value={{className: "skills-icons", size: "4em", color: "#fcb040"}}>
          <FaJsSquare /> Javascript
          </IconContext.Provider>
          <br />
          <IconContext.Provider value={{className: "skills-icons", size: "4em", color: "#61dbfb"}}>
          <FaReact /> React
          </IconContext.Provider>
          
        </div>
      </div>
      <div className="card">
        <div className='container-card'>
          <h3 className='card-titles'>Backend</h3>
          <IconContext.Provider value={{className: "skills-icons", size: "4em", color: "#529f41"}}>
          <FaNodeJs /> Node.Js
        </IconContext.Provider>
        <br />
        <IconContext.Provider value={{className: "skills-icons", size: "4em", color: "#529f41"}}>
        <BiLogoMongodb/> MongoDB
        </IconContext.Provider>
        <br />
        <IconContext.Provider value={{className: "skills-icons", size: "4em", color: "#336791"}}>
        <BiLogoPostgresql/> PostgreSQL
        </IconContext.Provider>
        </div>
      </div>
      
    
      </div>


    </div>
  )
}

export default Skills