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


            {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid d-flex justify-content-around">
                    <Link to='' className="navbar-brand"><img src={myImage} alt="logo" width="50" height="50" /></Link>
                  

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">

                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">

                            <a href="#about" style={{ textDecoration: 'none' }}>About Me</a>
                            <a href="#projects" style={{ textDecoration: 'none' }}>Projects</a>
                            <a href="contact" style={{ textDecoration: 'none' }}>Contact</a>

                        </div>
                    </div>
                </div>
            </nav> */}
        </>
    )
}

export default Header
