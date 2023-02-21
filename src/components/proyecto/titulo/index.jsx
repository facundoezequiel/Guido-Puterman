import React from "react";
// Styled Components
import Container from "./styled";

export default function Titulo({ idioma }) {
  return (
    <Container>
      {/* Max Width Container */}
      <div id="max-width-container">
        {/* Titulo Container */}
        <div>
          <h1>Invierno 23'</h1>
        </div>
        {/* Texto Container */}
        <div>
          <p>
            <span>YEAR:</span> 2022
            <br />
            <span>CLIENT:</span> ZARA
          </p>
        </div>
      </div>
    </Container>
  );
}
