import { Navbar, Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faCog, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';

function CustomNavbar({ heading, previousPage }) {
  const hasPreviousLink = Boolean(previousPage);

  return (
    <Navbar bg="light" expand="lg" fixed="top" className="naav">
      {hasPreviousLink && (
      <Navbar.Brand onClick={`/${previousPage}`}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </Navbar.Brand>
      )}
      <Nav className="ml-auto">
        <Nav.Link id="title">{heading}</Nav.Link>
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

CustomNavbar.propTypes = {
  heading: PropTypes.string.isRequired,
  previousPage: PropTypes.string.isRequired,
};

export default CustomNavbar;
