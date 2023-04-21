import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import VotingCard from "./components/VotingCard";
import "./assets/scss/styles.scss";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <Container>
      <h1>Share for your favorite Voice </h1>
      <Row>
        <Col>
          <VotingCard
            title="Vote for “waku waku!” (translated as “How exciting!”)"
            buttonName="Anya Forger"
            song="waku"
          />
        </Col>
        <Col>
          <VotingCard
            title="Vote for “Nyanpasu!” (translated as “Good Morning”)"
            buttonName="Renge Miyauchi"
            song="nya"
          />
        </Col>
      </Row>
    </Container>
  );
}
export default App;
