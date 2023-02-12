import myImage from './Logo.png'
import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <div>
                <Navbar expand='md' container='md' dark className='p-3 navbarColor'>
                    <NavbarBrand href="/"><img alt="logo" src={myImage}
                        style={{
                            height: 40,
                            width: 40,
                        }}
                    /></NavbarBrand>
                    <NavbarToggler className='itemColor' onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ms-auto" navbar>
                            <NavItem>
                                <NavLink href="#about" className='itemColor'>About Me</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#projects" className='itemColor'>Projects</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#contact" className='itemColor'>Contact Me</NavLink>
                            </NavItem>

                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        </>
    )
}

export default Header
