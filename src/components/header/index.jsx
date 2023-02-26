import React from "react";
// Librerias
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
// Styled Components
import Container from "./styled";
// Icons
import { RxInstagramLogo } from "react-icons/rx";
import { TfiVimeo } from "react-icons/tfi";

export default function Header({ idioma, idiomaEng, idiomaEsp, pagina }) {
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
          {/* Nav */}
          <nav id="nav-container">
            <li>
              <Link
                to="/"
                className={pagina == "projects" && "boton-seleccionado"}
              >
                PROJECTS
              </Link>
              <Link to="/guido">ABOUT ME</Link>
              <Scroll
                to="contacto"
                spy={true}
                smooth={true}
                offset={0}
                duration={1300}
              >
                LET'S TALK
              </Scroll>
            </li>
          </nav>
          {/* Idioma */}
          <div id="idioma-container">
            <a
              className={idioma == "esp" ? "idioma-seleccionado" : ""}
              onClick={idiomaEsp}
            >
              ESP
            </a>
            <a
              className={idioma == "eng" ? "idioma-seleccionado" : ""}
              onClick={idiomaEng}
            >
              ENG
            </a>
          </div>
          {/* Redes */}
          <div id="redes-container">
            <a>
              <RxInstagramLogo></RxInstagramLogo>
            </a>
            <a>
              <TfiVimeo></TfiVimeo>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
