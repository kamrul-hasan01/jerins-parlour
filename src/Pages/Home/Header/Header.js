import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
import logo from '../../../img/logo.png'

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "#F63E7B",
        borderBottom: "2px solid #F63E7B"

    }
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand as={NavLink} to="/">
                    <img
                        src={logo}
                        width="128"
                        height="48"
                        className="d-inline-block align-top"
                        alt="Jerin's Parlour"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">

                        <NavLink to="/home" activeStyle={activeStyle}>Home</NavLink>
                        <NavLink to="/myBooking" activeStyle={activeStyle}>My Bookings</NavLink>
                        <NavLink to="/admin" activeStyle={activeStyle}>Admin</NavLink>

                        <NavLink to="/login" activeStyle={activeStyle}>Login</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;