import React from "react";
// Styled Components
import Container from "./styled";
// Librerias
import Marquee from "react-fast-marquee";
// Components
import ImageCard from "./image-card";
import TextCard from "./text-card";

export default function Work({ idioma }) {
  return (
    <Container>
      <div id="marquee-container">
        <Marquee gradient={false} speed="45">
          <p>
            MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;
          </p>
        </Marquee>
      </div>
      {/* Max Width Container */}
      <div id="max-width-container">
        {/* Works Container */}
        <div id="works-container">
          {/* ------------------- Fila 1 ------------------- */}
          {/* Card */}
          <ImageCard
            imagen="/images/works/zara.jpg"
            alt="Prueba imagen"
            fila={1}
          ></ImageCard>
          {/* Card */}
          <TextCard
            titulo="Invierno 23´"
            subtitulo="PRODUCTION, FILMING"
            ano="2022"
            cliente="ZARA"
            boton="sobre-mi"
            fila={1}
          ></TextCard>
          {/* Card */}
          <TextCard vacia={true} fila={1}></TextCard>
          {/* Card */}
          <TextCard vacia={true} desktop1300={true} fila={1}></TextCard>
          {/* ------------------- Fila 2 ------------------- */}
          {/* Card */}
          <TextCard vacia={true} desktop1300={true} fila={2}></TextCard>
          {/* Card */}
          <TextCard vacia={true} fila={2}></TextCard>
          {/* Card */}
          <TextCard
            titulo="Invierno 23´"
            subtitulo="PRODUCTION, FILMING"
            ano="2022"
            cliente="ZARA"
            boton="sobre-mi"
            align="derecha"
            fila={2}
          ></TextCard>
          {/* Card */}
          <ImageCard
            imagen="/images/works/zara.jpg"
            alt="Prueba imagen"
            fila={2}
          ></ImageCard>
          {/* ------------------- Fila 3 ------------------- */}
          {/* Card */}
          <TextCard vacia={true} desktop1300={true} fila={3}></TextCard>
          {/* Card */}
          <ImageCard
            imagen="/images/works/zara.jpg"
            alt="Prueba imagen"
            fila={3}
          ></ImageCard>
          {/* Card */}
          <TextCard
            titulo="Invierno 23´"
            subtitulo="PRODUCTION, FILMING"
            ano="2022"
            cliente="ZARA"
            boton="sobre-mi"
            fila={3}
          ></TextCard>
          {/* Card */}
          <TextCard vacia={true} fila={3}></TextCard>
          {/* ------------------- Fila 4 ------------------- */}
          {/* Card */}
          <TextCard vacia={true} desktop1300={true} fila={4}></TextCard>
          {/* Card */}
          <TextCard vacia={true} fila={4}></TextCard>
          {/* Card */}
          <ImageCard
            imagen="/images/works/auto.jpg"
            alt="Prueba imagen"
            fila={4}
          ></ImageCard>
          {/* Card */}
          <TextCard
            titulo="Auto"
            subtitulo="PRODUCTION, FILMING"
            ano="2022"
            cliente="ZARA"
            boton="sobre-mi"
            fila={4}
          ></TextCard>
          {/* ------------------- Fila 5 ------------------- */}
          {/* Card */}
          <ImageCard
            imagen="/images/works/zara.jpg"
            alt="Prueba imagen"
            fila={5}
          ></ImageCard>
          {/* Card */}
          <TextCard
            titulo="Invierno 23´"
            subtitulo="PRODUCTION, FILMING"
            ano="2022"
            cliente="ZARA"
            boton="sobre-mi"
            fila={5}
          ></TextCard>
          {/* Card */}
          <TextCard vacia={true} desktop1300={true} fila={5}></TextCard>
          {/* Card */}
          <TextCard vacia={true} fila={5}></TextCard>
          {/* ------------------- Fila 6 ------------------- */}
          {/* Card */}
          <TextCard vacia={true} desktop1300={true} fila={6}></TextCard>
          {/* Card */}
          <TextCard vacia={true} fila={6}></TextCard>
          {/* Card */}
          <TextCard
            titulo="Invierno 23´"
            subtitulo="PRODUCTION, FILMING"
            ano="2022"
            cliente="ZARA"
            boton="sobre-mi"
            align="derecha"
            fila={6}
          ></TextCard>
          {/* Card */}
          <ImageCard
            imagen="/images/works/zara.jpg"
            alt="Prueba imagen"
            fila={6}
          ></ImageCard>
          {/* ------------------- Fila 7 ------------------- */}
          {/* Card */}
          <ImageCard
            imagen="/images/works/zara.jpg"
            alt="Prueba imagen"
            fila={7}
          ></ImageCard>
          {/* Card */}
          <TextCard
            titulo="Invierno 23´"
            subtitulo="PRODUCTION, FILMING"
            ano="2022"
            cliente="ZARA"
            boton="sobre-mi"
            fila={7}
          ></TextCard>
          {/* Card */}
          <TextCard vacia={true} desktop1300={true} fila={7}></TextCard>
          {/* Card */}
          <TextCard vacia={true} fila={7}></TextCard>
          {/* ------------------- Fila 8 ------------------- */}
          {/* Card */}
          <TextCard vacia={true} ultima={true} fila={8}></TextCard>
          {/* Card */}
          <TextCard
            titulo="Invierno 23´"
            subtitulo="PRODUCTION, FILMING"
            ano="2022"
            cliente="ZARA"
            boton="sobre-mi"
            align="derecha"
            ultima={true}
            fila={8}
          ></TextCard>
          {/* Card */}
          <ImageCard
            imagen="/images/works/zara.jpg"
            alt="Prueba imagen"
            ultima={true}
            fila={8}
          ></ImageCard>
          {/* Card */}
          <TextCard
            vacia={true}
            ultima={true}
            desktop1300={true}
            fila={8}
          ></TextCard>
        </div>
      </div>
    </Container>
  );
}
