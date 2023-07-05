import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMicrophone, faCog, faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';

function CustomNavbar() {
  const isMainPage = window.location.pathname === '/';

  const handleBackButtonClick = () => {
    window.history.back();
  };

  return (
    <Navbar bg="light" expand="lg" fixed="top" className="naav">
      {!isMainPage && (
        <Navbar.Brand>
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="arrowleft"
            onClick={handleBackButtonClick}
          />
        </Navbar.Brand>
      )}
      <Nav className="ml-auto">
        <Nav.Link id="title">Weather Metrics</Nav.Link>
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
