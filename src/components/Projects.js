import React from 'react'


const Projects = () => {

  return (
    <div>
    <h1>Projects</h1>
     <p>
        Here I have included a selection of the coding projects I have completed as part of my learning journey into software development. 
      </p>
    <div className='container'>

          {/* <div className='project'>
             <a href="https://emmab31.github.io/To-Do-List" target="_blank" rel="noreferrer">
            <img src="https://i.ibb.co/vZG6cKR/To-Do.png" alt="To-Do" border="0"></img></a>
             <br />
            <p>Basic To Do List app using Vanilla JS</p>
          </div>
           */}
          {/* <div className='project'>
          
          <a href="https://emmab31.github.io/blackjack-game/" target="_blank" rel="noreferrer">
          <img src="https://i.ibb.co/FKxrxc1/Blackjack.jpg" alt="Blackjack" border="0"></img>
          </a>
          <br />
          <p>Blackjack game made using vanilla javascript</p>
          </div> */}
          <div className='project'>
            <h2>Spotswap</h2>
          <a href="https://spot-swap-frontend.onrender.com/" target="_blank" rel="noreferrer">
          <img src="https://i.ibb.co/zGLYZM0/Spotswap.jpg" alt="Spotswap" border="0"></img>
          </a>
          <br />
          <p>Final coding project from my bootcamp. Using MERN stack we created a website for listing and booking parking spaces</p>
          </div>
          
          <div className='project'>
            <h2>Book Picker</h2>
            <a href="https://emmab31.github.io/BookPicker/" target="_blank" rel="noreferrer">
          <img src="https://i.ibb.co/TMjvkfB/Book-Picker.jpg" alt="Book-Picker" border="0"></img>
          </a>
          <br />
          <div className='project-text'>
            <p>I created this using HTML, CSS and Javascript with a postgreSQL database to allow me to catalogue my books and be able to randomly select one for me to read next. </p>
          </div>
          
          </div>
          <div className='project'>
            <h2>Quiz Game</h2>
            <a href="https://emma-quiz.onrender.com/" target="_blank" rel="noreferrer"> 
          <img src="https://i.ibb.co/hMQCXRx/Quiz-Game.jpg" alt="Quiz-Game" border="0"></img></a>
          <p>This project was created as part of a one-day hackathon during my coding bootcamp. Created using React and a quiz API </p>
          </div>
          {/* <div className='project'>
            <p>
          6. Cookbook
          </p>
          </div> */}
    </div>
    </div>
  )
}

export default Projects