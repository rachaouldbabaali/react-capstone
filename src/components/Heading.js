import React, { useState } from 'react';
import {
  Container, Row, Col, Form,
} from 'react-bootstrap';
import WorldMap from '../images/worldmap.png';
import '../styles/Heading.css';

function Heading() {
  const [continent, setContinent] = useState('');

  const handleSelect = (event) => {
    setContinent(event.target.value);
  };

  return (
    <div className="heading" style={{ backgroundImage: `url(${WorldMap})` }}>
      <Container>
        <Row>
          <Col className="text-center">
            <h1 className="display-4">Explore the world</h1>
            <p className="lead">Discover new places with us</p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <Form>
              <Form.Group controlId="formContinentSelect">
                <Form.Control as="select" value={continent} onChange={handleSelect}>
                  <option value="">Select a continent</option>
                  <option value="Africa">Africa</option>
                  <option value="Antarctica">Antarctica</option>
                  <option value="Asia">Asia</option>
                  <option value="Australia">Australia</option>
                  <option value="Europe">Europe</option>
                  <option value="North America">North America</option>
                  <option value="South America">South America</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Heading;
