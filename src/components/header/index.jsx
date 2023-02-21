import React from "react";
// Librerias
import { Link } from "react-router-dom";
// Styled Components
import Container from "./styled";
// Icons
import { RxInstagramLogo } from "react-icons/rx";
import { TfiVimeo } from "react-icons/tfi";

export default function Header({ idioma, idiomaEng, idiomaEsp, tema }) {
  return (
    <Container tema={tema}>
      <div id="max-width-container">
        {/* Logo */}
        <div id="logo-container" className={tema != "oscuro" && "opacidad06"}>
          <h1>
            <Link to="/">Guido.</Link>
          </h1>
        </div>
        <div
          id="redes-idioma-container"
          className={tema != "oscuro" && "opacidad06"}
        >
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
