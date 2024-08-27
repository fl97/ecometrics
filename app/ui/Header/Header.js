'use client'
import React, {useState} from 'react';
import { Navbar, Nav, Image, Container } from 'react-bootstrap';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

import './header.css';

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isRTL = () => {
    if (typeof window !== 'undefined') {
      const lang = window.navigator.language || window.navigator.userLanguage;
      return lang.toLowerCase().includes('ar') || lang.toLowerCase().includes('he');
    };
    return false;
  }

  return (
    <header>
      <Navbar className='navbar' expand='lg'>
        <Container>
          <Link href='/'>
            <Navbar.Brand>
              <Image src='/ecometrics_logo.svg' alt='ecometrics logo' fluid className='logo'/>
              EcoMetrics
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </Navbar.Toggle>
          <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
            <Nav dir={isRTL() ? 'rtl' : 'ltr'}>
              <Link href='/' className='nav-link'>CO<sub>2</sub>-Tabelle</Link>
              <Link href='/our-mission' className='nav-link'>Unsere Mission</Link>
              <Link href='/contact' className='nav-link'>Kontakt</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
};

export default Header;