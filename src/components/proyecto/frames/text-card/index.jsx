import React from "react";
// Styled Components
import Container from "./styled";
// Librerias
import { Fade } from "react-awesome-reveal";

export default function TextCard({ ultima }) {
  return (
    <Container ultima={ultima}>
      <Fade duration={1000} className="fade-container">
        <div id="card-container"></div>
      </Fade>
    </Container>
  );
}
