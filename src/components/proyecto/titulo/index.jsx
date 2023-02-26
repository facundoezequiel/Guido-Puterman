import React from "react";
// Componentes
import { Link } from "react-router-dom";
// Íconos
import { BsArrowLeft } from "react-icons/bs";
// Styled Components
import Container from "./styled";

export default function Titulo({ idioma }) {
  return (
    <Container>
      {/* Max Width Container */}
      <div id="max-width-container">
        {/* Titulo Container */}
        <div>
          <Link to="/" className="opacidad02">
            <span>
              <BsArrowLeft />
            </span>
            PROJECTS
          </Link>
          <h1 className="opacidad02">Adriana Lima</h1>
        </div>
        {/* Texto Container */}
        <div>
          <p className="opacidad02">
            <span>YEAR:</span> 2019
            <br />
            <span>CLIENT:</span> VOGUE
          </p>
        </div>
      </div>
    </Container>
  );
}
