import React from "react";
// Librerias
import { Link } from "react-router-dom";
// Styled Components
import Container from "./styled";

export default function Footer({ idioma, idiomaEng, idiomaEsp }) {
  return (
    <Container>
      <div id="max-width-container">
        {/* Logo */}
        <div id="logo-container" className="opacidad06">
          <h1>
            <Link to="/">Guido.</Link>
          </h1>
        </div>
        <div id="redes-idioma-container" className="opacidad06">
          <p>
            Todos las imágenes dentro de guidoputerman.com son reproducidas sin
            fines de lucro.
            <br />© Copyright 2023 Guido Puterman.
          </p>
        </div>
      </div>
    </Container>
  );
}
