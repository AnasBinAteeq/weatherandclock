import React, { useState } from 'react';
import '../styles/Menu.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
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
                <NavLink className='mx-3' href="#">
                Weather
                </NavLink>
            </NavItem>
            <NavItem className='d-flex'>
                <NavLink className='mx-3' href="https://github.com/reactstrap/reactstrap">
                Clock
                </NavLink>
            </NavItem>
            <NavItem className='d-flex'>
                <NavLink className='mx-3' href="https://github.com/reactstrap/reactstrap">
                GitHub
                </NavLink>
            </NavItem>
            <NavItem className='d-flex'>
                <NavLink className='mx-3' href="https://github.com/reactstrap/reactstrap">
                Developer
                </NavLink>
            </NavItem>
            <NavItem className='d-flex'>
                <NavLink className='mx-3' href="https://github.com/reactstrap/reactstrap">
                About Us
                </NavLink>
            </NavItem>
            <NavItem className='d-flex'>
                <NavLink className='mx-3' href="https://github.com/reactstrap/reactstrap">
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