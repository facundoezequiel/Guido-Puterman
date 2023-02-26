import React from "react";
// Styled Components
import Container from "./styled";
// Icons
import { TfiArrowTopRight, TfiWorld } from "react-icons/tfi";

export default function Presentation({ idioma }) {
  return (
    <Container>
      <div id="max-width-container">
        <div id="titulo-container">
          <div id="titulo-texto">
            <h1 className="opacidad06">
              Guido Puterman<br></br>
              <span>Fashion Filmmaker</span>
            </h1>
            <p className="opacidad08">
              Based in Buenos Aires, Argentina.
              <br />
              Available for freelance to the world.
            </p>
          </div>
          <div id="subtitulo-container" className="opacidad08">
            <p id="ano">- 2023</p>
            <div id="disponible">
              <div id="icono-container">
                <span>
                  <TfiWorld />
                </span>
              </div>
              <p>
                AVAILABLE FOR
                <br />
                THE WORLD
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
