import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';

export const Header = () => {
    return (

        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand >Portfolio</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <LinkContainer to="/main"><Nav.Link><i className="fas fa-user"></i>About</Nav.Link></LinkContainer>
                        <LinkContainer to="/contact"><Nav.Link><i className="fas fa-smile"></i>Contact</Nav.Link></LinkContainer>
                        <LinkContainer to="/portfolio2022"><Nav.Link><i className="fas fa-star"></i>Projects</Nav.Link></LinkContainer>

                    </Nav>
                    <a href="https://1drv.ms/w/s!AoCauJZ3EHFdgwMB4s6gnDG-WQOe" rel="noreferrer" target="_blank" style={{ color: 'white' }}> <span>Open Resume in a PDF File </span>  <i className="fa fa-download" aria-hidden="true"></i></a>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}
