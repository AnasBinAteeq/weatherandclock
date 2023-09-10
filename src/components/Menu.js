import React, { useState } from 'react';
import '../styles/Menu.css';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
    
function Menu() {
    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => setIsOpen(!isOpen);

    return (
    <div className='Menu'>
        <Navbar color="dark" dark expand='md'>
        <NavbarBrand  className='Logo fs-2 fs-md-3 fs-sm-5' href="/">Weather & Clock</NavbarBrand>
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto" navbar>
            <NavItem className='d-flex'>
                <NavLink className='mx-3' activeClassName="active" tag={RRNavLink} to="/weather">
                Weather
                </NavLink>
            </NavItem>
            <NavItem className='d-flex'>
                <NavLink className='mx-3' activeClassName="active" tag={RRNavLink} to="/clock">
                Clock
                </NavLink>
            </NavItem>
            <NavItem className='d-flex'>
                <NavLink className='mx-3' href='https://github.com/AnasBinAteeq/weatherandclock'>
                GitHub
                </NavLink>
            </NavItem>
            <NavItem className='d-flex'>
                <NavLink className='mx-3' activeClassName="active" tag={RRNavLink} to="/developer">
                Developer
                </NavLink>
            </NavItem>
            <NavItem className='d-flex'>
                <NavLink className='mx-3' activeClassName="active" tag={RRNavLink} to="/aboutus">
                About Us
                </NavLink>
            </NavItem>
            <NavItem className='d-flex'>
                <NavLink className='mx-3' activeClassName="active" tag={RRNavLink} to="/">
                Settings
                </NavLink>
            </NavItem>
            </Nav>
        </Collapse>
        </Navbar>
    </div>
    );
}

export default Menu;