import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Movies(props) {
  const [isLogged, setIslooged] = useState(false);

  return (
    <Container>
      <Row>
        <Col>
          <h1>
            Movies
            {/* <code>src/App.js</code> and save to reload. */}
          </h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Movies;
