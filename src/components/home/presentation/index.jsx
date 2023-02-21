import React from "react";
// Styled Components
import Container from "./styled";
// Librerias
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
// Icons
import { TfiArrowTopRight, TfiWorld } from "react-icons/tfi";

export default function Presentation({ idioma }) {
  return (
    <Container>
      <div id="max-width-container">
        <div id="titulo-container">
          <div id="titulo-video-texto">
            <div id="titulo-video">
              <div id="videos-container" className="opacidad06">
                <video id="video-izquierda" autoPlay loop muted>
                  <source src="/videos/presentacion2.mp4" type="video/mp4" />
                </video>
                <video id="video-derecha" autoPlay loop muted>
                  <source src="/videos/presentacion1.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div id="titulo-texto">
              <h1 className="opacidad06">
                Guido Puterman<br></br>
                <span>Fashion Filmmaker</span>
              </h1>
              <p className="opacidad08">
                Professional Fashion Filmmaker based in Buenos Aires, <br />
                Argentina. Available for freelance to the world.
              </p>
              <div id="botones-container">
                <Link to="sobre-mi" className="topIn06">
                  ABOUT ME
                  <span>
                    <TfiArrowTopRight />
                  </span>
                </Link>
                <Scroll
                  to="contacto"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={1300}
                  className="topIn07"
                >
                  LET'S TALK
                  <span>
                    <TfiArrowTopRight />
                  </span>
                </Scroll>
              </div>
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
      </div>
    </Container>
  );
}
