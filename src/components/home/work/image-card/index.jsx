import React from "react";
// Styled Components
import Container from "./styled";
// Librerias
import { Fade } from "react-awesome-reveal";

export default function ImageCard({ imagen, alt, ultima, fila }) {
  return (
    <Container ultima={ultima} fila={fila}>
      <div id="card-container">
        <Fade className="image-container" duration={1000}>
          <img alt={alt} src={imagen} className="opacidad02"></img>
        </Fade>
      </div>
    </Container>
  );
}
