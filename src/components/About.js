import React from 'react'
import Logo from "../logo/logo-no-background.png"

const About = () => {
  return (
    <div className="About">
      <div className='image-logo'>
      <img className="logo" src={Logo} />
      </div>
      <div className='about-text'>
      
      <h1>Hi, I'm Emma</h1>
      <br />
      <p>Im an aspiring junior full stack developer based in Lancashire, UK. <br />
        After previously gaining an MSc in Neuroscience and working in the hospitality industry for over 10 years I decided on a career change into software. <br />
        Having completed an intensive boot-camp in 'Web and App Development' I have experience with both front-end and back-end development. <br />
        This portfolio is inteneded to showcase some of the skills I have developed and a selection of the projects I have been able to create.

      </p>
    </div>


    </div>
  )
}

export default About