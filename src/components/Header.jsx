import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import "../css/Header.css"

function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Navabhi</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="/project1">Projects</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header;
