import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function navbarcomps() {
    return (
        <div>
        <Navbar collapseOnSelect expand="lg" bg="info" variant="warning">
      <Container>
        <Navbar.Brand href="/"><b>Pizza</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link href="/termekek">Termékek</Nav.Link>
            <Nav.Link href="/ujtermek">Új termék</Nav.Link>
            <Nav.Link href="/">Galvács Máté</Nav.Link>
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    )
}

export default navbarcomps
