import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../logo/logo-no-background.png"


const Navigationbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <img className="logo" src={Logo} />
    <Container>
      
      {/* <Navbar.Brand href="#home">Emma Bosworth</Navbar.Brand> */}
      {/* <Nav className="me-left">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#skills">Skills</Nav.Link>
        <Nav.Link href="#projects">Projects</Nav.Link>
      </Nav> */}
    </Container>
  </Navbar>
  )
}

export default Navigationbar