'use client'
import React from 'react';
import {Image, Container, Row, Col} from 'react-bootstrap'
import Link from 'next/link';

import "./footer.css"

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row className='my-2'>
          <Col>
            <Image src='./ecometrics_logo.svg' alt='ecometrics logo' fluid className='logo'/> EcoMetrics
          </Col>
          <Col>
            <p>Copyright © 2024 by Florian Lutz - IU Internationale Hochschule</p>
          </Col>
          <Col className='legal-col'>
            <p><Link className="footer-link" href="/imprint">Impressum</Link></p>
            <p><Link className="footer-link" href="/agb">AGB</Link></p>
            <p><Link className="footer-link" href="/privacy">Datenschutz</Link></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;