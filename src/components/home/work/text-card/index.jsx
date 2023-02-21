import React from "react";
// Styled Components
import Container from "./styled";
// Librerias
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
// Iconos
import { HiOutlineEye } from "react-icons/hi";

export default function TextCard({
  titulo,
  cliente,
  boton,
  ano,
  vacia,
  align,
  ultima,
  desktop1300,
  fila,
}) {
  return (
    <Container
      align={align}
      ultima={ultima}
      desktop1300={desktop1300}
      vacia={vacia}
      fila={fila}
    >
      <Fade duration={1000} className="fade-container">
        <div id="card-container">
          {vacia == true ? (
            <></>
          ) : (
            <>
              <div id="ano-cliente-container">
                <p id="ano">
                  <span>YEAR:</span> {ano}
                </p>
                <p id="cliente">
                  <span>CLIENT:</span> {cliente}
                </p>
              </div>
              <div id="titulo-boton-container">
                <h3 id="titulo">{titulo}</h3>
                <p id="subtitulo">PRODUCTION, FILMING</p>
                <Link to={boton}>
                  VER MÁS
                  <img alt="Eyes Emoji" src="/images/emojis/ojos.png"></img>
                </Link>
              </div>
            </>
          )}
        </div>
      </Fade>
    </Container>
  );
}
