import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMicrophone, faCog, faArrowLeft, faHome,
} from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';

function CustomNavbar() {
  const [isMainPage, setIsMainPage] = useState(window.location.pathname === '/');

  useEffect(() => {
    const handleLocationChange = () => {
      setTimeout(() => {
        setIsMainPage(window.location.pathname === '/');
      }, 10);
    };
    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const handleBackButtonClick = () => {
    window.history.back();
  };

  const handleTitleClick = () => {
    const timestamp = new Date().getTime();
    window.location.href = `/?timestamp=${timestamp}`;
  };

  return (
    <Navbar bg="light" expand="lg" fixed="top" className="naav">
      <Navbar.Brand>
        {isMainPage ? (
          <FontAwesomeIcon icon={faHome} />
        ) : (
          <FontAwesomeIcon icon={faArrowLeft} onClick={handleBackButtonClick} />
        )}
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link id="title" onClick={handleTitleClick}>Weather Metrics</Nav.Link>
      </Nav>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link>
            <FontAwesomeIcon icon={faMicrophone} />
          </Nav.Link>
          <Nav.Link>
            <FontAwesomeIcon
              icon={faCog}
              className="settings"
            />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
