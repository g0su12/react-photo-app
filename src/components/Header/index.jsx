import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import './Header.scss';

function Header(props) {
  return (
    <header className="header">
      <Container>
        <Row className="justify-content-center">
          <Col xs="auto">
            <a className="header__link header__title" href="/">
              Redux Photo App
            </a>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
